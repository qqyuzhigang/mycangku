const mongoose = require("mongoose")

const Schema =mongoose.Schema

const dwfSchema = new Schema({
  title:{type:String,unique:true},
  name:{type:String,unique:true},
  desc:{type:String},
  price:{type:Number},
  oldPrice:{type:Number},
  orderCount:{type:Number},
  soldCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  imgUrl:{type:String,unique:true},
  company:{type:String,unique:true},
  profile:{type:String},
})
module.exports = mongoose.model('three',dwfSchema,'three')