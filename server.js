var express = require('express');
var morgan = require('morgan');
var app= express();

app.get('/index.html',function(req,res){
    res.sendfile('index.html');
});

app.get('/app.js',function(req,res){
    res.sendfile('app.js');
});

app.get('/products',function(req,res){

    console.log(req)
 var searchCriteria= req.query.pname;
    var produtJson= [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
var filteredProduct=[];
console.log('pname='+ searchCriteria);
for (i = 0; i < produtJson.length; i++) { 
    if(produtJson[i].toLowerCase().startsWith(searchCriteria.toLowerCase())===true)
       {
        filteredProduct.push(produtJson[i]);
       }
}
console.log('filteredProduct='+ filteredProduct);

//filter by request parameter
    res.json(filteredProduct);
   
});

app.listen(8080);
console.log('App listening to port 8080');