import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { ItemFuncionario } from '../components/item-funcionario';
import Funcionario from '../models/funcionario-model';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  funcionarios: Funcionario[]
}

export default class ListarFuncionarioScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      funcionarios: [new Funcionario('Hudson Aston', '81 9 9999-9999', '1'),
      new Funcionario('Tameka Daniell', '81 9 4122-4224', '2'),
      new Funcionario('Emelia Ware', '81 9 4122-4224', '3'),
      new Funcionario('Dorothy Huxtable', '82 9 9922-9222', '4'),
      new Funcionario('Athena Mathewson', '82 9 9922-9222', '5'),
      new Funcionario('Corbin Bloodworth', '82 9 8888-8888', '6'),
      new Funcionario('Serena Bonner', '82 9 8328-3388', '7'),
      new Funcionario('Merton Hopkins', '82 9 8238-8888', '8'),
      new Funcionario('Rúben Pryor', '81 9 4122-4224', '9'),
      new Funcionario('Alexandre Hedley', '81 9 4122-4224', '10'),
      new Funcionario('Candida Benjaminson', '81 9 4122-4224', '11'),
      new Funcionario('Corinne Hooper', '82 9 8888-8888', '12'),
      new Funcionario('Coy Tipton', '82 9 9922-9222', '13'),
      new Funcionario('Chad Rose', '81 9 4122-4224', '14'),
      new Funcionario('Clare Shaw', '82 9 9688-1258', '15'),
      new Funcionario('Dores Simões', '81 9 4122-4224', '16'),
      new Funcionario('Telmo Magalhães', '81 9 4122-4224', '17'),
      new Funcionario('Marcela Lucas', '82 9 9922-9222', '18'),
      new Funcionario('Eulália Romão', '81 94122-4224', '19'),
      new Funcionario('Noémia Palmeiro', '82 9 8888-8888', '20'),
      ]
    };
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
            renderItem={({ item }) => (<ItemFuncionario funcionarios={item}
              onEditar={(Funcionario) => this.props.navigation.navigate('funcionarioEdicao', { Funcionario })}
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