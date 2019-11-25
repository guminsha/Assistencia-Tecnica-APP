import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import Quadrado from '../components/quadrado';
import { ScrollView } from 'react-native-gesture-handler';
import { Toolbar } from '../components/toolbar';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';

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
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background2.jpg')} style={styles.background}>
      <Toolbar titulo = "Home" navigation={this.props.navigation} menu />
      <ScrollView>
        <View style={styles.container}>
          <View style={{  alignItems: 'center', marginTop: 30 }}>
            <Image source={require('./../../assets/imgs/logo.png')} style={styles.logoImg}></Image>
            <Text style={styles.logo}>Assistência Técnica</Text>
          </View>
        </View>
      </ScrollView>
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
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  bemvindo: {
    color: 'white',
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  textoPendencias: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  logoImg: {
    width: 175,
    height: 175,
  }
});