import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Cliente from '../models/cliente-model';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  cliente:Cliente;
}

export default class DetalharClienteScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cliente:this.props.navigation.getParam('cliente', new Cliente('', ''))
    };
  }

  public render() {
    console.log(this.state.cliente)
    return (
      <View>
         <Text>{this.state.cliente.telefone}</Text>
      </View>
    );
  }
}
