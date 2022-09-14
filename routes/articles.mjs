import {Router} from "express";
import {articles, postReqArticles, deleteAllArticles, specificArticle, patchSpecificArticle, replaceArticle, deleteArticle} from "../controllers/showArticles.mjs"

const router = Router();

router.get('/', articles);
router.post('/', postReqArticles);
router.delete('/', deleteAllArticles);
router.get('/:articleName', specificArticle);
router.put('/:articleName', replaceArticle);
router.patch('/:articleName', patchSpecificArticle);
router.delete('/:articleName', deleteArticle);

export {router as articles};
