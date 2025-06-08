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

export default regraDeNegocios;