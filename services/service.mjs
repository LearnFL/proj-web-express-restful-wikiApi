import { Article } from "../models/db.mjs";

export async function showAllArticles() {
  try {
    var data = await Article.find({});
    return data;
  }catch (e) {
    console.log(e);
  }
}

export async function saveNewArticle(title, content) {
  try {
    let doc = new Article({title: title, content: content});
    await doc.save();
  } catch(e) {
    console.log(e);
  }
}

export async function deleteAll() {
  try {
    await Article.deleteMany({});
  } catch (e) {
    console.log(e);
  }
}

export async function getSpecificArticle(articleName) {
  try {
    return await Article.findOne({title:articleName});
  } catch(e) {
    console.log(e);
  }
}

export async function updateSpecificArticle(articleName, title, content) {
  try {
    const article = await Article.findOne({title:articleName});
    if (!title) {
      title = article.title;
    } else if (!content) {
      content = article.content;
    }
  } catch(e) {
    console.log(e);
  }

  try {
                                                     // {$set:req.body}
    return await Article.findOneAndUpdate({title: articleName}, {title: title, content: content});
  } catch (e) {
    console.log(e);
  }
}

export async function replaceOneArticle(res, oldtitle, title, content) {
  if (!title || !content) {
    res.send('Must provice title and content.')
  } else {
    try {
      const result =  await Article.replaceOne({title: oldtitle}, {title: title, content: content});
      if (result.modifiedCount === 0) {
        res.send('Article title not found');
      }else {
        res.send('Success')
        }
    }catch (e) {
      res.send(e);
      console.log(e);
    }
  }

}

export async function deleteOneArticle(res, title) {
  try {
    const result = await Article.deleteOne({title: title});
    if (result.deletedCount === 0) {
      res.send('Article title not found');
    }else {
      res.send('Success')
      }
  } catch (e) {
    console.log(e);
  }
}
