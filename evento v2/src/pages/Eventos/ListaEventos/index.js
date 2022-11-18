import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ItemLista from "../../../components/ItemLista";
import { buscar, findAll } from "../../../Services/EventosService";
import { USUARIO_LOGADO_KEY } from "../../../Services/Constantes";


export default function ListaEventos() {
    
    const [data, setData] = useState([]);
    const [usuario, setUsuario] = useState(null);
    
    async function buscarUsuarioLogado() {
        await AsyncStorage.getItem(USUARIO_LOGADO_KEY).then((value) => {            
            setUsuario(value);           
            console.log(value);
        });         
    }

    useEffect(() => {
        buscarUsuarioLogado();    
        console.log(usuario);
    }, []);


    function buscarTodos() {
        findAll().then(it => {
            setData(it.data)
        });
    }
    useEffect(() => {
        buscarTodos(usuario?.identificador);
    }, [usuario]);
    

    



    return (
        <View style={styles.container}>

            <FlatList style={styles.lista}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemLista data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    lista: {
        width: '100%'
    }
})

