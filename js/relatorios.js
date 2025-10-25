const vendasCanvas = document.getElementById('chartVendas');
const categoriaCanvas = document.getElementById('chartCategoria');
const empresaCanvas = document.getElementById('chartEmpresa');
const evolucaoCanvas = document.getElementById('chartEvolucao');
const notasCanvas = document.getElementById('chartNotas');

Chart.defaults.font.family = 'Poppins';
Chart.defaults.font.size = 12;

// 1️⃣ Jogos mais vendidos
new Chart(vendasCanvas, {
  type: 'bar',
  data: {
    labels: ['The Witcher 3', 'GTA V', 'Minecraft', 'Red Dead 2', 'FIFA 25'],
    datasets: [{
      label: 'Vendas (milhares)',
      data: [15, 13, 11, 9, 8],
      backgroundColor: ['#3b82f6','#6366f1','#10b981','#f59e0b','#ef4444'],
      borderRadius: 8
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
      x: { grid: { display: false } }
    }
  }
});

// 2️⃣ Ranking por categoria
new Chart(categoriaCanvas, {
  type: 'pie',
  data: {
    labels: ['RPG', 'Ação', 'Esporte', 'Simulação', 'Terror'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: ['#3b82f6','#10b981','#f59e0b','#6366f1','#ef4444'],
      hoverOffset: 6
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed}%` } }
    }
  }
});

// 3️⃣ Vendas por empresa
new Chart(empresaCanvas, {
  type: 'bar',
  data: {
    labels: ['CD Projekt', 'Rockstar', 'Mojang', 'EA', 'Ubisoft'],
    datasets: [{
      label: 'Vendas totais (milhões)',
      data: [32, 28, 18, 15, 10],
      backgroundColor: '#6366f1',
      borderRadius: 6
    }]
  },
  options: {
    indexAxis: 'y',
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
      y: { grid: { display: false } }
    }
  }
});

// 4️⃣ Evolução de vendas mensais
new Chart(evolucaoCanvas, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
    datasets: [{
      label: 'Vendas Mensais',
      data: [500, 600, 800, 750, 900, 1100, 950, 1200, 1300],
      borderColor: '#3b82f6',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(59,130,246,0.15)',
      pointRadius: 4,
      pointBackgroundColor: '#1d4ed8'
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: false },
      x: { grid: { display: false } }
    }
  }
});

// 5️⃣ Avaliações médias por jogo
new Chart(notasCanvas, {
  type: 'radar',
  data: {
    labels: ['The Witcher 3', 'GTA V', 'Minecraft', 'Red Dead 2', 'FIFA 25'],
    datasets: [{
      label: 'Nota média (0–10)',
      data: [9.5, 9.2, 8.9, 9.0, 8.4],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16,185,129,0.2)',
      pointBackgroundColor: '#10b981'
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { stepSize: 2 },
        grid: { color: 'rgba(0,0,0,0.08)' }
      }
    }
  }
});
