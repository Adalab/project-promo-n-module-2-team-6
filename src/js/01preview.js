'use strict';
const nameEle = document.querySelector('.js_name');
const previewNameEle = document.querySelector('.js_namePreview');
//Name preview
function handleName(){
   
    if(nameEle.value===''){
    previewNameEle.innerHTML='Nombre Apellido';
    }
    else{
       previewNameEle.innerHTML = nameEle.value;
    }
 }


nameEle.addEventListener('keyup', handleName);
//Job preview
const jobEle = document.querySelector('.js_job');
const previewJobEle = document.querySelector('.js_jobPreview');
function handleJob(){
    
    if(jobEle.value===''){
    previewJobEle.innerHTML='Front-end Developer';
    }
    else{
       previewJobEle.innerHTML = jobEle.value;
    }
 }
 jobEle.addEventListener('keyup', handleJob);
