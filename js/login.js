const loginForm = document.querySelector('[data-form="login"]');

const usernameInput = document.querySelector('[data-form="username"]');
const passwordInput = document.querySelector('[data-form="password"]');

const passwordError = document.querySelector('[data-error="password"]');
const usernameError = document.querySelector('[data-error="username"]');

function getFormData() {

  const formData = {
    username: usernameInput.value,
    password: passwordInput.value
  }
  return formData;
}

function validateForm(formData) {
  const validationResult = {
    isValid: true,
    errors: {
      username: "",
      password: ""
    }
  }

  if (formData.username.trim() === '') {
    validationResult.isValid = false;
    validationResult.errors.username = "Username is required";
  }
  if (formData.password.trim() === '') {
    validationResult.isValid = false;
    validationResult.errors.password = "Password is required";
  }

  return validationResult;
}

function renderValidation(validationResult) {

  if (validationResult.errors.username) {
    usernameError.classList.add('active')
    usernameError.textContent = validationResult.errors.username;
  } else {
    usernameError.classList.remove('active')
    usernameError.textContent = validationResult.errors.username;
  }

  if (validationResult.errors.password) {
    passwordError.classList.add('active')
    passwordError.textContent = validationResult.errors.password;
  } else {
    passwordError.classList.remove('active')
    passwordError.textContent = validationResult.errors.password;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = getFormData();
  
  const validationResult = validateForm(formData);
  console.log(validationResult);
  renderValidation(validationResult);
}

loginForm.addEventListener('submit', handleSubmit);