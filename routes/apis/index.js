import { Router } from "express";
import productRoute from "./product.route";

const routes = Router();

routes.use("/", productRoute);

export default routes;
