import Ordem from '../models/OS-model';
import firebase from 'firebase';
import 'firebase/firestore'; //Não precisa no Ionic ou Web


/**
 * Classe que dá acesso ao servidor com os dados da Ordens de Serviço
 */
export class OrdensProvider {

    private userID: string;
    private db: firebase.firestore.CollectionReference;

    constructor() {
        this.userID = firebase.auth().currentUser.uid;
        this.db = firebase.firestore().collection('ordens');
    }
  
    /**
     * Cadastra uma nova OS
     * @param ordem
     */
    cadastrar(ordem: Ordem) {
        let doc = this.db.doc();
        ordem.funcionarioID = this.userID;
        ordem.id = doc.id;
        doc.set(ordem);
    }
  
    /**
     * Edita uma OS
     * @param ordem 
     */
    editar(ordem: Ordem) {
        this.db.doc(ordem.id).set(ordem);
    }
  
    /**
     * Exclui uma OS
     * @param id 
     */
    excluir (id: string) {
        this.db.doc(id).delete();
    }
  
    /**
     * Busca todas Ordens de Serviço de um usuário
     */
    async buscarTodos(): Promise<Ordem[]> {
        let resultado = await this.db.where('funcionarioID', '==', this.userID).get();
        let ordens = [];
        resultado.forEach(ordem => {
            ordens.push(ordem.data())
        })
        return ordens;
    }
  
    /**
     * Retorna a Ordem de serviço com ID informado
     * @param id 
     */
    async buscar(id: string): Promise<Ordem> {
        let resultado = await this.db.doc(id).get();
        let ordem = null
        if (resultado.exists) ordem = resultado.data();
        return ordem;
    }
  }
  