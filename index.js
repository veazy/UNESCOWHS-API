var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");
var seedDB = require("./seed");
var Routes = require("./routes/home");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", Routes);
app.use(express.static(__dirname + "/views"));

//seedDB();

app.get("/", function(req, res){
	res.sendFile("index.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server now running..");
});
