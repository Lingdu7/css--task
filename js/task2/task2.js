var number;
var playid=[];
//根据玩家数生成数组+随机分配身份
function wath_num(){
  var mathnum=[];
  var lang=0;
    for(var i=0;i<number;i++){
      if(i!=0&&i%3==0){
       
        playid.push("狼人");
        lang++;
    }
    else{
      playid.push("平民");
    }
  }
  for (var t = 0; t < number; t++) {
    var ran = Math.floor(Math.random() * (number - t));//生成随机数
      mathnum[t]=playid[ran];//往随机数组里边存入随机选中的数
      playid[ran] = playid[number - t - 1];//数组内容替换
    }
  var ping=number-lang;
  document.getElementById("shashou").innerHTML=lang;
  document.getElementById("pingming").innerHTML=ping;
}
//给身份
function identity(){
for(var ii=1;ii<=number;){
  document.getElementById("rnum").innerHTML=ii;
  document.getElementById("button2").innerHTML="查看"+ii+"号身份";
}
}
//判断输入数
function ifplaynum(){
   number=document.getElementById("playnum").value;
  if(number>=4&&number<=18){
    wath_num();
    window.location.href="task2-3.html";
  }
  else{
    document.getElementById("tanchu").style.display="block";
  }
}
//关闭弹窗
function none(){
  document.getElementById("tanchu").style.display="none";
}
　  document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
 
  if(e && e.keyCode==27){ 
    none()
  }
   if(e && e.keyCode==13){ 
    ifplaynum()
  }
}; 