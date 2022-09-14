import {Router} from "express";
import {home} from "../controllers/showHome.mjs"

const router = Router();

router.get('/', home);

export {router as home};
