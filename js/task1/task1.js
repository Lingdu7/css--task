var reult = [];//随机数组
var colors = [];//颜色数组
var set;//定时器
var main_div;//盒子
var noclick=true;//防止重复点击
function colorss(value) {//生成随机颜色
   for (var i = 0; i < value; i++) {//生成三种随机色
    var color = "#";
    for (var j = 0; j < 3; j++) {//生成rgb随机色
        var r = Math.floor(Math.random() * 256);
        if (r < 16) {
            color += "0";//一位数就加零
        }
        color += r.toString(16);//转换16进制
        }
    colors[i] = color
 
    if (i > 0) { //颜色查重
       for (var t = 0; t <= i-1; t++) {
          if (colors[i] != colors[t]) {//没有重复就退出
			continue;
          }
          else if(colors[i] == colors[t]) {
                 i--;//有重复就再生成一次
          }
        }
    }
}
}
function num(most,few ) {//生成数组
 var arr = [];
 for (var i = 0; i < most; i++) {
    arr[i] = i;//存入数组
 }
 for (var i = 0; i < few; i++) {
    var ran = Math.floor(Math.random() * (arr.length - i));//生成随机数
    reult[i]=arr[ran];//往随机数组里边存入随机选中的数
    arr[ran] = arr[arr.length - i - 1];//数组内容替换
  }
}
function checked(not,yes){//选择改色
    document.getElementById(not).removeAttribute("style");
    document.getElementById(yes).style.backgroundColor = "orange";
    document.getElementById(yes).style.color = "#fff";
}
function move() {//开始
   if(noclick){
 colorss(3);num("9","3");stop();
 for(var i=0;i<reult.length;i++){
   main_div[reult[i]].style.backgroundColor = colors[i];//循环赋色
  }
set=window.setInterval(function(){noclick=true;move();},500); 
checked("buttom","top");
noclick=false;
}
}
function stop() {//停止
    window.clearInterval(set); 
    main_div = document.getElementById("main").getElementsByTagName("div");
    for (var i = 0; i < main_div.length; i++) {//去色
      main_div[i].removeAttribute("style");
    }
    noclick=true
  checked("top","buttom");
}