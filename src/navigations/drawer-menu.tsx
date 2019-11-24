import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import OSNavigation from './os-navigation';
import ClienteNavigation from './cliente-navigation';
import FuncionarioNavigation from './funcionario-navigation';
import firebase from 'firebase';


export default createDrawerNavigator({
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
}, {
    contentComponent: (props) => (
        <View style={{ marginTop: 20 }}>
            <SafeAreaView>
                <ImageBackground source={require('./../../assets/imgs/background.jpg')} style={styles.background}>
                    <View>
                        <Text style={styles.logo}>Assistência Técnica</Text>
                        <Text style={styles.logo}>Bem vindo, {firebase.auth().currentUser.email}</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
            <DrawerItems {...props} />
            <TouchableOpacity onPress={() => {
                firebase.auth().signOut()
                props.navigation.navigate('login')
            }}>
                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                    <Icon name="exit-to-app" />
                    <Text style={{ marginLeft: 30 }}>Sair</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
});

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 25,
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