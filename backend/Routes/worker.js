import express from "express";
import {
  updateWorker,
  deleteWorker,
  getAllWorker,
  getSingleWorker,
  getWorkerProfile,
} from "../Controllers/workerController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:workerId/reviews", reviewRouter);

router.get("/:id", getSingleWorker);
router.get("/", getAllWorker);
router.put("/:id", authenticate, restrict(["worker"]), updateWorker);
router.delete("/:id", authenticate, restrict(["worker"]), deleteWorker);

router.get("/profile/me", authenticate, restrict(["worker"]), getWorkerProfile);

export default router;
