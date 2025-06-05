// const { getItens, getItemById, getItensValidade, getItemValidadeById,
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById,
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade,
//     patchItemMarca, patchItemTipo, deleteItem, deleteItemValidade, deleteItemMarca, deleteItemTipo } = require('../services/servicoGeladeira');
const { getItens } = require('../services/servicoGeladeira');

const itens = [
    { 
        id: 1, 
        nome: 'Leite', 
        validade: '2023-12-01', 
        marca: 'Marca A', 
        tipo: 'Líquido' 
    },
    { 
        id: 2, 
        nome: 'Queijo', 
        validade: '2024-01-15', 
        marca: 'Marca B', 
        tipo: 'Lácteo' 
    }
];

function getItensController(req, res) {
    try{
        res.json(itens);
        res.status(200);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao buscar itens' });
    }
}


// function getItemByIdController(){
// }
// function getItensValidadeController(){

// }
// function getItemValidadeByIdController(){

// }
// function getItensMarcaController(){

// }
// function getItemMarcaByIdController(){

// }
// function getItensTipoController(){

// }
// function getItemTipoByIdController(){

// }
// function postItemController(){

// }
// function postItemValidadeController(){

// }
// function postItemMarcaController(){

// }
// function postItemTipoController(){

// }
// function patchItemController(){

// }
// function patchItemValidadeController(){

// }
// function patchItemMarcaController(){

// }
// function patchItemTipoController(){

// }
// function deleteItemController(){

// }
// function deleteItemValidadeController(){

// }
// function deleteItemMarcaController(){

// }
// function deleteItemTipoController(){

// }
module.exports = {
    getItensController,
    // getItemByIdController,
    // getItensValidadeController,
    // getItemValidadeByIdController,
    // getItensMarcaController,
    // getItemMarcaByIdController,
    // getItensTipoController,
    // getItemTipoByIdController,
    // postItemController,
    // postItemValidadeController,
    // postItemMarcaController,
    // postItemTipoController,
    // patchItemController,
    // patchItemValidadeController,
    // patchItemMarcaController,
    // patchItemTipoController,
    // deleteItemController,
    // deleteItemValidadeController,
    // deleteItemMarcaController,
    // deleteItemTipoController
};