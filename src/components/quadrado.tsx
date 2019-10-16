import * as React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class Quadrado extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.quadrado}>
                {this.props.children}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    quadrado: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      },
});

