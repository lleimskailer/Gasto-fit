// ============================================================
//  Gasto Fit - configuración de Firebase
//  1) Firebase Console > Configuración del proyecto > Tus apps > App web (</>)
//  2) Copiá los valores de "firebaseConfig" y pegalos abajo.
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, updateProfile, signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyChr947V0NLeBIdIspl_bfqaRRKwcfPrWY",
  authDomain: "gasto-fit.firebaseapp.com",
  projectId: "gasto-fit",
  storageBucket: "gasto-fit.firebasestorage.app",
  messagingSenderId: "475880124067",
  appId: "1:475880124067:web:9cc6d98792c5d5dddd5916",
  measurementId: "G-CG7LXE2S21"
};

export const configured = !String(firebaseConfig.apiKey).startsWith("PEGA_");
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// El usuario escribe solo "juan123"; Firebase recibe "juan123@gasto-fit.local"
export const DOMINIO = "@gasto-fit.local";
export const emailDe = (usuario) => usuario.trim().toLowerCase() + DOMINIO;

export {
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  updateProfile, signOut, doc, getDoc, setDoc
};
