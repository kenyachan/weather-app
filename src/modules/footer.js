export const footerWidget = () => {
	const footerElement = document.createElement('footer');

	const page = document.createElement('div');
	page.classList.add('page');
	footerElement.appendChild(page);

	page.appendChild(createAuthorWidget());
	page.appendChild(createWidgetSeparator());
	page.appendChild(createAttributeWidget());

	return footerElement;
}

function createAuthorWidget() {
	const authorWidget = document.createElement('div');
	authorWidget.classList.add('footer-widget');

	const authorTextElement = document.createElement('p');
	authorTextElement.textContent = 'Created by ';
	authorWidget.appendChild(authorTextElement);

	const authorLink = document.createElement('a');
	const link = 'https://github.com/kenyachan';
	const author = 'Kenya Chan';
	authorLink.setAttribute('href', link);
	authorLink.setAttribute('title', 'GitHub Profile');
	authorLink.textContent = author;
	authorTextElement.appendChild(authorLink);

	return authorWidget;
}

function createAttributeWidget() {
	const attWidget = document.createElement('div');
	attWidget.classList.add('footer-widget');

	const attTextElement = document.createElement('p');
	attTextElement.textContent = 'Powered by ';
	attWidget.appendChild(attTextElement);

	const attLink = document.createElement('a');
	const link = 'https://weatherapi.com';
	const att = 'WeatherAPI.com';
	attLink.setAttribute('href', link);
	attLink.setAttribute('title', 'Free Weather API');
	attLink.textContent = att;
	attTextElement.appendChild(attLink);

	return attWidget;
}

function createWidgetSeparator() {
	const separator = document.createElement('span');
	separator.classList.add('widgetSeparator');
	
	return separator;

	/*
	const separator = document.createElement('p');
	separator.classList.add('widgetSeparator');
	separator.textContent = '|';

	return separator;
	*/
}
