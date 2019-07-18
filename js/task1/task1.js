var reult = [0];
function eee() {
    //生成随机颜色
    var colors = [];
    for (var i = 0; i < 3; i++) {
        var color = "#"
        for (var j = 0; j < 3; j++) {
            var r = Math.floor(Math.random() * 256);
            if (r < 16) {
                color += "0";
                color += r.toString(16);
            }
            else {
                color += r.toString(16);
            }
        }
        console.log(color)
        colors[i] = color;
                   //查重
                   if (i > 0) {
                    for (var t = 0; t < colors.length; t++) {
                        console.log(t)
                        if (colors[i] != colors[t]) {
                            break;
                        }
                        else {
                            i--;
                        }
                    }
                }
    }
    //生成数组
    var arr = [];
    for (var i = 0; i <= 8; i++) {
        arr[i] = i;
    }
    //随机选择数
    reult = [];
    for (var i = 0; i < 3; i++) {
        var ran = Math.floor(Math.random() * (arr.length - i));
        reult.push(arr[ran]);
        arr[ran] = arr[arr.length - i - 1];
    }
    x = document.getElementById("main");
    y = x.getElementsByTagName("div");
    y[reult[0]].style.backgroundColor = colors[0];
    y[reult[1]].style.backgroundColor = colors[1];
    y[reult[2]].style.backgroundColor = colors[2];
    set = setTimeout("stop(),eee()", 666);
    document.getElementById("top").style.backgroundColor="orange"
    document.getElementById("top").style.color="#fff"
    document.getElementById("buttom").removeAttribute("style");
}

function stop() {
    clearInterval(set);
    y[reult[0]].removeAttribute("style");
    y[reult[1]].removeAttribute("style");
    y[reult[2]].removeAttribute("style");
    document.getElementById("top").removeAttribute("style");
    document.getElementById("buttom").style.backgroundColor="orange"
    document.getElementById("buttom").style.color="#fff"
}