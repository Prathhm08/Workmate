import User from "../models/UserSchema.js";
import Worker from "../models/WorkerSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.workerId);
    const user = await User.findById(req.userId);
    console.log("user", user);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/workers/${worker.id}`,
      customer_email: user.email,
      client_reference_id: req.params.workerId,
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: worker.ticketPrice * 100,
            product_data: {
              name: worker.name,
              description: worker.bio,
              images: [worker.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    const booking = new Booking({
      worker: worker._id,
      user: user._id,
      ticketPrice: worker.ticketPrice,
      session: session.id,
    });

    await booking.save();

    res
      .status(200)
      .json({ success: true, message: "Successfully paid", session });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating checkout session",
      error: err.message,
    });
  }
};
