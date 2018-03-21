const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myProject")

mongoose.connection.on('open',function () {
  console.log('数据库连接成功了！')
})


