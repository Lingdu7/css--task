var newid=JSON.parse(sessionStorage.getItem('queryParam'));
var players=newid.length;
var bc=3;
var ts=1;
var tt=0;
var ttt=0;
var jilu=[];
var c=[];//活人名单
var civilian=sessionStorage.getItem("civilian");
var killer=sessionStorage.getItem("killer");
$(function(){
  
    $("#kaishi button").text("开始游戏")

  //发放身份
  for(var i=1;i<=players;i++){
    $("#c"+i+" .samllbox1").text(newid[i-1]);
    $("#c"+i+" .samllbox2").text((i)+"号");
    c[i]=0;//编写活人名单
  }
  //删除多余座位
for(players+=1;players<19;players++){
  $("#c"+players).remove();
}
//点击杀人
$("#sssr").click(function(){
  ttt=0;
  $("#kaishi button").text("杀人")
  $("#sssr").css("background-color","#83b09a")
  $(".maincolor").css("backgroundColor","#5294a4");
$(".aaa").hide();
$(".bigbox ,footer").show();
bc=0;
})
$("#toup").click(function(){
  $(".aaa").hide();
  bc=1;
  ttt=0;
  $("#kaishi button").text("投死")
$(".maincolor").css("backgroundColor","#69d1e9");
  $(".bigbox ,footer").show();
  $("#tan1 ,#tan2 ,#sssr").css("background-color","#69d1e9")
})
$(".bigbox").on("click",".outerBox",function(){
  //获取被杀者id
var bb= "#"+$(this).attr("id")+" .samllbox1"
var bbb="#"+$(this).attr("id");
//搜索被杀者
if(ttt==0){
for(var i=1;i<=players;i++){
  if(("#c"+i)==bbb){
    //开枪
    
  if(c[i]==0){
    if(bc==1){
      //判断被杀者身份 并 减去被杀者所在的阵营存活人数
    if(newid[i-1]=="杀手"){
      killer--;
      }
      else{
        civilian--;
      }
      ttt=1;
    $(bb).css("background-color","#83b09a")
    c[i]=1;//标记死亡
    jilu.push("第"+ts+"天白天"+i+"号被投票处死，他的身份是"+newid[i-1]);
  }
  if(bc==0){
    if(newid[i-1]=="杀手"){
      alert("对方是杀手，不能杀同类");
      }
      
      else{
      civilian--;
      ttt=1;
      $(bb).css("background-color","#83b09a")
      c[i]=1;//标记死亡
        jilu.push("第"+ts+"天晚上"+i+"号被杀手杀死，他的身份是"+newid[i-1]);
ts++;
      }
  }
    //判断游戏结果
    if(killer==0){
      alert("平民胜利");
      window.location.href="task2-5.html";
    }
    else if(civilian==0||killer>=civilian ){
      alert("杀手胜利胜利");
      window.location.href="task2-5.html";
    }
  }
//如果已经被杀了，就别鞭尸了
else{
  alert(i+"号"+newid[i-1]+"已死，别鞭尸了");
}}}}})
$("#tan1").click(function(){
  alert("说话")
  $("#tan1").css("background-color","#83b09a")
})
$("#tan2").click(function(){
  alert("说话")
  $("#tan2").css("background-color","#83b09a")
})
$("#kaishi").click(function(){
$(".aaa").show();
$(".bigbox ,footer").hide();
if(tt==0){
  $(".maincolor").css("backgroundColor","#5294a4");
}
if(jilu[0]!=undefined){
  $("#sssr").after("<p style=text-align:center;width=100%;>"+jilu[tt]+"</p>");
tt++;
}
})
})
