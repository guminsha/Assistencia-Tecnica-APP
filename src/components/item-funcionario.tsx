import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Funcionario from '../models/funcionario-model';
import Swipeout from 'react-native-swipeout';

export interface AppProps {
    funcionarios: Funcionario;
    onEditar(Funcionarios: Funcionario);
    onExcluir(id: string);
}

export function ItemFuncionario(props: AppProps) {
    return (
        <Swipeout right={[
            { text: 'Editar', backgroundColor: 'blue', color: 'white', onPress: () => props.onEditar(props.funcionarios) },
            { text: 'Remover', backgroundColor: "red", color: 'white', onPress: () => props.onExcluir(props.funcionarios.id) }
        ]}>
            <TouchableOpacity onPress={() => console.log('Informações do Funcionario')}>
                <View style={styles.container}>
                    <Text style={styles.legendaTexto}>{props.funcionarios.nome}</Text>
                    <Text style={styles.legendaTexto}>{props.funcionarios.telefone}</Text>
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

