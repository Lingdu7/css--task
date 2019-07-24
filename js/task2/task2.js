function ifplaynum(){
  var number=document.getElementById("playnum").value;
  var lang=0;
  if(number>=4&&number<=18){
      var mathnum=[];
      var playid=[];
      var ttt=""
        for(var i=0;i<number;i++){
          if(i%4==0){
            playid.push("狼人")
            lang++;
        }
        else{
          playid.push("平民")
        }
      }
      for (var t = 0; t < number; t++) {
        var ran = Math.floor(Math.random() * (number - t));//生成随机数
          mathnum[t]=playid[ran];//往随机数组里边存入随机选中的数
          playid[ran] = playid[number - t - 1];//数组内容替换
          if(t%3==0){
            if(t>0){
            ttt+="<br>";}
        }
          ttt+=" 第"+(t+1)+"位"+mathnum[t]+"&emsp;&emsp;";
        }
      var ping=number-lang;
      document.getElementById("shashou").innerHTML=lang;
      document.getElementById("pingming").innerHTML=ping;
      document.getElementById("quanbu").innerHTML=ttt;

  }
  else{
    confirm("人数错误，请重新输入")
  }
}
