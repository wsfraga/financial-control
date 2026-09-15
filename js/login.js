const loginForm = document.querySelector('[data-form="login"]');

const usernameInput = document.querySelector('[data-form="username"]');
const passwordInput = document.querySelector('[data-form="password"]');

const passwordError = document.querySelector('[data-error="password"]');
const usernameError = document.querySelector('[data-error="username"]');

const authenticationToast = document.querySelector('[data-toast="authentication"]');
const authenticationToastResponse = document.querySelector('[data-toast="response"]');
const authenticationToastMessage = document.querySelector('[data-toast="message"]');

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

function authenticate(formData) {
  const user = {
    username: "admin",
    password: "12345678"
  }

  const authenticationResult = {
    success: false,
    message: "Usuário ou senha inválidos"
  }

  if ((formData.username === user.username) 
    && (formData.password === user.password)) {
    authenticationResult.success = true;
    authenticationResult.message = "Login efetuado com sucesso";
  }

  return authenticationResult;
}

function renderAuthentication(authenticationResult) {
  
  if (authenticationResult.success) {
    authenticationToastResponse.innerText = "Sucesso"
  } else {
    authenticationToastResponse.innerText = "Erro"
  }
  authenticationToastMessage.innerText = authenticationResult.message

}

function handleSubmit(event) {
  console.clear();
  event.preventDefault();

  const formData = getFormData();
  
  const validationResult = validateForm(formData);
  console.log(validationResult);

  renderValidation(validationResult);

  if (validationResult.isValid) {
    const authenticationResult = authenticate(formData);
    renderAuthentication(authenticationResult)
    console.log(authenticationResult);
  }
}

loginForm.addEventListener('submit', handleSubmit);