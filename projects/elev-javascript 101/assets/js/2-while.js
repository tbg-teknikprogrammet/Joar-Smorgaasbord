var text =""
var i = 0

while(i < 20) {
    text += "Nummret är: " + i + "<br>";
    i++;
}

//skriv ut talen -19 > 19
var i = -19;

while(i < 20) {
    text += i + "<br>";
    i++;

}

// skriv ut alla jämna tal mellan 10 > 40
var i = 10;

while(i < 41) {
    text += i + "<br>";
    i += 2;
}

// skriv ut alla udda tal mellan 300 > 333
var i = 301;

while(i < 334) {
    if(i%2 !== 0) {
        text += i + "<br>";
    
    }
i++;
}

// skriv ut alla tal som är delbara med 3 och 5 mellan 5 och 50

var i = 5;

while(i < 50) {
    if(i%3 == 0 && i%5 == 0) {
        text += i + "<br>";
    }
i++;
}

document.getElementById("output").innerHTML = text;