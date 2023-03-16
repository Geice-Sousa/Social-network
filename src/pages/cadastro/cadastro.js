/* eslint-disable max-len */
import { criarCadastro } from '../../firebase/firebase';

const cadastro = () => {
  const criaCadastro = document.createElement('section');
  const header = document.querySelector('.header');
  const template = ` 
    <img class="img-fundo" src="imagens/background_mobile_preto-removebg-preview.png" alt="">
    
    <div class="mensagem-cadastro">
      <h3>Bem-vinda à nossa área de cadastro. Por favor, preencha as informações abaixo</h3>
    </div>
    
    <div class="caixa-cadastro">
      <form class="form-cadastro">
        <label for="nome">Nome e Sobrenome</label>
        <input type="text" id="nome" required>

        <label for="data">Data de nascimento</label>
        <input type="date" name="" id="data" required>

        <label for="email">E-mail</label>
        <input type="email" name="" id="email" required>

        <label for="senha">Crie uma senha</label>
        <input type="password" name="" id="senha" minlength="6" required>

        <label for="tel">Telefone</label>
        <input type="tel" name="" id="tel">

        <label for="filhos">Nº defilhas/os</label>
        <input type="tel" name="" id="filhos" required> <!-- tel pq aparece o teclado de nº  -->
        
        <input class="btn-enviar" type="submit" value="Enviar">
      </form>
    </div>
  `;

  header.textContent = '';
  criaCadastro.innerHTML = template;

  // criação de cadastro com o firebase

  const nome = 

  const dataNascimento =

  const inputEmail = criaCadastro.querySelector('#email');

  const inputSenha = criaCadastro.querySelector('#senha');
  const senha = inputSenha.value; // usar para dizer que tem que ser > 6 caracters

  const btnEnviar = criaCadastro.querySelector('.btn-enviar');

  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const senha = inputSenha.value;
    console.log(email, senha);

    criarCadastro(email, senha);

    // se o email já tiver cadastrado: "Esse email já foi cadastrado anteriormente, basta fazer o login"
  });

  return criaCadastro;
};

export default cadastro;
