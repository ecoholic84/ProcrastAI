import { auth } from "../hooks";
import Toast from "react-native-toast-message";
import { createUserWithEmailAndPassword } from "firebase/auth";

function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    email += '@procastai.com';
    return email;
};

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

export const createAccount = async() => {
    try{
        const email = generateRandomEmail();
        const passwd = generateRandomPassword(32);
        await createUserWithEmailAndPassword(auth, email, passwd);
    }catch(e){
        console.log(e);
        Toast.show({ text1: 'Error creating account' });
    }
};