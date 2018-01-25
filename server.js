// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("*", function (request, response) {
  let urlSite = "https://shorten-url2.glitch.me/";
  let url = request.originalUrl.slice(1); //OriginalUrl is a string
  let url_ok = true;
  console.log("url: ", url);
  
  //check url format
  if ( !(url.split(":")[0] === "http" || url.split(":")[0] === "https")) url_ok = false;
  if ( !(/^\/\//.test(url.split(":")[1])) ) url_ok = false;
  if ( !(/\:/.test(url))) url_ok = false;
  if ( !(/\./.test(url))) url_ok = false;
  
  if (url_ok ) {
    let urlSiteOutput = "<a href=\"" + url + "\">" + urlSite + "</a>";
    let urlOutput = "<a href=\"" + urlSite + "\">" + url + "</a>";
    let output = "{ \"original_url\":" + urlOutput + ", \"short_url\":" + urlSiteOutput +"}";
    console.log(output);
    response.send(output);
  }
  else response.send("Original URL is not correct. Please check");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
