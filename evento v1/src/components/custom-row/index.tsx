import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    nome: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    descricao: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    dataFim: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    dataInicio: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = ({ nome, descricao, dataInicio, dataFim }) => (
    <View style={styles.container}>
        {/* <Image 
         source={{ uri: '' }}
         style={styles.photo} /> */}
        <View style={styles.container_text}>
            <Text style={styles.nome}>
                {nome}
            </Text>
            <Text style={styles.descricao}>
                {descricao}
            </Text>
            <Text style={styles.dataInicio}>
                {dataInicio}
            </Text>
            <Text style={styles.dataFim}>
                {dataFim}
            </Text>
        </View>

    </View>
);

export default CustomRow;