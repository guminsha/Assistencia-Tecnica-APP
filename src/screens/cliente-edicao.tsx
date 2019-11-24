import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, CameraRoll, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
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

export default class EditarClienteScreen extends React.Component<AppProps, AppState> {
  
  private clientesProvider = new ClientesProvider();
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cliente:this.props.navigation.getParam('cliente', new Cliente('', ''))
    };
  }

  public editar() {
    let {cliente} = this.state;
    this.clientesProvider.editar(cliente)
    this.props.navigation.goBack();
  }

  public render() {
    console.log(this.state.cliente);
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Editar Cliente" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <Input placeholder="Nome" value={this.state.cliente.nome} onChangeText={(nome) => this.setState({ cliente: {...this.state.cliente, nome} })} />
          <Input placeholder="CPF" value={this.state.cliente.cpf} onChangeText={(cpf) => this.setState({ cliente: {...this.state.cliente, cpf} })} />
          <Input placeholder="Telefone" value={this.state.cliente.telefone} onChangeText={(telefone) => this.setState({ cliente: {...this.state.cliente, telefone} })} />
          <Input placeholder="E-mail" value={this.state.cliente.email} onChangeText={(email) => this.setState({ cliente: {...this.state.cliente, email} })} />
          <Input placeholder="Endereço" value={this.state.cliente.endereco} onChangeText={(endereco) => this.setState({ cliente: {...this.state.cliente, endereco} })} />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Atualizar" onPress={this.editar.bind(this)} icon={{ name: 'send', color: 'white' }} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
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