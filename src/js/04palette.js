'use strict';

const selectedColour = document.querySelector('.js-form');
const edgePreview = document.querySelector('.js-edge');
// const namePreview = document.querySelector('.js_namePreview');
// const iconsPreview = document.querySelector('.js-icons');

function handleChangeColor(event) {
	const inputId = event.target.id;

	if (inputId === 'palette2') {
		edgePreview.classList.remove('palette3');
		edgePreview.classList.add('palette2');
	} else if (inputId === 'palette3') {
		edgePreview.classList.remove('palette2');
		edgePreview.classList.add('palette3');
	} else {
		edgePreview.classList.remove('palette2');
		edgePreview.classList.remove('palette3');
	}
}
selectedColour.addEventListener('click', handleChangeColor);
