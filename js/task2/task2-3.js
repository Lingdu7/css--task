var newid=JSON.parse(sessionStorage.getItem('queryParam'));
var players=newid.length;
$(function(){
  for(var i=1;i<=players;i++){
    $("#c"+i+" .samllbox1").text(newid[i-1]);
    $("#c"+i+" .samllbox2").text((i)+"号");
  }
for(players+=1;players<19;players++){
  $("#c"+players).remove();
}
})
