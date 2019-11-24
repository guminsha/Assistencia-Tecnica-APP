import Funcionario from '../models/funcionario-model';
import firebase from 'firebase';
import 'firebase/firestore'; //Não precisa no Ionic ou Web


/**
 * Classe que dá acesso ao servidor com os dados do Funcionário
 */
export class FuncionariosProvider {

    private userID: string;
    private db: firebase.firestore.CollectionReference;

    constructor() {
        this.userID = firebase.auth().currentUser.uid;
        this.db = firebase.firestore().collection('Funcionarios');
    }
  
    /**
     * Cadastra um novo Funcionário
     * @param funcionario
     */
    cadastrar(funcionario: Funcionario) {
        let doc = this.db.doc();
        firebase.auth().createUserWithEmailAndPassword(funcionario.email, funcionario.senha);
        funcionario.funcionarioID = this.userID;
        funcionario.id = doc.id;
        doc.set(funcionario);
    }
  
    /**
     * Edita um Funcionário
     * @param funcionario 
     */
    editar(funcionario: Funcionario) {
        this.db.doc(funcionario.id).set(funcionario);
    }
  
    /**
     * Exclui um Funcionário
     * @param id 
     */
    excluir (id: string) {
        this.db.doc(id).delete();
    }
  
    /**
     * Busca todos Funcionários cadastrados por um funcionário
     */
    async buscarTodos(): Promise<Funcionario[]> {
        let resultado = await this.db.where('funcionarioID', '==', this.userID).get();
        let funcionarios = [];
        resultado.forEach(funcionario => {
            funcionarios.push(funcionario.data())
        })
        return funcionarios;
    }
  
    /**
     * Retorna a Funcionário com ID informado
     * @param id 
     */
    async buscar(id: string): Promise<Funcionario> {
        let resultado = await this.db.doc(id).get();
        let funcionario = null
        if (resultado.exists) funcionario = resultado.data();
        return funcionario;
    }
  }
  