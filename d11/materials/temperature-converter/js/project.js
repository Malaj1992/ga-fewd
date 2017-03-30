// var $f = document.getElementById("f");
// var $c = document.getElementById("c");

// function FC_CF() {

//   var temp;  // Will hold the temperature value
//   var $targ; // Used to target the element we're not typing into:

//   if (this.id === "c") { // If we're typing into #c...
//     $targ = $f;          // use #f as target element
//     temp = (this.value * 9 / 5) + 32;  // C2F
//   } else {
//     $targ = $c;
//     temp = (this.value - 32) * 5 / 9;  // F2C
//   }


$("button").on("click", function() {

	var celsius = $("input").val();
	var fahrenheit = celsius * 9/5 + 32;
	console.log(fahrenheit);
	$("span#converted").text(fahrenheit)

	});
