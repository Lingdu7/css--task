$(function(){
  $("input").hover(function(){
    $(this).parent().css({"border-color":"#03a9f4",});
    $(this).siblings(".icon").css({"border-color":"#03a9f4",});
  },function(){
  $(this).parent().css({"border-color":"#d6d6d6"});
  $(this).siblings(".icon").css({"border-color":"#dbdbdb"});
});
$("#form").submit(function(e){
  $(".aa , p").remove();
     e.preventDefault();
     var name=$("#name").val();
     var id=$("#id").val();
       var xhr=new XMLHttpRequest();
       xhr.open("GET","https://api.github.com/users",true);
       xhr.onload=function(){
           var urse=JSON.parse(this.responseText);
           var us="";
           for(var i=0;i<urse.length;i++){
             if(urse[i].id==id||urse[i].login==name){
               us+=`
               <div class="aa">
               <img src=${urse[i].avatar_url} width="77" height="77">
               <ul>
               <li>ID:${urse[i].id}</li>
               <li>login:${urse[i].login}</li>
               </ul>
               </div>
           `;
           $(".body").append(us) ;
         }
         }
       if(us==""){
         
             $("#din").append("<p style='color:red;'>No matching id or login name user</p>") ; 
         
       }
       }
       xhr.send();
   })
})