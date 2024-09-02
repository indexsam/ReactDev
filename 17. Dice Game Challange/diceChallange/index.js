
var dice = [

    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]


var indexval1 = Math.floor(Math.random() *6) 

document.querySelector(".img1").setAttribute("src", dice[indexval1])

var indexval2 = Math.floor(Math.random()* 6) 

document.querySelector(".img2").setAttribute("src", dice[indexval2])

if (indexval1> indexval2){

    document.querySelector("h1").innerHTML="🚩 Player 1 wins"
}
else if (indexval1 < indexval2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩"
}
else{
    document.querySelector("h1").innerHTML=" It's a tie !! 😁 "
}