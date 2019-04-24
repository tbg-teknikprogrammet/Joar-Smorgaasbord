var LoginBtn = document.getElementById("login")
var lightBox = document.getElementById("LB")
var wrapper = document.getElementById("found")

LoginBtn.addEventListener("click", function() {
    lightBox.style.visibility = "visible";
    document.body.style.backgroundColor = " rgb(29, 6, 6)";
})
  

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

