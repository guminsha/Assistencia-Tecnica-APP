import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ListarOSScreen from '../screens/ordem-de-servico';
import CadastrarOSScreen from '../screens/os-cadastro';
import { Icon } from 'react-native-elements';


export default createBottomTabNavigator({
    osList: {
        screen: ListarOSScreen,
        navigationOptions: {
            title: 'Listar OS',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="list" color={tintColor} size={24} />
            )
        }
    },
    osCad: {
        screen: CadastrarOSScreen,
        navigationOptions: {
            title: 'Cadastrar OS',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="add" color={tintColor} size={24} />
            ),
        }
    },
})