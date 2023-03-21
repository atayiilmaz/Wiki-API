const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://0.0.0.0:27017/wikiDB", {useNewUrlParser: true})

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Article = mongoose.model("Article", articleSchema)


app.route("/articles")
  .get(function (req,res) {
    Article.find().then((foundArticles) => {
      res.send(foundArticles)
    }).catch((err) => {
      res.send(err)
    })
  })
  .post(function (req,res) {

      const newArticle = new Article({
        title: req.query.title,
        content: req.query.content
      })

      newArticle.save().then(() => {
        res.send("Successfully added")
      }).catch((err) => {
        res.send(err)
      })
    })
  .delete(function (req,res) {

      Article.deleteMany().then(() => {
        res.send("Successfully deleted")
      }).catch((err) => {
        res.send(err)
      })
    })

app.route("/articles/:articleTitle")

  .get(function (req, res) {

    
    Article.findOne({ title: req.params.articleTitle }).exec().then((foundArticle) => {
      if(foundArticle){
        res.send(foundArticle)
      } else {
        res.send("No articles matching title was found.")
      }
    }).catch((err) => {
      res.send(err)
    })
  })


app.listen(3000, function() {
  console.log("Server started on port 3000");
});