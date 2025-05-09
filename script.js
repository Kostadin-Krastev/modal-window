'use strict';
// Storing in variables the elements of the modal window
const modalWindow = document.querySelector('.modal');
const overlayBackground = document.querySelector('.overlay');
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');

// Opening the modal window when showModalButton is clicked
for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlayBackground.classList.remove('hidden');
  });
}

// Closing the modal window when the X 'closeModalButton' button is clicked
closeModalButton.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  overlayBackground.classList.add('hidden');
});
