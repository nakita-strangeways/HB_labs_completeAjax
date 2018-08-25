"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(evt) {
	const status=evt;
	$('#fortune-text').html(status);  
	console.log('finished replaceFortune');
}	

function showFortune(){
	$.get('/fortune', replaceFortune);
	console.log('Finished AJAX');
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeatherResults(result){
	const weather = result['forecast'];
	console.log(weather);
	$('#weather-info').html(weather); 
};

function showWeather(evt) {
    evt.preventDefault();


    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()
					// "weather": $('#zipcode-field').val()
					};


   $.get(url, formData, showWeatherResults);
   console.log('Finished AJAX');
   console.log(formData);
};
  
    // TODO: request weather with that URL and show the forecast in #weather-info


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


