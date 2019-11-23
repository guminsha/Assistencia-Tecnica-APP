import { TAREFA_ADICIONAR, TAREFA_REMOVER } from './actionTypes';

const initialState = {
    tarefas: []
}

export default (state = initialState, action) => {
   
    let tarefas = [];
    tarefas = [...state.tarefas]; //Copia com os valores
    switch (action.type) {
        case TAREFA_ADICIONAR:
            //Adiciona
            tarefas.push(action.payload);
            
            console.log(tarefas);
            return { tarefas };
        case TAREFA_REMOVER:
            //Acha a posiçao do item no vetor
            let index = tarefas.map(t => t.id).indexOf(action.payload);
            //remove
            tarefas.splice(index, 1);
            return { tarefas };
        default:
            return state
    }
};
