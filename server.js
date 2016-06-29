var http = require('http');
// server.js
// where your node app starts

// init project
var express = require('express');
var request = require('request');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// var options = {
//   host: 'api.github.com',
//   path: '/repos/nvie/gitflow//forks'
// };

// callback = function(response) {
//   var str = '';

//   //another chunk of data has been recieved, so append it to `str`
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   //the whole response has been recieved, so we just print it out here
//   response.on('end', function () {
//     console.log(str);
//   });
// // var forks_web = JSON.parse("https://api.github.com/repos/nvie/gitflow//forks");
// http.request(options, callback).end();
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});
app.get("/forks/:owner/:repo", function (request, response) {
  
    request('https://api.github.com/repos/' + owner +'/' +repo +'/forks', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage. 
      }
    });
});




// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});



// Simple in-memory store for now
var dreams = ["a"];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});