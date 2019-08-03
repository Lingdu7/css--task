//  任务3  给身份
$(function(){
  $("#tiao").click(function(){
    window.location.href="task2-4.html";
    
   });
   $("#guanbi").click(function(){
    var x=confirm("是否退出本局游戏")
    if(x==true){
      window.location.href="task2-1.html"; 
    }
  })
})
var clicknumber=1;
var NoPlayer=1;
var newid=JSON.parse(sessionStorage.getItem('queryParam'));
function identity(){
  if(NoPlayer<=(newid.length)){
    clicknumber++;
    if(clicknumber%2==0){
      $("#fanpai,#wow").toggle();
      $("#wow p").text(newid[NoPlayer-1]);
      NoPlayer++;
          if((NoPlayer-1)==(newid.length)){
            $("#button2").text("法官查看");
          }
          else{
            $("#button2").text("隐藏身份并传递给"+NoPlayer+"号");
          }
    }
    else{
      $("#fanpai,#wow").toggle();
      $("#rnum").text(NoPlayer);
      $("#button2").text("查看"+NoPlayer+"号身份");
    }
  }
  else{
   window.location.href="task2-4.html";
  }
}
