import rendetModalToDescription from '../../templates/modal-description.hbs'
import rendetModalToOrder from '../../templates/modal-to-order.hbs'
import { submitBtnModalOrder } from './submit-modal-order';

import { OpenModal } from './open-close-modal';

const openModalToOrder = document.querySelector('.diet-list')
const modalContainer = document.querySelector('.modal-container')

  
openModalToOrder.addEventListener('click', clikButtonToDescription)

export function clikButtonToDescription(evt) {
 
  if ((evt.target.nodeName !== 'IMG') & (evt.target.nodeName !== 'H3') & (evt.target.nodeName !== 'P') & (evt.target.nodeName !== 'LI')) {
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
  const titelItemTex = parent.querySelector('.title-item__tex');
  const titelItemTexContent = titelItemTex.textContent;
  const modalDescription = parent.querySelector('.modal-description');
  const modalDescriptionContent = modalDescription.textContent;
  const modalValue = parent.querySelector('.modal-value');
  const modalValueContent = modalValue.textContent;
  const titleItemGramage = parent.querySelector('.title-item__gramage');
  const titleItemGramageContent = titleItemGramage.textContent;
  
  modalContainer.innerHTML = rendetModalToDescription({ logoSrc,miniLogoSrs, titelContent, titelItemContent,titelItemTexContent,modalDescriptionContent,modalValueContent,titleItemGramageContent })


  OpenModal();
  
const modaBtDescription = document.querySelector('.modal-btn-description')
modaBtDescription.addEventListener('click', clickGoToOrder)
   
}

function clickGoToOrder(evt) {
   const parent = evt.target.parentElement;
  const parentEl = parent.parentElement;
  const logo = parentEl.querySelector('.modal-img');
  const logoSrc = logo.src;
  const miniLogo = parentEl.querySelector('.mini-logo');
  const miniLogoSrs = miniLogo.src;
  const titel = parentEl.querySelector('.modal-titel');
  const titelContent = titel.textContent;
  const titelItem = parentEl.querySelector('.modal-tex');
  const titelItemContent = titelItem.textContent;


  modalContainer.innerHTML = rendetModalToOrder({logoSrc,miniLogoSrs,titelContent,titelItemContent})
 const btnModalOrder = document.querySelector('#modal-form')
 btnModalOrder.addEventListener('submit', submitBtnModalOrder)
}