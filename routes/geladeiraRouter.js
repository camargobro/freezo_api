import express from 'express';
import { getItensController, postItemController, putItemController,
    deleteItemController, getItemByIdController, getItensMarcaController, getItensTipoController, getItensValidadeController } from '../controller/geladeiraController.js';

import { camposPermitidos } from '../regraNeg/regraNeg.js';

import { autenticarJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', autenticarJWT, getItensController);

router.get('/:id', autenticarJWT, getItemByIdController);

router.get('/validade/:validade', autenticarJWT, getItensValidadeController);

router.get('/marca/:marca', autenticarJWT, getItensMarcaController);

router.get('/tipo/:tipo', autenticarJWT, getItensTipoController);

router.post('/',autenticarJWT, camposPermitidos, postItemController);

router.patch('/:id',autenticarJWT, camposPermitidos, putItemController);

router.delete('/:id', autenticarJWT, deleteItemController);


export default router;