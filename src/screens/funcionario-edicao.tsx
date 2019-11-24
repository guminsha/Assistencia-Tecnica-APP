import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { Button, Input } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';
import firebase from 'firebase';
import Funcionario from '../models/funcionario-model';
import { FuncionariosProvider } from '../providers/funcionario-provider';

export interface AppProps {
  navigation: any;
  onSalvar(funcionario:Funcionario);
}

export interface AppState {
  funcionario:Funcionario;
}

export default class EditarFuncionarioScreen extends React.Component<AppProps, AppState> {
  private funcionariosProvider = new FuncionariosProvider();
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      funcionario:this.props.navigation.getParam('funcionario', new Funcionario('', ''))
    };
  }

  public editar() {
    let {funcionario} = this.state;
    this.funcionariosProvider.editar(funcionario)
    this.props.navigation.goBack();
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Novo Funcionário" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nome" value={this.state.funcionario.nome} onChangeText={(nome) => this.setState({ funcionario: { ...this.state.funcionario, nome } })} />
          <InputCad placeholder="CPF" value={this.state.funcionario.cpf} onChangeText={(cpf) => this.setState({ funcionario: { ...this.state.funcionario, cpf } })} />
          <InputCad placeholder="Telefone" value={this.state.funcionario.telefone} onChangeText={(telefone) => this.setState({ funcionario: { ...this.state.funcionario, telefone } })} />
          <InputCad placeholder="Endereço" value={this.state.funcionario.endereco} onChangeText={(endereco) => this.setState({ funcionario: { ...this.state.funcionario, endereco } })} />
          <InputCad placeholder="E-mail" value={this.state.funcionario.email} onChangeText={(email) => this.setState({ funcionario: { ...this.state.funcionario, email } })} />
          <InputCad placeholder="Senha" value={this.state.funcionario.senha} onChangeText={(senha) => this.setState({ funcionario: { ...this.state.funcionario, senha } })} isPassword />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Cadastrar" onPress={this.editar.bind(this)} icon={{ name: 'send', color: 'white' }} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
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