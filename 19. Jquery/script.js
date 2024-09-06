// $("h1").css("color","red");  affects all h1

$(document).ready(function(){

    $("h1").css("color","red");

});


$("h1").click(function (){

    $("h1").css("color", "green");
});

$("h1").addClass("big-fonts")

/*
----------------------
# Basic manipulation
-----------------------
().css(param, param2) ==> set
().css(param) ==> get

document.querySelector().Classlist.add(css_param)
().addClass(css_param)
document.querySelector().Classlist.remove(css_param)
().removeClass(css_param)

multiple class addition
().addClass("css_param css_param2")

().hasClass(css_param) => returns boolean
------------------------
# manipulating Text
-----------------------
().text("this is text")
().html("this is text")
document.querySelector().innerHTML= "this is the text";


------------------------
# manipulating Attributes
-----------------------
document.querySelector("img").getAttribute("src");
$("img").attr("scr")


document.querySelector("a").setAttribute("https://");
$("a").attr("href", "https://") => (double params =set)

on console
$("h1").attr("class"); ==> returns all the class attributes of h1

------------------------
# Adding Eventlisteners
-----------------------

$("h1").click(function (){

    $("h1").css("color", "purple");
});

document.querySelector("h1").addEventListener("click",
function (){

    document.querySelector("h1").style.color="purple";
});


**************************
for (var i=0; i<3; i++){
document.querySelector("button").addEventListener("click",
function (){

    document.querySelector("h1")[i].style.color="green";
});
}

$("button").click(function() {
 
 $("h1").css("color", "green");

});

**************************
$(document).keypress(function(event) {

 console.log(event.key)
});

$("input").keypress(function(event) {

 console.log(event.key)
});

$("h1").on("mouseover",function(event) {

 $("h1").css("color", "green");
});
****************************

----------------------------
# Adding & removing elements
----------------------------

$("h1").before("<button>click me </button>");
$("h1").after("<button>click me </button>");
$("h1").prepend("<button>click me </button>");
$("h1").append"<button>click me </button>");

$("button").remove(); removes all buttons

----------------------------
# Web site animations
----------------------------

$("h1").on("click",function(event) {

 $("h1").hide();
 $("h1").show();
 $("h1").toggle();

});


$("h1").on("click",function(event) {

 $("h1").fadeOut();
 $("h1").fadeIn();
 $("h1").fadeToggle();

});

$("h1").on("click",function(event) {

 $("h1").slideUp();
 $("h1").slideDown();
 $("h1").slideToggle();

});

$("h1").on("click",function(event) {

 $("h1").animate({opacity:0.5})
 $("h1").animate({margin:"20%"})
});

Chainning

$("h1").on("click",function(event) {

    $("h1").slideUp().slideDown().animate({opacity:0.5})
});

*/


