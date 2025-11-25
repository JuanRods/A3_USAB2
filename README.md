Projeto Acadêmico — UC Usabilidade (A3) – Prof. Adailton

Tok-Store é uma plataforma web inspirada em lojas digitais como Steam, Epic Games e GOG, desenvolvida para estudo e aplicação de técnicas modernas de usabilidade, arquitetura front-end e integração com API REST.
O sistema inclui área do usuário, painel administrativo completo, gráficos interativos, autenticação JWT, avaliações, carrinho, wishlist e muito mais.

🚀 Tecnologias Utilizadas
Frontend (SPA - React.js)

React 18 (SPA estruturada por rotas)

React Router DOM

Hooks (useState, useEffect, useRef, Context API)

Context API para sistema global de Toast/Confirmação

Protected Routes com controle de role

Font Awesome (ícones)

Chart.js (gráficos dos relatórios)

Estilos via CSS modular por página (usePageCss)

Fetch API + JWT

Backend (API REST)

Endpoints RESTful para:

Usuários / Autenticação

Jogos

Categorias

Empresas

Avaliações

Vendas / Relatórios

Respostas estruturadas em JSON

Autenticação via Token JWT

Middleware de validação de autorização

🌐 Arquitetura Geral

A aplicação segue o padrão Cliente–Servidor, onde:

O backend expõe rotas REST (/api/v1/*)

O frontend React consome essas rotas usando funções como fetchWithAuth

O token JWT é salvo localmente e enviado automaticamente em rotas protegidas

As páginas React se comunicam com a API para exibir e atualizar dados

Fluxo simplificado:

Usuário loga → backend valida → retorna token e perfil

React salva o token e habilita navegação interna

Cada página consome endpoints específicos

Componentes atualizam interface com Hooks

ToastContext exibe mensagens globais de sucesso/erro

Rotas como /admin/* só podem ser acessadas por usuários "admin"

📌 Principais Funcionalidades
👤 Área do Usuário

Login e autenticação via JWT

Dashboard inicial

Busca de jogos

Página de descrição completa

Wishlist com persistência

Carrinho de compras

Finalização de compra

Avaliação e média de notas

Página de perfil com:

Alteração de nome

Alteração de senha

Histórico de compras

Estatísticas pessoais (jogos, gasto total, wishlist)

🛠️ Painel Administrativo Completo

A área administrativa foi construída com rotas protegidas, usando <ProtectedRoute role="admin">.

Módulos:

✔ Dashboard com números gerais
✔ CRUD de Empresas
✔ CRUD de Categorias
✔ CRUD de Jogos
✔ Avaliações agrupadas por jogo
✔ Relatórios com Chart.js:

Jogos mais vendidos

Faturamento mensal

Ranking por categoria

Ranking por empresa

Jogos melhor avaliados

Radar com médias de avaliação

Todos os módulos têm:

Formulários dinâmicos

Validações

Toasts de sucesso/erro

Confirmação antes de excluir

Tabelas responsivas

🔔 Sistema Global de Notificações (ToastContext.jsx)

O projeto usa um Context Provider próprio com:

🔹 Toasts normais

Para feedback rápido (sucesso, erro, alerta, info)

🔹 Toast de Confirmação

Ex.: “Tem certeza que deseja excluir esta empresa?”

Esse sistema é reutilizado em todas as partes da aplicação.

📂 Estrutura de Pastas (React)
src/
│
├── App.jsx                 # Rotas principais + ProtectedRoute
├── main.jsx                # Entrada da aplicação
├── ToastContext.jsx        # Sistema de toast global
├── public/
    └── css/
    └── img/

🧠 Integração Front-End + Back-End (Resumo Técnico)

O React recebe dados do servidor usando fetch + JSON

fetchWithAuth injeta o token JWT automaticamente

O backend retorna status + mensagens → o cliente exibe via showToast

Rotas protegidas checam o role do usuário antes de renderizar a página

Gráficos utilizam dados consolidados no frontend a partir das APIs

Todas as ações CRUD seguem padrão REST:

GET listar

POST criar

PUT atualizar

DELETE remover

📝 Como Executar o Projeto
🔹 Requisitos:

Node.js 18+

Backend rodando em http://localhost:3000/api/v1

🔹 Instalação:
npm install Para o Back
npm run dev Para o Front


A interface abrirá em:

http://localhost:5173

🔐 Credenciais de Teste
Perfil	Email	Senha
Usuário	cliente@avjd.com
	cliente123
Administrador	admin@avjd.com
	admin123
👥 Autores

Projeto desenvolvido por:

Juan Rodrigues - 12723131891

Bruno de Menezes Sales - 1272313072

Nicolle Brasil dos Santos Nery - 12723115108

Gustavo Burgos Bittencourt Figueiredo - 12723119076

Diego Amaro Ferreira - 12723130335

Projeto criado para cumprir os requisitos propostos pelo professor Adailton na UC de Usabilidade.
