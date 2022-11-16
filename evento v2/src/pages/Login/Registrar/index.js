import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function Registrar() {
    const navigation = useNavigation();
    //navigation.navigate('ListarEventos');
    return (
        <View style={styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        padding: 15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
    },
    areaTexto:{         
        flex:1, 
        height: 50, 
        padding: 5, 
        borderRadius:25,
        backgroundColor: '#C0C0C0', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    texto: {
        fontSize:20, 
    }
})

