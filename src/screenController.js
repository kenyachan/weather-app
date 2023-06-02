export const screenController = (app) => {
	const initSearchBar = (() => {
		const searchbar = document.querySelector('#search-bar');
		searchbar.addEventListener('search', async (e) => {

			let forecast = await app.getForecast(searchbar.value);
			updateView(forecast);
		});
	})();

	const loadDefaultLocale = (async () => {
		let defaultLocale = 'Sydney';

		let forecast = await app.getForecast(defaultLocale);
		updateView(forecast);
	})();

	function updateView(forecast) {
		updateLocationWidget(forecast);
		updateForecastWidget(forecast);
		updateDetailsWidget(forecast);
	}

	function updateLocationWidget(forecast) {
		let cityText = document.querySelector('#city-text');
		let regionText = document.querySelector('#region-text');
		let countryText = document.querySelector('#country-text');

		cityText.textContent = forecast.locale.name;
		regionText.textContent = forecast.locale.region;
		countryText.textContent = forecast.locale.country;
	}

	function updateForecastWidget(forecast) {
		let currentTemp = document.querySelector('#current-temperature');
		let minTemp = document.querySelector('#min-temp');
		let maxTemp = document.querySelector('#max-temp');
		let feelsLike = document.querySelector('#feels-like');

		currentTemp.textContent = `${forecast.current.temperature}\u00B0`;
		minTemp.textContent = `${forecast.forecastDay.minTemp}\u00B0`;
		maxTemp.textContent = `${forecast.forecastDay.maxTemp}\u00B0`;
		feelsLike.textContent = `${forecast.current.feelslike}\u00B0`;

		let conditionIcon = document.querySelector('#condition-icon');
		let conditionText = document.querySelector('#condition-text');

		conditionIcon.src = forecast.current.condition.icon;
		conditionText.textContent = forecast.current.condition.text;
	}

	function updateDetailsWidget(forecast) {
		let humidity = document.querySelector('#humidity');
		let precip = document.querySelector('#precipitation');
		let uvIndex = document.querySelector('#uv-index');
		let aqi = document.querySelector('#aqi');

		humidity.textContent = `${forecast.current.humidity}%`;
		precip.textContent = `${forecast.current.precipitation}mm`;
		uvIndex.textContent = forecast.current.uvIndex;
		aqi.textContent = forecast.current.aqi;
	}
}
