//固定导航栏
$(function(){
    　　var nav=$("#layoutRelative"), //得到导航对象
    　　　　 win=$(window), //得到窗口对象
    　　　　 doc=$(document);//得到document文档对象。
    　　　 //防止页面滚动到790px以下F5刷新后导航不显示　
          //  if(doc.scrollTop()>=790){　　
          //    $('#layoutRelative').addClass('fixnav');
          //  }else{
          //    $('#layoutRelative').removeClass('fixnav');
          //  }　　

           //滚动到790px以下导航显示
    　　　　win.scroll(function(){
    　　　　　if(doc.scrollTop()>=790){//判断滚动的高度
               $("#layoutRelative").addClass('fixnav');//固定导航样式类名
              }else{
                $("#layoutRelative").removeClass('fixnav');
              }
            })
    })

//点击导航栏变色
$(document).ready(function(){
	$(".ppp").children("a").click(function(){
    $(".ppp").children("a").css({"color":"#a4a4a4"});
    $(".ppp").children("a").children("em").css({"background":"white"});
    $(this).css({"color":"#ca141d"});
    $(this).children("em").css({"background":"red"});
  });	 

//切换两款手机
  $(".sku").click(function(){
    $(".sku").children("a").css({"border-color":"#ca141d"});//改变黑手机选中盒子的边框颜色
    $("#skuBox").children("a").css({"border-color":"#a4a4a4"});//改变红手机选中盒子的边框颜色
    $("#xuanHong").css({"display":"none"});//改变商品名称字体
    $("#xuanH").css({"display":"inline"});
    $("#pro-sku-code1").css({"display":"inline"});//改变商品编码
    $("#pro-sku-code2").css({"display":"none"});
    $("#XH").css({"display":"inline"});//改变商品名称字体
    $("#XHong").css({"display":"none"});
    //定义img数组，更改第一张默认图片
    let blackBox=["img/428_428_1539244238246mp.png","img/428_428_1539243945381.png","img/800_800_1539243940829.png","img/800_800_1539243950877.png","img/800_800_1539243954172.png","img/800_800_1539244238246mp.png","img/428_428_1539243961283.png","img/428_428_1539243956535.png","img/428_428_1539243959093.png"];
    $("#onclickUl").children("li").children("img").each(function(i){
      $("#midimg")[0].src=blackBox[0];
      $("#onclickUl").children("li").children("img")[i].src=blackBox[i]
    })
  });

  $("#skuBox").click(function(){
    $(".sku").children("a").css({"border-color":"#a4a4a4"});//改变黑手机选中盒子的边框颜色
    $("#skuBox").children("a").css({"border-color":"#ca141d"});//改变红手机选中盒子的边框颜色
    $("#xuanH").css({"display":"none"});//改变商品名称字体
    $("#xuanHong").css({"display":"inline"});
    $("#pro-sku-code1").css({"display":"none"});//改变商品编码
    $("#pro-sku-code2").css({"display":"inline"});
    $("#XH").css({"display":"none"});//改变商品名称字体
    $("#XHong").css({"display":"inline"});
    //定义img数组，更改第一张默认图片
    let redBox=["img/428_428_1539245339725mp.png","img/428_428_1539245315293.png","img/800_800_1539245317485.png","img/800_800_1539245319260.png","img/800_800_1539245320907.png","img/428_428_1539245339725mp.png","img/428_428_1539245323154.png","img/428_428_1539245324140.png","img/800_800_1539245325065.png"];
    $("#onclickUl").children("li").children("img").each(function(i){
      $("#midimg")[0].src=redBox[0];
      $("#onclickUl").children("li").children("img")[i].src=redBox[i]
    })
  });

});

