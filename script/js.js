/*my own shop 折扣店 sep.27*/
$(function(){(
  /*-----------幻灯片start------------*/
   function(){
		var curr = 0;
		$("#jsNav .trigger").each(function(i){
			$(this).click(function(){
				curr = i;
				$("#js img").eq(i).fadeIn("slow").siblings("img").hide();
				$(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
				return false;
			});
		});
		
		var pg = function(flag){
			if (flag) {
				if (curr == 0) {
					todo = 4;
				} else {
					todo = (curr - 1) % 5;
				}
			} else {
				todo = (curr + 1) % 5;
			}
			$("#jsNav .trigger").eq(todo).click();
		};
		
		//ǰ
		$("#prev").click(function(){
			pg(true);
			return false;
		});
		
		//
		$("#next").click(function(){
			pg(false);
			return false;
		});
		
		//Զ
		var timer = setInterval(function(){
			todo = (curr + 1) % 5;
			$("#jsNav .trigger").eq(todo).click();
		},2000);
		
		$("#js,#prev,#next").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % 5;
					$("#jsNav .trigger").eq(todo).click();
				},2000);			
			}
		);
	})();
	
	 /*-----------幻灯片end------------*/
	 
	 
	 	
	 /*-----------首页变色start-----------*/
	 $(".look").hover(function(){
	 $(this).addClass("changecolor");
	 },
	 function(){
	 $(this).removeClass("changecolor");
	 });
	 
});
 /*-----------首页变色end-----------*/
  /*-----------注册界面提醒-----------*/
$(function(){
    $(".spsearch span").hide();
$("input.spnormal").focus(function(){

    $(this).next().show();
});
$(".spnormal").blur(function(){
    console.log("k");
    $(this).next().hide();
});
});

    /*-----------注册界面提醒end-----------*/
