import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  pendencia: string;
  numero: string;
}

export default class RegistrarPendenciaScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      pendencia: '',
      numero: '',
    };
  }

  public salvar() {
    Alert.alert('Concluído', 'Pendência salva com sucesso!');
    this.props.navigation.navigate('home');
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Registrar Pendências" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <InputCad placeholder="Nº OS" onChangeText={(numero) => this.setState({ numero })} />
          <InputCad placeholder="Sobre a pendência" onChangeText={(pendencia) => this.setState({ pendencia })} />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Salvar" onPress={() => this.salvar()} icon={{ name: 'send', color: 'white' }} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
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