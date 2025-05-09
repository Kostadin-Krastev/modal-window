'use strict';
// Storing in variables the elements of the modal window
const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');

// Opaning the modal window when showModalButton is clicked
for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener('click', function () {
    console.log('button is clicked');
    modalWindow.classList.remove('hidden');
    overlayBackground.classList.remove('hidden');
  });
}
