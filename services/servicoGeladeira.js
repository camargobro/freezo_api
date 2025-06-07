const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, collection, getDocs, getDoc, updateDoc, deleteDoc } = require("firebase/firestore");
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
 async function putItem(id, data){
    const itemRef = doc(db, "itens", id);
    await updateDoc(itemRef, data);
}
// function patchItemValidade(){

// }
// function patchItemMarca(){

// }
// function patchItemTipo(){

// }
 async function deleteItem(id){
    await deleteDoc(doc(db, "itens", id));
 }
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
     putItem,
    // patchItemValidade,
    // patchItemMarca,
    // patchItemTipo,
    deleteItem,
    // deleteItemValidade,
    // deleteItemMarca,
    // deleteItemTipo
};