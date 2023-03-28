/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import { fazerLogin, loginComGoogle, observador } from '../../firebase/firebase';
import { exibeErros } from '../../firebase/funcoes-acessorias';
// import postagem from '../postagem/postagem';

const criarLogin = document.createElement('section');

const login = () => {
  const template = `
    <img class="background-desktop" src="imagens\background_desktop_preto-removebg-preview.png" alt="">

    <div class="caixa-login">
      <form class="form-login">
        <input id="login-email" type="email"  placeholder="E-mail" required/>

        <input id="login-senha" type="password" id="password" placeholder="Senha" required/>

        <input class="btn-entrar " type="submit" value="Entrar">
      </form>

    <section class="login-com">
      <p class="login-google">Login com</p>

      <button class="btn-google" type="button">
        <img src="./imagens/icone google.png" alt="icone google">
      </button>

      <p>Ainda não possui cadastro? <br> <a href="/#cadastro">Crie sua conta!</a></p>
    </section>
  </div> 

  <img class="imagem-footer" src="./imagens/brinde_taças-removebg-preview.png" alt="duas mãos próximas segurando taças com vinho simulando um brinde">
  
  `;

  criarLogin.innerHTML = template;

  const form = criarLogin.querySelector('.form-login');
  const loginEmail = criarLogin.querySelector('#login-email');
  const loginSenha = criarLogin.querySelector('#login-senha');
  const btnEntrar = criarLogin.querySelector('.btn-entrar');
  const btnGoogle = criarLogin.querySelector('.btn-google');

  observador();

  btnEntrar.addEventListener('click', (e) => {
    e.preventDefault();

    // validação de preenchimento do form

    if (loginEmail.value === '' || loginSenha.value === '') {
      form.reportValidity();
    } else {
      // validação das informações para realizar login

      fazerLogin(loginEmail.value, loginSenha.value)
      .then(() => {
        window.location.hash = '#postagem';
      }).catch((error) => {
        alert(exibeErros(error));
        // CRIAR UM MODAL PARA EXIBIR OS ERROS
      });
    }
  });

  // login com google

  btnGoogle.addEventListener('click', () => {
    loginComGoogle()
    .then(() => {
      window.location.hash = '#postagem';
    }).catch((error) => {
      console.log(error);
      window.location.hash = '#';
      console.log('não foi possivel concluir o login');
    });
  });

  return criarLogin;
};

export default login;
