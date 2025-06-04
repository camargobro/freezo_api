const express = require('express');
const { getItens, getItemById, getItensValidade, getItemValidadeById, 
    getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById, 
    postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade, 
    patchItemMarca, patchItemTipo, deleteItem,deleteItemValidade, deleteItemMarca, deleteItemTipo } =  require('../controller/geladeiraController');
const router = express.Router();

router.get('/', getItens); 

router.get('/:id', getItemById);

router.get('/validade', getItensValidade);

router.get('/validade/:idValidade', getItemValidadeById);

router.get('/marca', getItensMarca);

router.get('/marca/:idMarca', getItemMarcaById);

router.get('/tipo', getItensTipo);

router.get('/tipo/:idTipo', getItemTipoById);

router.post('/', postItem);

router.post('/validade', postItemValidade);

router.post('/marca', postItemMarca);

router.post('/tipo', postItemTipo);

router.patch('/:id', patchItem);

router.patch('/validade/:idValidade', patchItemValidade);

router.patch('/marca/:idMarca', patchItemMarca);

router.patch('/tipo/:idTipo', patchItemTipo);

router.delete('/:id', deleteItem);

router.delete('/validade/:idValidade', deleteItemValidade);

router.delete('/marca/:idMarca', deleteItemMarca);

router.delete('/tipo/:idTipo', deleteItemTipo);


module.exports = router;