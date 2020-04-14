var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function(req, res){
	db.Site.find()
	.then(function(sites){
		res.json(sites);
	})
	.catch(function(err){
		console.log(err);
	})
});

router.get("/:siteId", function(req, res){
	db.Site.findById(req.params.siteId)
	.then(function(foundSite){
		res.json(foundSite);
	})
	.catch(function(err){
		console.log(err);
	})
});



module.exports = router;