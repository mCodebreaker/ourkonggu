var mPageIndex = 0;

$(document).ready(function(){
	initEvent();
});


/* 注册事件 */
function initEvent(){
	//按键切换
	$(document).keydown(function (event){
		if ((mPageIndex == 1 && event.which == 37) || (mPageIndex == 0 && event.which == 39)) 
			changePage();
	});
	//点击按钮切换图片
	$("#btn_left,#btn_right").click(changePage);
	$(btn_left).hide();
	$(page2).hide();
}

function changePage(){
	if (mPageIndex == 1) {
		//上一页
		$(btn_left).hide();
		$(btn_right).show();
		$(page1).show();
		$(page2).hide();
		mPageIndex = 0;
	} else {
		//下一页
		$(btn_left).show();
		$(btn_right).hide();
		$(page1).hide();
		$(page2).show();
		mPageIndex = 1;
	}
}