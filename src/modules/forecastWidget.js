export const forecastWidget = () => {
	const element = document.createElement('div');
	element.id = 'forecast-widget';

	element.appendChild(temperatureComponent());
	element.appendChild(conditionComponent());

	return element;
}

function temperatureComponent() {
	const element = document.createElement('div');
	element.id = 'temperature-component';

	const currentTemperature = currentTemperatureComponent();
	element.appendChild(currentTemperature);

	const feelsLikeContainer = feelsLikeComponent();
	element.appendChild(feelsLikeContainer);

	const minMaxContainer = minMaxComponent();
	element.appendChild(minMaxContainer);
	
	return element;
}

function currentTemperatureComponent() {
	const element = document.createElement('p');
	element.id = 'current-temperature';
	
	return element;
}

function minMaxComponent() {
	const element = document.createElement('div');
	element.id = 'min-max-container';

	const minComponent = document.createElement('div');
	element.appendChild(minComponent);

	const minLabel = document.createElement('p');
	minLabel.id = 'min-temp-label';
	minLabel.classList.add('label');
	minLabel.textContent = 'Min';
	minComponent.appendChild(minLabel);

	const minTemp = document.createElement('p');
	minTemp.id = 'min-temp';
	minTemp.classList.add('value');
	minComponent.appendChild(minTemp);

	const maxComponent = document.createElement('div');
	element.appendChild(maxComponent);

	const maxLabel = document.createElement('p');
	maxLabel.id = 'max-temp-label';
	maxLabel.classList.add('label');
	maxLabel.textContent = 'Max';
	maxComponent.appendChild(maxLabel);

	const maxTemp = document.createElement('p');
	maxTemp.id = 'max-temp';
	maxTemp.classList.add('value');
	maxComponent.appendChild(maxTemp);

	return element;
}

function feelsLikeComponent() {
	const element = document.createElement('div');
	element.id = 'feels-like-container';

	const label = document.createElement('p');
	label.textContent = 'Feels like';
	label.classList.add('label');
	element.appendChild(label);

	const value = document.createElement('p');
	value.id = 'feels-like';
	value.classList.add('value');
	element.appendChild(value);

	return element;
}

function conditionComponent() {
	const element = document.createElement('div');
	element.id = 'condition-component';

	element.appendChild(conditionIcon());
	element.appendChild(conditionText());
	
	return element;
}

function conditionIcon() {
	const element = document.createElement('img');
	element.id = 'condition-icon';

	return element;
}

function conditionText() {
	const element = document.createElement('p');
	element.id = 'condition-text';

	return element;
}
