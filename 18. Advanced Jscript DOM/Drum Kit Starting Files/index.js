var button_list = document.querySelectorAll(".drum")

for (var i=0; i<button_list.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function (){
       alert("I have been clicked -> button "+ this.innerHTML)
    });
}

// document.querySelector("button").addEventListener("click", 
//     function (){
//        alert("I have been clicked");
//     });


// var sound  = new Audio("./sounds/tom1.mp3")
// sound.play()