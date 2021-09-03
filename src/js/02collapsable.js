'use strict';


const arrowButton = document.querySelector('.js-arrow');
const chevronUp = document.querySelector('.js-chevron');
const collapsableSection = document.querySelector('.js-collapsable');
const container = document.querySelector('.container');



function foldAndUnfold() {

    collapsableSection.classList.toggle('hidden');
}



function changeArrow() {

    if (chevronUp.classList.contains('fa-chevron-up')) {
        chevronUp.classList.remove('fa-chevron-up');
        chevronUp.classList.add('fa-chevron-down');
    } else {
        chevronUp.classList.remove('fa-chevron-down');
        chevronUp.classList.add('fa-chevron-up');
    }
}


function handleCollapsable(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    foldAndUnfold();
    changeArrow();
}



container.addEventListener('click', handleCollapsable);
// arrowButton.addEventListener('click', handleCollapsable);
// arrowButton2.addEventListener('click', handleCollapsable);