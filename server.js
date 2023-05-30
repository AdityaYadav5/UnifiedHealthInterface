const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var Tesseract = require('tesseract.js')
var request = require('request')
var fs = require('fs')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

var allowed = [];
const fuser = {
    username: "ABC",
    password: "pass" 
};
allowed.push(fuser);

var yvalues = [];
app.get("/", function(req, res){
    res.send("Hello World!");
});

app.post("/post", function(req,res){
    console.log("Posted");
    res.redirect("/");
});

app.post("/register", function(req,res){
    const newHosp = {
        username: req.body.hid,
        password: req.body.hpass
    };
    allowed.push(newHosp);
    console.log(allowed);
    console.log("posted");
    res.redirect("/dashboard2");
});

app.post("/login", function(req,res){

    const attempt = {
        username: req.body.hid,
        password: req.body.hpass
    };
    console.log(attempt);
    let found = 0;
    for(let i = 0; i<allowed.length; i++){
        if(allowed[i].username==req.body.hid && allowed[i].password==req.body.hpass){
            found = 1;
            res.redirect("/prescribe");
        }
    }
    if(found==0){
        res.redirect("/dashboard");
    }    
});
app.get("/user", function(req,res)
{
    res.send(yvalues);
});
app.post("/user", function(req, res){

  let items = req.body.links;
  //let yvalues = [];
  if(Array.isArray(items))
  {
    for(let i = 0; i<items.length; i++)
    { 
        let url = items[i];
        let filename = "scan" + i + ".png";
        var writeFile = fs.createWriteStream(filename)
        request(url).pipe(writeFile).on('close', function() {
            console.log(url, 'saved to', filename);
              Tesseract.recognize(
              filename,'eng',
              { 
                 logger: (m) => {console.log(m);} 
              }
              ).then(({data: {text} }) => {
                  //console.log(text);
                  let loc = text.search("RED BLOOD CELL");
                  let val = text.substring(loc+16, loc+20);
                  yvalues.push(val);
                  console.log(yvalues);
              });
          });
    }
  }
  else
  {
    let url = items;
    let filename = "scan0.png";
    var writeFile = fs.createWriteStream(filename);
    request(url).pipe(writeFile).on('close', function() {
        console.log(url, 'saved to', filename);
          Tesseract.recognize(
          filename,'eng',
          { 
             logger: (m) => {console.log(m);} 
          }
          ).then(({data: {text} }) => {
            console.log(text);
            let loc = text.search("RED BLOOD CELL");
            let val = text.substring(loc+16, loc+20);
            //console.log(val);
            //yvalues.push(val);
        });
      });
    
  }
// var url = 'https://gateway.pinata.cloud/ipfs/Qmaj2r46vYMkr5cLEj2YZiJrHXhjjvb2Q5buDnfmZXtzNL'
// var filename = 'scan1.png'
//console.log(yvalues);
res.redirect("/user");

});

app.listen(5000, function(){
    console.log("Server started on port 5000");
});