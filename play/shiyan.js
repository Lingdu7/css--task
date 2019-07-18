function aaa(){
var aa=["喊喊","肉肉","傻子","刺激"];
var bb=["厉害","无敌","宅","追剧"]
var a=Math.floor(Math.random()*(3))
var b=Math.floor(Math.random()*(3))
document.getElementById("pp").innerHTML="黄<strong style='color:orange'>"+aa[a]+"</strong>"+"你真<strong style='color:red'>"+bb[b]+"</strong>";
var set=setTimeout("aaa()",270);
}