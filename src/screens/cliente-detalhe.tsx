import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Cliente from '../models/cliente-model';
import { Toolbar } from '../components/toolbar';
import QuadradoCad from '../components/quadrado-cad';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  cliente:Cliente;
}

export default class DetalharClienteScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cliente:this.props.navigation.getParam('cliente', new Cliente('', ''))
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo='Info Cliente' navigation={this.props.navigation} menu />
      <View style={styles.container}>
        <QuadradoCad>
          <Text style={styles.topico}>Nome</Text>
          <Text style={styles.info}>{this.state.cliente.nome}</Text>
          <Text style={styles.topico}>Email</Text>
          <Text style={styles.info}>{this.state.cliente.email}</Text>
          <Text style={styles.topico}>Número de contato</Text>
          <Text style={styles.info}>{this.state.cliente.telefone}</Text>
          <Text style={styles.topico}>Endereço</Text>
          <Text style={styles.info}>{this.state.cliente.endereco}</Text>
          <Text style={styles.topico}>CPF</Text>
          <Text style={styles.info}>{this.state.cliente.cpf}</Text>
        </QuadradoCad>
      </View>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  topico: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
  },
  info: {
    color: 'white',
    fontSize: 16,
    width: '100%',
    marginBottom: 10,
  },
});