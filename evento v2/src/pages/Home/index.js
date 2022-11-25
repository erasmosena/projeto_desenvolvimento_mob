import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BotaoPadrao from "../../components/botao-padrao";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USUARIO_LOGADO_KEY } from "../../Services/Constantes";
import { notificar } from "../../Services/NotificacoesService";
import CommonDataManager from "../../Services/CommonDataManager";

export default function Home() {

    const navigation = useNavigation();
    const [usuario, setUsuario] = useState(null);

    return (
        <View style={styles.container}>

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ justifyContent: 'flex-start', flex: 2, alignItems: 'flex-start', padding:15 }}>
                    {/* <Text style={{ fontSize: 30, color: 'black', marginTop: 20 }}> Olá {commonData.getUser()?.nome}, bem vindo.</Text> */}
                </View>
                <View style={{ height: 50, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <BotaoPadrao titulo="Listar Eventos" onPress={() => navigation.navigate('ListarEventos')} />
                </View>
                <View style={{ height: 50, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <BotaoPadrao titulo="Adicionar Novo Evento" onPress={() => navigation.navigate('AdicionarEventos')} />
                </View>
                <View style={{ height: 50, justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <BotaoPadrao titulo="Sair" onPress={() => navigation.navigate('SignIn')} />
                </View>
                <View style={{ height: 50, justifyContent: 'center', flex: 2, alignItems: 'center' }}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
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