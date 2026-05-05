👥 Projeto em Vite.js - Cadastro de Pessoas
Aplicativo web desenvolvido como parte de um treinamento no curso DevClub, utilizando MongoDB como banco de dados para cadastro de pessoas.

🚀 Tecnologias Utilizadas
React 19

React Router DOM 7

Styled-components

Axios (configurado em Services/api.js)

Vite

ESLint (padronização de código)

⚙️ Instalação e Execução
Clone o repositório:

bash
git clone https://github.com/fabiogarcia-dev/Cadastro-Usuarios.git
Instale as dependências:

bash
npm install
Configure o backend com MongoDB.

Certifique-se de que o banco esteja rodando localmente ou em container.

Execute o projeto:

bash
npm run dev
📖 Uso
Acesse a tela inicial para cadastrar novas pessoas.

Os dados são enviados via Axios para o backend conectado ao MongoDB.

Visualize a lista de usuários cadastrados na página ListUser.

(Sugestão: incluir prints ou GIF mostrando a tela de cadastro e listagem)

✨ Funcionalidades
Cadastro de pessoas com integração ao banco MongoDB.

Listagem de usuários cadastrados.

Componentes reutilizáveis com styled-components.

🛠️ Estrutura do Projeto
Código
src/
 ├── componentes/
 │    ├── Button
 │    ├── Tuttle
 │    └── TopBackground.jsx
 ├── pages/
 │    ├── Home
 │    └── ListUser.jsx
 ├── Services/
 │    └── api.js
 ├── public/
 ├── app.jsx
 ├── index.css
 └── main.jsx
