import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Ordem from '../models/OS-model';
import { Toolbar } from '../components/toolbar';
import QuadradoCad from '../components/quadrado-cad';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  ordem: Ordem;
}

export default class DetalharOSScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      ordem: this.props.navigation.getParam('ordem', new Ordem('', ''))
    };
  }

  public render() {
    const titulo = "Info OS Nº" + (this.state.ordem.numero);
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo={titulo} navigation={this.props.navigation} menu />
      <View style={styles.container}>
        <QuadradoCad>
          <Text style={styles.topico}>Nº da OS</Text>
          <Text style={styles.info}>{this.state.ordem.numero}</Text>
          <Text style={styles.topico}>Cliente</Text>
          <Text style={styles.info}>{this.state.ordem.cliente}</Text>
          <Text style={styles.topico}>Data de Entrada</Text>
          <Text style={styles.info}>{this.state.ordem.data}</Text>
          <Text style={styles.topico}>Aparelho</Text>
          <Text style={styles.info}>{this.state.ordem.aparelho}</Text>
          <Text style={styles.topico}>Marca</Text>
          <Text style={styles.info}>{this.state.ordem.marca}</Text>
          <Text style={styles.topico}>Modelo</Text>
          <Text style={styles.info}>{this.state.ordem.modelo}</Text>
          <Text style={styles.topico}>Sintomas do aparelho</Text>
          <Text style={styles.info}>{this.state.ordem.sintomas}</Text>
          <Text style={styles.topico}>Observacões</Text>
          <Text style={styles.info}>{this.state.ordem.observacoes}</Text>
          <Text style={styles.topico}>Status Atual</Text>
          <Text style={styles.info}>{this.state.ordem.status}</Text>
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
