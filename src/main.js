import cadastro from './pages/cadastro/cadastro.js';
import login from './pages/login/login.js';

const main = document.querySelector('#main');

const exibirLogin = () => {
  main.appendChild(login());
};

exibirLogin();

const exibirCadastro = () => {
  main.appendChild(cadastro());
};

exibirCadastro();
