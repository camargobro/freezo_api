    // const { getItens, getItemById, getItensValidade, getItemValidadeById,
    //     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById,
    //     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade,
    //     patchItemMarca, patchItemTipo, deleteItem, deleteItemValidade, deleteItemMarca, deleteItemTipo } = require('../services/servicoGeladeira');
import { postItens, getItens, putItem, deleteItem } from '../services/servicoGeladeira.js';
    import regraDeNegocios from '../regraNeg/regraNeg.js';


    // function getItemByIdController(){
    // }
    // function getItensValidadeController(){

    // }
    // function getItemValidadeByIdController(){

    // }
    // function getItensMarcaController(){

    // }
    // function getItemMarcaByIdController(){

    // }
    // function getItensTipoController(){

    // }
    // function getItemTipoByIdController(){

    // }
    export async function postItemController(req, res){
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
            console.error('Erro no POST /geladeira:', error);
            res.status(500).send('Erro ao criar um item');
        }
    }

    export async function getItensController(req, res) {
        try {
            const itens = await getItens();
            res.status(200).json(itens);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao buscar os itens');
        }
    }
    // }
    // function postItemValidadeController(){

    // }
    // function postItemMarcaController(){

    // }
    // function postItemTipoController(){

    // }
    export async function putItemController(req, res){
     try {
        const id = req.params.id;
        const dadosAtualizados = req.body
        await putItem(id, dadosAtualizados);
        res.status(200).send('Item atualizado com sucesso');
     }catch (error) {
        res.status(500).send('Erro ao atualizar o item');
    }
}
    // }
    // function patchItemValidadeController(){

    // }
    // function patchItemMarcaController(){

    // }
    // function patchItemTipoController(){

    // }
export async function deleteItemController(req, res){
        try{
        const id = req.params.id;
        await deleteItem(id);
        res.status(200).send('Item deletado com sucesso');
     }catch (error) {
         res.status(500).send('Erro ao deletar o item');
     }
    }
    // }
    // function deleteItemValidadeController(){

    // }
    // function deleteItemMarcaController(){

    // }
    // function deleteItemTipoController(){

    // }