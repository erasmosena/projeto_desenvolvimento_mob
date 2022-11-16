import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BotaoPadrao from "../../components/botao-padrao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USUARIO_LOGADO_KEY } from "../../Services/Constantes";

export default function Home() {

    const navigation = useNavigation();
    const [usuario, setUsuario] = useState(null);

    async function buscarUsuarioLogado() {
        await AsyncStorage.getItem(USUARIO_LOGADO_KEY).then((value) => {            
            setUsuario(value);           
        });         
    }

    useEffect(()=>{
        buscarUsuarioLogado();        
    }, []);

    return (
        <View style={styles.container}>
            <Text>{usuario?.nome}</Text>
            <View style={{ flex: 1}}>
                <BotaoPadrao titulo="Listar Eventos" onPress={() => navigation.navigate('ListarEventos')} />
                <BotaoPadrao titulo="Adicionar Novo Evento" onPress={() => navigation.navigate('AdicionarEventos')} />
                <BotaoPadrao titulo="Sair" onPress={() => navigation.navigate('Login')} />

            </View>
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
        height: 50,
        padding: 5,
        margin: 15,
        borderRadius: 25,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 20,
    }
})