function eee(){
   var colors=[];
  
   for(i=0;i<3;i++){
       var r=Math.floor(Math.random()*256);
       var g=Math.floor(Math.random()*256);
       var b=Math.floor(Math.random()*256);
       var ccc="rgb("+r+","+g+","+b+")";
       colors[i]=ccc;
   }
   reult=[];
   reult[0]=Math.floor(Math.random()* 10);
   reult[1]=Math.floor(Math.random() * 10);
   reult[2]=Math.floor(Math.random() * 10);
   console.log("a"+ reult[0]);
    console.log("b"+ reult[1]);
    console.log("c"+ reult[2]);
if( reult[0]== reult[1]|| reult[0]== reult[2]|| reult[1]== reult[2]){
   for(i=0; i<1; i++){
 reult[0]=Math.floor(Math.random()* 10);
    reult[1]=Math.floor(Math.random() * 10);
    reult[2]=Math.floor(Math.random() * 10);
    console.log("aa"+ reult[0]);
    console.log("bb"+ reult[1]);
    console.log("cc"+ reult[2]);
   if( reult[0]== reult[1]|| reult[0]== reult[2]|| reult[1]== reult[2]){
      i--; 
   }
   else{
    break;
   }
}
}

    x=document.getElementById("main");
    y=x.getElementsByTagName("div"); 
   
   y[reult[0]].style.backgroundColor=colors[0];
   y[reult[1]].style.backgroundColor=colors[1];
   y[reult[2]].style.backgroundColor=colors[2];
   
   setTimeout("stop(),eee()",100); 
   
   }
   
   function stop()
   {
       y[reult[0]].removeAttribute("style");
       y[reult[1]].removeAttribute("style");
       y[reult[2]].removeAttribute("style");
   }