const mongoose = require("mongoose")

const Schema =mongoose.Schema

const shopSchema = new Schema({
  serviceIndex:{type:String,unique:true},
  serviceType:{type:Array,unique:true},
  shopList:{type:Array,unique:true}
})
module.exports = mongoose.model('first',shopSchema,'first')