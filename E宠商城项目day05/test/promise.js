/**
 * Created by Administrator on 2018/3/23.
 */


//发ajax请求
//1. 回调函数方式，会产生回调嵌套，代码不易理解
$.get('/111',function(data){

  $.get('/222',data,function(trueData){
    //trueData做点什么
    $.get('/333',function(){
      //做事情
    })
  })
});

//2.promise, resolve 成功，reject 失败 （由自己决定）
var p =

//3. async await 简化promise then的链式调用

async function ttst(){
  var data = await new Promise(function(resolve,reject){
    $.get('/111',function(data){
      if(data.code===0){
        resolve(data);
      }else{
        reject(data.error);
      }
    })
  });
  var trueData = await new Promise(function(resolve,reject){
    $.get('/222',function(trueData){
      resolve(truedata);
    })
  });
  $.get('/333',function(){
  ////});
});
}

ttst()

var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    var that = this;
    return function(){
      return that.name;
    };
  }
};
alert(object.getNameFunc()());

