//For Contact Us Form
const form = document.querySelector('.contactusform');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  if (form.checkValidity() === false) {
    event.stopPropagation();
    return;
  }
  alert('Thanks for contacting us, we will reach back to you soon!');
    location.reload();
});
//For Subscription form
const subscribeForm = document.querySelector('.Subscribeform');
const emailInput = document.getElementById('InputEmail1');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (subscribeForm.checkValidity() === false) {
    event.stopPropagation();
    return;
  }
  alert('Thanks for subscribing!');
    location.reload();
});
