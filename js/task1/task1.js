var reult = [];//新建数组
var colors = [];
function colorss() {//生成随机颜色
   for (var i = 0; i < 3; i++) {//生成三种随机色
    var color = "#";
    for (var j = 0; j < 3; j++) {//生成rgb随机色
        var r = Math.floor(Math.random() * 256);
        if (r < 16) {
            color += "0";//一位数就加零
        }
        color += r.toString(16);//转换16进制
        }
    colors[i] = color.toString(16); //转换16进制存入颜色数组
 }
    if (i > 0) { //颜色查重
       for (var t = 0; t < colors.length; t++) {
          if (colors[i] != colors[t]) {//没有重复就退出
             break;
          }
          else {
                 i--;//有重复就再生成一次
          }
        }
    }
}
function num() {
 var arr = [];//生成数组
 for (var i = 0; i <= 8; i++) {
    arr[i] = i;//存入数组
 }
 for (var i = 0; i < 3; i++) {
    var ran = Math.floor(Math.random() * (arr.length - i));//生成随机数
    reult[i]=arr[ran];//往随机数组里边存入随机选中的数
    arr[ran] = arr[arr.length - i - 1];//数组内容替换
  }
}
function move() {
 colorss();num();stop();//调用函数
 var y = document.getElementById("main").getElementsByTagName("div");//DOM操作选中标签
  for(var i=0;i<reult.length;i++){
    y[reult[i]].style.backgroundColor = colors[i];//循环赋色
  }
 var set=window.setInterval("move()",500); 
 document.getElementById("top").style.backgroundColor = "orange";//按钮改色
 document.getElementById("top").style.color = "#fff"
 document.getElementById("buttom").removeAttribute("style");

}
function stop() {
    var y = document.getElementById("main").getElementsByTagName("div");
    for (var i = 0; i < y.length; i++) {//去色
       y[i].removeAttribute("style");
    }
    var clear=window.clearInterval("set"); 
    document.getElementById("top").removeAttribute("style");//按钮改色
    document.getElementById("buttom").style.backgroundColor = "orange"
    document.getElementById("buttom").style.color = "#fff"
}