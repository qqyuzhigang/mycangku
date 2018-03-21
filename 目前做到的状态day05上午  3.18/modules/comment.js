const mongoose = require("mongoose")

const Schema =mongoose.Schema

const comSchema = new Schema({
  iconUrl:{type:String},
  area:{type:String},
  city:{type:String},
  comment:{type:String},
  createtime:{type:Number},
  nick:{type:String},
  star:{type:Number},
})

module.exports  = mongoose.model('comment',comSchema,'comment')
