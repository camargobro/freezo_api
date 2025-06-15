import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { firebaseConfig, JWTSecret } from '../services/firebaseCredenciais.js';
import { normalizarTexto } from "../regraNeg/regraNeg.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItemById(id) {
    const docRef = doc(db, "itens", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    } else {
        return null;
    }

}


export async function getItensValidade(validade) {
    const docRef = collection(db, "itens");
    const q = query(docRef, where("validade", "==", validade));
    const docSnap = await getDocs(q);

    const itens = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return itens;
}

export async function getItensMarca(marca) {
    const docRef = collection(db, "itens");
    const docSnap = await getDocs(docRef);

    const normalizer = normalizarTexto(marca);

    const itens = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    .filter((item) => 
        item.marca && normalizarTexto(item.marca) === normalizer
    );
    return itens;

}

export async function getItensTipo(tipo) {

    const docRef = collection(db, "itens");
    const docSnap = await getDocs(docRef);

    const normalizer = normalizarTexto(tipo);

    const itens = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    .filter((item) => 
        item.tipo && normalizarTexto(item.tipo) === normalizer
    );
    return itens;
}

export async function postItens(item) {
    const docRef = doc(collection(db, "itens"));
    await setDoc(docRef, item);
}

export async function getItens() {
    const itensCol = collection(db, "itens");
    const snapshot = await getDocs(itensCol);

    const itens = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));

    console.log(itens);
    return itens;
}

export async function putItem(id, data) {
    const itemCol = doc(db, "itens", id);
    await updateDoc(itemCol, data);
}

export async function deleteItem(id) {
    await deleteDoc(doc(db, "itens", id));
}

