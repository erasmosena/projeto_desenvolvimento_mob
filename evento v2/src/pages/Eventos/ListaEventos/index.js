import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from 'react-native'
import ItemLista from "../../../components/ItemLista";
import { USUARIO_LOGADO_KEY } from "../../../Services/Constantes";
import { findAll } from "../../../Services/EventosService";
import { notificar } from "../../../Services/NotificacoesService";


export default function ListaEventos() {




    const [data, setData] = useState([]);
    const [identificadorUsuario, setIdentificadorUsuario] = useState("");
    
    async function buscarUsuario() {
        id = await AsyncStorage.getItem(USUARIO_LOGADO_KEY);
        setIdentificadorUsuario(id); 
    }
    buscarUsuario();


    useEffect(() => {        
        if( identificadorUsuario != undefined && identificadorUsuario != ''){
            buscarTodos(identificadorUsuario);        
        }
        
    }, [identificadorUsuario]);

    function buscarTodos() {
        findAll(identificadorUsuario).then(it => {
            setData(it.data)
        }).catch(it => {
            console.error(it.data)
        });
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.lista}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemLista data={item} />}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    lista: {
        backgroundColor: '#ffffff',
        width: '100%'
    }
})

