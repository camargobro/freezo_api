import express from 'express';
import geladeiraRouter from './geladeiraRouter.js';  // lembre de colocar extensão .js aqui

const router = express.Router();

router.use('/geladeira', geladeiraRouter);

router.get('/', (req, res) => {
    res.send('Rodando...');
});

export default router;
