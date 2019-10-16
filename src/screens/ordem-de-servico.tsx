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

export default class ListarOSScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo = "Ordens de Serviço" navigation={this.props.navigation} menu />
      <ScrollView>
        <View style={styles.container}>
          <Quadrado>
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
  textoPendencias: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
});
