// Contas padrão
let users = [
  { email: "admin@gmail.com", password: "1234", role: "admin" },
  { email: "user@gmail.com", password: "1234", role: "user" }
];

// Registrar nova conta
function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    alert("Já existe uma conta com esse email!");
    return;
  }

  users.push({ email, password, role: "user" });
  alert("Conta criada com sucesso!");
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciais inválidas!");
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "/index/login.html";
}

// Proteção no dashboard
if (window.location.pathname.includes("dashboard.html")) {
  const logged = JSON.parse(localStorage.getItem("loggedUser"));
  if (!logged) {
    window.location.href = "index.html";
  } else {
    console.log("Bem-vindo:", logged.email, "Role:", logged.role);
  }
}
