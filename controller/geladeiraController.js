// const { getItens, getItemById, getItensValidade, getItemValidadeById,
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById,
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade,
//     patchItemMarca, patchItemTipo, deleteItem, deleteItemValidade, deleteItemMarca, deleteItemTipo } = require('../services/servicoGeladeira');
const { postItens } = require('../services/servicoGeladeira');



function getItensController(req, res) {
   
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
function postItemController(req, res){
 try{
        let body = req.body;
        postItens(body);
        res.send(201)
    } catch (error) {
        res.status(500).send('Erro ao criar um item');
    }
}
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
    postItemController,
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