import React from 'react';
import { View, FlatList, StyleSheet, Text } from "react-native";
import Evento from '../../models/Evento';
import CustomRow from "../custom-row";




const CustomListView = ( {itemList}) => {


    return (
        <View style={styles.container}>
            <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    nome={item.nome}
                    descricao={item.descricao}
                    dataInicio={item.dataInicio}
                    dataFim={item.dataFim}
                />}
            />  

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', 
    },
});


export default CustomListView;