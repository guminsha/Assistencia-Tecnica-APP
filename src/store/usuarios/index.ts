import { USUARIO_LOGIN, USUARIO_LOGOUT } from "./actionTypes";

const initialState = {
    email: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        case USUARIO_LOGIN:
            return action.payload; //já vai com o nome email e senha
        case USUARIO_LOGOUT:
            return {email: ''};
        default:
            return state; //Se não foi uma ação, retorna o estado como era 
    }
}

