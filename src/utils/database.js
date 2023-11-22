import firebase from "firebase";


const firebaseConfig = require("./firebase.json");
firebase.initializeApp(firebaseConfig);


const db = firebase.database();

export function salvarRegistro(path, dados) {
  db.ref(path).set(dados);
}

export function lerRegistro(path) {
  return db.ref(path).once("value").then((snapshot) => snapshot.val());
}

export function atualizarRegistro(path, dados) {
  db.ref(path).update(dados);
}

export function excluirRegistro(path) {
  db.ref(path).remove();
}
