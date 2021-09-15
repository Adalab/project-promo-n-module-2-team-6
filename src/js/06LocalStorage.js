'use strict';

//////////////local storage 


function setLocalStorage() {
    const listArray = JSON.stringify(data);
    localStorage.setItem('data', listArray);
}

function getLocalStorage() {
    let getData = localStorage.getItem('data');
    if (getData !== null) {
        const arrList = JSON.parse(getLocalStorage);
        data = arrList;
        handlerFormData();
    }
}
getLocalStorage();