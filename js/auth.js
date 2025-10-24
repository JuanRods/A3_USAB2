// Contas padrão (unificadas)
let users = [
  { email: "user@gmail.com", password: "1234", role: "user" },
  { email: "admin@gmail.com", password: "1234", role: "admin" }
];



// Registrar nova conta (apenas usuários comuns)
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

// Login com redirecionamento baseado no tipo de usuário
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));

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

// Proteção de rotas por role
const logged = JSON.parse(localStorage.getItem("loggedUser"));
const path = window.location.pathname;

if (path.includes("admin.html") && (!logged || logged.role !== "admin")) {
  window.location.href = "index.html";
}

if (path.includes("dashboard.html") && (!logged || logged.role !== "user")) {
  window.location.href = "index.html";
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 0);
  }
});
