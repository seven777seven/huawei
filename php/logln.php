<?php
    header("Content-type:text/html;charset=utf-8");
//1.接受浏览器端的数据
$username=$_POST["username"];
$userpass=$_POST["userpass"];
//2.找数据库（先判断用户名右没有被注册，在保存）
// 链接数据库
$conn=mysql_connect("localhost:3306","root","root");

//选择数据库
mysql_select_db("huawei7",$conn);
//传输数据（执行SQL语句）
$sqlstr="select * from zhucedenglu where zhuceDh='$username' and zhuceMM ='$userpass'";
$result=mysql_query($sqlstr,$conn); //查询语句的返回值是个表格
//关闭数据库
mysql_close($conn);

$rows = mysql_num_rows($result);

     if($rows==1){
		//3、响应
     	// echo "登录成功！";
     	header("Location: ../product.html");
     }else{     	
		//3、响应
     	echo "登录失败，密码或者账号有误";
     }


?>