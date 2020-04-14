var mongoose = require("mongoose");
const pwd = require("./pwd");
var mongopwd = pwd.getPwd();
mongoose.set('debug', 'true');
mongoose.connect('mongodb+srv://venkatesh:' + mongopwd + '@mycluster-fyzgz.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
//'mongodb://localhost:27017/whsites-api'
mongoose.Promise = Promise;

module.exports.Site = require("./sites");