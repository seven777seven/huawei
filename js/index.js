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




window.onload=function(){
	// 轮播图1
	let pt=[];//定义放图片的数组
	let pt2=[];//第二个轮播图的数组
	// ajax请求
	// 1.创建对象
	let xhr=new XMLHttpRequest();
	// 2.设置请求参数(请求的地址，请求的方式)
	xhr.open("get","goodsAndShoppingCart/getGoodsList.php","true");
	// 3.设置回调函数(服务器端响应回来后，调用的函数);
	xhr.onreadystatechange=function(){
		let pts;
		if(xhr.readyState==4 && xhr.status==200){
			pts=(JSON.parse(xhr.responseText));//后端发来的数据，php中用echo。
		}
		//第一个轮播图
		for(let i=0;i<pts.length;i++){
			for(let key in pts[i]){
				if(key=="goodsImg"){
					if(pts[i][key]==""){
						continue;
					}
					pt.push(`img/${pts[i][key]}`);
				}
				//第二个轮播图
				if(key=="beiyong1"){
					if(pts[i][key]==""){
						continue;
					}
					pt2.push(`img/${pts[i][key]}`);
				}
			}

		}
		//轮播图1
		new BannerPic({
			"boxDom":Seven("#box1"),//轮播图的容器
			"imgs":pt,//数据库请求到的图片数组
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
			"imgs":pt2,
			"doudouDirection":"下",	
			"doudouButton":10,
			"as":["#","#","#","#","#","#"]			
		});
	}
// 4.发送请求
	xhr.send()
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
