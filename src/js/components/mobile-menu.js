

const mobBtnOpenMenu = document.querySelector('.mobile-btn')
const mobBtnCloseMenu = document.querySelector('.mobile-btn__close')


const headerItem = document.querySelector('.header-item');
const navItem = document.querySelector('.header-item');

navItem.addEventListener('click', navItemsLink )
mobBtnOpenMenu.addEventListener('click',clickOpenMobBatMenu )
mobBtnCloseMenu.addEventListener('click', clickCloseMobBatMenu )




export function clickOpenMobBatMenu() {

  headerItem.style.transform = "translateX(0%)";
  mobBtnCloseMenu.classList.remove('visually-hidden')
  mobBtnOpenMenu.classList.add('visually-hidden')
}


export function clickCloseMobBatMenu() {
  headerItem.style.transform = "translateX(-100%)";
   mobBtnCloseMenu.classList.add('visually-hidden')
  mobBtnOpenMenu.classList.remove('visually-hidden')
}

function navItemsLink(e) {
    if (e.target.nodeName !== 'A' && e.target.nodeName !== 'BUTTON') {
    return; 
  }
  clickCloseMobBatMenu()
}