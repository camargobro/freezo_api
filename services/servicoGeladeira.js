import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { firebaseConfig } from './firebaseCredenciais.js';

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
export async function postItens(item){
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
// function postItemValidade(){

// }
// function postItemMarca(){

// }
// function postItemTipo(){

// }
export async function putItem(id, data){
    const itemRef = doc(db, "itens", id);
    await updateDoc(itemRef, data);
}
// function patchItemValidade(){

// }
// function patchItemMarca(){

// }
// function patchItemTipo(){

// }
export async function deleteItem(id){
    await deleteDoc(doc(db, "itens", id));
 }
// }
// function deleteItemValidade(){

// }
// function deleteItemMarca(){

// }
// function deleteItemTipo(){

// }