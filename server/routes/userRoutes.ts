import express from "express";
import {
  getAllProjects,
  getProjectByid,
  getUserCreadits,
  toggleProjectPublic,
} from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/creadits", protect, getUserCreadits);

userRouter.get("/projects", protect, getAllProjects);
userRouter.get("/projects/:projectId", protect, getProjectByid);

userRouter.get("/publish/:projectId", protect, toggleProjectPublic);

export default userRouter;
