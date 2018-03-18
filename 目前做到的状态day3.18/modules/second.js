
const mongoose = require("mongoose")

const Schema =mongoose.Schema

const fwsSchema = new Schema({
  title:{type:String,unique:true},
  orderCount:{type:Number},
  positiveRate:{type:Number},
  imgUrl:{type:String,unique:true}
})
module.exports = mongoose.model('second',fwsSchema,'second')