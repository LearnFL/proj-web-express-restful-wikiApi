import mongoose from "mongoose";
import {} from "dotenv/config";

// LOCALHOST
mongoose.connect('mongodb://localhost:27017/wikiDB');

const wikiDBschema = new mongoose.Schema({
  title: {type: String, required:[1]},
  content: {type: String, required:[1]}
});

const Article = mongoose.model("Article", wikiDBschema);

export { Article };
