import { createStore, combineReducers } from 'redux';
import  usuarioReducer  from './usuarios';
import  tarefaReducer from './tarefas';

export default createStore(combineReducers({
    usuario: usuarioReducer,
    tarefa: tarefaReducer
}));

