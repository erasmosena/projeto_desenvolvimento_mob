import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ItemLista from "../../../components/ItemLista";


export default function ListaEventos() {

    const [data, setData] = useState([
        
    ]);
    
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

