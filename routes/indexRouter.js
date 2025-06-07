const express = require('express');
const router = express.Router();

const geladeiraRouter = require('./geladeiraRouter');

router.use('/geladeira', geladeiraRouter);

router.get('/', (req, res) => {
    res.send('Rodando...');
});

module.exports = router;