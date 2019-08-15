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
  $("#c"+i+" .samllbox2").text((i)+"号");
  c[i-1]=0;//编写活人名单
}


//删除空余座位
for(players+=1;players<19;players++){
$("#c"+players).remove();
}

var time=2;//白天黑夜
var days=1;//记录天数
var notes=0;//有序打印杀人数组
var mark=20;//记录上一次点击
var marks=21;//记录上一次点击
var cycle=0;//法官顺序
var record=[];//杀人记录数组
 
//点击杀人
$("#sssr").click(function(){
  if(cycle==0){
  mark=0;
  for(var i=1;i<=players;i++){
    if(newid[i-1]=="杀手"){
      $("#c"+i+" .samllbox1").text(newid[i-1]);
      if(c[i-1]==0){
      $("#c"+i+" .samllbox2").css("background-color","#4bc072");
    }
    }
  }
  $("#sssr").css("background-color","#bcccd0")
  $(".aaa ,#end,#rizhi").hide();
  $(".bigbox ,#kaishi,#nvab").show();
  $("#navtext").text("月黑风高杀人夜");
  $("#kaishi button").text("杀手杀人");
  $("#body").css("margin-top","131px");
  $(".maincolor").css("backgroundColor","#5294a4");
  $("#tan1").css("background-color","#69d1e9");
  $(".aaa>p").hide()
  $("#prompt").text("天黑了杀手请睁眼，请杀掉一个玩家")
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
  $(".aaa ,#end,#rizhi").hide();
  $(".bigbox ,#kaishi,#nvab").show();
  $("#navtext").text("日出惊现杀人案");
  $("#kaishi button").text("众人投票")
  $("#sssr , .maincolor").css("background-color","#69d1e9")
  $(".aaa>p").hide()
  $("#body").css("margin-top","131px")
  $("#prompt").text("发言讨论结束，大家请投票")
 
}
else{
  alert("请按照游戏规则流程进行下一步");
}
})



$(".bigbox").on("click",".outerBox",function(){
  if(time<2){
  //获取被杀者id
var opt="#"+$(this).attr("id");
var optSon= opt+" .samllbox1";
//搜索被杀者
for(var i=1;i<=players;i++){
  if(("#c"+i)==opt){
  if(c[i-1]==0){//查看被杀者存活情况
    //判断是白天还是黑夜
      if(newid[i-1]=="杀手"&&time==0){
      alert("本是同根生,相煎何太急");
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
  alert(i+"号"+newid[i-1]+"已死，惊现鞭尸狂");
}}}}
else if(time==3){
  alert("法官日志，不能杀人");
}
else{
  alert("游戏还没开始，请点击开始游戏");
}

})
//点击开始按钮
$("#kaishi").click(function(){
  if((mark==marks&&time<2 )|| mark==0){
    alert("请选择被杀人");
  }
  else{
  for(var i=1;i<=players;i++){
      $("#c"+i+" .samllbox1").text("玩家");
    if(newid[i-1]=="杀手"){
      $("#c"+i+" .samllbox2").css("background-color","#83B09E");
    }
  }
  marks==mark;
  $(".aaa ,#end,#rizhi").show();
  $(".bigbox ,#kaishi,#nvab").hide();
  $("#navtext").text("法官日志");
  $("body").css("margin-top","50px")
//生成杀人记录
console.log(mark);
console.log(time);
if(time<2){
  c[mark-1]=1;//标记死亡
  for(var i=1;i<=players;i++){
    if(c[i-1]==1){
      $("#c"+i+" .samllbox1").text(newid[i-1]);
    }
  }
  if(time==0){
    if(days==1){
      $("body").append("<script>$('#t"+days+"').click(function () {$('#p"+days+"').slideToggle(160)});</script>");
      $("#sssr").before("<div id='t"+days+"'>第"+days+"天</div>")
      ttt="#t"+days;
$(ttt).after("<p id='p"+days+"'></p>");
    }

ppp="#p"+days;
record.push("晚上："+mark+"号被杀手杀死，他的身份是"+newid[mark-1]);
    $(ppp).append("<p >"+record[notes]+"</p>");
    notes++;
  civilian--;
  days++;
  ppp="#p"+days;
  ttt="#t"+days;
  }
  else{
    $("body").append("<script>$('#t"+days+"').click(function () {$('#p"+days+"').slideToggle(160)});</script>");
    $("#sssr").before("<div id='t"+days+"'>第"+days+"天</div>")
    record.push("白天："+mark+"号被投票处死，他的身份是"+newid[mark-1]);
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
    alert("平民胜利！");
    window.location.href="task2-5.html";
    var shuying=0;
    sessionStorage.setItem("qu",days);
  sessionStorage.setItem("que",shuying);
    sessionStorage.setItem('quer',JSON.stringify(record));
  }
  else if(civilian==0||killer>=civilian ){
    alert("杀手胜利！");
    var shuying=1;
    sessionStorage.setItem("que",shuying);
     sessionStorage.setItem("qu",days);
    sessionStorage.setItem('quer',JSON.stringify(record));
    window.location.href="task2-5.html";
  }
}
else if(time==3){
  $(".aaa ,#end,#rizhi").show();
$(".bigbox ,#kaishi,#nvab").hide();
}
else{
  
  $("#tan1 ,#tan2 ,#toup").css("background-color","#aee7f5")
}
}
})
$("#end,#guanbi").click(function(){
  var x=confirm("是否退出本局游戏")
  if(x==true){
    window.location.href="task2-1.html"; 
  }
})
$("#rizhi").click(function(){
  for(var i=1;i<=players;i++){
      $("#c"+i+" .samllbox1").text(newid[i-1]);
  }
  $(".aaa,#rizhi,#end").hide();
  $(".bigbox ,#kaishi").show();
  $("#navtext").text("法官日志");
  $("#kaishi button").text("返回游戏")
  $(".aaa>p").hide()
  $("body").css("margin-top","46px")
  $(".maincolor").css({"background-color":"#69d1e9","min-height":"calc(100vh - 168px)"});
  time=3;
})
})
