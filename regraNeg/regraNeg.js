const regraDeNegocios = {
    nomeValid(body) {
        return (
            body.nome != undefined &&
            body.marca != undefined &&
            body.tipo != undefined &&
            body.validade != undefined);
    }
};

export function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300 - \u036f]/g, '').toLowerCase();
}

export function camposPermitidos(req, res, next) {
    const camposRecebidos = Object.keys(req.body);
    const camposPermitidos = ['nome', 'marca', 'tipo', 'validade'];
    const camposInvalidos = camposRecebidos.filter(campo => !camposPermitidos.includes(campo));
    if(camposInvalidos.length > 0) {
        return res.status(400).send('Campos inválidos, verifique os campos permitidos.')
    }
    next();
}

export default regraDeNegocios;