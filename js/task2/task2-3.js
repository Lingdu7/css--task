var newid=JSON.parse(sessionStorage.getItem('queryParam'));
var bb=newid.length;
console.log(bb);

$(function(){
  for(var i=1;i<=bb;i++){
    var qqq=$("#c"+i+" .samllbox1");
    var qq=$("#c"+i+" .samllbox2");
    console.log(qqq);
    console.log(i);
    $(qqq).text(newid[i-1]);
    $(qq).text((i)+"号");
  }
  console.log(bb);
for(bb+=1;bb<19;bb++){
  console.log(bb);
  $("#c"+bb).remove();
}

})
