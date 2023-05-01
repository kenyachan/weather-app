export function searchBar() {
	const element = document.createElement('input');
	element.id = 'search-bar';
	element.setAttribute('type', 'search');
	element.setAttribute('placeholder', 'Search for a city...');
	element.setAttribute('title','Enter a city');

	return element;
}
