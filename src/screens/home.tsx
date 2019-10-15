import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface AppProps {
  navigation: any;
}

export interface AppState {
}

export default class HomeScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>Bem-vindo, {this.props.navigation.getParam('login')}!</Text>
      </View>
    );
  }
}
