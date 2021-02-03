//사이트맵
$(".nav>ul>li").mouseover(function(){
  $(this).find(".submenu").stop().slideDown(200);
})
$(".nav>ul>li").mouseout(function(){
  $(this).find(".submenu").stop().slideUp(200);
})

//currentIndex = 0; 첫번째 이미지 : 0
//currentIndex = 1; 두번째 이미지 : -389
//currentIndex = 2; 세번째 이미지 : -778

//이미지 슬라이드(상하)
//        var currentIndex = 0; //첫번째 이미지
//        
//        setInterval(function(){
//            if(currentIndex < 2){
//                currentIndex++;
//            } else {
//                currentIndex = 0;
//            }
//            var slidePosition = currentIndex * (-389)+"px";
//            $(".slideList").animate({top: slidePosition},400);
//            
//        },3000);

//이미지슬라이즈(좌우)
var currentindex=0;
setInterval(function(){
  if(currentindex < 2){
    currentindex++;
  } else{
    currentindex=0;
  }
  var slidePosition=currentindex*(-1200)+"px";
  $(".slidelist").animate({left:slidePosition},400);
},3000)

//탭메뉴
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  tabBtn.removeClass("active");
  target.addClass("active");
  tabCont.css("display","none");
  tabCont.eq(index).css("display",'block');
});

//레이어팝업


$(".tab-cont > div > li > a").click(function(){
  $(".layer").css("display","block")
  $(".layerbg").show()
});
$(".layer .close").click(function(){
  $(".layer").css("display","none")
  $(".layerbg").hide()
});



