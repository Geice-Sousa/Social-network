/* eslint-disable no-unused-vars */
// neste arquivo se concentram as funções relativas ao funcionamento da página SPA.
import login from './pages/login/login.js';
import cadastro from './pages/cadastro/cadastro.js';
import postagem from './pages/postagem/postagem.js';
import { observador } from './firebase/firebase.js';

const main = document.querySelector('#main');

const iniciaTela = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(login());
        break;
      case '#cadastro':
        main.appendChild(cadastro());
        break;
      case '#postagem':
        main.appendChild(postagem());
        break;
      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  observador();
  console.log('main aqui');

  main.appendChild(postagem());

  // main.appendChild(login());
  iniciaTela();
  window.location.hash = '';
});
