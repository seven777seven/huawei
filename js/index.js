//新闻滚动条
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','19px');	
	x.animate({top: t - 19 + 'px'},'slow');	//19为每个li的高度
	if(Math.abs(t) == h-19){ //19为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.swap');
	h = $('.news_li li').length * 19; //19为每个li的高度
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
	
})

// 物品图边框阴影
	$(document).ready(function(){
		$(".center_rxdp_right1").mouseover(function(){
			$(this).css({boxShadow:"0 12px 36px rgba(0,0,0,0.1)",transition:"0.5s"});
		})
		$(".center_rxdp_right1").mouseout(function(){
			$(this).css({boxShadow:"0 0 0 rgba(0,0,0,0.1)",transition:"0.5s"})
		})
	})
	
// 轮播图
window.onload=function(){
    new BannerPic({
			"boxDom":Seven("#box1"),//轮播图的容器
			"imgs":["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"],
			"doudouDirection":"下",
			"left":-328,
			"top":0,
			"imgLeft":-328,
			"doudouButton":50,
			"as":["#","#","#","#","#","#","#"]			
	});

// 轮播图2
	new BannerPic({
			"boxDom":Seven("#box2"),//轮播图的容器
			"imgs":["img/a1.jpg","img/a2.jpg","img/a3.jpg","img/a4.jpg","img/a5.jpg","img/a6.jpg"],
			"doudouDirection":"下",	
			"doudouButton":10,
			"as":["#","#","#","#","#","#"]			
	});
}


function Seven(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
