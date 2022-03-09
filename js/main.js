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

// Nav Elements
const navForm = document.getElementById("nav-form");
const navInput = document.getElementById("nav-input");
const searchResults = document.querySelector(".search-info");

const userIds = [
  { id: "kimronghdouw", img: "img/profile.jpg", name: "김로라" },
  { id: "nonak_c", img: "img/profile.jpg", name: "노낙" },
  { id: "hapataka_123", img: "img/profile.jpg", name: "해피데이" },
  { id: "jsw_010203", img: "img/profile.jpg", name: "박지우" },
  { id: "ilovemaday", img: "img/profile.jpg", name: "" },
  { id: "innist0_0ry", img: "img/profile.jpg", name: "이네미네" },
  { id: "gay20n", img: "img/profile.jpg", name: "갸니" },
  { id: "xoxo_0", img: "img/profile.jpg", name: "박소영" },
  { id: "jiing_ni", img: "img/profile.jpg", name: "김지은" },
  { id: "_0.3.2_", img: "img/profile.jpg", name: "박선정" },
  { id: "dhxo_kwon_", img: "img/profile.jpg", name: "오태하🔥" },
  { id: "phr1108", img: "img/profile.jpg", name: "화라나" },
  { id: "2yeoni__", img: "img/profile.jpg", name: "나는 성여니" },
];
let resultIds = [];

function filterResult(term) {
  resultIds = userIds.filter((user) => user.id.includes(term));
  if (term === "") resultIds = [];

  console.log(resultIds);

  searchResults.innerHTML = `${resultIds
    .map((user) => {
      return `<li class="user">
    <img class="profile" src=${user.img} />
    <div class="user-info">
      <strong>${user.id}</strong>
      <p>${user.name}</p>
    </div>
  </li>`;
    })
    .join("")}`;
}

navForm.addEventListener("input", (e) => {
  navForm.classList.add("activate");
  if (navInput.value === "") navForm.classList.remove("activate");
  const term = e.target.value;
  filterResult(term);
});

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

function handleCommentBtn(e) {
  const comment = e.target.closest("li");

  if (e.target.classList.contains("fa-times")) {
    comment.remove();
  }

  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("fas");
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

// Handle delete Btn, heart Btn on the comment line
comments.addEventListener("click", handleCommentBtn);

//Clicking heart on the article-btns bar
document
  .querySelector(".article-heart-btn")
  .addEventListener("click", function () {
    this.querySelector("i").classList.toggle("fas");
  });
