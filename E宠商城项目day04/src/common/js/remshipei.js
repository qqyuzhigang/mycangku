
  //阻止默认行为
  document.addEventListener('touchstart',function(event){
    event.preventDefault();
  });

//rem适配
(function(){
  var width = document.documentElement.clientWidth;
  var styleNode = document.createElement('style');
  styleNode.innerHTML = 'html{font-size: '+ width/16 +'px !important;}';
  document.head.appendChild(styleNode);
})();


