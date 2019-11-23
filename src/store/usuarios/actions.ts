import { USUARIO_LOGIN, USUARIO_LOGOUT } from './actionTypes';

/** Action de logar o usuário  */
export function login(email) {
    return {type: USUARIO_LOGIN, payload:{email}}
}

/** Action de deslogar  */
export function logout() {
    return {type: USUARIO_LOGOUT}
}