'use strict';

const nameEle = document.querySelector('.js_name');
const previewNameEle = document.querySelector('.js_namePreview');
//Name preview
function handleName() {
	if (nameEle.value === '') {
		previewNameEle.innerHTML = 'Nombre Apellido';
	} else {
		previewNameEle.innerHTML = nameEle.value;
	}
	// data.name = nameEle.value;
	// console.log(nameEle.value);
	//getLocalStorage();
	//setLocalStorage();
}

nameEle.addEventListener('keyup', handleName);

//Job preview
const jobEle = document.querySelector('.js_job');
const previewJobEle = document.querySelector('.js_jobPreview');
function handleJob() {
	if (jobEle.value === '') {
		previewJobEle.innerHTML = 'Front-end Developer';
	} else {
		previewJobEle.innerHTML = jobEle.value;
	}
	// data.job = jobEle.value;
	// console.log(jobEle.value);
	//getLocalStorage();
	//setLocalStorage();
}
jobEle.addEventListener('keyup', handleJob);

// email preview

const emailEle = document.querySelector('.js_email');
const emailPreviewEle = document.querySelector('.js_emailPreview');

function handleEmail() {
	emailPreviewEle.href = 'mailto:' + emailEle.value;
	// data.email = emailEle.value;
	//getLocalStorage();
	//setLocalStorage();
}
emailEle.addEventListener('change', handleEmail);

//tel preview

const telEle = document.querySelector('.js_tel');
const telPreviewEle = document.querySelector('.js_telPreview');

function handleTel() {
	console.log((telPreviewEle.href = telEle.value));
	telPreviewEle.href = telEle.value;
	// data.phone = telEle.value;
	//getLocalStorage();
	//setLocalStorage();
}
telEle.addEventListener('change', handleTel);

//parseInt dónde ponerlo ???????????????

//Linkedin preview

const linkedinEle = document.querySelector('.js_linkedin');
const linkedinPreviewEle = document.querySelector('.js_linkedinPreview');

function handleLinkedin() {
	console.log((linkedinPreviewEle.href = linkedinEle.value));
	linkedinPreviewEle.href = linkedinEle.value;
	// data.linkedin = linkedinEle.value;
	//getLocalStorage();
	//	setLocalStorage();
}
linkedinEle.addEventListener('keyup', handleLinkedin);

//github

const githubEle = document.querySelector('.js_github');
const githubeviewEle = document.querySelector('.js_githubPreview');

function handleGithub() {
	console.log((githubeviewEle.href = githubEle.value));
	githubeviewEle.href = githubEle.value;
	// data.github = githubEle.value;
	//	getLocalStorage();
	//	setLocalStorage();
}
githubEle.addEventListener('keyup', handleGithub);

//Reset

const resetBtn = document.querySelector('.js-reset');

function reset() {
	location.reload();
}
resetBtn.addEventListener('click', reset);
