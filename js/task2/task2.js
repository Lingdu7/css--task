var number;
var numbe;
var playid=[];
//根据玩家数生成身份数组
function playersId(){
var killer=0;
playid.length=0;
for(var i=0;i<number;i++){
    if(i==0||(i!=0&&i%5==0)){
    playid.push("杀手");
    killer++;
    }
    else{
      playid.push("平民");
    }
  }
  var civilian=number-killer;
  document.getElementById("killer").innerHTML=killer;
  document.getElementById("civilian").innerHTML=civilian;
  sessionStorage.setItem("civilian",civilian);
  sessionStorage.setItem("killer",killer);
}
//判断输入数
function ifplaynum(){
  if(number>=4&&number<=18){
    playersId();
  }
  else{
    document.getElementById("killer").innerHTML="&ensp;";
    document.getElementById("civilian").innerHTML="&ensp;";
    window.setTimeout(function(){ifAlert()},1000);}
  }
  //判断弹窗
  function ifAlert(){
    if(number!=0&&!(number>=4&&number<=18)){
      document.getElementById("tanchu").style.display="block";
    }
  }
  //输入滑动数互通
function playersNumber(){
  number=document.getElementById("playersNum").value;
 numbe=document.getElementById("playersRange").value;
}  
//输入数
function clickNum(){
  playersNumber()
  document.getElementById("playersRange").value=number;
  ifplaynum()
} 
//滑动数
function clickRange(){
  playersNumber()
  document.getElementById("playersNum").value=null;
  number=numbe;
  document.getElementById("playersNum").value=number;
  ifplaynum()
  
}
  function less(){
    playersNumber()
  if(numbe>4&&numbe<19){
    numbe-=1;
    document.getElementById("playersNum").value=null;
    number=numbe;
    document.getElementById("playersRange").value=number;
    document.getElementById("playersNum").value=number;
    ifplaynum()
  
  }
  }
  function plus(){
    playersNumber()
  if(numbe>3&&numbe<18){
    numbe=(numbe-0+1);
    document.getElementById("playersNum").value=null;
    number=numbe;
    document.getElementById("playersRange").value=number;
    document.getElementById("playersNum").value=number;
    ifplaynum()
  }
  }
  
//跳转
function ifClick(){
  if(number>=4&&number<=18){
    randomId()
    window.location.href="task2-3.html";
  }
  else{
    document.getElementById("tanchu").style.display="block";
  }
}
//关闭弹窗
function alertNone(){
  document.getElementById("tanchu").style.display="none";
}
//键盘事件
　document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
 
  if(e && e.keyCode==27){ 
    alertNone()
  }
   if(e && e.keyCode==13){ 
     ifClick()
  }
}; 
//打乱身份
function randomId(){
var randomid=[];
  for (var t = 0; t < number; t++) {
    var ran = Math.floor(Math.random() * (number - t));//生成随机数
      randomid[t]=playid[ran];//往随机数组里边存入随机选中的数
      playid[ran] = playid[number - t - 1];//数组内容替换
    }
    var qqq=[];
   
    sessionStorage.setItem('queryParam',JSON.stringify(randomid));
       
  }