// Contas padrão (unificadas)
let users = [
  { email: "user@gmail.com", password: "1234", role: "user" },
  { email: "admin@gmail.com", password: "1234", role: "admin" }
];

// Registrar nova conta (só para users comuns)
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
  login();
}

// Login com rota para admin ou user
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    
    // Roteamento por role
    if (user.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    alert("Credenciais inválidas!");
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

// Proteção na dashboard e admin
const logged = JSON.parse(localStorage.getItem("loggedUser"));
if (window.location.pathname.includes("dashboard.html")) {
  if (!logged || logged.role !== "user") {
    window.location.href = "index.html";
  } else {
    console.log("Bem-vindo:", logged.email, "Role:", logged.role);
  }
}

if (window.location.pathname.includes("admin.html")) {
  if (!logged || logged.role !== "admin") {
    window.location.href = "index.html";
  } else {
    console.log("Bem-vindo Admin:", logged.email);
  }
}
