<?php
    header("Content-type:text/html;charset=utf-8");
//1.接受浏览器端的数据
$username=$_POST["username"];
$userdx=$_POST["userdx"];
$userpass=$_POST["userpass"];
//2.找数据库（先判断用户名右没有被注册，在保存）
// 链接数据库
$conn=mysql_connect("localhost:3306","root","root");

if(!$conn){
	die("连接失败".mysql_error());
}else{
//选择数据库
mysql_select_db("huawei7",$conn);
//传输数据（执行SQL语句）
$sqlstr="insert into zhucedenglu(zhuceDh,zhuceMM,zhuceDxyzm)
values('$username','$userpass','$userdx')";
mysql_query($sqlstr,$conn);
//关闭数据库
mysql_close($conn);

//3.响应
header("Location: ../denglutiaozhuan.html");
}

?>