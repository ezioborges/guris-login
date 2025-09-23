import { users } from "../data/users.js";

const loginForm = document.querySelector("#login-form");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

inputEmail.addEventListener("change", (event) => {
  const email = event.target.value;
  console.log("Email digitado:", email);
});

inputPassword.addEventListener("input", (event) => {
  const password = event.target.value;
  console.log("Senha digitada:", password);
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userEmail = inputEmail.value;
  const userPassword = inputPassword.value;

  const userLog = users.find(
    (user) => user.email === userEmail && user.password === userPassword
  );

  if (!userLog) {
    alert("Email ou senha inválidos!");
    return;
  }

  // Login correto - redireciona para home
  console.log("Login bem-sucedido:", userLog);
  window.location.href = "/src/pages/home.html";
});
