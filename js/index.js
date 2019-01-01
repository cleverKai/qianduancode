var tabs = document.getElementById("tabs").getElementsByTagName("li");//获取到里面的id
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick = showlist;//遍历数组 添加绑定事件
}
 
function showlist(){
    for(var i =0 ;i<tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className="active"; 
        }
        else{
            tabs[i].className="";
        }
    }
}