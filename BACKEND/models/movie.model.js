const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, default: null, unique: true, require : true},
  director: { type: String },
  year: { type: Number },
  cast : {type : String},
  genre : {type : String},
  synopsis : {type : String},
  ratings : {type : Number},
  fileData : {type : String},
},
{
  timestamps: true
});



module.exports = mongoose.model("movie", MovieSchema);