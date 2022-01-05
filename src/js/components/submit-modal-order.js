import renderModalGratitude from '../../templates/modal-gratitude.hbs'


const modalContainer = document.querySelector('.modal-container')



export function submitBtnModalOrder(event) {
  event.preventDefault();
  
  const parent = event.target.parentElement;
  const parentEl = parent.parentElement;
  const logo = parentEl.querySelector('.modal-img');
  const logoSrc = logo.src;
  const miniLogo = parentEl.querySelector('.mini-logo');
  const miniLogoSrs = miniLogo.src;


  const {
    elements: { name, tel,addres,volume,amount}
  } = event.currentTarget;
   if (name.value === "" || tel.value === "" || addres.value === ""|| volume.value === ""|| amount.value === "") {
    return console.log("Please fill in all the fields!");
  }
  
  const order = {
    Name: name.value,
    Tel: tel.value,
    Addres: addres.value,
    Volume: volume.value,
    Amount: amount.value
  };
  
  localStorage.setItem("order", JSON.stringify(order));
  
  event.currentTarget.reset();

  modalContainer.innerHTML = renderModalGratitude({ logoSrc, miniLogoSrs });
}