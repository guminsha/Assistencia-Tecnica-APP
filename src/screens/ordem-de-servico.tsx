import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { ItemOS } from '../components/item-OS';
import OrdemServico from '../models/OS-model';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  ordensServico: OrdemServico[]
}

export default class ListarOSScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      ordensServico: [new OrdemServico('852', 'Ivor Waters', 'Pendente', '1'),
      new OrdemServico('321', 'Darby Bryan', 'Pendente', '2'),
      new OrdemServico('655', 'Joãozinho Stephens', 'Pendente', '3'),
      new OrdemServico('666', 'Monroe Hightower', 'Urgente', '4'),
      new OrdemServico('963', 'Ismael Paige', 'Urgente', '5'),
      new OrdemServico('852', 'Damon Lovel', 'Concluído', '6'),
      new OrdemServico('741', 'Milo Kingston', 'Concluído', '7'),
      new OrdemServico('854', 'Adelmar Alan', 'Concluído', '8'),
      new OrdemServico('956', 'Judd Peters', 'Pendente', '9'),
      new OrdemServico('874', 'Bert Rhodes', 'Pendente', '10'),
      new OrdemServico('125', 'Issac Statham', 'Pendente', '11'),
      new OrdemServico('354', 'Diogo Miles', 'Concluído', '12'),
      new OrdemServico('485', 'Edwin Frank', 'Urgente', '13'),
      new OrdemServico('327', 'Ian Kimball', 'Pendente', '14'),
      new OrdemServico('861', 'Parker Judd', 'Concluído', '15'),
      new OrdemServico('174', 'Cyrus Lyon', 'Pendente', '16'),
      new OrdemServico('689', 'Russell Snyder', 'Pendente', '17'),
      new OrdemServico('692', 'Jared Scrivens', 'Urgente', '18'),
      new OrdemServico('729' ,'Branden Abraham', 'Pendente', '19'),
      new OrdemServico('457' ,'Aric Rennoll', 'Concluído', '20'),
      ]
    };
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
            data={this.state.ordensServico}
            extraData={this.state.ordensServico}
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
