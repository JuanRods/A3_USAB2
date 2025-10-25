// ============================
// TOK-STORE — AUTH.JS UNIFICADO
// ============================

// Contas padrão (persistem no localStorage)
let users = JSON.parse(localStorage.getItem("users")) || [
  { email: "user@gmail.com", password: "1234", role: "user" },
  { email: "admin@gmail.com", password: "1234", role: "admin" },
];

// Salva novamente para manter atualizado
localStorage.setItem("users", JSON.stringify(users));


// ============================
// FORM CONTROL
// ============================

function showForm(formId) {
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
  document.getElementById(formId).classList.add("active");
}


// ============================
// LOGIN
// ============================

function login() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) return alert("Preencha todos os campos!");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Credenciais inválidas!");
    return;
  }

  localStorage.setItem("loggedUser", JSON.stringify(user));
  alert(`Bem-vindo de volta, ${user.email}!`);

  if (user.role === "admin") {
    window.location.href = "/html/admin/admin.html";
  } else {
    window.location.href = "/html/user/dashboard.html";
  }
}


// ============================
// REGISTRO
// ============================

function register() {
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();

  if (!email || !password) return alert("Preencha todos os campos!");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find(u => u.email === email);

  if (exists) return alert("Já existe uma conta com esse email!");

  users.push({ email, password, role: "user" });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Conta criada com sucesso!");
  showForm("login-form");
}


// ============================
// ESQUECI SENHA (simulação)
// ============================

function forgotPassword() {
  const email = document.getElementById("forgot-email").value.trim();

  if (!email) return alert("Digite seu e-mail!");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email);

  if (!user) return alert("E-mail não encontrado!");

  alert("Link de redefinição enviado para o e-mail (simulação).");
  showForm("login-form");
}


// ============================
// LOGOUT
// ============================

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "/index.html";
}


// ============================
// PROTEÇÃO DE ROTAS
// ============================

const logged = JSON.parse(localStorage.getItem("loggedUser"));
const path = window.location.pathname;

if (path.includes("admin.html") && (!logged || logged.role !== "admin")) {
  window.location.href = "/index.html";
}

if (path.includes("dashboard.html") && (!logged || logged.role !== "user")) {
  window.location.href = "/index.html";
}
