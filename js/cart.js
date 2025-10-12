document.addEventListener("DOMContentLoaded", () => {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("cart-items");
  const checkoutBtn = document.querySelector(".checkout");

  let total = 0;

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    checkoutBtn.style.display = "none";
    return;
  }

  carrinho.forEach((item) => {
    total += item.preco;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.nome}</span>
      <span>R$ ${item.preco.toFixed(2)}</span>
    `;
    container.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "cart-item";
  totalDiv.innerHTML = `
    <strong>Total</strong>
    <strong>R$ ${total.toFixed(2)}</strong>
  `;
  container.appendChild(totalDiv);

  checkoutBtn.addEventListener("click", () => {
    alert(`Compra finalizada com sucesso!\nTotal: R$ ${total.toFixed(2)}`);
    localStorage.removeItem("carrinho");
    window.location.href = "dashboard.html";
  });
});
