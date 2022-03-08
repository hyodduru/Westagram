// login Elements
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

// Main Elements
const mainContainer = document.querySelector(".main-container");
const commentInput = document.getElementById("comment-input");
const commentForm = document.getElementById("comment-form");
const comments = document.getElementById("comments");
let id = "hyodduru";

function createComment(comment) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${id}</strong> ${comment}  <button class ="heart-btn" ><i class ="far fa-heart"></i></button>  <button class="delete-btn"  ><i class="fas fa-times"></i></button>`;
  li.className = "comment";
  comments.appendChild(li);
}

function submitComment(e) {
  e.preventDefault();
  if (commentInput.value === "") return;
  const newComment = commentInput.value;
  createComment(newComment);
  commentInput.value = "";
}

function deleteComment(e) {
  const comment = e.target.closest("li");

  if (e.target.classList.contains("fa-times")) {
    comment.remove();
  }
}

commentForm.addEventListener("submit", submitComment);
commentForm.addEventListener("input", (e) => {
  commentForm.classList.add("activate");
  if (commentInput.value === "") commentForm.classList.remove("activate");
});

// Login handling
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (id.length === 0 || password.length === 0) return;

  id = idInput.value;
  password = passwordInput.value;

  //Password validation
  if (password.length < 5) {
    alert("Password should be at least 5 characters.");
    return;
  }
  //Clear input
  idInput.value = passwordInput.value = "";
  //Hide Login Form
  loginContainer.classList.add("hidden");
  //Render main page
  mainContainer.classList.remove("hidden");
});

//activate login-btn
loginForm.addEventListener("input", () => {
  loginForm.classList.add("active");
});

//Delete List(comment) as clicking delete-Btn
comments.addEventListener("click", deleteComment);
