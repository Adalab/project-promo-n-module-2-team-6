'use strict';
const nameEle = document.querySelector('.js_name');
const previewNameEle = document.querySelector('.js_namePreview');

function handleName(){
    console.log(nameEle.value);
    if(nameEle.value===''){
    previewNameEle.innerHTML='Nombre Apellido';
    }
    else{
       previewNameEle.innerHTML = nameEle.value;
    }
 }


nameEle.addEventListener('keyup', handleName);

