import express from 'express';
const router = express.Router();

import geladeiraRouter from'./geladeiraRouter.js';

router.use('/geladeira', geladeiraRouter);

router.get('/', (req, res) => {
    res.send('Rodando...');
});

export default router;