// const { getItens, getItemById, getItensValidade, getItemValidadeById,
//     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById,
//     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade,
//     patchItemMarca, patchItemTipo, deleteItem, deleteItemValidade, deleteItemMarca, deleteItemTipo } = require('../services/servicoGeladeira');
import { postItens, getItens, putItem, deleteItem, getItemById, getItensMarca, getItensTipo, getItensValidade } from '../services/servicoGeladeira.js';
import regraDeNegocios  from '../regraNeg/regraNeg.js';
import { normalizarTexto } from '../regraNeg/regraNeg.js';

export async function getItemByIdController(req, res) {
    try {
        const id = normalizarTexto(req.params.id);
        const item = await getItemById(id);

        if (!item || item.length === 0) {
            return res.status(404).send(`Item com ID '${id}' não encontrado.`);
        }
        res.status(200).send(item);
    } catch {
        res.status(500).send('Erro ao buscar item por ID')
    }
}

export async function getItensValidadeController(req, res) {
    try {
        const validade = normalizarTexto(req.params.validade);
        const item = await getItensValidade(validade);

        if (!item || item.length === 0) {
            return res.status(404).send(`Nenhum item encontrado com a validade: ${validade}`);
        }
        res.status(200).send(item);
    } catch {
        res.status(500).send('Erro ao buscar item por validade')
    }
}

export async function getItensMarcaController(req, res) {
    try {
        const marca = normalizarTexto(req.params.marca);
        const item = await getItensMarca(marca);

        if (!item || item.length === 0) {
            return res.status(404).send(`Nenhum item encontrado para a marca: ${marca}`);
        }
        res.status(200).send(item);
   } catch (error){
        console.error("Erro em getItensMarcaController: ", error);
        res.status(500).send('Erro ao buscar item por marca ')
    }
}

export async function getItensTipoController(req, res) {
    try {
        const tipo = normalizarTexto(req.params.tipo);
        const item = await getItensTipo(tipo)


        if (!item || item.length === 0) {
            return res.status(404).send(`Nenhum item encontrado para a tipo: ${tipo}`);
        }
        res.status(200).send(item)
     } catch (error){
        console.error("Erro em getItensTipoController: ", error);
        res.status(500).send('Erro ao buscar item por tipo ')
    }


}

export async function postItemController(req, res) {
    try {
            let body = req.body;
            if (!regraDeNegocios.nomeValid(body)) {
                let error  = new Error('payload não é um item')
                error.codigoStatus = 401;
                throw error;
            }
            

            await postItens(body);
            res.sendStatus(201);
    } catch (error) {
        res.status(500).send('Erro ao criar um item');
    }
}

export async function getItensController(req, res) {
    try {
        const itens = await getItens();

        if (!itens || itens.length === 0) {
            return res.status(404).send(`Nenhum item encontrado.`);
        }
        res.status(200).json(itens);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar os itens');
    }
}
export async function putItemController(req, res) {
    try {
        const id = req.params.id;
        const dadosAtualizados = req.body
        await putItem(id, dadosAtualizados);
        res.status(200).send('Item atualizado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao atualizar o item');
    }
}

export async function deleteItemController(req, res) {
    try {
        const id = req.params.id;
        await deleteItem(id);
        res.status(200).send('Item deletado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao deletar o item');
    }
}
