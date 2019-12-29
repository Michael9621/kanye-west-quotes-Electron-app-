let request = require('request');




setInterval(function (){
    request ('https://api.kanye.rest/', function(err, res, body){
     let bodyJson = JSON.parse(body)
     let randomQuote = bodyJson["quote"]
    //console.log(bodyJson)
    // console.log(randomQuote)
    document.getElementById("quote").innerHTML = randomQuote 
});
}, 5000);