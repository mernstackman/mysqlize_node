import { Router } from "express";
import routes from "./apis";

const router = Router();

router.use("/", routes);

export default routes;
