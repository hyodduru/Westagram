// login Elements
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

// Main Elements
const commentInput = document.getElementById("comment-input");
const commentForm = document.getElementById("comment-form");
const comments = document.getElementById("comments");
let id = "hyodduru";

function createComment(comment) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${id}</strong> ${comment}`;
  li.className = "comment";
  comments.appendChild(li);
}

function submitComment(e) {
  e.preventDefault();
  const newComment = commentInput.value;
  createComment(newComment);
  commentInput.value = "";
}

commentForm.addEventListener("submit", submitComment);
commentForm.addEventListener("input", () => {
  commentForm.classList.add("activate");
  if (commentInput.value === "") commentForm.classList.remove("activate");
});

// Login handling
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (id.length === 0 || password.length === 0) return;

  id = idInput.value;
  //Clear input
  idInput.value = passwordInput.value = "";
  //Hide Login Form
  loginContainer.classList.add("hidden");
});

//activate login-btn
loginForm.addEventListener("input", () => {
  loginForm.classList.add("active");
});
