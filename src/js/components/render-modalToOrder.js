
import rendetModalToOrder from '../../templates/modal-to-order.hbs'
import { OpenModal } from './open-close-modal';
import { submitBtnModalOrder } from './submit-modal-order';

const openModalToOrder = document.querySelector('.diet-list')
const modalContainer = document.querySelector('.modal-container')

  
openModalToOrder.addEventListener('click', clikButtonToOrder)

export default function clikButtonToOrder(evt) {
  
  if (evt.target.nodeName !== 'BUTTON') {
    return; 
  }
  const parent = evt.target.parentElement;
  const logo = parent.querySelector('.js-logo');
  const logoSrc = logo.src;
  const miniLogo = parent.querySelector('.mini-logo');
  const miniLogoSrs = miniLogo.src;
  const titel = parent.querySelector('.item-titel');
  const titelContent = titel.textContent;
  const titelItem = parent.querySelector('.title-item');
  const titelItemContent = titelItem.textContent;


  modalContainer.innerHTML = rendetModalToOrder({ logoSrc,miniLogoSrs, titelContent, titelItemContent })


  OpenModal();

  const btnModalOrder = document.querySelector('#modal-form')
 btnModalOrder.addEventListener('submit', submitBtnModalOrder)
}


 


  












 

