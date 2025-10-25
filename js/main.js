// main.js — interações globais mínimas, chatbot e header behavior
document.addEventListener("DOMContentLoaded", () => {
  // Header scrolled class (preserva o comportamento do auth.js também)
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  // Search button (apenas foco/submit visual — a busca real está em categoria.js)
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('busca');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      // dispara evento de input para categoria.js que já escuta
      const ev = new Event('input', { bubbles: true });
      searchInput.dispatchEvent(ev);
      searchInput.focus();
    });
  }

  // Toggle categorias (se categoria.js já faz, este é fallback seguro)
  const toggleGenres = document.getElementById('toggle-genres');
  const categoryList = document.getElementById('category-list');
  toggleGenres?.addEventListener('click', () => {
    if (!categoryList) return;
    const isHidden = getComputedStyle(categoryList).display === 'none';
    categoryList.style.display = isHidden ? 'flex' : 'none';
  });

  // Simple carousel arrow wiring (categoria.js também cria mais robusto; aqui só garantia mínima)
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slide = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.carousel-item');
  const dotsContainer = document.querySelector('.nav-dots');

  if (slide && items.length) {
    let currentIndex = 0;
    const total = items.length;

    // create dots only if not present (categoria.js creates them, mas garantimos)
    if (dotsContainer && dotsContainer.children.length === 0) {
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
      dotsContainer.children[0]?.classList.add('active');
    }

    function goToSlide(i) {
      if (i < 0) i = total - 1;
      else if (i >= total) i = 0;
      const offset = -i * (100 / total);
      slide.style.transform = `translateX(${offset}%)`;
      currentIndex = i;
      document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
      document.querySelectorAll('.dot')[currentIndex]?.classList.add('active');
    }

    prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));
    setInterval(() => goToSlide(currentIndex + 1), 10000);
  }

  /* ======================
     Chatbot UI (frontend)
     - Por enquanto o chat envia apenas localmente (fallback)
     - Para integrar com backend, apontar /api/chat no fetch abaixo
     ====================== */
  const chatbotBtn = document.getElementById('chatbot-btn');
  const chatbotBox = document.getElementById('chatbot-box');
  const sendBtn = document.getElementById('send-btn');
  const chatInput = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');

  chatbotBtn?.addEventListener('click', () => {
    chatbotBox.classList.toggle('hidden');
    const hidden = chatbotBox.classList.contains('hidden');
    chatbotBox.setAttribute('aria-hidden', hidden ? 'true' : 'false');
  });

  sendBtn?.addEventListener('click', sendMessage);
  chatInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

  function appendMessage(text, who = 'bot') {
    const p = document.createElement('p');
    p.className = who === 'user' ? 'user' : 'bot';
    p.textContent = text;
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  async function sendMessage() {
    const text = chatInput.value?.trim();
    if (!text) return;
    appendMessage('🧑 ' + text, 'user');
    chatInput.value = '';

    // colocando mensagem temporária
    appendMessage('🤖 pensando...', 'bot');

    try {
      // Se você tiver backend, altere a URL para /api/chat
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (!res.ok) throw new Error('Servidor indisponível');

      const data = await res.json();
      // remove último "pensando..." se existir
      const lastBot = Array.from(chatBody.querySelectorAll('p.bot')).reverse().find(el => el.textContent.includes('pensando'));
      if (lastBot) lastBot.remove();

      appendMessage('🤖 ' + (data.reply || data.message || 'Sem resposta.'), 'bot');

    } catch (err) {
      // fallback local (não altera nada nos seus outros scripts)
      const lastBot = Array.from(chatBody.querySelectorAll('p.bot')).reverse().find(el => el.textContent.includes('pensando'));
      if (lastBot) lastBot.remove();
      appendMessage('🤖 (demo offline) Ainda não consigo conectar ao servidor. Vou responder localmente: Em breve o chat estará disponível.', 'bot');
      console.error(err);
    }
  }

});

