const express = require('express');
// const { getItens, getItemById, getItensValidade, getItemValidadeById, 
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById, 
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade, 
//     patchItemMarca, patchItemTipo, deleteItem,deleteItemValidade, deleteItemMarca, deleteItemTipo } =  require('../controller/geladeiraController');

const { getItensController, postItemController, putItemController,
    deleteItemController, getItemByIdController, getItensMarcaController, getItensTipoController, getItensValidadeController } = require('../controller/geladeiraController');

const router = express.Router();

router.get('/', getItensController);

router.get('/:id', getItemByIdController);

router.get('/validade/:validade', getItensValidadeController);

router.get('/marca/:marca', getItensMarcaController);

router.get('/tipo/:tipo', getItensTipoController);

router.post('/', postItemController);

router.patch('/:id', putItemController);

router.delete('/:id', deleteItemController);


module.exports = router;