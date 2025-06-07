const express = require('express');
// const { getItens, getItemById, getItensValidade, getItemValidadeById, 
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById, 
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade, 
//     patchItemMarca, patchItemTipo, deleteItem,deleteItemValidade, deleteItemMarca, deleteItemTipo } =  require('../controller/geladeiraController');

const { getItensController, postItemController, putItemController, deleteItemController } = require('../controller/geladeiraController'); 
 
const router = express.Router();

router.get('/', getItensController); 

// router.get('/:id', getItemByIdController);

// router.get('/validade', getItensValidadeController);

// router.get('/validade/:idValidade', getItemValidadeByIdController);

// router.get('/marca', getItensMarcaController);

// router.get('/marca/:idMarca', getItemMarcaByIdController);

// router.get('/tipo', getItensTipoController);

// router.get('/tipo/:idTipo', getItemTipoByIdController);

router.post('/', postItemController);

// router.post('/validade', postItemValidadeController);

// router.post('/marca', postItemMarcaController);

// router.post('/tipo', postItemTipoController);

 router.patch('/:id', putItemController);

// router.patch('/validade/:idValidade', patchItemValidadeController);

// router.patch('/marca/:idMarca', patchItemMarcaController);

// router.patch('/tipo/:idTipo', patchItemTipoController);

 router.delete('/:id', deleteItemController);

// router.delete('/validade/:idValidade', deleteItemValidadeController);

// router.delete('/marca/:idMarca', deleteItemMarcaController);

// router.delete('/tipo/:idTipo', deleteItemTipoController);


module.exports = router;