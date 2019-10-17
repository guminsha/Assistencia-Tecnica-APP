import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, CameraRoll, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import InputCad from '../components/input-cad';
import QuadradoCad from '../components/quadrado-cad';
import { Toolbar } from '../components/toolbar';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export interface AppProps {
  navigation: any;
}

export interface AppState {
  numero: string;
  cliente: string;
  aparelho: string;
  marca: string;
  modelo: string;
  sintoma: string;
  observacao: string;
  imagem: string;
}

export default class OSCadastroScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      numero: '',
      cliente: '',
      aparelho: '',
      marca: '',
      modelo: '',
      sintoma: '',
      observacao: '',
      imagem: '',
    };
  }

  /** Função responsável por tirar foto do Celular */
  async abrirCamera() {

    let permissao = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (permissao.status == 'granted') {
      //Tenho permissão de usar camera
      //launchImageLibraryAsync() para buscar da galeria
      let foto: any = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.3
      });

      if (!foto.cancelled) {
        //Altera os dados de tarefa
        let { imagem } = this.state;

        // Salva a Foto como Base64 (String) 
        imagem = 'data:image/jpeg;base64,' + foto.base64;

        //Salva o Caminho a Foto no Smartphone
        // tarefa.imagem = foto.uri; //Busca o caminho temporario da foto 

        //Opcional
        CameraRoll.saveToCameraRoll(foto.uri); //Salva a foto na galeria

        this.setState({ imagem });
      }
    }
  }


  public cadastrar() {
    Alert.alert('Concluído', 'Cadastro de OS realizado com sucesso!');
    this.props.navigation.navigate('osList');
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/imgs/background3.jpg')}
      style={styles.background}>
      <Toolbar titulo="Ordens de Serviço" navigation={this.props.navigation} menu />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <QuadradoCad>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={this.abrirCamera.bind(this)}>
              <Image source={
                (this.state.imagem ? { uri: this.state.imagem } :
                  require('./../../assets/imgs/camera_on.png'))} style={[styles.img]} />
            </TouchableOpacity>
          </View>
          <InputCad placeholder="Nº OS" onChangeText={(numero) => this.setState({ numero })} />
          <InputCad placeholder="Cliente" onChangeText={(cliente) => this.setState({ cliente })} />
          <InputCad placeholder="Aparelho" onChangeText={(aparelho) => this.setState({ aparelho })} />
          <InputCad placeholder="Marca" onChangeText={(marca) => this.setState({ marca })} />
          <InputCad placeholder="Modelo" onChangeText={(modelo) => this.setState({ modelo })} />
          <InputCad placeholder="Sintomas" onChangeText={(sintoma) => this.setState({ sintoma })} />
          <InputCad placeholder="Observações" onChangeText={(observacao) => this.setState({ observacao })} />
          <View style={{ alignItems: 'flex-end' }}>
            <Button title="Cadastrar" onPress={() => this.cadastrar()} icon={{ name: 'send', color: 'white' }} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 15, marginBottom: 10 }} />
          </View>
        </QuadradoCad>
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
  img: {
    height: 300,
    width: 300
  }
});
