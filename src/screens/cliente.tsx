import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { ItemCliente } from '../components/item-cliente';
import Cliente from '../models/cliente-model';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  clientes: Cliente[]
}

export default class ListarClienteScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      clientes: [new Cliente('Ivor Waters', '82 9 9999-9999', '1'),
      new Cliente('Darby Bryan', '82 9 4132-4334', '2'),
      new Cliente('Joãozinho Stephens', '82 9 4132-4334', '3'),
      new Cliente('Monroe Hightower', '81 9 9932-9323', '4'),
      new Cliente('Ismael Paige', '81 9 9932-9323', '5'),
      new Cliente('Damon Lovel', '81 9 8888-8888', '6'),
      new Cliente('Milo Kingston', '81 9 8888-8888', '7'),
      new Cliente('Adelmar Alan', '81 9 8888-8888', '8'),
      new Cliente('Judd Peters', '82 9 4132-4334', '9'),
      new Cliente('Bert Rhodes', '82 9 4132-4334', '10'),
      new Cliente('Issac Statham', '82 9 4132-4334', '11'),
      new Cliente('Diogo Miles', '81 9 8888-8888', '12'),
      new Cliente('Edwin Frank', '81 9 9932-9323', '13'),
      new Cliente('Ian Kimball', '82 9 4132-4334', '14'),
      new Cliente('Parker Judd', '81 9 9688-1258', '15'),
      new Cliente('Cyrus Lyon', '82 9 4132-4334', '16'),
      new Cliente('Russell Snyder', '82 9 4132-4334', '17'),
      new Cliente('Jared Scrivens', '81 9 9932-9323', '18'),
      new Cliente('Branden Abraham', '82 94132-4334', '19'),
      new Cliente('Aric Rennoll', '81 9 8888-8888', '20'),
    ]
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo="Clientes" navigation={this.props.navigation} menu />
      <View style={styles.container}>
        <View style={styles.legenda}>
        <Text style={styles.legendaTexto}>Cliente</Text>
        <Text style={styles.legendaTexto}>Telefone</Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.clientes}
            extraData={this.state.clientes}
            keyExtractor={(t) => t.id}
            renderItem={({ item }) => (<ItemCliente clientes={item}
              onEditar={(Cliente) => this.props.navigation.navigate('clienteEdicao', { Cliente })}
              onExcluir={(id) => console.log(id)} />
            )}
          />
        </ScrollView>
      </View>
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
    marginBottom: 100,
  },
  textoPendencias: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  legenda: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    padding: 10,
    paddingHorizontal: 20,
  },
  legendaTexto: {
    fontSize: 18,
    color: 'white',
  }
});
