import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Funcionario from '../models/funcionario-model';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  funcionario:Funcionario;
}

export default class DetalharFuncionarioScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      funcionario:this.props.navigation.getParam('funcionario', new Funcionario('', ''))
    };
  }

  public render() {
    console.log(this.state.funcionario)
    return (
      <View>
         <Text>{this.state.funcionario.telefone}</Text>
      </View>
    );
  }
}
