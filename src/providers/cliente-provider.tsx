import Cliente from '../models/cliente-model';
import firebase from 'firebase';
import 'firebase/firestore'; //Não precisa no Ionic ou Web


/**
 * Classe que dá acesso ao servidor com os dados da Clientes
 */
export class ClientesProvider {

    private userID: string;
    private db: firebase.firestore.CollectionReference;

    constructor() {
        this.userID = firebase.auth().currentUser.uid;
        this.db = firebase.firestore().collection('clientes');
    }
  
    /**
     * Cadastra um Cliente
     * @param cliente
     */
    cadastrar(cliente: Cliente) {
        let doc = this.db.doc();
        cliente.id = doc.id;
        doc.set(cliente);
    }
  
    /**
     * Edita um Cliente
     * @param cliente 
     */
    editar(cliente: Cliente) {
        this.db.doc(cliente.id).set(cliente);
    }
  
    /**
     * Exclui um Cliente
     * @param id 
     */
    excluir (id: string) {
        this.db.doc(id).delete();
    }
  
    /**
     * Busca todos Clientes
     */
    async buscarTodos(): Promise<Cliente[]> {
        let resultado = await this.db.get();
        let clientes = [];
        resultado.forEach(cliente => {
            clientes.push(cliente.data())
        })
        return clientes;
    }
  
    /**
     * Retorna o Cliente om ID informado
     * @param id 
     */
    async buscar(id: string): Promise<Cliente> {
        let resultado = await this.db.doc(id).get();
        let cliente = null
        if (resultado.exists) cliente = resultado.data();
        return cliente;
    }
  }
  