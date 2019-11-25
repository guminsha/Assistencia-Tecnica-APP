import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Cliente from '../models/cliente-model';
import Swipeout from 'react-native-swipeout';

export interface AppProps {
    cliente:Cliente;
    onEditar(cliente:Cliente);
    onExcluir(id: string);
    onPress?: any;
}

export function ItemCliente(props: AppProps) {
    return (
        <Swipeout right={[
            { text: 'Editar', backgroundColor: 'blue', color: 'white', onPress: () => props.onEditar(props.cliente) },
            { text: 'Remover', backgroundColor: "red", color: 'white', onPress: () => props.onExcluir(props.cliente.id) }
        ]}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.container}>
                    <Text style={styles.legendaTexto}>{props.cliente.nome}</Text>
                    <Text style={styles.legendaTexto}>{props.cliente.telefone}</Text>
                </View>
            </TouchableOpacity>
        </Swipeout>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
    },
    legendaTexto: {
        fontSize: 16,
    }
});

