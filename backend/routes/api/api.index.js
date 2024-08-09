import { Router } from "express";
import v1Router from "./v1/v1.index";
import v2Router from "./v2/v2.index";

const apiRouter = Router();

apiRouter.use('/v1' , v1Router);
apiRouter.use('/v2' , v2Router);

export default apiRouter;