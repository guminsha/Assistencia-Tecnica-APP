import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import Quadrado from '../components/quadrado';
import { ScrollView } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';

export interface AppProps {
  navigation: any;
}

export interface AppState {
}

export default class HomeScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo = "Home" navigation={this.props.navigation} menu />
      <ScrollView>
        <View style={styles.container}>
          <View style={{  alignItems: 'center', marginTop: 30 }}>
            <Image source={require('./../../assets/imgs/logo.png')} style={styles.logoImg}></Image>
            <Text style={styles.logo}>Assistência Técnica</Text>
            <Text style={styles.bemvindo}>Bem-vindo, {this.props.navigation.getParam('login')}!</Text>
          </View>
          <Quadrado>
            <Text style={styles.titulo}>Pendências</Text>
            <Text style={styles.textoPendencias}>{'\u2022'} OS Nº111 - Comprar fonte Corsair 650W.</Text>
            <Text style={styles.textoPendencias}>{'\u2022'} OS Nº321 - Testar componentes atuais com um novo SSD.</Text>
            <Text style={styles.textoPendencias}>{'\u2022'} OS Nº523 - Substituir HD instalado por outro.</Text>
            <Text style={styles.textoPendencias}>{'\u2022'} OS Nº789 - Limpar novamente o cooler da CPU.</Text>
          </Quadrado>
        </View>
      </ScrollView>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  bemvindo: {
    color: 'white',
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  textoPendencias: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  logoImg: {
    width: 175,
    height: 175,
  }
});