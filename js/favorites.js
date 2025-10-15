document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("favorites-list");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.textContent = "Você ainda não adicionou jogos aos favoritos.";
    lista.appendChild(mensagem);
    return;
  }

  favoritos.forEach((jogo, index) => {
    const card = document.createElement("div");
    card.className = "card_buy";

    const container = document.createElement("div");

    const titulo = document.createElement("h3");
    titulo.textContent = jogo.nome;

    const preco = document.createElement("p");
    preco.textContent = `R$ ${jogo.preco.toFixed(2)}`;

    const botao = document.createElement("button");
    botao.className = "remove-fav";
    botao.dataset.index = index;

    const icone = document.createElement("i");
    icone.className = "fa-solid fa-trash";

    botao.appendChild(icone);
    botao.append(" Remover");

    container.appendChild(titulo);
    container.appendChild(preco);
    container.appendChild(botao);

    card.appendChild(container);
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
