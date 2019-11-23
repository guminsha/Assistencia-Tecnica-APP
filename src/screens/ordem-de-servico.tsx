import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, Alert } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { ItemOS } from '../components/item-OS';
import Ordem from '../models/OS-model';
import { Notifications } from 'expo';
import { OrdensProvider } from '../providers/ordem';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';

export interface AppProps {
  navigation: any;
  ordens: Ordem[];
  onExcluir(id: string);
}

export interface AppState {
  ordens: Ordem[]
}

export default class ListarOSScreen extends React.Component<AppProps, AppState> {

  private ordensProvider = new OrdensProvider();

  constructor(props: AppProps) {
    super(props);
    this.state = {
      ordens: this.props.ordens
    };
    console.disableYellowBox = true;
  }
  
  /** Função chamada assim que a página é criadda pela primeira vez */
  async componentDidMount() {
    //salva o token para notificação de um WebService com o EXPO
    let permissao = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (permissao.status == 'granted') {
      let token = await Notifications.getExpoPushTokenAsync()
      console.log(token);

      firebase.firestore()
          .collection('funcionarios')
          .doc(firebase.auth().currentUser.uid)
          .set({'devideID': token })
    }

    //Listener que é chamado sempre que a página sendo exibida
    this.props.navigation.addListener('didFocus', () => {
      this.ordensProvider.buscarTodos().then(ordens => {
        this.setState({ordens})
      })
      
    })
  }

  /**
   * Função que Exclui um item da lista
   * @param id 
   */
  public excluir(id) {
    Alert.alert('Excluir OS', 'Deseja realmente excluir essa OS?', [
      {text:'Sim', onPress:() => {
        
        this.ordensProvider.excluir(id);
        this.ordensProvider.buscarTodos().then(ordens => {
          this.setState({ordens})
        })
      
      }},
      {text: 'Não'}
    ]);
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo="Ordens de Serviço" navigation={this.props.navigation} menu />
      <View style={styles.container}>
        <View style={styles.legenda}>
          <Text style={styles.legendaTexto}>Nº OS</Text>
          <Text style={styles.legendaTexto}>Cliente</Text>
          <Text style={styles.legendaTexto}>Status</Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.ordens}
            extraData={this.state.ordens}
            keyExtractor={(t) => t.id}
            renderItem={({ item }) => (<ItemOS ordensServico={item}
              onEditar={(OrdemServico) => this.props.navigation.navigate('osEdicao', { OrdemServico })}
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
