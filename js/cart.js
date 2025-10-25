
 document.addEventListener("DOMContentLoaded", () => {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");
  const subtotalSpan = document.getElementById("subtotal");
  const checkoutBtn = document.querySelector(".checkout");

  const jogos = [
    {
      index: 0,
      nome: "The Witcher 3: Wild Hunt",
      ano: 2015,
      preco: 59.99,
      descricao: "Um RPG de mundo aberto aclamado pela crítica, cheio de missões e decisões que importam.",
      dev: "CD Projekt Red",
      categoria: "RPG",
      imagens: [
        "/img/the-witcher-3.jpg",
        "/img/the-witcher-3-1.jpg",
        "/img/the-witcher-3-2.jpg",
        "/img/the-witcher-3-3.jpg"
      ],
      avaliacoes: [
        "Um dos mundos mais vivos e bem construídos dos games.",
        "História envolvente e personagens memoráveis.",
        "Cada missão é uma pequena obra-prima narrativa."
      ]
    },
    {
      index: 1,
      nome: "Red Dead Redemption 2",
      ano: 2018,
      preco: 59.99,
      descricao: "Um épico de faroeste imersivo da Rockstar, com uma história intensa e mundo aberto vibrante.",
      dev: "Rockstar Games",
      categoria: "Ação",
      imagens: [
        "/img/red-dead2.jpg",
        "/img/red-dead2-1.jpg",
        "/img/red-dead2-2.jpg",
        "/img/red-dead2-3.jpg"
      ],
      avaliacoes: [
        "Ambientação e narrativa no mais alto nível.",
        "Um dos jogos mais detalhados já feitos.",
        "Impossível não se envolver com o elenco e o mundo."
      ]
    },
    {
      index: 2,
      nome: "The Legend of Zelda: Breath of the Wild",
      ano: 2017,
      preco: 59.99,
      descricao: "Aventura de mundo aberto com liberdade total para explorar o reino de Hyrule.",
      dev: "Nintendo",
      categoria: "Aventura",
      imagens: [
        "/img/zelda.jpg",
        "/img/zelda-1.jpg",
        "/img/zelda-2.jpg",
        "/img/zelda-3.jpg"
      ],
      avaliacoes: [
        "Exploração que realmente recompensa a curiosidade.",
        "Visual e trilha sonora inesquecíveis.",
        "Reinvenção brilhante da fórmula Zelda."
      ]
    },
    {
      index: 3,
      nome: "Elden Ring",
      ano: 2022,
      preco: 249.90,
      descricao: "Explore um vasto mundo sombrio criado por Hidetaka Miyazaki e George R.R. Martin.",
      dev: "FromSoftware",
      categoria: "RPG de Ação",
      imagens: [
        "/img/elden-ring.jpg",
        "/img/elden-ring-1.jpg",
        "/img/elden-ring-2.jpg",
        "/img/elden-ring-3.jpg"
      ],
      avaliacoes: [
        "Um marco nos jogos de mundo aberto.",
        "Desafiante e recompensador em cada detalhe.",
        "Atmosfera e design de mundo impressionantes."
      ]
    },
    {
      index: 4,
      nome: "Grand Theft Auto V",
      ano: 2013,
      preco: 49.99,
      descricao: "Três criminosos em Los Santos: liberdade, caos e ação em um dos jogos mais vendidos da história.",
      dev: "Rockstar Games",
      categoria: "Ação / Mundo Aberto",
      imagens: [
        "/img/gta5.jpg",
        "/img/gta5-1.jpg",
        "/img/gta5-2.jpg",
        "/img/gta5-3.jpg"
      ],
      avaliacoes: [
        "Diversão e liberdade total em um mundo vibrante.",
        "Humor, ação e momentos inesquecíveis.",
        "Um clássico moderno que continua atual."
      ]
    },
    {
      index: 5,
      nome: "Dark Souls III",
      ano: 2016,
      preco: 39.99,
      descricao: "Desafie a morte em um mundo devastado pelo fogo e pelas trevas.",
      dev: "FromSoftware",
      categoria: "RPG de Ação",
      imagens: [
        "/img/dark-souls3.jpg",
        "/img/dark-souls3-1.jpg",
        "/img/dark-souls3-2.jpg",
        "/img/dark-souls3-3.jpg"
      ],
      avaliacoes: [
        "Difícil, mas extremamente satisfatório.",
        "Cada vitória é uma conquista épica.",
        "Design de níveis e inimigos impecável."
      ]
    },
    {
      index: 6,
      nome: "Assassin’s Creed Valhalla",
      ano: 2020,
      preco: 199.99,
      descricao: "Viva a saga de Eivor, um guerreiro viking em busca de um novo lar na Inglaterra.",
      dev: "Ubisoft",
      categoria: "Ação / Aventura",
      imagens: [
        "/img/ac-valhalla.jpg",
        "/img/ac-valhalla-1.jpg",
        "/img/ac-valhalla-2.jpg",
        "/img/ac-valhalla-3.jpg"
      ],
      avaliacoes: [
        "Imersão total na era viking.",
        "Paisagens deslumbrantes e combates intensos.",
        "Uma das melhores histórias da franquia."
      ]
    },
    {
      index: 7,
      nome: "Resident Evil 4 Remake",
      ano: 2023,
      preco: 249.90,
      descricao: "Reviva o clássico do terror com gráficos modernos e gameplay refinado.",
      dev: "Capcom",
      categoria: "Terror / Ação",
      imagens: [
        "/img/re4-remake.jpg",
        "/img/re4-remake-1.jpg",
        "/img/re4-remake-2.jpg",
        "/img/re4-remake-3.jpg"
      ],
      avaliacoes: [
        "Um remake feito com excelência.",
        "Atmosfera tensa e jogabilidade fluida.",
        "Respeita o original e eleva a experiência."
      ]
    },
    {
      index: 8,
      nome: "Cyberpunk 2077",
      ano: 2020,
      preco: 59.99,
      descricao: "Um RPG futurista em Night City com missões profundas e liberdade total.",
      dev: "CD Projekt Red",
      categoria: "RPG / Futurista",
      imagens: [
        "/img/cyberpunk.jpg",
        "/img/cyberpunk-1.jpg",
        "/img/cyberpunk-2.jpg",
        "/img/cyberpunk-3.jpg"
      ],
      avaliacoes: [
        "Night City é uma experiência visual incrível.",
        "Personagens marcantes e história imersiva.",
        "Melhor a cada atualização — vale muito a pena."
      ]
    },
    {
      index: 9,
      nome: "God of War (2018)",
      ano: 2018,
      preco: 199.99,
      descricao: "Kratos embarca em uma jornada épica com seu filho Atreus em terras nórdicas.",
      dev: "Santa Monica Studio",
      categoria: "Ação / Aventura",
      imagens: [
        "/img/gow-2018.jpg",
        "/img/gow-2018-1.jpg",
        "/img/gow-2018-2.jpg",
        "/img/gow-2018-3.jpg"
      ],
      avaliacoes: [
        "História poderosa e emocionante.",
        "Visual e combate impressionantes.",
        "Uma das maiores reimaginações dos games."
      ]
    },
    {
      index: 10,
      nome: "God of War: Ragnarök",
      ano: 2022,
      preco: 299.90,
      descricao: "A saga de Kratos e Atreus continua em um confronto apocalíptico com os deuses nórdicos.",
      dev: "Santa Monica Studio",
      categoria: "Ação / Aventura",
      imagens: [
        "/img/gow-ragnarok.jpg",
        "/img/gow-ragnarok-1.jpg",
        "/img/gow-ragnarok-2.jpg",
        "/img/gow-ragnarok-3.jpg"
      ],
      avaliacoes: [
        "Uma sequência à altura do original.",
        "Momentos épicos e cheios de emoção.",
        "Combate e narrativa no seu auge."
      ]
    },
    {
      index: 11,
      nome: "Horizon Forbidden West",
      ano: 2022,
      preco: 249.90,
      descricao: "Explore um mundo vibrante e lute contra máquinas colossais com Aloy.",
      dev: "Guerrilla Games",
      categoria: "Aventura / Mundo Aberto",
      imagens: [
        "/img/horizon-fw.jpg",
        "/img/horizon-fw-1.jpg",
        "/img/horizon-fw-2.jpg",
        "/img/horizon-fw-3.jpg"
      ],
      avaliacoes: [
        "Visualmente deslumbrante.",
        "Mundo vivo e cheio de detalhes.",
        "Uma continuação digna e empolgante."
      ]
    },
    {
      index: 12,
      nome: "Spider-Man Remastered",
      ano: 2022,
      preco: 199.99,
      descricao: "Seja o Homem-Aranha em uma Nova York vibrante com gráficos incríveis e combate fluido.",
      dev: "Insomniac Games",
      categoria: "Ação / Aventura",
      imagens: [
        "/img/spiderman.jpg",
        "/img/spiderman-1.jpg",
        "/img/spiderman-2.jpg",
        "/img/spiderman-3.jpg"
      ],
      avaliacoes: [
        "Sensação incrível de ser o Homem-Aranha.",
        "Movimentação fluida e divertida.",
        "História envolvente e bem dublada."
      ]
    },
    {
      index: 13,
      nome: "Spider-Man: Miles Morales",
      ano: 2020,
      preco: 199.99,
      descricao: "Miles Morales assume o legado do Homem-Aranha em uma nova aventura eletrizante.",
      dev: "Insomniac Games",
      categoria: "Ação / Aventura",
      imagens: [
        "/img/miles-morales.jpg",
        "/img/miles-morales-1.jpg",
        "/img/miles-morales-2.jpg",
        "/img/miles-morales-3.jpg"
      ],
      avaliacoes: [
        "Carismático e cheio de energia.",
        "Visual incrível e trilha sonora marcante.",
        "Curtinho, mas muito bem feito."
      ]
    },
    {
      index: 14,
      nome: "Sekiro: Shadows Die Twice",
      ano: 2019,
      preco: 199.99,
      descricao: "Torne-se um guerreiro shinobi em uma jornada brutal e precisa por vingança.",
      dev: "FromSoftware",
      categoria: "Ação / Desafio",
      imagens: [
        "/img/sekiro.jpg",
        "/img/sekiro-1.jpg",
        "/img/sekiro-2.jpg",
        "/img/sekiro-3.jpg"
      ],
      avaliacoes: [
        "Sistema de combate genial.",
        "Desafio justo e recompensador.",
        "Visual e ambientação de tirar o fôlego."
      ]
    },
    {
      index: 15,
      nome: "Death Stranding",
      ano: 2019,
      preco: 149.99,
      descricao: "Um mundo pós-apocalíptico onde conectar pessoas é a chave para reconstruir a civilização.",
      dev: "Kojima Productions",
      categoria: "Aventura / Exploração",
      imagens: [
        "/img/death-stranding.jpg",
        "/img/death-stranding-1.jpg",
        "/img/death-stranding-2.jpg",
        "/img/death-stranding-3.jpg"
      ],
      avaliacoes: [
        "Único e diferente de tudo no mercado.",
        "Visual cinematográfico e atmosfera intensa.",
        "Um jogo que marca pela originalidade."
      ]
    },
    {
      index: 16,
      nome: "Ghost of Tsushima",
      ano: 2020,
      preco: 249.99,
      descricao: "Lute pela liberdade do Japão feudal como Jin Sakai, o Fantasma de Tsushima.",
      dev: "Sucker Punch",
      categoria: "Ação / Aventura",
      imagens: [
        "/img/ghost-tsushima.jpg",
        "/img/ghost-tsushima-1.jpg",
        "/img/ghost-tsushima-2.jpg",
        "/img/ghost-tsushima-3.jpg"
      ],
      avaliacoes: [
        "Uma carta de amor ao Japão feudal.",
        "Visual cinematográfico e combates elegantes.",
        "Atmosfera serena e intensa ao mesmo tempo."
      ]
    },
    {
      index: 17,
      nome: "Call of Duty: Modern Warfare II",
      ano: 2022,
      preco: 299.99,
      descricao: "A experiência de tiro definitiva com gráficos e jogabilidade de nova geração.",
      dev: "Infinity Ward",
      categoria: "FPS",
      imagens: [
        "/img/mw2.jpg",
        "/img/mw2-1.jpg",
        "/img/mw2-2.jpg",
        "/img/mw2-3.jpg"
      ],
      avaliacoes: [
        "Ação frenética e controles precisos.",
        "Campanha curta, mas cinematográfica.",
        "Multiplayer viciante e dinâmico."
      ]
    },
    {
      index: 18,
      nome: "Baldur’s Gate 3",
      ano: 2023,
      preco: 299.99,
      descricao: "Um dos RPGs mais complexos e aclamados, com liberdade total de escolhas.",
      dev: "Larian Studios",
      categoria: "RPG / Estratégia",
      imagens: [
        "/img/bg3.jpg",
        "/img/bg3-1.jpg",
        "/img/bg3-2.jpg",
        "/img/bg3-3.jpg"
      ],
      avaliacoes: [
        "Interatividade e escolhas como nunca antes.",
        "História profunda e personagens marcantes.",
        "RPG de mesa em sua forma mais moderna."
      ]
    },
    {
      index: 19,
      nome: "Monster Hunter: World",
      ano: 2018,
      preco: 29.99,
      descricao: "Caçe monstros colossais em um ecossistema vivo e dinâmico.",
      dev: "Capcom",
      categoria: "RPG / Ação",
      imagens: [
        "/img/mhw.jpg",
        "/img/mhw-1.jpg",
        "/img/mhw-2.jpg",
        "/img/mhw-3.jpg"
      ],
      avaliacoes: [
        "Caçadas empolgantes e monstros incríveis.",
        "Sistema cooperativo muito divertido.",
        "Visual impressionante e fluidez exemplar."
      ]
    },
    {
      index: 20,
      nome: "Far Cry 6",
      ano: 2021,
      preco: 249.99,
      descricao: "Lidere uma revolução contra um ditador em uma ilha caribenha dominada pela guerra.",
      dev: "Ubisoft",
      categoria: "Ação / Mundo Aberto",
      imagens: [
        "/img/farcry6.jpg",
        "/img/farcry6-1.jpg",
        "/img/farcry6-2.jpg",
        "/img/farcry6-3.jpg"
      ],
      avaliacoes: [
        "Explosivo, colorido e cheio de personalidade.",
        "Vilão marcante e missões variadas.",
        "Ótimo equilíbrio entre humor e ação."
      ]
    },
    {
      index: 21,
      nome: "Starfield",
      ano: 2023,
      preco: 349.99,
      descricao: "Uma nova era da Bethesda — explore galáxias, planetas e civilizações desconhecidas.",
      dev: "Bethesda",
      categoria: "RPG / Exploração",
      imagens: [
        "/img/starfield.jpg",
        "/img/starfield-1.jpg",
        "/img/starfield-2.jpg",
        "/img/starfield-3.jpg"
      ],
      avaliacoes: [
        "Exploração espacial fascinante.",
        "Grande sensação de descoberta.",
        "Um universo cheio de possibilidades."
      ]
    }
  ];
  // Garantir que descricao.js esteja carregado


  // Se o carrinho estiver vazio
  if (carrinho.length === 0) {
    container.innerHTML = "<p class='cart-empty'>Seu carrinho está vazio.</p>";
    checkoutBtn.style.display = "none";
    return;
  }

  // Adiciona propriedade quantidade se não existir
  carrinho.forEach(item => {
    if (!item.quantidade) item.quantidade = 1;
  });

  let total = 0;

  const atualizarTotal = () => {
    total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    totalSpan.textContent = `R$ ${total.toFixed(2)}`;
    subtotalSpan.textContent = `R$ ${total.toFixed(2)}`;
  };

  atualizarTotal();

  // Monta os cards do carrinho
  carrinho.forEach((item, index) => {
    const jogo = jogos.find(j => j.nome === item.nome || j.index === item.index);
    const imgSrc = jogo?.imagens?.[0] || item.imagem || "img/placeholder.jpg"; // 👈 pega a 1ª imagem do array

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-left">
        <img src="${imgSrc}" alt="${item.nome}" class="cart-img">
        <div class="cart-details">
          <h3>${item.nome}</h3>
          <p class="cart-price">R$ ${item.preco.toFixed(2)}</p>
        </div>
      </div>

      <div class="cart-right">
        <button class="qty-btn minus" data-index="${index}">−</button>
        <span class="qty">${item.quantidade}</span>
        <button class="qty-btn plus" data-index="${index}">+</button>
        <i class="fa-solid fa-trash remove-item" data-index="${index}" title="Remover"></i>
      </div>
    `;
    container.appendChild(div);

    // Clique na imagem → descrição
    div.querySelector(".cart-img").addEventListener("click", () => {
      if (jogo) {
        localStorage.setItem("jogoSelecionado", jogo.index);
        window.location.href = `descricao.html?index=${jogo.index}`;

      }
    });
  });

  // Aumentar/diminuir quantidade
  container.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("plus")) {
      carrinho[index].quantidade++;
    } else if (e.target.classList.contains("minus")) {
      carrinho[index].quantidade = Math.max(1, carrinho[index].quantidade - 1);
    } else if (e.target.classList.contains("remove-item")) {
      const itemEl = e.target.closest(".cart-item");
      itemEl.classList.add("removing");
      setTimeout(() => {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        location.reload();
      }, 400);
      return;
    } else return;

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    location.reload();
  });

  // Finalizar compra
  checkoutBtn.addEventListener("click", () => {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    alert(`Compra finalizada com sucesso!\nTotal: ${totalSpan.textContent}`);
    localStorage.removeItem("carrinho");
    window.location.href = "dashboard.html";
  });
});