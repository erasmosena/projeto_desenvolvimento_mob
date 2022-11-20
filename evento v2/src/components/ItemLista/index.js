import React from "react"

import { StyleSheet, Text, View } from "react-native"

import moment from 'moment';

export default function ItemLista ({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.viewTextos}>
                <Text style={styles.nome}>
                    {data.nome}
                </Text>
                <Text style={styles.descricao}>
                    {data.descricao}
                </Text>
            </View>
            <View style={styles.viewDatas}>
                <Text style={styles.datas}>
                    {moment(data.dataInicio, 'YYYY-MM-DD').format('DD/MM/YYYY')}
                    
                </Text>
                <Text style={styles.datas}>
                    -
                </Text>
                <Text style={styles.datas}>
                    {moment(data.dataFim, 'YYYY-MM-DD').format('DD/MM/YYYY')}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 2,
    },

    viewTextos: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
        justifyContent: 'center',
    },
    viewDatas: {
        flex: 1,
        flexDirection: 'row',
    },
    nome: {
        fontSize: 25,
        color: '#000',
    },
    descricao: {
        fontSize: 17,
        fontStyle: 'italic',
    },
    datas: {
        fontSize: 15,
        fontStyle: 'italic',
        paddingLeft: 5
    },
    photo: {
        height: 50,
        width: 50,
    },
});
