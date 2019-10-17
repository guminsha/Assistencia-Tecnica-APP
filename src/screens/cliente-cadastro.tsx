import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, CameraRoll, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string
}

export default class CadastrarClienteScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: '',
      cpf: '',
      telefone: '',
      email: '',
      endereco: ''
    };
  }

  public cadastrar() {
    Alert.alert('Concluído', 'Cadastro de Cliente realizado com sucesso!');
    this.props.navigation.navigate('clienteList');
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Clientes" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nome" onChangeText={(nome) => this.setState({ nome })} />
          <InputCad placeholder="CPF" onChangeText={(cpf) => this.setState({ cpf })} />
          <InputCad placeholder="Telefone" onChangeText={(telefone) => this.setState({ telefone })} />
          <InputCad placeholder="E-mail" onChangeText={(email) => this.setState({ email })} />
          <InputCad placeholder="Endereço" onChangeText={(endereco) => this.setState({ endereco })} />
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