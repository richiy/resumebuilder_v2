//MODULES
const express = require("express");
// const cheerio = require("cheerio");
// const rp = require("request-promise");
const bodyParser = require("body-parser");
// const puppeteer = require('puppeteer');
var cors = require('cors');
const convertHTMLToPDF = require("pdf-puppeteer");
const fs = require('fs');

// ---------------------------------------
//VARS
const app = express();
app.use(cors());

app.use(express.static(__dirname + "/build"));

const port = process.env.PORT || 5000;
// ---------------------------------------
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
//ROUTES
app.get("/", urlencodedParser, (req, res) => {
  
  res.sendFile(__dirname + "/build/index.html");
});
// ---------------------------------------
app.post("/pdf", jsonParser, (req, res) => {
  // console.log(req.body.x);
  let html = null;
  let css = null;
  fs.readFile('./build/static/css/main.31b8d548.css', 'utf8', function(err, rawCSS) {
    html = req.body.rawHTML;
    css = "<style>" + rawCSS + "</style>";
    convertHTMLToPDF(css + html, function(pdf){
      res.setHeader("Content-Type", "application/pdf");
      res.send(pdf);
    });
  });

});
// ---------------------------------------
app.listen(port, () => {
  console.log("node runnning on port 5000");
});










/*

let html = document.getElementsByTagName('html')[0].innerHTML;

fetch('http://localhost:5000/pdf', {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   mode: 'cors', // no-cors, *cors, same-origin
   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
   credentials: 'same-origin', // include, *same-origin, omit
   headers: {
     'Content-Type': 'application/json'
     // 'Content-Type': 'application/x-www-form-urlencoded',
   },
   redirect: 'follow', // manual, *follow, error
   referrerPolicy: 'no-referrer', // no-referrer, *client
   body: JSON.stringify({ rawHTML: html}) // body data type must match "Content-Type" header
 }).then(function(response) {
   return response.blob();
 }).then(function(data) {
   window.open(URL.createObjectURL(data))
   });

*/