//사이트맵
$(".nav>ul>li").mouseover(function(){
  $(this).find(".submenu").stop().slideDown(200);
})
$(".nav>ul>li").mouseout(function(){
  $(this).find(".submenu").stop().slideUp(200);
})

//이미지슬라이드
var currentIndex = 0;
setInterval(function(){
  if(currentIndex < 2){
    currentIndex++;
  }else{
    currentIndex = 0;
  }
  var slidePosition = currentIndex*(-1200)+"px";
  $(".slidelist").animate(
  {left:slidePosition},400)
},3000)

//탭메뉴
