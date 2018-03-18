require('./todos/db')
var express = require('express')
var app = express()

var ShopsModel = require('./modules/first')

var FwsSchema = require('./modules/second')

var DwfSchema = require('./modules/three')

app.use(express.static('public'))

app.use(require('./routes/index'))

app.get('/getShop',function (req,res) {
  ShopsModel.find({},function (err,data) {
    if(!err){
      res.send({status:'ok',list:data})
    }else {
      res.send({status:'你的信息有误'})
    }
  })
})

app.get('/getfws',function (req,res) {
  FwsSchema.find({},function (err,data) {
    if(!err){
      //console.log(data)
      res.send({status:'ok',list:data})
    }else {
      res.send({status:'你的信息有误'})
    }
  })
})

app.get('/getdwf',function (req,res) {
  DwfSchema.find({},function (err,data) {
    if(!err){
      //console.log(data)
      res.send({status:'ok',list:data})
    }else {
      res.send({status:'你的信息有误'})
    }
  })
})


app.listen(4000,function () {
  console.log('服务器已经启动，你的端口号是localhost:4000')
})






