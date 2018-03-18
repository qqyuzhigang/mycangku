var express = require('express');
var router = express.Router();
//引入主页model
var First = require('../modules/first')

/* GET home page. /fenlei页面 dwfenlei*/
router.get("/",function (req , res) {
  res.render("index");
});

router.get('/dwfenlei', function(req, res, next) {
  res.render('dwfenlei');
});
//向路由器上设置路由  severb
router.get('/serverB', function(req, res, next) {
  res.render('serverB');
});

router.get('/inner', function(req, res, next) {
  res.render('inner');
});

module.exports = router;
