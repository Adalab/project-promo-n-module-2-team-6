'use strict';

//DESIGN SECTION

//const arrowButton = document.querySelector('.js-arrow');
const chevronUp = document.querySelector('.js-chevron');
const collapsableSection = document.querySelector('.js-collapsable');

function foldAndUnfold(event) {
	event.preventDefault();
	console.log(event.target);
	console.log(event.currentTarget);
	collapsableSection.classList.toggle('hidden');
	chevronUp.classList.toggle('upDown');
}

/*function changeArrow() {

  if (chevronUp.classList.contains('fa-chevron-up')) {
    chevronUp.classList.remove('fa-chevron-up');
    chevronUp.classList.add('fa-chevron-down');
  } else {
    chevronUp.classList.remove('fa-chevron-down');
    chevronUp.classList.add('fa-chevron-up');
  }
}
*/

/*function handleCollapsable(event) {
  event.preventDefault();
  console.log(event.target);
  console.log(event.currentTarget);
  foldAndUnfold();
  // changeArrow();
}
*/

chevronUp.addEventListener('click', foldAndUnfold);
// arrowButton.addEventListener('click', handleCollapsable);
// arrowButton2.addEventListener('click', handleCollapsable);

// FILL SECTION

//const arrowButton2 = document.querySelector('.js-arrow2');
const chevronUp2 = document.querySelector('.js-chevron2');
const collapsableSection2 = document.querySelector('.js-collapsable2');

function foldAndUnfold2(event) {
	event.preventDefault();
	collapsableSection2.classList.toggle('hidden');
	chevronUp2.classList.toggle('upDown');
}

chevronUp2.addEventListener('click', foldAndUnfold2);

// SHARE SECTION

//const arrowButton2 = document.querySelector('.js-arrow2');
const chevronUp3 = document.querySelector('.js-chevron3');
const collapsableSection3 = document.querySelector('.js-collapsable3');

function foldAndUnfold3(event) {
	event.preventDefault();
	collapsableSection3.classList.toggle('hidden');
	chevronUp3.classList.toggle('upDown');
}

chevronUp3.addEventListener('click', foldAndUnfold3);
