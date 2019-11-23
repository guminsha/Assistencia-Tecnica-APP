import Tarefa from '../../models/tarefa';
import { TAREFA_ADICIONAR, TAREFA_REMOVER } from './actionTypes';

/** Adiciona uma Tarefa ao Store */
export function adicionarTarefa(tarefa:Tarefa) {
  return { type: TAREFA_ADICIONAR, payload: tarefa }
}

/** Remove uma Tarefa do Store */
export function removerTarefa(id:string) {
    return { type: TAREFA_REMOVER, payload: id }
}
