import { condition as newCondition } from './condition';

export const forecastDay = (forecastData) => {
	return {
		get maxTemp() {
			return forecastData.day.maxtemp_c;
		},

		get minTemp() {
			return forecastData.day.mintemp_c;
		},

		get avgHumidity() {
			return forecastData.day.avghumidity;
		},

		get chanceOfRain() {
			return forecastData.day.daily_chance_of_rain;
		},

		get precipitation() {
			return forecastData.day.totalprecip_mm;
		},

		get uvIndex() {
			return forecastData.day.uv;
		},

		get condition() {
			return newCondition(forecastData.day.condition);
		},
	}
}
