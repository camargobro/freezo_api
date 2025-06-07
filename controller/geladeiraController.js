    // const { getItens, getItemById, getItensValidade, getItemValidadeById,
    //     getItensMarca, getItemMarcaById, getItensTipo, getItemTipoById,
    //     postItem, postItemValidade, postItemMarca, postItemTipo, patchItem, patchItemValidade,
    //     patchItemMarca, patchItemTipo, deleteItem, deleteItemValidade, deleteItemMarca, deleteItemTipo } = require('../services/servicoGeladeira');
    const { postItens, getItens, putItem, deleteItem } = require('../services/servicoGeladeira');


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
    async function postItemController(req, res){
    try{
           let body = req.body;
            await postItens(body);
            //VALIDAÇÃO == ALTERAR OS CAMPOS DEPOIS
            if (!body.nome || body.nome.trim() === '') {
                body.nome = 'Não definido';
            }
            if (!body.marca || body.marca.trim() === '') {
                body.marca = 'Não definido';
            }
            if (!body.tipo || body.tipo.trim() === '') {
                body.tipo = 'Não definido';
            }
            if (!body.validade || body.validade.trim() === '') {
                body.validade = 'Não definido';
            }

            postItens(body);
            res.sendStatus(201);
        } catch (error) {
            res.status(500).send('Erro ao criar um item');
        }
    }

    async function getItensController(req, res) {
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
     async function putItemController(req, res){
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
    async function deleteItemController(req, res){
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
    module.exports = {
        getItensController,
        // getItemByIdController,
        // getItensValidadeController,
        // getItemValidadeByIdController,
        // getItensMarcaController,
        // getItemMarcaByIdController,
        // getItensTipoController,
        // getItemTipoByIdController,
        postItemController,
        // postItemValidadeController,
        // postItemMarcaController,
        // postItemTipoController,
        putItemController,
        // patchItemValidadeController,
        // patchItemMarcaController,
        // patchItemTipoController,
        deleteItemController,
        // deleteItemValidadeController,
        // deleteItemMarcaController,
        // deleteItemTipoController
    };