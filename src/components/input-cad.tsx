import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';

//Define os valores de entrada do componente
export interface AppProps {
    texto?:string;              //Uma label para o campo 
    icone?:string;               //Nome do iconea  ser exibido
    placeholder?:string;         //Exibe um texto guia quando não tiver nada digitado
    onChangeText?(texto:string);//Retorna o texto modificado 
    isPassword?:boolean;        //Checa se um campo deve ou nõa ser exibido
}

/**
 * Função que retorna um InputRound
 * @function InputRound
 * @param props retorna as propriedades que são passadas para o componente
 */
export default (props: AppProps) => (
    <View>
        {props.texto != null && <Text style={styles.labelInput}>{props.texto}</Text>}
        <Input placeholder={props.placeholder}  
            secureTextEntry={props.isPassword}
            leftIcon={{name:props.icone, color:'white'}}
            inputContainerStyle={styles.containerInput}
            onChangeText={(texto) => props.onChangeText(texto)}
            inputStyle={{color:'white'}} 
            autoCapitalize = {'none'} />
    </View>
)

/** Cria o estilo usado no componente */
const styles = StyleSheet.create({
    containerInput: {
        marginBottom: 10,
    },
    labelInput: {
        color: 'white',
        fontSize: 20,
    }

});