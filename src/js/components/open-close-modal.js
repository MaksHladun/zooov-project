

const closeModalBtn = document.querySelector('[data-modal-close]')
const modal = document.querySelector('[data-modal]');
const backDrop = document.querySelector('.basicLightbox');
const modalContainer = document.querySelector('.modal-container')
const modalContainerCalculation = document.querySelector('.modal-container-calculation');
const bodyRef = document.querySelector('body');

  closeModalBtn.addEventListener('click', closeModal);
  backDrop.addEventListener('click', onBackDropClick);



 export  function OpenModal() {
  window.addEventListener('keydown', onEskKeyPress);
   modal.classList.remove('is-hidden');
   bodyRef.classList.add('modal-open');
   
}

export function closeModal() {
  window.removeEventListener('keydown', onEskKeyPress);
  const openCarentModal = document.querySelector('.basicLightbox');
const openCalculationModal = document.querySelector('.modal-container-calculation');
  
  
  

  if (openCarentModal) {
    modal.classList.add('is-hidden');
  }
  if (openCalculationModal) {
    modalContainerCalculation.classList.add('visually-hidden');
  }

  modalContainer.innerHTML = ' ';
  bodyRef.classList.remove('modal-open');
};

function onBackDropClick(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}

function onEskKeyPress(evt) {
  if (evt.code === 'Escape') {
    closeModal();
  }
}
//////

