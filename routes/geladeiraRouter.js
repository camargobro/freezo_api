import express from 'express';
// const { getItens, getItemById, getItensValidade, getItemValidadeById, 
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById, 
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade, 
//     patchItemMarca, patchItemTipo, deleteItem,deleteItemValidade, deleteItemMarca, deleteItemTipo } =  require('../controller/geladeiraController');

import { getItensController, postItemController, putItemController,
    deleteItemController, getItemByIdController, getItensMarcaController, getItensTipoController, getItensValidadeController } from '../controller/geladeiraController.js';

import { camposPermitidos } from '../regraNeg/regraNeg.js';

const router = express.Router();

router.get('/', getItensController);

router.get('/:id', getItemByIdController);

router.get('/validade/:validade', getItensValidadeController);

router.get('/marca/:marca', getItensMarcaController);

router.get('/tipo/:tipo', getItensTipoController);

router.post('/', camposPermitidos, postItemController);

router.patch('/:id', camposPermitidos, putItemController);

router.delete('/:id', deleteItemController);


export default router;