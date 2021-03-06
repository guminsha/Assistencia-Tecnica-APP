import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
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

export default class CadastrarFuncionarioScreen extends React.Component<AppProps, AppState> {
  private funcionariosProvider = new FuncionariosProvider();
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      funcionario:this.props.navigation.getParam('funcionario', new Funcionario('', ''))
    };
  }

  public cadastrar() {
    let {funcionario} = this.state;
    this.funcionariosProvider.cadastrar(funcionario)
    this.props.navigation.goBack();
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Novo Funcionário" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nome" onChangeText={(nome) => this.setState({ funcionario: { ...this.state.funcionario, nome } })} />
          <InputCad placeholder="CPF" onChangeText={(cpf) => this.setState({ funcionario: { ...this.state.funcionario, cpf } })} />
          <InputCad placeholder="Telefone" onChangeText={(telefone) => this.setState({ funcionario: { ...this.state.funcionario, telefone } })} />
          <InputCad placeholder="Endereço" onChangeText={(endereco) => this.setState({ funcionario: { ...this.state.funcionario, endereco } })} />
          <InputCad placeholder="E-mail" onChangeText={(email) => this.setState({ funcionario: { ...this.state.funcionario, email } })} />
          <InputCad placeholder="Senha" onChangeText={(senha) => this.setState({ funcionario: { ...this.state.funcionario, senha } })} isPassword />
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