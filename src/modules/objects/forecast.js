import { locale as newLocale } from './locale';
import { current as newCurrent } from './current';
import { forecastDay as newForecastDay } from './forecastday';

export const forecast = (forecastData) => {
	const locale = newLocale(forecastData.location);
	const current = newCurrent(forecastData.current);
	const forecastDay = newForecastDay(forecastData.forecast.forecastday[0]);

	return {
		get locale() {
			return locale;
		},

		get current() {
			return current;
		},

		get forecastDay() {
			return forecastDay;
		},
	}
}
