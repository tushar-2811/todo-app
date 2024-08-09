import { Router } from "express";
import userRouter from "./user.route.js";
import todoRouter from "./todo.route.js";

const v1Router = Router();

v1Router.use('/user', userRouter);
v1Router.use('/todo' , todoRouter);

export default v1Router;