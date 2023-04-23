/* eslint-disable consistent-return */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable space-before-blocks */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, sendEmailVerification, GoogleAuthProvider,
  signInWithPopup, signOut, updateProfile,
} from 'firebase/auth';
import { app } from './firebase.config.js';

const auth = getAuth(app);

export function criarCadastro(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((usuaria) => updateProfile(usuaria.user, { displayName: name }));
}

export function fazerLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function observador() { // verifica se tem usuário logado ou não
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      return false;
    }
  });
}

export function verificarEmail(){
  return sendEmailVerification(auth.currentUser)
    .then(() => {
    })
    .catch((error) => {
      console.log(error);
    });
}

export function loginComGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function sair() {
  return signOut(auth).then(() => {
  }).catch((error) => {
    console.log(error);
  });
}

export function nomeUsuaria() {
  const user = auth.currentUser;
  console.log(user);
  if (user){
    return user.name;
  }
}

export function dadosUsuaria() {
  const dataPostagem = new Date();
  const user = auth.currentUser;
  const usuaria = {
    userId: user.uid,
    userName: user.displayName,
    userEmail: user.email,
    dataPostagem: dataPostagem.toLocaleString(),
    curtidas: 0,
  };
  return usuaria;
}
