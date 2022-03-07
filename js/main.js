// login Elements
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

// Login handling
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (id.length === 0 || password.length === 0) return;

  //Clear input
  idInput.value = passwordInput.value = "";
  //Hide Login Form
  loginContainer.classList.add("hidden");
});

//activate login-btn
loginForm.addEventListener("input", () => {
  loginForm.classList.add("active");
});
