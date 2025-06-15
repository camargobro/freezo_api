import express from 'express';
import authenticator from '../services/authenticator.js';
import { JWTSecret, firebaseConfig } from '../services/firebaseCredenciais.js';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { SignJWT, jwtVerify } from 'jose';

const router = express.Router();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


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

router.get('/', async (req, res) => {
try{
      const itensCol = collection(db, "users");
        const snapshot = await getDocs(itensCol);
    
        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            
        }
    ));
        
        res.status(200).send(users)
}catch{
    res.status(500).send('Erro!')
}

})

// Rota protegida que verifica o token
router.get('/:id', async (req, res) => {
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
