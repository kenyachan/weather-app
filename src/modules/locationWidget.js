export const locationWidget = () => {
	const element = document.createElement('div');
	element.id = 'location-widget';

	element.appendChild(cityText());
	element.appendChild(regionText());
	element.appendChild(countryText());

	return element;
}

function cityText() {
	const element = document.createElement('p');
	element.id = 'city-text';
	
	return element;
}

function countryText() {
	const element = document.createElement('p');
	element.id = 'country-text';

	return element;
}

function regionText() {
	const element = document.createElement('p');
	element.id = 'region-text';

	return element;
}
