document.URL
document.links
document.body
document.head


// Takes a string argument, returs one element with matching id
var element = document.getElementById("highlight")

// Takes a string argument, returs a list of arguments class
var elements = document.getElementsByClassName("bolded") // returns a nodelist

var eles = document.getElementsByTagName("li")

// first element it founds
var queryTag = document.querySelector("#highlight")


var queryTagAll = document.querySelectorAll(".bolded")

var pID = document.getElementById("first")
var pClass = document.getElementsByClassName("special")[0]
var pTagName = document.getElementsByTagName("p")[0]
var pQuerySelector = document.querySelector("#first")
var pQuarySelectAll = document.querySelectorAll("#first")[0]