import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, CameraRoll, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';
import Ordem from '../models/OS-model';
import { OrdensProvider } from '../providers/ordem-provider';

export interface AppProps {
  navigation: any;
  onSalvar(ordem:Ordem);
}

export interface AppState {
  ordem:Ordem;
}

export default class CadastrarOSScreen extends React.Component<AppProps, AppState> {
  
  private ordensProvider = new OrdensProvider();
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      ordem:this.props.navigation.getParam('ordem', new Ordem('', ''))
    };
  }

  public cadastrar() {
    let {ordem} = this.state;
    this.ordensProvider.cadastrar(ordem)
    this.props.navigation.goBack();
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Nova OS" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nº OS" onChangeText={(numero) => this.setState({ ordem: {...this.state.ordem, numero} })} />
          <InputCad placeholder="Cliente" onChangeText={(cliente) => this.setState({ ordem: {...this.state.ordem, cliente} })} />
          <InputCad placeholder="Aparelho" onChangeText={(aparelho) => this.setState({ ordem: {...this.state.ordem, aparelho} })} />
          <InputCad placeholder="Marca" onChangeText={(marca) => this.setState({ ordem: {...this.state.ordem, marca} })} />
          <InputCad placeholder="Modelo" onChangeText={(modelo) => this.setState({ ordem: {...this.state.ordem, modelo} })} />
          <InputCad placeholder="Sintomas" onChangeText={(sintomas) => this.setState({ ordem: {...this.state.ordem, sintomas} })} />
          <InputCad placeholder="Observações" onChangeText={(observacoes) => this.setState({ ordem: {...this.state.ordem, observacoes} })} />
          <InputCad placeholder="Data de Entrada" onChangeText={(data) => this.setState({ ordem: {...this.state.ordem, data} })} />
          <InputCad placeholder="Status" onChangeText={(status) => this.setState({ ordem: {...this.state.ordem, status} })} />
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
  img: {
    height: 300,
    width: 300
  }
});
