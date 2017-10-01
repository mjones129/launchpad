var mongoose = require("mongoose");

var staffSchema = new mongoose.Schema({
    photo: "String",
    name: "String",
    bio: "String"
});

module.exports = mongoose.model("Staff", staffSchema);
