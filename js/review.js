var mPageIndex = 0;
var mActiveItem;

$(document).ready(function(){
	initEvent();
});


/* 注册事件 */
function initEvent(){
	//按键切换
	$(document).keydown(function (event){
		if ((mPageIndex == 1 && event.which == 37) || (mPageIndex == 0 && event.which == 39)) {
			if (mActiveItem){
				mActiveItem.trigger("mouseleave");
				mActiveItem = null;
			}
			changePage();
		}
	});
	//点击按钮切换图片
	$("#btn_left,#btn_right").click(changePage);
	//显示内容
	$(".polygon").bind("mouseenter",showContent);
	$(".polygon").bind("mouseleave",hideContent);
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

/* 鼠标移入显示内容 */
function showContent(){
	var item = $(this);
	var side = item.next();
	var content = item.find(".content");
	var title = item.find(".title");
	mActiveItem = item;
	if(side.hasClass("side")) {
		//附属的小多边形
		content.push(side.find(".content")[0]);
	}
	//清空动画队列
	content.stop(true, true);
	title.stop(true, true);
	//改变状态
	title.fadeOut();
	content.fadeIn();
}

function hideContent(){
	var item = $(this);
	var side = item.next();
	item.find(".content").fadeOut();
	item.find(".title").fadeIn();
	//附属的小多边形
	if(side.hasClass("side")) {
		side.find(".content").fadeOut();
	}
}