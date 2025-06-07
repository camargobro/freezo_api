import { getItens } from '../services/servicoFreezer.js';

export async function getItensController(req, res) {
    try {
        const itens = await getItens();
        res.status(200).json(itens);
    } catch (error) {
        res.status(500).send('Erro ao buscar itens');
    }
}
