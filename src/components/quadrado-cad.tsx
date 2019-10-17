import * as React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export interface AppProps {
}

export interface AppState {
}

export default class QuadradoCad extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <ScrollView>
            <KeyboardAvoidingView behavior='padding' style={styles.quadrado}>
                {this.props.children}
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    quadrado: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        padding: 10,
        borderRadius: 10,
      },
});

