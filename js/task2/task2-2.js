//  任务3  给身份
$(function(){
  $("#tiao").click(function(){
    window.location.href="task2-4.html";
   });
})
var onclicknum=1;
var noPlayer=1;
var newid=JSON.parse(sessionStorage.getItem('queryParam'));
function identity(){
  if(noPlayer<=(newid.length)){
  onclicknum++;
    if(onclicknum%2==0){
      onclicknum=0;
      $("#rnum").text(noPlayer);
      $("#fanpai,#wow").toggle();
      $("#wow p").text(newid[noPlayer-1]);
          if(noPlayer==(newid.length)){
            $("#button2").text("法官查看");
            noPlayer++;
          }
          else{
            noPlayer++;
            $("#button2").text("隐藏身份并传递给"+noPlayer+"号");
          }
      }
      else{
      $("#fanpai,#wow").toggle();
      $("#rnum").text(noPlayer);
      $("#button2").text("查看"+noPlayer+"号身份");
     }
  }
  else{
   window.location.href="task2-4.html";
  }
}
