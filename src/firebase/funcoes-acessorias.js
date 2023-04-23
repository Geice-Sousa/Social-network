/* eslint-disable default-case */
/* eslint-disable no-alert */
import { auth } from './firebase-auth';
import iconeMao from '../imagens/mulher-mao-com-uma-taca-de-vinho-transbordando-removebg-preview.png';

export function maiorDe18(dataNascimento) {
  // verifica se é maior de 18
  const dataAtual = new Date();
  const idadeAtual = dataNascimento.split('-');
  const anos = dataAtual.getFullYear() - idadeAtual[0];

  if (anos >= 18) {
    return true;
  }
  return false;
}

export function exibeErros(erro) {
  switch (erro.code) {
    case 'auth/email-already-exists':
      return 'Esse email já foi cadastrado anteriormente, basta fazer o login';

    case 'auth/user-not-found':
      return 'Este usuário não existe, crie um cadastro';

    case 'auth/too-many-requests':
      return 'Houve uma sobrecarga no sistema, tente novamente em alguns instantes';

    case 'auth/internal-error':
      return 'Houve um erro inesperado, tente novemente em alguns instantes';

    case 'auth/cancelled-popup-request':
      return 'Solicitação cancelada';

    case 'auth/popup-closed-by-user':
      return 'A janela pop-up para o login com Google foi fechada';

    case 'auth/wrong-password':
      return 'Senha incorreta';

    case 'auth/network-request-failed':
      return 'Houve um problema de conexão com a internet';

    case 'auth/invalid-email':
      return 'O email fornecido é inválido, tente novamente';

    case 'auth/missing-email':
      return 'Digite um email para fazer login';

    case 'auth/email-already-in-use':
      return 'Este email já está sendo usado, faça login ou cadastre outro email';

    default:
      return 'ocorreu um erro inesperado';
  }
}

export function pegaDados(querySnapshot) { // pega tudo o texto publicado pela usuaria na coleção
  let recebeDados = '';
  querySnapshot.forEach((doc) => {
    const publicacao = doc.data(); // cada documento do firebase
    recebeDados += ` 
    <div class="postagem-amigas">
          
      <section class="postagem-data">
        <img src="${iconeMao}" class="icone-usuaria">
        <p class="perfil-usuaria">${publicacao.userName}</p>
        <p class="data-postagem">${publicacao.dataPostagem}</p>
      </section>

      <div class="postagens">
        <textarea class="texto-usuaria-postado" id="texto-usuaria-postado" cols="50%" rows="5%" disabled>${publicacao.descricao}</textarea>

        <div class="icones-inferiores">
          <p class="numero-curtidas"> ${publicacao.curtidas}</p>

          <button class="btn-curtir" data-id="${doc.id}" title="curtir">
            <i type="button"  >🥂</i>
          </button>
          ${auth.currentUser.uid === publicacao.userId ? `
          <button class="btn-excluir">
            <i class="fa-solid fa-trash-can" type="button" data-id="${doc.id}" title="excluir"></i>
          </button>

          <button class="btn-editar">
            <i class="fa-sharp fa-solid fa-pen-to-square" class="btn-editar" type="button" data-id="${doc.id}" title="editar"></i>
          </button>` : ''}
         
        </div>
      </div>
    </div>
  `;
  });

  return recebeDados;
}
