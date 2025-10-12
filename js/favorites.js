document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("favorites-list");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    lista.innerHTML = "<p>Você ainda não adicionou jogos aos favoritos.</p>";
    return;
  }

  favoritos.forEach((jogo, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>
        <h3>${jogo.nome}</h3>
        <p>R$ ${jogo.preco.toFixed(2)}</p>
        <button class="remove-fav" data-index="${index}">
          <i class="fa-solid fa-trash"></i> Remover
        </button>
      </div>
    `;
    lista.appendChild(card);
  });

  // Remover favorito
  document.querySelectorAll(".remove-fav").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.closest("button").dataset.index);
      favoritos.splice(idx, 1);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      location.reload();
    });
  });
});
