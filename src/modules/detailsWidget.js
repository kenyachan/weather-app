export const detailsWidget = () => {
	const element = document.createElement('div');
	element.id = 'details-widget';

	element.appendChild(detailComponent('Humidity', 'humidity'));
	element.appendChild(detailComponent('Precipitation', 'precipitation'));
	element.appendChild(detailComponent('UV Index', 'uv-index'));
	element.appendChild(detailComponent('Air Quality Index', 'aqi'));

	return element;
}

function detailComponent(labelText, valueId) {
	const element = document.createElement('div');
	element.classList.add('detail-element');

	const label = document.createElement('p');
	label.textContent = labelText;
	label.classList.add('label');
	element.appendChild(label);

	const value = document.createElement('p');
	value.id = valueId;
	value.classList.add('value');
	element.appendChild(value);

	return element;
}
