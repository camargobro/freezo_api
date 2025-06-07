const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, collection, getDocs, getDoc, updateDoc, deleteDoc, query, where } = require("firebase/firestore");
const { firebaseConfig } = require('../services/firebaseCredenciais');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// export function getItens(){

// }
async function getItemById(id) {
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


async function getItensValidade(validade) {
    const docRef = collection(db, "itens");
    const q = query(docRef, where("validade", "==", validade));
    const docSnap = await getDocs(q);

    const itens = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return itens;
}

async function getItensMarca(marca) {
    const docRef = collection(db, "itens");
    const q = query(docRef, where("marca", "==", marca));
    const docSnap = await getDocs(q);

    const itens = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return itens;

}

async function getItensTipo(tipo) {

    const docRef = collection(db, "itens");
    const q = query(docRef, where("tipo", "==", tipo));
    const docSnap = await getDocs(q);

    const itens = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return itens;
}

async function postItens(item) {
    const docRef = doc(collection(db, "itens"));
    await setDoc(docRef, item);
}

async function getItens() {
    const itensCol = collection(db, "itens");
    const snapshot = await getDocs(itensCol);

    const itens = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));

    console.log(itens);
    return itens;
}

async function putItem(id, data) {
    const itemCol = doc(db, "itens", id);
    await updateDoc(itemCol, data);
}

async function deleteItem(id) {
    await deleteDoc(doc(db, "itens", id));
}

module.exports = {
    postItens,
    getItens,
    getItemById,
    getItensValidade,
    getItensMarca,
    getItensTipo,
    putItem,
    deleteItem,
};