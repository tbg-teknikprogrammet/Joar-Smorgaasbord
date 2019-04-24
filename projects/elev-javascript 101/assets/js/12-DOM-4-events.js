
var btn = document.querySelector("button")
btn.addEventListener("click", function(){
    document.querySelector("p").innerHTML = "Yay! I've been clicked! :)"
});

var liAll = document.querySelectorAll("li");
for(var i = 0; i < LiAll.length; i++) {
    liAll[i].addEventListener("click", function(){
        this.style.textDecoration = "line-through";
    });
}

var btnToggle = document.querySelector("#btnToggleBg")
var isPurple = false;
btnToggle.addEventListener("click", function(){
    document.getElementsByTagName("body")[0].classList.toggle("toggleBg")
})


