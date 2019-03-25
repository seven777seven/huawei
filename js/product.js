  $(function($){
// 1.下拉菜单
  document.getElementsByClassName("zhanwei1")[0]
	var lis = document.getElementsByClassName("ab");
	for(let i=0; i<lis.length; i++){
		lis[i].onmouseover = function(){
      document.getElementsByClassName("zhanwei1")[i].style.display = "block";
		};
		lis[i].onmouseout = function(){
			document.getElementsByClassName("zhanwei1")[i].style.display = "none";
		}
    }

//2.商品列表数据库获取图片
    //ajax请求
    //创建对象
    let xhr =new XMLHttpRequest();
    //设置请求参数（请求地址，请求的方式）
    xhr.open("get","goodsAndShoppingCart/getGoodsList.php","true"); 
    //设置回调函数(服务器端响应回来后，调用的函数);
    xhr.onreadystatechange=function(){
        let pts;
        if(xhr.readyState==4  &&  xhr.status==200){
            pts=(JSON.parse(xhr.responseText));//后端发来的数据，php中用echo。
        }
        //获取图片
        let boxDom="";
        for(let i=0;i<pts.length;i++){
             boxDom+=`		
                <ul>
                    <li>
                        <div class="center_botton_1">
                            <p class="p_img">
                                <a href="commodity.html?a=${pts[i].goodsId}">
                                    <img src="img/${pts[i].beiyong2}" alt="">
                                </a>
                            </p>
                            <p class="P_name"><a href=""><span style="color: #666;">${pts[i].goodsName}</span></a></p>
                            <p class="p_price">
                                <b style="font-weight:normal;">${pts[i].goodsDesc}</b>
                            </p>
                            <div class="p-button">
                                <table colspan="0" border="0" rowspan="0">
                                    <tbody>
                                        <tr>
                                            <td><a target="_blank" href="/product/10086134839130.html" class="p-button-cart"><span>选购</span></a></td>
                                            <td><label class="p-button-score"><span>37033人评价</span></label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>`
            }
            $(".center_botton").html(boxDom);  
        }
//发送请求
    xhr.send()



function GetRequest() {  
    var str = location.search; //获取url中"?"符后的字串  
    var arr=str.split("=");
    for(var i in arr){
        //从=分隔
        return arr[1];
    }
} 
let bb=GetRequest() 

//3.点开商品列表获取对应商品详情
$.get("goodsAndShoppingCart/getGoodsInfo.php",{"goodsId":bb},function(data){
    let stt=`	
        <div class="center_tou1"> 
        <a href="">首页 &nbsp;&nbsp;<i class="iconfont icon-arrow-right-copy-copy-copy"></i>&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </div>
    <div class="center_tou1"> 
        <a href="">手机 &nbsp;&nbsp;<i class="iconfont icon-arrow-right-copy-copy-copy"></i>&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </div>
    <div class="center_tou1"> 
        <a href="">HUAWEI Mate系列</a>
    </div>
    <div class="center_tou1"> 
        <a href="">&nbsp;&nbsp;<i class="iconfont icon-arrow-right-copy-copy-copy"></i>${data.goodsName}</a>
    </div>`
    $(".center_tou").html(stt)
    let str=`
	<!-- 放大镜 -->
 	<div class="preview">
        <div id="vertical" class="bigImg">
			<img src="img/${data.beiyong3}" width="400" height="400" alt="" id="midimg" />
            <div style="display:none;" id="winSelector"></div>
        </div>
        <div class="smallImg">
            <div class="scrollbutton smallImgUp disabled"><img src="img/d_08.png" alt=""></div>
            <div id="imageMenu">
                <ul id="onclickUl">
					<li id="onlickImg"><img src="img/${data.beiyong3}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong4}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong5}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong6}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong7}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong8}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong3}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong6}" width="68" height="68" alt="HUAWEI"/></li>
                    <li><img src="img/${data.beiyong3}" width="68" height="68" alt="HUAWEI"/></li>
                </ul>
            </div>
            <div class="scrollbutton smallImgDown"><img src="img/d_09.png" alt=""></div>
        </div>
        <div id="bigView" style="display:none;"><img width="700" height="800" alt="" src="" /></div>
	</div>
    <!--右板块  -->
    <div class="right relative">
        <h1 class="h1_h">${data.goodsName}</h1>   
        <div class="product-slogan" id="skuPromWord" style="display: block;">
            <span style="font-size:14px;">${data.goodsType}</span>
		</div>
		<div class="product-info">
			<div class="product-info-list clearfix">
                <label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</label>
                <span id="pro-price" class="f24">${data.goodsDesc}</span>
			</div> 
			<div class="product-prom-item clearfix">
				<label>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</label>
				<em class="tag">赠送积分</em>
				<div class="product-prom-con">购买即赠商城积分，积分可抵现~</div>
			</div>			
		</div>
		<div class="product-pulldown">
			<label>服务说明</label>
			<div class="f1">
				<p>已满48元已免运费<em></em>
					由华为商城负责发货，并提供售后服务</p>
			</div>
		</div>
		<div class="product-description">
			<label>商品编码</label>
			<div style="float:left; margin-left:18px;" class="fl" id="pro-sku-code1">2601010068401</div>
			<div style="float:left; margin-left:18px;display:none;" class="fl" id="pro-sku-code2">2601010068402</div>
		</div>
		<div class="xuanxiang">
			<dl class="product-choose">
				<label>选择颜色</label>
				<div class="product-choose-detail">
						<ul>
							<li class="attr1 selected" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
								<div class="sku">
									<a  style="border-color:#ca141d;color:black;" href="javascript:;" title="玄黑">
										<img src="img/${data.beiyong3}" alt="玄黑">
										<p><span>玄黑</span></p>
									</a>
								</div>
							</li>
							<li class="attr1 selected" data-attrname="颜色" data-attrcode="152138" data-attrid="4" data-skuid="10086446456644">
								<div id="skuBox" class="sku">
									<a style="color:black" href="javascript:;" title="瑞红">
										<img src="img/${data.beiyong3}" alt="瑞红">
										<p><span>瑞红</span></p>
									</a>
								</div>
							</li>
						</ul>
				</div>
			</dl>
			<dl class="product-choose">
					<label>选择版本</label>
					<div class="product-choose-detail">
							<ul>
								<li class="qwt" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
									<div class="sku">
										<a href="javascript:;" title="玄黑">
											<p>${data.goodsType}</p>
										</a>
									</div>
								</li>
							</ul>
					</div>
			</dl>
			<dl class="product-choose">
					<label>选择套餐</label>
					<div class="product-choose-detail">
							<ul>
								<li class="gfbp" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
									<div class="sku">
										<a href="javascript:;" title="玄黑">
											<p><span>官方标配</span></p>
										</a>
									</div>
								</li>
							</ul>
					</div>
			</dl>
			<dl class="product-choose">
					<label>保障服务</label>
					<div class="product-choose-detail">
						<ul>
							<li class="btn" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
									<div class="sku">
										<a href="javascript:;" title="玄黑">
											<p><span>延长服务保1年  ￥630.4</span></p>
										</a>
									</div>
								</li>
							<li class="btn" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
								<div class="sku">
									<a href="javascript:;" title="玄黑">
										<p><span>碎片服务保一年  ￥479.2</span></p>
									</a>
								</div>
							</li>								
						</ul>
					</div>
			</dl>
			<dl class="product-choose">
					<label>推&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荐</label>
					<div class="product-choose-detail">
						<ul>
							<li class="tuijian" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
									<div class="sku">
										<a href="javascript:;" title="玄黑">
											<p><span>HUAWEI Mate 20 Pro</span></p>
										</a>
									</div>
								</li>
							<li class="tuijian" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
								<div class="sku">
									<a href="javascript:;" title="玄黑">
										<p><span>HUAWEI Mate 20X</span></p>
									</a>
								</div>
							</li>	
							<li class="tuijian" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
								<div class="sku">
									<a href="javascript:;" title="玄黑">
										<p><span>HUAWEI Mate 20</span></p>
									</a>
								</div>
							</li>									
						</ul>
					</div>
			</dl>
			<dl class="product-choose">
				<label>已选择商品</label>
				<div class="product-choose-detail">
					<ul>
						<li class="yxcp" data-attrname="颜色" data-attrcode="152138" data-attrid="1" data-skuid="10086867345685">
							<div class="sku">
								<a href="javascript:;" title="玄黑">
									<p><span style="color:#ca141d;">${data.goodsType}</span></p>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</dl>	
			<div id="pro-operation" class="product-button clearfix" style="visibility: visible; position: relative;left: -222px; margin-bottom:40px;">
				<a href="shopping.html" onclick="rush.business.clickBtn()" class="product-button02">
					<span style="color:white";>立即申购</span>
				</a>
			</div>					
		</div>	
	</div>	
	<div class="hr-20"></div>		
    `
    $(".product").html(str)
    fdj()
},"json");



//4.放大镜
    // 图片上下滚动
function fdj(){
	var count = $("#imageMenu li").length - 5; /* 显示 6 个 li标签内容 */
	var interval = $("#imageMenu li:first").width();
	var curIndex = 0;

	$('.scrollbutton').click(function(){
		if( $(this).hasClass('disabled') ) return false;
		if ($(this).hasClass('smallImgUp')) --curIndex;
		else ++curIndex;
		$('.scrollbutton').removeClass('disabled');
		if (curIndex == 0) $('.smallImgUp').addClass('disabled');
		if (curIndex == count-1) $('.smallImgDown').addClass('disabled');
		$("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);
	});	
	// 解决 ie6 select框 问题
	$.fn.decorateIframe = function(options) {
        if ($.browser.msie && $.browser.version < 7) {
            var opts = $.extend({}, $.fn.decorateIframe.defaults, options);
            $(this).each(function() {
                var $myThis = $(this);
                //创建一个IFRAME
                var divIframe = $("<iframe />");
                divIframe.attr("id", opts.iframeId);
                divIframe.css("position", "absolute");
                divIframe.css("display", "none");
                divIframe.css("display", "block");
                divIframe.css("z-index", opts.iframeZIndex);
                divIframe.css("border");
                divIframe.css("top", "0");
                divIframe.css("left", "0");

                if (opts.width == 0) {
                    divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");
                }
                if (opts.height == 0) {
                    divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");
                }

                divIframe.css("filter", "mask(color=#fff)");
                $myThis.append(divIframe);
            });
        }
    }
    $.fn.decorateIframe.defaults = {
        iframeId: "decorateIframe1",
        iframeZIndex: -1,
        width: 0,
        height: 0
    }

    //放大镜视窗
    $("#bigView").decorateIframe();
    //点击到中图
    var midChangeHandler = null;

	
    $("#imageMenu li img").bind("click", function(){

		if ($(this).attr("id") != "onlickImg") {
			midChange($(this).attr("src").replace("small", "mid"));
			$("#imageMenu li").removeAttr("id");
			$(this).parent().attr("id", "onlickImg");
		}

	}).bind("mouseover", function(){
		if ($(this).attr("id") != "onlickImg") {
			window.clearTimeout(midChangeHandler);
			midChange($(this).attr("src").replace("small", "mid"));
			$(this).css({ "border": "3px solid #959595" });
		}

	}).bind("mouseout", function(){
		if($(this).attr("id") != "onlickImg"){
			$(this).removeAttr("style");
			midChangeHandler = window.setTimeout(function(){
			midChange($("#onlickImg img").attr("src").replace("small", "mid"));
			}, 1000);
		}
	});

    function midChange(src) {
        $("#midimg").attr("src", src).load(function() {
            changeViewImg();
        });
    }

	//大视窗看图
	// 1.弹入 弹出
	function mouseover(e) {
        if ($("#winSelector").css("display") == "none") {
            $("#winSelector,#bigView").show();
        }
        $("#winSelector").css(fixedPosition(e));
        e.stopPropagation();
    }
    function mouseOut(e) {
        if ($("#winSelector").css("display") != "none") {
            $("#winSelector,#bigView").hide();
        }
        e.stopPropagation();
	}
	

    $("#midimg").mouseover(mouseover); //中图事件
    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件

    var $divWidth = $("#winSelector").width(); //选择器宽度
    var $divHeight = $("#winSelector").height(); //选择器高度
    var $imgWidth = $("#midimg").width(); //中图宽度
    var $imgHeight = $("#midimg").height(); //中图高度
    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度

    function changeViewImg() {
        $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));
    }

    changeViewImg();
    $("#bigView").scrollLeft(0).scrollTop(0);
    function fixedPosition(e) {
        if (e == null) {
            return;
        }
        var $imgLeft = $("#midimg").offset().left; //中图左边距
        var $imgTop = $("#midimg").offset().top; //中图上边距
        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X
        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y
        X = X < 0 ? 0 : X;
        Y = Y < 0 ? 0 : Y;
        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;
        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;

        if ($viewImgWidth == null) {
            $viewImgWidth = $("#bigView img").outerWidth();
            $viewImgHeight = $("#bigView img").height();
            if ($viewImgWidth < 200 || $viewImgHeight < 200) {
                $viewImgWidth = $viewImgHeight = 800;
            }
            $height = $divHeight * $viewImgHeight / $imgHeight;
            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);
            $("#bigView").height($height);
        }
        var scrollX = X * $viewImgWidth / $imgWidth;
        var scrollY = Y * $viewImgHeight / $imgHeight;
		$("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });
		// 放大镜的位置尺寸
        $("#bigView").css({ "top": 185, "left": $(".preview").offset().left + $(".preview").width() + 55 });

        return { left: X, top: Y };
    }
}





})


