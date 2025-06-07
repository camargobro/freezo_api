const regraDeNegocios = {
    nomeValid(body) {
        return (
            body.nome != undefined &&
            body.marca != undefined &&
            body.tipo != undefined &&
            body.validade != undefined);
    }
};

export default regraDeNegocios;