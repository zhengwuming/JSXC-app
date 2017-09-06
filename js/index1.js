$(function(){
	var curIndex = 0, //当前index
      imgLen = $(".imgList li").length; //图片总数
     // 定时器自动变换2.5秒每次
  var autoChange = setInterval(function(){ 
    if(curIndex < imgLen-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },4000);
   
  //对右下角按钮index进行事件绑定处理等
  $(".indexList").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(autoChange);
      changeTo(item);
      curIndex = item;
    },function(){ 
      autoChangeAgain();
    });
  });
  //清除定时器时候的重置定时器--封装
  function autoChangeAgain(){ 
      autoChange = setInterval(function(){ 
      if(curIndex < imgLen-1){ 
        curIndex ++;
      }else{ 
        curIndex = 0;
      }
    //调用变换处理函数
      changeTo(curIndex); 
    },4000);
    }
  function changeTo(num){ 
    var goLeft = num * 360;
    $(".imgList").animate({left: "-" + goLeft + "px"},500);
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  }
})


/*******contents部分*******/
$(function(){
	//手动滚动
          $('.singleControl').click(function(){
            $('.contentsBox').css({marginLeft:'-360px'});
            $('.singleControl').eq(1).addClass('active').siblings().removeClass('active');
          });
          $('.singleControl').eq(0).click(function(){
            $('.contentsBox').css({marginLeft:'0'});
           $('.singleControl').eq(0).addClass('active').siblings().removeClass('active');
          });
})


/***radio部分***/
$(function(){
	//*自动轮播
          var timer=setInterval(active,5000);
          function active(){
            $('.radioList').css({marginTop:'0'});
            var num= parseInt( $('.radioList').css('margin-top') );
                if(num==0){
                  $('.radioList').css({marginTop:'-25px'});
                }
                if(num==-25){
                  	$('.radioList').css({marginTop:'-50px'});
                }
               }
          
    //鼠标事件              
            $('.radioList').hover(function(){
              clearInterval(timer);
            },function(){
              timer=setInterval(active,5000);
            })
         
})
/***radio部分结束***/


/*****snacks部分*****/
$(function(){
	//*自动轮播
          var timer=setInterval(active,5000);
          function active(){
            $('.Snackbox').css({marginLeft:'0'});
            var num= parseInt( $('.Snackbox').css('marginLeft') );
                if(num==0){
                  $('.Snackbox').css({marginLeft:'-348px'});
                }
                if(num==-348){
                  	$('.Snackbox').css({marginLeft:'-696px'});
                }
               }
          
    //鼠标事件              
            $('.Snackbox').hover(function(){
              clearInterval(timer);
            },function(){
              timer=setInterval(active,5000);
            })
         
})