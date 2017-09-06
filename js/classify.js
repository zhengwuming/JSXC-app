$(function () {  
	//加的效果  
	$(".add").click(function () {  
		$(this).prevAll().css("display", "inline-block");  
		var n = $(this).prev().text();  
		var num = parseInt(n) + 1;  
		if (num == 0) { return; }  
		$(this).prev().text(num);  
		var danjia = $(this).next().text();//获取单价  
		var a = $("#totalpriceshow").html();//获取当前所选总价  
		$("#totalpriceshow").html((a * 1 + danjia * 1).toFixed(2));//计算当前所选总价  
		  
		var nm = $("#totalcountshow").html();//获取数量  
		$("#totalcountshow").html(nm*1+1);  
		jss();//改变按钮样式
	});  
	//减的效果  
	$(".minus").click(function () {  
		var n = $(this).next().text();  
		var num = parseInt(n) - 1;  

		$(this).next().text(num);//减1  

		var danjia = $(this).nextAll(".price").text();//获取单价  
		var a = $("#totalpriceshow").html();//获取当前所选总价  
		$("#totalpriceshow").html((a * 1 - danjia * 1).toFixed(2));//计算当前所选总价  
		 
		var nm = $("#totalcountshow").html();//获取数量  
		$("#totalcountshow").html(nm * 1 - 1);  
		//如果数量小于或等于0则隐藏减号和数量  
		if (num <= 0) {  
			$(this).next().css("display", "none");  
			$(this).css("display", "none");  
			jss();//改变按钮样式  
			 return  
		}  
	});  
	function jss() {  
		var m = $("#totalcountshow").html();  
		if (m > 0) {  
			$(".right").find("a").removeClass("disable");  
		} else {  
		   $(".right").find("a").addClass("disable");  
		}  
	};
	//选项卡
	$(".right-menu>div").hide();
	$(".right-menu>div:eq(0)").show();	
	
	$(".left-menu li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var n = $(".left-menu li").index(this);
		$(".left-menu li").index(this);
		$(".right-menu>div").hide();
		$(".right-menu>div:eq("+n+")").show();	
	});
});


/**********右边搜索框**********/
$(function(){
	var odiv=$(".keyword-list");
                $("#search").click(function(event){//为按钮注册click事件处理函数，事件处理函数的参数是事件对象。
                  showDiv();
                $(document).one("click",function(){
                    odiv.hide();
                  });
                  //用来阻止事件冒泡，否则点击事件冒泡到文档，那么div元素显示后又会瞬间被隐藏。
                  event.stopPropagation();
                });
                odiv.click(function(event){
                  event.stopPropagation();
                })
                function showDiv(){
                  odiv.fadeIn();
                }
})
/****************************/