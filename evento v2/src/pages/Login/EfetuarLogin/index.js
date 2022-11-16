import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { notificar } from "../../../Services/NotificacoesService";
import { logar } from "../../../Services/LoginService";
import { USUARIO_LOGADO_KEY } from "../../../Services/Constantes";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function EfetuarLogin() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState(null);

    function verificarUsuario(){
        if (usuario != undefined) {
            navigation.navigate('Home');
        }
    }

    async function buscarUsuarioLogado() {
        await AsyncStorage.getItem(USUARIO_LOGADO_KEY).then((value) => {            
            setUsuario(value);           
        });         
    }

    useEffect(()=>{
        buscarUsuarioLogado();        
    }, []);

    useEffect(()=>{
        verificarUsuario();
    }, [usuario]);
    
    
    

    function login() {
        let usuario = logar('erasmo', 'asdf')
        if (usuario != undefined) {
            navigation.navigate('Home')
        } else {
            notificar("Não foi possível efetuar o login.");
        }
    }

    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.areaTexto}
                onPress={login}
            >
                <Text style={styles.texto}>Login</Text>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    areaTexto: {
        flex: 1,
        height: 50,
        padding: 5,
        borderRadius: 25,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 20,
    }
})
