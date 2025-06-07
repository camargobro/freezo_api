import express from 'express';
// import { getItens, getItemById, getItensValidade, getItemValidadeById, 
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById, 
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade, 
//     patchItemMarca, patchItemTipo, deleteItem, deleteItemValidade, deleteItemMarca, deleteItemTipo } from '../controller/geladeiraController.js';

import { getItensController, postItemController, putItemController, deleteItemController } from '../controller/geladeiraController.js';

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

export default router;
