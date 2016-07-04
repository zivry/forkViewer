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
app.get("/forks/:owner/:repo", function (req, res) {
  // console.log(req.params.owner, req.params.repo) // Show the HTML for the Google homepage. 
  var options = {
    url : 'https://api.github.com/repos/' + req.params.owner +'/' +req.params.repo +'/forks?sort=stargazers',
    headers : {
      'User-Agent': 'request'
    }
  }
    request(options, function (error, response, body) {
      if (error) {
        res.status(404).end();
      }
      else {
        if (response.statusCode == 200) {
          var obj = JSON.parse(body);
          var data = [];
          console.dir(response.headers);
          var result = {"current":  response.headers.link,"data": data};
          for (var i = 0; i < obj.length; i++) {
            fork = obj[i];
            data.push({
              "login" : fork.owner.login, 
              "url": fork.forks_url , 
              "forks": fork.forks,
              "watchers": fork.watchers,
              "forks_count": fork.forks_count,
              "stars": fork.stargazers_count,
              "updated_at": fork.updated_at
            });
          }
          // console.dir(result)
          res.status(200).json(result).end();
        }  
        else 
        {
          res.status(response.statusCode).send(body);
        }
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