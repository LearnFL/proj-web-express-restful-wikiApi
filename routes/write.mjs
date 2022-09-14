import {Router} from "express";
import {write} from "../controllers/showWrite.mjs"

const router = Router();

router.get('/', write);

export {router as write};
