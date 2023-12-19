
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formDataObject = Object.fromEntries(formData.entries());

  if (!formDataObject.email || !formDataObject.password) {
    alert('Всі поля повинні бути заповнені');
  } else {
    console.log(formDataObject);
    loginForm.reset();
  }
});