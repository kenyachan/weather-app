export function weatherApp() {
	const apiEndPoint = "https://api.weatherapi.com/v1/current.json";
	const apiKey = '95ce1f183f22452981d74145232304';

	async function getCurrentWeatherData(city) {
		const response = await fetch(`${apiEndPoint}?key=${apiKey}&q=${city}`, { mode: 'cors' });
		const weatherData = await response.json();

		// consider what happens when an invalid city is provided.

		return weatherData;
	}

	async function getCurrentWeather(city) {
		let weatherData = await getCurrentWeatherData(city);

		logWeather(weatherData);

		return weatherData;
	}

	function logWeather(weatherData) {
		console.log(weatherData);

		console.log(`Current weather for ${weatherData.current.name} is ${weatherData.current.condition.text}`);
		console.log(`Temperature: ${weatherData.current.temp_c}`);
	}

	return {
		getCurrentWeather,
	}
}

