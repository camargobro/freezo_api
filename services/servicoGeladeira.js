const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, collection, getDocs, getDoc } = require("firebase/firestore");
const { firebaseConfig } = require('../services/firebaseCredenciais');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// export function getItens(){

// }
// function getItemById(){

// }
// function getItensValidade(){

// }
// function getItemValidadeById(){

// }
// function getItensMarca(){

// }
// function getItemMarcaById(){

// }
// function getItensTipo(){

// }
// function getItemTipoById(){

// }
 async function postItens(item){
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
// function postItemValidade(){

// }
// function postItemMarca(){

// }
// function postItemTipo(){

// }
// function patchItem(){

// }
// function patchItemValidade(){

// }
// function patchItemMarca(){

// }
// function patchItemTipo(){

// }
// function deleteItem(){

// }
// function deleteItemValidade(){

// }
// function deleteItemMarca(){

// }
// function deleteItemTipo(){

// }

module.exports = {
    postItens,
    getItens,
    // getItemById,
    // getItensValidade,
    // getItemValidadeById,
    // getItensMarca,
    // getItemMarcaById,
    // getItensTipo,
    // getItemTipoById,
    // postItemValidade,
    // postItemMarca,
    // postItemTipo,
    // patchItem,
    // patchItemValidade,
    // patchItemMarca,
    // patchItemTipo,
    // deleteItem,
    // deleteItemValidade,
    // deleteItemMarca,
    // deleteItemTipo
};