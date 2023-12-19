var ele = document.getElementById("content");
console.log(ele);
ele.addEventListener("click",timeout);
var n = 3;
function timeout()
{
    if(n==0)
    {
        celebration();
        return null;
    }
    ele.style.fontSize = "9rem";
    ele.innerText = n--;
    setTimeout(function(){
        timeout();
    },1000);
}   
function celebration(){
    var disp = document.querySelector(".disp");
    disp.style = " border-radius: 0; width: 800px";
    ele.innerText = "Happy Independance Day";
    var box = document.querySelector(".box");
    box.style = "background-image: linear-gradient(orange,white,green)";
    ele.style.fontSize = "5rem";
}   