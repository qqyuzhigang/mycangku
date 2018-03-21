
require('./todos/db')

var comment = require('./modules/comment')

comment.find({},function (err,data) {
  if(!err){
    //console.log(data)
    }
})

var date = new Date(1433665089755);

alert(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate())
