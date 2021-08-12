'use strict';
const nameEle = document.querySelector('.js_name');
const previewNameEle = document.querySelector('.js_namePreview');
//Name preview
function handleName() {

   if (nameEle.value === '') {
      previewNameEle.innerHTML = 'Nombre Apellido';
   }
   else {
      previewNameEle.innerHTML = nameEle.value;
   }
}


nameEle.addEventListener('keyup', handleName);
//Job preview
const jobEle = document.querySelector('.js_job');
const previewJobEle = document.querySelector('.js_jobPreview');
function handleJob() {

   if (jobEle.value === '') {
      previewJobEle.innerHTML = 'Front-end Developer';
   }
   else {
      previewJobEle.innerHTML = jobEle.value;
   }
}
jobEle.addEventListener('keyup', handleJob);

// email preview

const emailEle = document.querySelector('.js_email');
const emailPreviewEle = document.querySelector('.js_emailPreview');

function handleEmail() {
   console.log(emailPreviewEle.href = emailEle.value);
   emailPreviewEle.href = 'mailto:' + emailEle.value;
}
emailEle.addEventListener('change', handleEmail);

//tel preview

const telEle = document.querySelector('.js_tel');
const telPreviewEle = document.querySelector('.js_telPreview');

function handleTel() {
   console.log(telPreviewEle.href = telEle.value);
   telPreviewEle.href = telEle.value;
}
telEle.addEventListener('change', handleTel);

//parseInt dónde ponerlo ???????????????



//Linkedin preview


const linkedinEle = document.querySelector('.js_linkedin');
const linkedinPreviewEle = document.querySelector('.js_LinkedinPreview');

function handleLinkedin() {
   console.log(LinkedinPreviewEle.href = linkedinEle.value);
   linkedinPreviewEle.href = linkedinEle.value;
}
linkedinEle.addEventListener('keyup', handleLinkedin);

//github 

const githubEle = document.querySelector('.js_github');
const githubeviewEle = document.querySelector('.js_githubPreview');

function handleGithub() {
   console.log(githubeviewEle.href = githubEle.value);
   githubeviewEle.href = githubEle.value;
}
githubEle.addEventListener('keyup', handleGithub);