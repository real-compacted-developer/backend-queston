import { Router } from "express";
import questionAPI from "./question";

const router = Router();

router.use("/", questionAPI);

export default router;
