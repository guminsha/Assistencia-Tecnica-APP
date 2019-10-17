import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Cliente from '../models/cliente-model';
import Swipeout from 'react-native-swipeout';

export interface AppProps {
    clientes: Cliente;
    onEditar(clientes: Cliente);
    onExcluir(id: string);
}

export function ItemCliente(props: AppProps) {
    return (
        <Swipeout right={[
            { text: 'Editar', backgroundColor: 'blue', color: 'white', onPress: () => props.onEditar(props.clientes) },
            { text: 'Remover', backgroundColor: "red", color: 'white', onPress: () => props.onExcluir(props.clientes.id) }
        ]}>
            <TouchableOpacity onPress={() => console.log('Informações do Cliente')}>
                <View style={styles.container}>
                    <Text style={styles.legendaTexto}>{props.clientes.nome}</Text>
                    <Text style={styles.legendaTexto}>{props.clientes.telefone}</Text>
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

