import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';
import Ordem from '../models/OS-model';
import { OrdensProvider } from '../providers/ordem-provider';
import InputCad from '../components/input-cad';

export interface AppProps {
  navigation: any;
  onSalvar(ordem:Ordem);
}

export interface AppState {
  ordem:Ordem;
}

export default class EditarOSScreen extends React.Component<AppProps, AppState> {
  
  private ordensProvider = new OrdensProvider();
  
  constructor(props: AppProps) {
    super(props);
    this.state = {
      ordem:this.props.navigation.getParam('ordem', new Ordem('', ''))
    };
  }

  public editar() {
    let {ordem} = this.state;
    this.ordensProvider.editar(ordem)
    this.props.navigation.goBack();
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Editar OS" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nº OS" value={this.state.ordem.numero} onChangeText={(numero) => this.setState({ ordem: {...this.state.ordem, numero} })} />
          <InputCad placeholder="Cliente" value={this.state.ordem.cliente} onChangeText={(cliente) => this.setState({ ordem: {...this.state.ordem, cliente} })} />
          <InputCad placeholder="Aparelho" value={this.state.ordem.aparelho} onChangeText={(aparelho) => this.setState({ ordem: {...this.state.ordem, aparelho} })} />
          <InputCad placeholder="Marca" value={this.state.ordem.marca} onChangeText={(marca) => this.setState({ ordem: {...this.state.ordem, marca} })} />
          <InputCad placeholder="Modelo" value={this.state.ordem.modelo} onChangeText={(modelo) => this.setState({ ordem: {...this.state.ordem, modelo} })} />
          <InputCad placeholder="Sintomas" value={this.state.ordem.sintomas} onChangeText={(sintomas) => this.setState({ ordem: {...this.state.ordem, sintomas} })} />
          <InputCad placeholder="Observações" value={this.state.ordem.observacoes} onChangeText={(observacoes) => this.setState({ ordem: {...this.state.ordem, observacoes} })} />
          <InputCad placeholder="Data" value={this.state.ordem.data} onChangeText={(data) => this.setState({ ordem: {...this.state.ordem, data} })} />
          <InputCad placeholder="Status" value={this.state.ordem.status} onChangeText={(status) => this.setState({ ordem: {...this.state.ordem, status} })} />
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
  img: {
    height: 300,
    width: 300
  }
});
