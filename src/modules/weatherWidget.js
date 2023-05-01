import { searchBar as newSearchBar } from './searchBar';
import { locationWidget as newLocationWidget } from './locationWidget';
import { forecastWidget as newForecastWidget } from './forecastWidget';
import { detailsWidget as newDetailsWidget } from './detailsWidget';

export function weatherWidget() {
	const widgetElement = document.createElement('div');
	widgetElement.id = 'weather-widget';

	const searchBar = newSearchBar(); 
	widgetElement.appendChild(searchBar);

	const locationWidget = newLocationWidget();
	widgetElement.appendChild(locationWidget);

	const forecastWidget = newForecastWidget();
	widgetElement.appendChild(forecastWidget);

	const detailsWidget = newDetailsWidget();
	widgetElement.appendChild(detailsWidget);

	return widgetElement;
}
