import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import OSNavigation from './os-navigation';
import ClienteNavigation from './cliente-navigation';
import FuncionarioNavigation from './funcionario-navigation';
import RegistrarPendenciaScreen from '../screens/pendencia-registro';



export default class AppComponent extends React.Component {
    public render() {
        return (
            <Apps />
        );
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('./../../assets/imgs/background.jpg')} style={styles.background}>
            <View>
                <Image source={require('./../../assets/imgs/logo.png')} style={styles.logoImg} />
                <Text style={styles.logo}>Assistência Técnica</Text>
            </View>
        </ImageBackground>
        <ScrollView style={{ backgroundColor: 'lightblue',}}>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Início',
            drawerIcon: <Icon name="home" />

        }
    },
    cliente: {
        screen: ClienteNavigation,
        navigationOptions: {
            title: 'Clientes',
            drawerIcon: <Icon name="person" />
        }
    },
    funcionario: {
        screen: FuncionarioNavigation,
        navigationOptions: {
            title: 'Funcionários',
            drawerIcon: <Icon name="contacts" />
        }
    },
    os: {
        screen: OSNavigation,
        navigationOptions: {
            title: 'Ordens de Serviço',
            drawerIcon: <Icon name="tab" />
        }
    },
    pendencia: {
        screen: RegistrarPendenciaScreen,
        navigationOptions: {
            title: 'Registrar Pendências',
            drawerIcon: <Icon name="note-add" />
        }
    },
    sair: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Sair',
            drawerLockMode: 'locked-closed',
            drawerIcon: <Icon name="exit-to-app" />
        }
    },
}, {
    contentComponent: CustomDrawerComponent
});

const Apps = createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        paddingTop: 30,
    },
    logoImg: {
        width: 150,
        height: 150,
        marginLeft: 20,
    },
    logo: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10,
    },
});