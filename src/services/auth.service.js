import { setLocalData, deleteLocalData } from '../utils';


export const authService = {
    register,
    login,
    logout,
};



async function register(data){
    return { status: 'success' };
}

async function login({ username, password }){
    const cookie = { username, id: '1' };
    setLocalData('user', cookie);
    return cookie;
}

async function logout(){
    deleteLocalData('user');
}