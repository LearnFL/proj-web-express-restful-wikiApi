import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { write } from "./routes/write.mjs";
import { home } from "./routes/home.mjs";
import { del } from "./routes/delete.mjs";
import { edit } from "./routes/edit.mjs";
import { articles } from "./routes/articles.mjs";

// APP SETUP
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));

// ROUTES
app.use('/', home);
app.use('/write', write);
app.use('/delete', del);
app.use('/edit', edit);
app.use('/articles', articles);

app.listen(PORT, () => {console.log('Listening on port: '+PORT)});
