import { Router } from "express";
import apiRouter from "./api/api.index";

const indexRouter = Router();

indexRouter.use('/api' , apiRouter);

export default indexRouter;