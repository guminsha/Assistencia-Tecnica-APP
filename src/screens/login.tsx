import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import InputRound from '../components/input-round';
import Quadrado from '../components/quadrado';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  login: string;
  senha: string;
}

export default class LoginScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      login: '',
      senha: '',
    };
  }


  public logar() {
    if (this.state.login == 'admin' && this.state.senha == 'admin123') {
      this.props.navigation.navigate('home', {login: this.state.login});
    }
    else{
      Alert.alert('Erro', 'Email ou senha incorreta');
    }
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background.jpg')}
      style={styles.background}>

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <Image source={require('./../../assets/imgs/logo.png')} style={styles.logoImg}></Image>
          <Text style={styles.logo}>Assistência Técnica</Text>
        </View>
        <Quadrado>
          <InputRound placeholder="Digite seu login" icone="person" onChangeText={(login) => this.setState({ login })} />
          <InputRound placeholder="Digite sua senha" icone="lock" onChangeText={(senha) => this.setState({ senha })} isPassword={true} />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Entrar" onPress={() => this.logar()} icon={{ name: 'send', color: 'white' }} type={'outline'} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
          </View>
        </Quadrado>
      </KeyboardAvoidingView>
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  logoImg: {
    width: 175,
    height: 175,
  }
});
