const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
const fotFormBtn = document.querySelector('.footer-form');
const submitCalculationForm = document.querySelector('.js-calculation-form');



submitCalculationForm.addEventListener('submit', showNotification);
fotFormBtn.addEventListener('submit', showNotification);
notification.addEventListener('click', onNotificationClick);




export function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

export function showNotification(e) {
  e.preventDefault();
 notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    
    hideNotification();
  }, NOTIFICATION_DELAY);

  fotFormBtn.reset();
  
}

function hideNotification() {
 notification.classList.remove('is-visible');
}
