var element = document.getElementById("highlight")

// manipulate
element.style.color = "orange"
element.style.border = " 2px solid grey"
element.style.backgroundColor = "#222"
element.style.padding = "5px"
element.style.margin = "5px"


var ele = document.querySelector("h1")
ele.classList.add("some-class")

var tag = document.getElementsByClassName("special")[0]
tag.classList.add("p-style")


var pTag = document.querySelector(".test")
pTag.textContent = "This is an <strong>awesome</strong> paragraph"
pTag.innerHTML = "This is an really <strong>awesome</strong> paragraph"

document.getElementsByTagName("h1")[1].textContent = "THE END"

var link = document.querySelector("a")
link.setAttribute("href", "https://www.hltv.org/")

document.getElementsByTagName("img")[0].setAttribute("src",)