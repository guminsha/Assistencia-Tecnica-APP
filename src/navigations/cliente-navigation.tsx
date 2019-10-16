import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ListarClienteScreen from '../screens/cliente';
import CadastrarClienteScreen from '../screens/cliente-cadastro';
import { Icon } from 'react-native-elements';


export default createBottomTabNavigator({
    clienteList: {
        screen: ListarClienteScreen,
        navigationOptions: {
            title: 'Listar Clientes',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="people" color={tintColor} size={24} />
            )
        }
    },
    clienteCad: {
        screen: CadastrarClienteScreen,
        navigationOptions: {
            title: 'Cadastrar Clientes',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="person-add" color={tintColor} size={24} />
            ),
        }
    }
})