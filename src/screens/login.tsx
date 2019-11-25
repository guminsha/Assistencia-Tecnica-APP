import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, ToastAndroid, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import InputRound from '../components/input-round';
import Quadrado from '../components/quadrado';
import firebase from 'firebase';
import { AdMobBanner, } from 'expo-ads-admob';


export interface AppProps {
  navigation: any;
}

export interface AppState {
  email: string;
  senha: string;
}

export default class LoginScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    console.disableYellowBox = true;
  }

  public logar() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then(() => {
      //Logou com sucesso
      this.props.navigation.navigate('home', { email: this.state.email });
    }).catch(erro => {
      //Falha ao logar
      if (Platform.OS == 'android')
        ToastAndroid.show('Email ou senha incorreta', 3000)
      else
        Alert.alert('Erro', 'Email ou senha incorreta');
    })
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')}
      style={styles.background}>

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <Image source={require('./../../assets/imgs/logo.png')} style={styles.logoImg}></Image>
          <Text style={styles.logo}>Assistência Técnica</Text>
        </View>
        <Quadrado>
          <InputRound placeholder="Digite seu email" icone="person" onChangeText={(email) => this.setState({ email })} />
          <InputRound placeholder="Digite sua senha" icone="lock" onChangeText={(senha) => this.setState({ senha })} isPassword={true} />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Entrar" onPress={() => this.logar()} icon={{ name: 'send', color: 'white' }} type={'outline'} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
          </View>
        </Quadrado>
      </KeyboardAvoidingView>
      <AdMobBanner
        bannerSize="fullBanner"                           // ca-app-pub-5947557768603908~4502676977  id do meu app
        adUnitID="ca-app-pub-8890411738087560/1818681309" // ca-app-pub-5947557768603908/1717920906  id da minha propaganda
        testDeviceID="EMULATOR"                           // ca-app-pub-8890411738087560/1818681309  id da propaganda do professor
      />
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
