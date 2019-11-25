import { createStackNavigator } from 'react-navigation';
import ListarClienteScreen from '../screens/cliente';
import CadastrarClienteScreen from '../screens/cliente-cadastro';
import EditarClienteScreen from '../screens/cliente-edicao';
import DetalharClienteScreen from '../screens/cliente-detalhe';


export default createStackNavigator({
    clienteList: {
        screen: ListarClienteScreen,
        navigationOptions: { header: null}
    },
    clienteCad: {
        screen: CadastrarClienteScreen,
        navigationOptions: { header: null}
    },
    clienteEdit: {
        screen: EditarClienteScreen,
        navigationOptions: { header: null}
    },
    clienteDetal: {
        screen: DetalharClienteScreen,
        navigationOptions: { header: null}
    }
})