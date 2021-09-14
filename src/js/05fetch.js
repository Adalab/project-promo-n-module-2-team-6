'use strict';

let data = {
	palette: 'palette1',
	name: '',
	job: '',
	email: '',
	phone: '',
	linkedin: '',
	github: '',
};

const form = document.querySelector('.js-form');

function handlerFormData(e) {
	console.log(e.target.id);
	console.log(e.currentTarget);

	const inputId = e.target.id;
	const inputValue = e.target.value;

	data[inputId] = inputValue;
	console.log(data);
}

form.addEventListener('change', handlerFormData);
