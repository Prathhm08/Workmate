import Worker from "../models/WorkerSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateWorker = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedWorker = await Worker.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfuly updated",
      data: updatedWorker,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to  update" });
  }
};

export const deleteWorker = async (req, res) => {
  const id = req.params.id;
  try {
    await Worker.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfuly deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to  delete" });
  }
};

export const getSingleWorker = async (req, res) => {
  const id = req.params.id;
  try {
    const worker = await Worker.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Worker found",
      data: worker,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No Worker found" });
  }
};

export const getAllWorker = async (req, res) => {
  const { query } = req.query;
  let workers;

  if (query) {
    workers = await Worker.find({
      isApproved: "approved",
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    }).select("-password");
  } else {
    workers = await Worker.find({}).select("-password");
  }
  try {
    const workers = await Worker.find({ isApproved: "approved" }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Workers found",
      data: workers,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No found" });
  }
};

export const getWorkerProfile = async (req, res) => {
  const workerId = req.userId;

  try {
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res
        .status(404)
        .json({ success: false, message: "Worker not Found" });
    }

    const { password, ...rest } = worker._doc;
    const appointments = await Booking.find({ worker: workerId });

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest, appointments },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong, cannot get request",
    });
  }
};
