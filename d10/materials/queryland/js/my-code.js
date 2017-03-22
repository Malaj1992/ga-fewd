console.log("Hellooo");

//var originalText = $("p.cool").text();
//  var additionalText =" And I added some stuff";


 //var clickCount =0;

//$("button").on("click", function() {

 //clickCount =clickCount + 1;
 //console.log(clickCount);
 //if (clickCount ===2) {
	//console.log("I WAS CLICKED!");
	//var originalText = $("p.cool").text();
 //$("p.cool").text("Button was clicked for the second time");
//}

//});

// Write code such that user
//enters  text in the input
//and presses the button
//then, that text appears As the H1 text?
$("button").on("click", function() {
var stuffTheUserTyped = $("input").val();
console.log(stuffTheUserTyped);
	$("h1").text(stuffTheUserTyped);

});

//var customerName = prompt("Please enter your name", "<name goes here>");

//if (customerName!= null) {

//    document.getElementById("welcome").innerHTML =

//    "Hello " + customerName + "! How are you today?";

//}