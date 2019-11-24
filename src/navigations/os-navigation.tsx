import { createStackNavigator } from 'react-navigation';
import ListarOSScreen from '../screens/ordem-de-servico';
import CadastrarOSScreen from '../screens/os-cadastro';
import EditarOSScreen from '../screens/os-edicao';


export default createStackNavigator({
    osList: {
        screen: ListarOSScreen,
        navigationOptions: { header: null}
    },
    osCad: {
        screen: CadastrarOSScreen,
        navigationOptions: { header: null}
    },
    osEdit: {
        screen: EditarOSScreen,
        navigationOptions: { header: null}
    }
})