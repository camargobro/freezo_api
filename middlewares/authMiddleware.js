import { jwtVerify } from 'jose';
import { JWTSecret } from '../services/firebaseCredenciais.js';

export async function autenticarJWT(req, res, next) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return res.status(401).send('Token não informado');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send('Token mal formatado');
    }

    try {
        const { payload } = await jwtVerify(token, JWTSecret, { algorithms: ['HS256'] });
        req.usuario = payload;
        next();
    } catch (error) {
        if (error.code === 'ERR_JWT_EXPIRED') {
            return res.status(498).send("Token expirado");
        }
        res.status(401).send("Token inválido");
    }
}
