async function getWeatherData(e) {
	e.preventDefault();

	const cityName = $('input[type="text"]').val();
	const apiKey = "736b5da56e23df44b83c2d911aa570ce";
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang={en}`;

	const response = await fetch(url);
	const data = await response.json();

    console.log(data);

	$("#precip").html(data.weather);
	$("#high").html(data.main.temp_min);
	$("#low").html(data.main.temp_max);
    $("#sunrise").html(data.sys.sunrise);
    $("#sunset").html(data.sys.sunset);

}

$("form").on("submit", getWeatherData);
