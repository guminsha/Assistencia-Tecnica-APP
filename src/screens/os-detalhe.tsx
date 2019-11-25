import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ordem from '../models/OS-model';

export interface AppProps {
    navigation: any;
}

export interface AppState {
    ordem:Ordem;
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
        ordem:this.props.navigation.getParam('ordem', new Ordem('', ''))
    };
  }

  public render() {
      console.log(this.state.ordem)
    return (
      <View>
         <Text>{this.state.ordem.numero}</Text>
      </View>
    );
  }
}
