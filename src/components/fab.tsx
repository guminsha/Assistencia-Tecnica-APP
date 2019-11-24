import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

/** Propriedades do FabButton */
export interface AppProps {
    top?:boolean;
    left?:boolean;
    icon?: string;
    onPress():void;
}

/**
 * Icone flutuante 
 * @param props 
 */
export function Fab (props: AppProps) {

    return (
      <View style={styles.fabStyle}>
          <TouchableOpacity onPress={props.onPress}>
            <Icon raised reverse name={props.icon} color='green' />
         </TouchableOpacity>
      </View>
    );
}
//Define as propriedades padrões de um componente passado como função
Fab.defaultProps = { icon: 'add' }

//Css a  ser aplicado 
const styles = StyleSheet.create({
    fabStyle: {
      position: 'absolute',
      bottom: 10,
    },
});