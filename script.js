'use strict';
// Storing in variables the elements of the modal window
const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');

// Opening the modal window when showModalButton is clicked
const openModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlayBackground.classList.remove('hidden');
};

for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener('click', openModalWindow);
}

// Closing the modal window when the X 'closeModalButton' button is clicked or the space overlay around the modal window
const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlayBackground.classList.add('hidden');
};

closeModalButton.addEventListener('click', closeModalWindow);
closeModalButton.addEventListener('touchstart', closeModalWindow);
overlayBackground.addEventListener('click', closeModalWindow);
overlayBackground.addEventListener('touchstart', closeModalWindow);
