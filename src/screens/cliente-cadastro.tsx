import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, CameraRoll, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';
import Cliente from '../models/cliente-model';
import { ClientesProvider } from '../providers/cliente-provider';

export interface AppProps {
  navigation: any;
  onSalvar(cliente:Cliente);
}

export interface AppState {
  cliente:Cliente;
}

export default class CadastrarClienteScreen extends React.Component<AppProps, AppState> {
  private clientesProvider = new ClientesProvider();
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cliente:this.props.navigation.getParam('cliente', new Cliente('', ''))
    };
  }

  public cadastrar() {
    let {cliente} = this.state;
    this.clientesProvider.cadastrar(cliente)
    this.props.navigation.goBack();
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Novo Cliente" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nome" onChangeText={(nome) => this.setState({ cliente: {...this.state.cliente, nome} })} />
          <InputCad placeholder="CPF" onChangeText={(cpf) => this.setState({ cliente: {...this.state.cliente, cpf} })} />
          <InputCad placeholder="Telefone" onChangeText={(telefone) => this.setState({ cliente: {...this.state.cliente, telefone} })} />
          <InputCad placeholder="E-mail" onChangeText={(email) => this.setState({ cliente: {...this.state.cliente, email} })} />
          <InputCad placeholder="Endereço" onChangeText={(endereco) => this.setState({ cliente: {...this.state.cliente, endereco} })} />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Cadastrar" onPress={this.cadastrar.bind(this)} icon={{ name: 'send', color: 'white' }} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
          </View>
        </QuadradoCad>
      </KeyboardAvoidingView>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});