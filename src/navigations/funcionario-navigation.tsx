import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ListarFuncionarioScreen from '../screens/funcionario';
import CadastrarFuncionarioScreen from '../screens/funcionario-cadastro';
import { Icon } from 'react-native-elements';


export default createBottomTabNavigator({
    funcionarioList: {
        screen: ListarFuncionarioScreen,
        navigationOptions: {
            title: 'Listar Funcionarios',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="people" color={tintColor} size={24} />
            )
        }
    },
    funcionarioCad: {
        screen: CadastrarFuncionarioScreen,
        navigationOptions: {
            title: 'Cadastrar Funcionarios',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="person-add" color={tintColor} size={24} />
            ),
        }
    }
})