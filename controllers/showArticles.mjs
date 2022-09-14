import { showAllArticles, saveNewArticle, deleteAll, getSpecificArticle, updateSpecificArticle, replaceOneArticle, deleteOneArticle } from  "../services/service.mjs";
import _ from "lodash";

export async function articles(req, res, next) {
  try {
    let allArticles = await showAllArticles();
    res.send(allArticles);
  } catch(e) {
    console.log(e);
  }

}

export async function postReqArticles(req, res, next) {
  await saveNewArticle(_.capitalize(req.body.title), _.capitalize(req.body.content));
  res.send('Saved');
}

export async function deleteAllArticles(req, res, next) {
  await deleteAll();
  res.send('Deleted All')
}

export async function specificArticle(req, res, next) {
  var article = await getSpecificArticle(_.capitalize(req.params.articleName));
  if (article) {
    res.send(article);
  } else {
    res.send({_id: 0, title: 'Article Not Found', content: "Please try another article."})
  }
}

export async function patchSpecificArticle(req, res, next) {
  const updatedArticle = await updateSpecificArticle( _.capitalize(req.params.articleName),
    _.capitalize(req.body.title),
    _.capitalize(req.body.content));
  if (updatedArticle) {
    res.send('Success');
  } else {
    res.send('Title not found.')
  }
}

export async function replaceArticle (req, res, next){
  await replaceOneArticle(res, _.capitalize(req.params.articleName), _.capitalize(req.body.title), _.capitalize(req.body.content));
}

export async function deleteArticle(req, res, next) {
  await deleteOneArticle(res, _.capitalize(req.params.articleName));
}
