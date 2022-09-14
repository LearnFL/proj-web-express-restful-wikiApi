import {Router} from "express";
import {del} from "../controllers/showDelete.mjs"

const router = Router();

router.get('/:articleID', del);

export {router as del };
