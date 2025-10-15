const descricao = require("categoria.js");

document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const index = parseInt(params.get("index"));

      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      if (!favoritos[index]) {
        document.getElementById("descricao-container").textContent = "Jogo não encontrado.";
        return;
      }

      const jogo = favoritos[index];
      const container = document.getElementById("descricao-container");

      const titulo = document.createElement("h1");
      titulo.textContent = jogo.nome;

      const preco = document.createElement("p");
      preco.textContent = `Preço: R$ ${jogo.preco.toFixed(2)}`;

      const descricao = document.createElement("p");
      descricao.textContent = jogo.descricao || "Sem descrição disponível.";

      container.appendChild(titulo);
      container.appendChild(preco);
      container.appendChild(descricao);
    });