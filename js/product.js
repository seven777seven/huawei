
$(document).ready(function(){
  $("#liBox").mouseenter(function(){
    $("#zhanwei").slideDown("slow").css("display","block");
  });
  $("#liBox").mouseleave(function(){
    $("#zhanwei").slideDown("slow").css("display","none");
  });
});