// Create variables to select the elements

const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal-parent-container');
const closeBtn = document.querySelector('#modal-close-btn');

// Add click event listener to your variable(s)

clear.addEventListener('click', () => {
  overlay.classList.add('open');
});

clear.addEventListener('click', () => {
  modal.classList.add('open');
});

// Add click event listener to remove your variable(s)

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open');
});

// This removes both the overlay and modal

overlay.addEventListener('click', () => {
  overlay.classList.remove('open');
  modal.classList.remove('open');
});

// create a function to add as a parameter for adding 'remove' to the event listener(s) above

function addOpenClass() {
  modal.classList.add('open');
  overlay.classList.add('open');
}

// create a function to add as a parameter for removing 'open' to the event listener(s) above

function removeOpenClass() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}
