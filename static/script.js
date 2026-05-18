import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

//configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZ4kYpF98HmFO8qsbbmmAhiYm1NpkbN3I",
  authDomain: "votacao-432ce.firebaseapp.com",
  projectId: "votacao-432ce",
  storageBucket: "votacao-432ce.firebasestorage.app",
  messagingSenderId: "743045554993",
  appId: "1:743045554993:web:171cb6c75e5482518bc610"
};

//inicializa o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---- ---- ---- 
