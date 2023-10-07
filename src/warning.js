const username = localStorage.getItem("usuario");
const password = localStorage.getItem("senha");

const userSpan = document.getElementsByClassName("user")[0];
const pwdSpan = document.getElementsByClassName("pwd")[0];

userSpan.textContent = `${username}`;
pwdSpan.textContent = `${password}`;
