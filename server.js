const express = require("express");  
const bodyParser = require("body-parser"); 

 
const app = express();  

app.use(bodyParser.urlencoded({extended: true})); //to pass data from html form 
// extended: true --> allows us to post nested odject 

 
app.get("/", function(req, res) {  
    res.sendFile(__dirname + "/index.html");  
}); 
//homepage; req is request, res is response  
// instead of just index.html, use __dirname + filename no matter where it is hosted to reach the file location 

 
app.post("/", function(req, res){ 

    var weight = Number(req.body.wt); //req.body gets a string; n1 is the name attribute in html 
    var height = Number(req.body.ht); 
    var bmi = Math.round(weight/(height * height));//Math.round(weight/(height*height));
    res.send("Your BMI is " + bmi); 
}); 

  

app.listen(3000, function(){  

    console.log("Server started on port 3000");  

});  