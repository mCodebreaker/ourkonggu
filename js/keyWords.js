var mPageIndex = 0;
var rightPart; //包含右按钮的页
var leftPart; //包含左按钮的页

$(document).ready(function(){
	rightPart = $("#page1 .sheet-right");
	leftPart = $("#page2 .sheet-left");
	$(page2).hide();
	$(btn_left).hide();
	$(btn_right).hide();
	initEvent();
});


/* 注册事件 */
function initEvent(){
	//按键切换
	$(document).keydown(function (event){
		if ((mPageIndex == 1 && event.which == 37) || (mPageIndex == 0 && event.which == 39)) 
			changePage();
	});
	//显示书页折角
	rightPart.bind("mouseenter", showButton);
	leftPart.bind("mouseenter", showButton);
	rightPart.bind("mouseleave", hideButton);
	leftPart.bind("mouseleave", hideButton);
	//点击按钮切换图片
	rightPart.click(onButtonClick);
	leftPart.click(onButtonClick);
}

function showButton(){
	if (mPageIndex == 0)
		$(btn_right).show();
	else 
		$(btn_left).show();
}

function hideButton(){
	if (mPageIndex == 0)
		$(btn_right).hide();
	else 
		$(btn_left).hide();
}

function onButtonClick(){
	var txt;
	if(document.selection)
		txt = document.selection.createRange().text
	else 
		txt = window.getSelection()+'';
	if (!txt)
		changePage();
		
}

function changePage(){
	hideButton();
	if (mPageIndex == 1) {
		//上一页
		$(page1).show();
		$(page2).hide();
		mPageIndex = 0;
	} else {
		//下一页
		$(page1).hide();
		$(page2).show();
		mPageIndex = 1;
	}
}