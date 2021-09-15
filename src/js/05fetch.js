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
	const inputId = e.target.name;
	const inputValue = e.target.value;

	data[inputId] = inputValue;
}

form.addEventListener('change', handlerFormData);

const createBtn = document.querySelector('.js-createBtn');
const cardResultElement = document.querySelector('.js-url');
const cardCreated = document.querySelector('.js-cardCreated');

function handleCreateBtn(event) {
	event.preventDefault();

	fetch('https://awesome-profile-cards.herokuapp.com/card', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			cardResultElement.innerHTML = data.cardURL;
			cardResultElement.href = data.cardURL;

			if (data.success) {
				cardCreated.classList.remove('hidden');
			}
			twitterShare();
		});
}

createBtn.addEventListener('click', handleCreateBtn);
