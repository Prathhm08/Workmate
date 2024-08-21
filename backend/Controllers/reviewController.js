import Review from "../models/ReviewSchema.js";
import Worker from "../models/WorkerSchema.js";

//get all reviews

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res
      .status(200)
      .json({ success: true, message: "Successful", data: reviews });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//create review function

export const createReview = async (req, res) => {
  if (!req.body.worker) req.body.worker = req.params.workerId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Worker.findByIdAndUpdate(req.body.worker, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
