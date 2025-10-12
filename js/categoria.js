const jogos = [
  { nome: "The Witcher 3: Wild Hunt", ano: 2015, preco: 59.99, descricao: "Um RPG de mundo aberto aclamado pela crítica.", dev: "CD Projekt Red", categoria: "RPG" },
  { nome: "Grand Theft Auto V", ano: 2013, preco: 29.99, descricao: "Um jogo de ação e aventura em mundo aberto.", dev: "Rockstar Games", categoria: "Ação" },
  { nome: "Red Dead Redemption 2", ano: 2018, preco: 59.99, descricao: "Um épico de faroeste da Rockstar Games.", dev: "Rockstar Games", categoria: "Ação" },
  { nome: "The Legend of Zelda: Breath of the Wild", ano: 2017, preco: 59.99, descricao: "Um jogo de ação e aventura com um vasto mundo para explorar.", dev: "Nintendo", categoria: "Aventura" },
  { nome: "Minecraft", ano: 2011, preco: 26.95, descricao: "Um jogo sandbox onde você pode construir qualquer coisa que imaginar.", dev: "Mojang", categoria: "Sandbox" },
  { nome: "Stardew Valley", ano: 2016, preco: 14.99, descricao: "Um RPG de simulação de fazenda.", dev: "ConcernedApe", categoria: "Simulação" },
  { nome: "Portal 2", ano: 2011, preco: 9.99, descricao: "Um jogo de quebra-cabeça em primeira pessoa.", dev: "Valve", categoria: "Puzzle" },
  { nome: "Half-Life: Alyx", ano: 2020, preco: 59.99, descricao: "Um jogo de realidade virtual que se passa entre os eventos de Half-Life e Half-Life 2.", dev: "Valve", categoria: "VR" },
  { nome: "Cyberpunk 2077", ano: 2020, preco: 59.99, descricao: "Um RPG de ação e aventura em mundo aberto da CD Projekt Red.", dev: "CD Projekt Red", categoria: "RPG" },
  { nome: "Among Us", ano: 2018, preco: 4.99, descricao: "Um jogo de dedução social multiplayer online.", dev: "Innersloth", categoria: "Social" },
  { nome: "A Lenda do Herói", ano: 2016, preco: 59.99, descricao: "Jogo de aventura e quebra-cabeça.", dev: "Dumativa", categoria: "Plataforma" },
  { nome: "Enigma do Medo", ano: 2024, preco: 79.99, descricao: "Jogo de aventura e quebra-cabeça de terror.", dev: "Dumativa", categoria: "Puzzle" },
  { nome: "Horizon Zero Dawn", ano: 2017, preco: 49.99, descricao: "RPG de ação em um mundo pós-apocalíptico.", dev: "Guerrilla Games", categoria: "RPG" },
  { nome: "Bloodborne", ano: 2015, preco: 19.99, descricao: "RPG de ação sombrio e desafiador.", dev: "FromSoftware", categoria: "RPG" },
  { nome: "Call of Duty: Modern Warfare", ano: 2019, preco: 59.99, descricao: "Jogo de tiro em primeira pessoa.", dev: "Infinity Ward", categoria: "Tiro" },
  { nome: "Sekiro: Shadows Die Twice", ano: 2019, preco: 59.99, descricao: "Jogo de ação e aventura com combate intenso.", dev: "FromSoftware", categoria: "Ação" },
  { nome: "The Elder Scrolls V: Skyrim", ano: 2011, preco: 39.99, descricao: "RPG de mundo aberto com dragões e magia.", dev: "Bethesda Game Studios", categoria: "RPG" },
  { nome: "Fallout 4", ano: 2015, preco: 29.99, descricao: "RPG de mundo aberto em um cenário pós-apocalíptico.", dev: "Bethesda Game Studios", categoria: "RPG" },
  { nome: "Resident Evil 7: Biohazard", ano: 2017, preco: 19.99, descricao: "Jogo de terror de sobrevivência em primeira pessoa.", dev: "Capcom", categoria: "Horror" },
  { nome: "Monster Hunter: World", ano: 2018, preco: 29.99, descricao: "RPG de ação onde você caça monstros gigantes.", dev: "Capcom", categoria: "RPG" },
  { nome: "Persona 5 Royal", ano: 2019, preco: 59.99, descricao: "RPG estiloso com elementos de simulação social.", dev: "Atlus", categoria: "RPG" },
  { nome: "Yakuza: Like a Dragon", ano: 2020, preco: 59.99, descricao: "RPG baseado em turnos com uma história cativante.", dev: "Ryu Ga Gotoku Studio", categoria: "RPG" },
];

function criarCard(jogo) {
  const card = document.createElement("div");
  card.className = "card";

  // Favorito (ícone de coração)
  const favIcon = document.createElement("i");
  favIcon.className = "fa-solid fa-heart fav-icon";
  favIcon.title = "Favoritar";
  favIcon.onclick = (e) => {
    e.stopPropagation();
    adicionarFavorito(jogo.nome, jogo.preco);
  };

  const titulo = document.createElement("strong");
  titulo.textContent = jogo.nome;

  const detalhes = document.createElement("small");
  detalhes.textContent = `${jogo.categoria} - ${jogo.ano}`;

  const descricao = document.createElement("p");
  descricao.style.fontSize = "0.8rem";
  descricao.textContent = jogo.descricao;

  const preco = document.createElement("p");
  preco.innerHTML = `<strong>R$ ${jogo.preco.toFixed(2)}</strong>`;

  const botao = document.createElement("button");
  botao.textContent = "Buy";
  botao.onclick = () => adicionarAoCarrinho(jogo.nome, jogo.preco);

  card.appendChild(favIcon);
  card.appendChild(titulo);
  card.appendChild(detalhes);
  card.appendChild(descricao);
  card.appendChild(preco);
  card.appendChild(botao);

  return card;
}

function renderizarJogos(filtrados) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  filtrados.forEach(jogo => {
    const card = criarCard(jogo);
    container.appendChild(card);
  });
}

function adicionarAoCarrinho(nome, preco) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao Carrinho!")
}

function adicionarFavorito(nome, preco) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const existe = favoritos.some(j => j.nome === nome);
  if (!existe) {
    favoritos.push({ nome, preco });
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Adicionado aos favoritos!");
  } else {
    alert("Este jogo já está nos favoritos.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // renderizar todos ou por categoria padrão
  renderizarJogos(jogos);

  document.querySelectorAll(".cardc").forEach(el => {
    el.addEventListener("click", () => {
      const categoria = el.textContent.trim();
      const filtrados = jogos.filter(j => j.categoria === categoria);
      renderizarJogos(filtrados);
    });
  });
});

  renderizarJogos(jogos);