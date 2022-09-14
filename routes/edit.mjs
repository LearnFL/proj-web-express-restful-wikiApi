import {Router} from "express";
import {edit} from "../controllers/showEdit.mjs"

const router = Router();

router.get('/:articleID', edit);

export {router as edit};
