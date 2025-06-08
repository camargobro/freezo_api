import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, collection, getDocs } from "firebase/firestore";

import { firebaseConfig, JWTSecret } from './firebaseCredenciais.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const authenticator = {
    criaUsuarioEmailSenha: (nome, email, senha, funcaoCallback, funcaoQuandoErro) => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then(async (userCredential) => {
            console.log('User created successfully');
            const user = userCredential.user;

            try {
                await setDoc(doc(db, "users", user.uid), {
                    nome: nome,
                    email: email,
                    createdAt: new Date().toISOString()
                });
                console.log("Usuário salvo no Firestore");
                funcaoCallback(user);
            } catch (error) {
                console.error("Erro ao salvar no Firestore", error);
                funcaoQuandoErro('firestore_error', error.message);
            }
        })
        .catch((error) => {
            console.error(error);
            funcaoQuandoErro(error.code, error.message);
        });
    },

    loginEmailSenha: (email, senha) => {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    resolve(userCredential.user);
                })
                .catch((error) => {
                    reject(error.message);
                });
        })
    }
}

export default authenticator;