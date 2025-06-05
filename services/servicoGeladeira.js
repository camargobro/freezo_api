const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, collection } = require("firebase/firestore");
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
    // getItens,
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