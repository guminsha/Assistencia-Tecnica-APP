import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Alert } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { ItemCliente } from '../components/item-cliente';
import Cliente from '../models/cliente-model';
import { ClientesProvider } from '../providers/cliente-provider';
import { Fab } from '../components/fab';

export interface AppProps {
  navigation: any;
  clientes: Cliente[];
  onExcluir(id: string);
}

export interface AppState {
  clientes: Cliente[]
}

export default class ListarClienteScreen extends React.Component<AppProps, AppState> {

  private clientesProvider = new ClientesProvider();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      clientes: this.props.clientes
    };
    console.disableYellowBox = true;
  }

  /** Função chamada assim que a página é criadda pela primeira vez */
  async componentDidMount() {
    //Listener para listar as clientes
    this.props.navigation.addListener('didFocus', () => {
      this.clientesProvider.buscarTodos().then(clientes => {
        this.setState({ clientes })
      })
    })
  }

  /**
   * Função que Exclui um item da lista
   * @param id 
   */
  public excluir(id) {
    Alert.alert('Excluir Cliente', 'Deseja realmente excluir esse Cliente?', [
      {
        text: 'Sim', onPress: () => {

          this.clientesProvider.excluir(id);
          this.clientesProvider.buscarTodos().then(clientes => {
            this.setState({ clientes })
          })

        }
      },
      { text: 'Não' }
    ]);
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
            renderItem={({ item }) => (<ItemCliente cliente={item} onPress={() => this.props.navigation.navigate('clienteDetal', {cliente: item})}
              onEditar={(cliente) => this.props.navigation.navigate('clienteEdit', { cliente })}
              onExcluir={this.excluir.bind(this)} />
            )}
          />
        </ScrollView>
      </View>
      <Fab onPress={() => this.props.navigation.navigate('clienteCad')} />
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
