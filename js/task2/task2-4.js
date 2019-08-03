$(function(){
var civilian=sessionStorage.getItem("civilian");//平民人数
var killer=sessionStorage.getItem("killer");//杀手人数
var newid=JSON.parse(sessionStorage.getItem('quer'));//身份数组
var shuying=sessionStorage.getItem("que");//杀手人数
var days=sessionStorage.getItem("qu");//杀手人数
$("#killer").text("杀手"+killer+"人")
$("#civilian").text("平民"+civilian+"人")
//判断谁胜利
if(shuying==1){
$(".shengli").text("杀手胜利")
$("#winyu").text("太棒了!你知道么？只有20%的杀手取得游戏最终的胜利哦！")
}
else{
$(".shengli").text("平民胜利")
$("#winyu").text("太棒了!睿智的你们齐心协力打败了杀手！")
}

//打印游戏记录
var u=1;
var o=2;
for(var i=1;i<=days;i++){
  if(i==1){
  $("#jilu").before(" <div class=centent><span>第"+i+"天</span> <p>"+newid[i-1]+"</p></div><hr class=bgc-ddd>")
}
 else{
   if(newid[o]!=undefined){
  $("#jilu").before(" <div class=centent><span>第"+i+"天</span> <p>"+newid[u]+"</p><p>"+newid[o]+"</p></div><hr class=bgc-ddd>")
}
else if(newid[u]!=undefined){
  $("#jilu").before(" <div class=centent><span>第"+i+"天</span> <p>"+newid[u]+"</p></div><hr class=bgc-ddd>")
}
  u+=2;
  o+=2;
 }
 
}
})