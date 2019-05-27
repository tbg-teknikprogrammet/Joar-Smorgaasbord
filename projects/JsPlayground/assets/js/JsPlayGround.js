// box 1 Lightbox
var LoginBtn = document.getElementById("login")
var lightBox = document.getElementById("LB")
var wrapper = document.getElementById("found")

LoginBtn.addEventListener("click", function() {
    lightBox.style.visibility = "visible";
    document.body.style.backgroundColor = " rgb(29, 26, 26)";
})

var exitLightBox = document.getElementById("EX")
exitLightBox.addEventListener("click", function(){
    lightBox.style.visibility = "hidden";
    document.body.style.backgroundColor = " rgb(150, 31, 31)";
})
  
//box 2 Scorekeeper
var p1Score = 0
var p2Score = 0
var winningScore = 0

var p1Display = document.getElementById("p1Score")
var p2Display = document.querySelector("#p2Score")
var playingTo = document.getElementById("playingTo")
var inputNumber = document.getElementsByTagName("input")[0]
var p1Btn = document.getElementById("p1")
var p2Btn = document.getElementById("p2")
var resetBtn = document.getElementById("rs")
var winnerText = document.getElementById("Winner")



inputNumber.addEventListener("input", function() {
    playingTo.innerHTML = this.value
    winningScore = playingTo.innerHTML
})

p1Btn.addEventListener("click", function() {
    if(winningScore - 1 > p1Score)  {
    p1Score++;
    p1Display.innerHTML = p1Score
    }
    else {
        p1Score++;
        p1Display.innerHTML = p1Score
        p1Btn.setAttribute('disabled', true)
        p2Btn.setAttribute('disabled', true)
        winnerText.innerHTML = "Player 1 Won!!! Gz"
        p1Display.style.color = "green"
    }

})

p2Btn.addEventListener("click", function() {
    if(winningScore - 1 > p2Score) {
    p2Score++;
    p2Display.innerHTML = p2Score
    }
    else {
        p2Score++;
        p2Display.innerHTML = p2Score
        p2Btn.setAttribute('disabled', true)
        p1Btn.setAttribute('disabled', true)
        winnerText.innerHTML = "Player 2 Won!!! Gz"
        p2Display.style.color = "green"
    }
})

resetBtn.addEventListener("click", function() {
    p1Score = 0
    p1Display.innerHTML = p1Score
    p2Score = 0
    p2Display.innerHTML = p2Score

    winnerText.innerHTML = ""

    p1Btn.removeAttribute('disabled')
    p2Btn.removeAttribute('disabled')
    p2Display.style.color = "black"
    p1Display.style.color = "black"
    })

    //box 4 Timer
    var h1 = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            }
        }
    
            h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

        timer();
    }
    function timer() {
        t = setTimeout(add, 1000);
    }

    start.onclick = timer;
    stop.onclick = function() {
        clearTimeout(t);
    }
    clear.onclick = function() {
        h1.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
    }


//box 5 darkmode

var dmSwitch = document.getElementsByClassName("btndm")[0];
var nightmode = false;
var dmText = document.getElementById("dmText");

dmSwitch.addEventListener("click", function(){
    if(nightmode===false){
        document.body.style.backgroundColor = "rgb(29, 27, 23)";
        nightmode = true;
        dmText.innerHTML = "Darkmode Enabled";
    }
    else{
        nightmode = false;
        document.body.style.backgroundColor = "rgb(150, 31, 31)";
        dmText.innerHTML = "";

    }
});

//box 3 smiley
var img = document.getElementById("smile");
var test = 0;
var punch = document.getElementById("Punch").addEventListener("click", function(){
    img.src = "assets/img/sadSmile.png";
})

var forgive = document.getElementById("Apolo").addEventListener("click", function(){
    img.src = "assets/img/Happy.jpg";
})

//

var inputText = document.getElementById("bloggPost");
var input = document.getElementById("blogg");
input.addEventListener("input", function() {
    
    inputText.innerHTML = this.value;
    test = 1;

})




