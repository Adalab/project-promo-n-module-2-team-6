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
	console.log(e.target.name);
	console.log(e.currentTarget);

	const inputId = e.target.name;
	const inputValue = e.target.value;

	data[inputId] = inputValue;
	console.log(data);
}

form.addEventListener('change', handlerFormData);

const createBtn = document.querySelector('.js-createBtn');
const cardResultElement = document.querySelector('.js-url');

function handleCreateBtn(event) {
	event.preventDefault();
	console.log(data);

	fetch('https://awesome-profile-cards.herokuapp.com/card', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			cardResultElement.innerHTML = data.cardURL;
			cardResultElement.href = data.cardURL;
			console.log(cardResultElement);
			console.log(data.cardURL);
		});
}

createBtn.addEventListener('click', handleCreateBtn);
