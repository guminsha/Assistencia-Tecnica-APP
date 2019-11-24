import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Alert } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { ItemFuncionario } from '../components/item-funcionario';
import Funcionario from '../models/funcionario-model';
import { FuncionariosProvider } from '../providers/funcionario-provider';
import { Fab } from '../components/fab';

export interface AppProps {
  navigation: any;
  funcionarios: Funcionario[];
  onExcluir(id: string);
}

export interface AppState {
  funcionarios: Funcionario[]
}

export default class ListarFuncionarioScreen extends React.Component<AppProps, AppState> {

  private funcionariosProvider = new FuncionariosProvider();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      funcionarios: this.props.funcionarios
    };
    console.disableYellowBox = true;
  }

  /** Função chamada assim que a página é criadda pela primeira vez */
  async componentDidMount() {
    //Listener para listar as funcionarios
    this.props.navigation.addListener('didFocus', () => {
      this.funcionariosProvider.buscarTodos().then(funcionarios => {
        this.setState({funcionarios})
      })
    })
  }

  /**
   * Função que Exclui um item da lista
   * @param id 
   */
  public excluir(id) {
    Alert.alert('Excluir OS', 'Deseja realmente excluir essa OS?', [
      {
        text:'Sim', onPress:() => {
        
        this.funcionariosProvider.excluir(id);
        this.funcionariosProvider.buscarTodos().then(funcionarios => {
          this.setState({funcionarios})
        })
      
      }},
      {text: 'Não'}
    ]);
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo="Funcionários" navigation={this.props.navigation} menu />
      <View style={styles.container}>
        <View style={styles.legenda}>
          <Text style={styles.legendaTexto}>Funcionario</Text>
          <Text style={styles.legendaTexto}>Telefone</Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.funcionarios}
            extraData={this.state.funcionarios}
            keyExtractor={(t) => t.id}
            renderItem={({ item }) => (<ItemFuncionario funcionario={item}
              onEditar={(funcionario) => this.props.navigation.navigate('funcEdit', { funcionario })}
              onExcluir={this.excluir.bind(this)} />
            )}
          />
        </ScrollView>
      </View>
      <Fab onPress={() => this.props.navigation.navigate('funcCad')}/>  
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