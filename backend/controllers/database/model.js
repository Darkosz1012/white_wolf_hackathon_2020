const schema = require("./schema")
var mongoose = require('mongoose');
module.exports = {
    user : new mongoose.model("User",schema.user),
    sport : new mongoose.model("Sport",schema.sport),
    matchMaking : new mongoose.model("MatchMaking",schema.matchMaking)
}