// //orten grabben sjunger själv
// console.log("blink")
// console.log("blink")
// console.log("hur walla")
// console.log("syn")
// console.log("kebab äter jag i bil")

// //polisen kommer in
// console.log("blink")
// console.log("blink")
// console.log("hur walla")
// console.log("syn")
// console.log("kebab äter jag i bil")

// function twinkleWalla() {
//     console.log("blink")
//     console.log("blink")
//     console.log("hur walla")
//     console.log("syn")
//     console.log("kebab äter jag i bil")
// }

// twinkleWalla();

// // deklarera
// function hello(){
//     console.log("hello")
// }

// // anropa och kör 
// hello();

// // visar innehållet i funktionen
// hello;



// document.write("write a number");
// var userInput = Number(prompt("Gissa ett nummer mellan 1-10 o_o"));
// document.write(square(userInput));
// // parameter och argument
// function square(number);
// {
//     var numberSquare = number * number;
//     return numberSquare;
// }


// function area(length, heaight){
//     console.log("area of: " + leangth + "and" + height + "is")
// }

// function greet(person1, person2, person3, person4) {
//     console.log("Hej, " + person1 + "!");
//     console.log("Hej, " + person2 + "!");
//     console.log("Hej, " + person3 + "!");
//     console.log("Hej, " + person4 + "!");
// }

// greet("Elliott", "meron", "Patrick", "Lilja2k");

// function square(x) {
//     return x * x;
// }

// console.log("4 squared is: " + square(4))

function isEven(x) {
    if(x%2 == 0){
        return true
    }
    else{
        return false
    }

}
console.log(isEven(48));

function kebabToSnake(heh) {
    var string = heh.replace(/-/g,"_");
    return string;
}

function sing() {
    console.log("kebab är gott!")
    console.log("minsveparn")
}
// setInterval(sing, 2500);

// var anon = setInterval(function() {
//     console.log("JAG E ANONYM MINSVEPARMÄSTARE")
// }, 2500);

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function(){
    clearInterval(myTime);
})

document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000)
});