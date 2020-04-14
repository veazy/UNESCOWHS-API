var mongoose = require("mongoose");


var siteSchema = new mongoose.Schema({
	sr_no: {
		type: String
	},
	name: {
		type: String
	},
	location: {
		type: String
	},
	period: {
		type: String
	},
	UNESCO_data: {
		type: String
	},
	description: {
	type: String
	},
	image_link: {
		type: String
	},
	enlistment_year: {
		type: String
	},
	site_type: {
		type: String
	}
});

var Site = mongoose.model('Site', siteSchema);
module.exports = Site;