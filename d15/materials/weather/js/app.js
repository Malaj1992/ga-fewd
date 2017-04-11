

    
$("button").on("click", function() {
 	var city = $('input').val();

  $.getJSON("http://samples.openweathermap.org/data/2.5/weather?q="+city+"&appid=bf239dc156a178d81cf16c537f62e05e", function (data) {
  	console.log(data)
	});
  
  
});