
export async function del(req, res, next) {
  res.send('Delete page '+ req.params.articleID);
}
