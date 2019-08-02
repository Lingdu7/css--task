$(function(){
var newid=JSON.parse(sessionStorage.getItem('queryParam'));//身份数组
var civilian=sessionStorage.getItem("civilian");//平民人数
var killer=sessionStorage.getItem("killer");//杀手人数
var players=newid.length;//玩家总数
var c=[];//活人名单
var ttt;
var ppp;
 //发放身份
 for(var i=1;i<=players;i++){
  $("#c"+i+" .samllbox1").text(newid[i-1]);
  $("#c"+i+" .samllbox2").text((i)+"号");
  c[i]=0;//编写活人名单
}


//删除空余座位
for(players+=1;players<19;players++){
$("#c"+players).remove();
}

var time=2;//白天黑夜
var days=1;//记录天数
var notes=0;//有序打印杀人数组
var mark=20;//记录上一次点击
var cycle=0;//法官顺序
var record=[];//杀人记录数组
 
//点击杀人
$("#sssr").click(function(){
  if(cycle==0){
  mark=0;
  $("#sssr").css("background-color","#bcccd0")
  $(".aaa").hide();
  $(".bigbox ,footer").show();
  $("#kaishi button").text("杀手杀人")
  $(".maincolor").css("backgroundColor","#5294a4");
  $("#tan1").css("background-color","#69d1e9")
  $(".aaa>p").hide()
  time=0;
  cycle++;
}
else{
  alert("请按照游戏规则流程进行下一步");
}
})
//亡灵发言
$("#tan1").click(function(){
  if(cycle==1){
  alert("亡灵发言")
  $("#tan1").css("background-color","#bcccd0")
  $("#tan2").css("background-color","#69d1e9")
  cycle++;
}
else{
  alert("请按照游戏规则流程进行下一步");
}
})
//众人发言
$("#tan2").click(function(){
  if(cycle==2){
  cycle++;
  alert("众人发言")
  $("#tan2").css("background-color","#bcccd0")
  $("#toup").css("background-color","#69d1e9")
}
else{
  alert("请按照游戏规则流程进行下一步");
}
})
//众人投票
$("#toup").click(function(){
  if(cycle==3){
  time=1;
  mark=0;
  cycle=0;
  $(".aaa").hide();
  $(".bigbox ,footer").show();
  $("#kaishi button").text("众人投票")
  $("#sssr , .maincolor").css("background-color","#69d1e9")
  $(".aaa>p").hide()
}
else{
  alert("请按照游戏规则流程进行下一步");
}
})



$(".bigbox").on("click",".outerBox",function(){
  if(time!=2){
  //获取被杀者id
var opt="#"+$(this).attr("id");
var optSon= opt+" .samllbox1";
//搜索被杀者
for(var i=1;i<=players;i++){
  if(("#c"+i)==opt){
  if(c[i]==0){//查看被杀者存活情况
    //判断是白天还是黑夜
      if(newid[i-1]=="杀手"&&time==0){
      alert("对方是杀手，不能杀同类");
      }
      else{
        if(mark==20){
          mark=i;
        }
        else{
          $("#c"+mark+" .samllbox1").css("background-color","#ffc865");
          mark=i;
        }
      $(optSon).css("background-color","#83b09a")
      }
    }
  
//如果已经被杀了，就别鞭尸了
else{
  alert(i+"号"+newid[i-1]+"已死，别鞭尸了");
}}}}
else{
  alert("游戏还没开始，请点击开始游戏");
}

})
//点击开始按钮
$("#kaishi").click(function(){
  $(".aaa").show();
  $(".bigbox ,footer").hide();
//生成杀人记录
console.log(mark);
console.log(killer);

if(time!=2){
  c[mark]=1;//标记死亡
  if(time==0){
    if(days==1){
      $("#sssr").before("<div id='t"+days+"'>第"+days+"天</div>")
      $("body").append("<script>$('body').delegate('#t"+days+"', 'click', function () {$('#p"+days+"').slideToggle(160)});</script>");
      ttt="#t"+days;
$(ttt).after("<p id='p"+days+"'></p>");
    }

ppp="#p"+days;
record.push("第"+days+"天晚上"+mark+"号被杀手杀死，他的身份是"+newid[mark-1]);
    $(ppp).append("<p >"+record[notes]+"</p>");
    notes++;
  civilian--;
  days++;
  ppp="#p"+days;
  ttt="#t"+days;
  }
  else{
    $("#sssr").before("<div id='t"+days+"'>第"+days+"天</div>")
    record.push("第"+days+"天白天"+mark+"号被投票处死，他的身份是"+newid[mark-1]);
    $("body").append("<script>$('body').delegate('#t"+days+"', 'click', function () {$('#p"+days+"').slideToggle(160)});</script>");
    $(ttt).after("<p id='p"+days+"'></p>");
    $(ppp).append("<p >"+record[notes]+"</p>");
    notes++;
    if(newid[mark-1]=="杀手"){
      killer--;
    }
 else{
  civilian--;
 }
    console.log(killer);
  $("#tan1 ,#tan2 ,#toup").css("background-color","#aee7f5")
  }

  
  if(killer==0){
    alert("平民胜利");
    window.location.href="task2-5.html";
  }
  else if(civilian==0||killer>=civilian ){
    alert("杀手胜利胜利");
    window.location.href="task2-5.html";
  }
}
else{
  $("#tan1 ,#tan2 ,#toup").css("background-color","#aee7f5")
}
})
})