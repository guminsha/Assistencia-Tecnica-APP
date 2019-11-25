import { createStackNavigator } from 'react-navigation';
import ListarFuncionarioScreen from '../screens/funcionario';
import CadastrarFuncionarioScreen from '../screens/funcionario-cadastro';
import EditarFuncionarioScreen from '../screens/funcionario-edicao';
import DetalharFuncionarioScreen from '../screens/funcionario-detalhe';


export default createStackNavigator({
    funcList: {
        screen: ListarFuncionarioScreen,
        navigationOptions: { header: null}
    },
    funcCad: {
        screen: CadastrarFuncionarioScreen,
        navigationOptions: { header: null}
    },
    funcEdit: {
        screen: EditarFuncionarioScreen,
        navigationOptions: { header: null}
    },
    funcDetal: {
        screen: DetalharFuncionarioScreen,
        navigationOptions: { header: null}
    }
})