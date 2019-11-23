import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';
import firebase from 'firebase';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  cadastro: { email: string, senha: string, nome: string, cpf: string, telefone: string, endereco: string, };
}

export default class CadastrarFuncionarioScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cadastro: {
        email: '',
        senha: '',
        nome: '',
        cpf: '',
        telefone: '',
        endereco: '',
      }
    };
  }

  public cadastrar() {
    const { cadastro } = this.state;
    firebase.auth().createUserWithEmailAndPassword(cadastro.email, cadastro.senha).then((user) => {
      ToastAndroid.show('Cadastrado com sucesso', 2000);
      this.props.navigation.navigate('funcionarioList');
    }).catch((erro) => {
      ToastAndroid.show('Não foi possível cadastrar o usuário com esses dados', 2000);
    });
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Funcionários" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nome" onChangeText={(nome) => this.setState({ cadastro: { ...this.state.cadastro, nome } })} />
          <InputCad placeholder="CPF" onChangeText={(cpf) => this.setState({ cadastro: { ...this.state.cadastro, cpf } })} />
          <InputCad placeholder="Telefone" onChangeText={(telefone) => this.setState({ cadastro: { ...this.state.cadastro, telefone } })} />
          <InputCad placeholder="Endereço" onChangeText={(endereco) => this.setState({ cadastro: { ...this.state.cadastro, endereco } })} />
          <InputCad placeholder="E-mail" onChangeText={(email) => this.setState({ cadastro: { ...this.state.cadastro, email } })} />
          <InputCad placeholder="Senha" onChangeText={(senha) => this.setState({ cadastro: { ...this.state.cadastro, senha } })} isPassword />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Cadastrar" onPress={() => this.cadastrar()} icon={{ name: 'send', color: 'white' }} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
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