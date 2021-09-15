'use strict';


function twitterShare() {

    const twitterButton = document.querySelector('.twitter--button');
    const twitterLink = document.querySelector('.twitter--link');
    const createCardLink = document.querySelector('.created__url');
    console.log(createCardLink)
    twitterLink.setAttribute('href', `https://twitter.com/intent/tweet?text=${createCardLink.innerText}`);
    twitterLink.setAttribute('target', "blank");
    twitterButton.addEventListener('click', twitterShare);
}

//////////////local storage 


function setLocalStorage() {
    const listArray = JSON.stringify(data);
    localStorage.setItem('data', listArray);
}
