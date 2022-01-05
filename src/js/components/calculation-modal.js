
import { OpenModal,closeModal } from './open-close-modal';

const calculationBtn = document.querySelector('.diet-line__button');
const modalContainerCalculation = document.querySelector('.modal-container-calculation');
const submitCalculationForm = document.querySelector('.js-calculation-form');


const clickHreffTellYou = document.querySelector('.receive-link')

calculationBtn.addEventListener('click', calculationModal)
clickHreffTellYou.addEventListener('click', calculationModal)


function calculationModal(evt) {
  evt.preventDefault();
  modalContainerCalculation.classList.remove('visually-hidden')

   OpenModal();
  
}

submitCalculationForm.addEventListener('submit', submitCalculationForms);

function submitCalculationForms() {
  
  closeModal();
  submitCalculationForm.reset();
}