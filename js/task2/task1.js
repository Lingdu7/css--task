function ifplaynum(){
  var number=document.getElementById("playnum").value;
  if(number>5&&number<18){
    alert("人数正确，等待下一步")
  }
  else{
    confirm("人数错误，请重新输入")
  }
}