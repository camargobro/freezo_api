import express from 'express';
import authenticator from '../services/authenticator.js';
import { JWTSecret } from '../services/firebaseCredenciais.js';
import { SignJWT, jwtVerify } from 'jose';

const router = express.Router();

router.post('/register', (req, res) => {
    const { nome, email, senha } = req.body;

    authenticator.criaUsuarioEmailSenha(
        nome,
        email,
        senha,
        (user) => {
            res.status(201).json({ message: 'Usuário criado com sucesso', uid: user.id });
        },
        (errorCode, errorMessage) => {
            res.status(400).json({ error: errorMessage, code: errorCode });
        }
    );
});

// Rota protegida que verifica o token
router.get('/', async (req, res) => {
    try {
        let token = req.get('Authorization');

        if (!token) {
            return res.status(401).send('Não autorizado, token não informado');
        }

        token = token.split(' ')[1];
        if (!token) {
            return res.status(498).send('Token inválido');
        }

        const { payload } = await jwtVerify(token, JWTSecret, { algorithms: ['HS256'] });
        res.status(200).json({ mensagem: 'Token válido', dados: payload });

    } catch (error) {
        if (error.code === 'ERR_JWT_EXPIRED') {
            return res.status(498).send("Token expirado");
        }
        res.status(498).send("Token inválido");
    }
});

// Login e geração de token
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
        const user = await authenticator.loginEmailSenha(email, senha);

        const payload = {
            email: user.email,
            nome: user.nome ?? 'Usuário',
            nivelAcesso: 'adm'
        };

        const jwt = await new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setSubject(user.uid || user.email)
            .setExpirationTime('1h')
            .sign(JWTSecret);

        res.status(200).json({ token: jwt });

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(401).json({ error: 'Email ou senha inválidos' });
    }
});

export default router;
