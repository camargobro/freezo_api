import { createSecretKey } from 'crypto';

export const firebaseConfig = {
    apiKey: "AIzaSyDwPi1u-zZ50FCh8gy5PF1ESlXkngeHOJA",
    authDomain: "freezoapi.firebaseapp.com",
    projectId: "freezoapi",
    storageBucket: "freezoapi.firebasestorage.app",
    messagingSenderId: "183484282088",
    appId: "1:183484282088:web:568447452ec5b0a431855d",
    measurementId: "G-7QHWJK3P46"
};

const secret = "segredo";
export let JWTSecret = createSecretKey(secret, 'utf-8')