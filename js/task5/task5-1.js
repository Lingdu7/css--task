
 $(function(){
$("#form").submit(function(e){
  $("#tips").text("")
  e.preventDefault();
  var username=$("#username").val();
  var password=$("#password").val();
  if(username!=""&&password!="" ){
  
   var xa;
 if(window.XMLHttpRequest){
   xa=new XMLHttpRequest();
 }
 else{
   xa= new ActiveXObject("Microsoft.XMLHTTP");
 }
 xa.onload=function(){
   var x=JSON.parse(this.responseText);
   console.log(x.message);
   
   if(x.message=="success"){
    window.location.href="http://dev.admin.carrots.ptteng.com/";
   }
   else{
     $("#tips").text(x.message)
   }
 }
 xa.open("POST","/carrots-admin-ajax/a/login",true);
 xa.setRequestHeader("content-type", "application/x-www-form-urlencoded");
 xa.send("name="+username+"&pwd="+password);
 /* 
 $.post("/carrots-admin-ajax/a/login",{
    name:username,
    pwd:password,
   },
   function(xx)
   {
     var x=JSON.parse(xx);
     console.log(x.message);
       if (x.message=="success"){
        window.location.href="http://dev.admin.carrots.ptteng.com/";
       }
       else{
        $("#tips").text(x.message)
       
     }
   })*/ 
  }
  else{
    if(username==""){
    $("#tips").text("请输入账号")
    }
    else{
    $("#tips").text("请输入密码")
    }
  }
   })
})
 