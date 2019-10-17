import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import OrdemServico from '../models/OS-model';
import Swipeout from 'react-native-swipeout';

export interface AppProps {
    ordensServico: OrdemServico;
    onEditar(ordensServico: OrdemServico);
    onExcluir(id: string);
}

export function ItemOS(props: AppProps) {
    return (
        <Swipeout right={[
            { text: 'Editar', backgroundColor: 'blue', color: 'white', onPress: () => props.onEditar(props.ordensServico) },
            { text: 'Remover', backgroundColor: "red", color: 'white', onPress: () => props.onExcluir(props.ordensServico.id) }
        ]}>
            <TouchableOpacity onPress={() => console.log('Informações da OS')}>
                <View style={styles.container}>
                    <Text style={styles.legendaTexto}>OS Nº{props.ordensServico.numero}</Text>
                    <Text style={styles.legendaTexto}>{props.ordensServico.cliente}</Text>
                    <Text style={styles.legendaTexto}>{props.ordensServico.status}</Text>
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

