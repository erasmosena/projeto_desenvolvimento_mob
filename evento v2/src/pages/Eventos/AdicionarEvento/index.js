import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableHighlight, TouchableOpacity, Button, ScrollView } from 'react-native'
import TextField from "../../../components/TextField";

import BotaoPadrao from "../../../components/botao-padrao";
import Datepicker from "../../../components/Datepicker";
import { notificar } from "../../../Services/NotificacoesService";
import { adicionar } from "../../../Services/EventosService";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USUARIO_LOGADO_KEY } from "../../../Services/Constantes";
import TimePicker from "../../../components/TimePicker";

export default function AdicionarEventos() {

    const navigation = useNavigation();

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const [dataInicio, setDataInicio] = useState('')
    const [horaInicio, setHoraInicio] = useState('')

    const [dataFim, setDataFim] = useState('')
    const [horaFim, setHoraFim] = useState('')

    const [identificadorUsuario, setIdentificadorUsuario] = useState("");

    async function buscarUsuario() {
        id = await AsyncStorage.getItem(USUARIO_LOGADO_KEY);
        setIdentificadorUsuario(id);
    }
    buscarUsuario();




    const minDate = new Date().toString()

    const salvar = () => {
        let evento = {
            identificadorUsuario: identificadorUsuario,
            nome: nome,
            descricao: descricao,
            dataInicio: `${dataInicio} ${horaInicio}`,
            dataFim: `${dataFim} ${horaFim}`
        };
        console.log(evento);
        adicionar(evento)
            .then(it => {
                notificar("Evento inserido");
                navigation.goBack()
            })
            .catch(it => {
                notificar(`erro ao inserir`)
                console.log(`erro ao inserir\n\n ${JSON.stringify(it)}`)
            });


    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.campos}>

                        <TextField label={'Nome do evento'} value={nome}
                            onChangeText={(nome) => { setNome(nome) }}
                            placeholder={'Informe o nome do evento'} />

                        <TextField label={'Descricao do evento'} value={descricao}
                            onChangeText={(descricao) => { setDescricao(descricao) }}
                            placeholder={'Escolha uma descrição para o evento'} />


                        <Datepicker key={'dataInicio'}
                            label={'Data'}
                            placeholder={'Qual a data do evento '}
                            onDayPress={(data) => {
                                setDataInicio(data);
                            }}
                            minDate={minDate}
                            onChangeText={(data) => setDataInicio(data)}
                            initValue={dataInicio}
                        />
                        <TimePicker data={horaInicio} key={'horaInicio'}
                            label={'Hora de inicio'}
                            placeholder={'Em qual horário irá iniciar? '}
                            onDayPress={(hora) => {
                                setHoraInicio(hora);
                            }}
                            minDate={minDate}
                            onChangeText={(hora) => setHoraInicio(hora)}
                            initValue={horaInicio}
                        />


                        <Datepicker data={dataFim} key={'dataFim'}
                            label={'Data de término'}
                            placeholder={'Em qual data irá finalizar? '}
                            onDayPress={(data) => {
                                setDataFim(data);
                            }}
                            minDate={minDate}
                            onChangeText={(data) => setDataFim(data)}
                            initValue={dataFim}
                        />
                        <TimePicker data={horaFim} key={'horaFim'}
                            label={'Hora de término'}
                            placeholder={'Em qual horário irá finalizar? '}
                            onDayPress={(hora) => {
                                setHoraFim(hora);
                            }}
                            minDate={minDate}
                            onChangeText={(hora) => setHoraFim(hora)}
                            initValue={horaFim}
                        />

                    </View>

                    <View style={styles.button}>
                        <BotaoPadrao titulo='Salvar' onPress={salvar} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 5,
    },
    container: {
        margin: 20,
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    input: {
        fontSize: 18
    },
    label: {
        fontSize: 20
    },

    modal: {
        margin: 15,
    },
    viewModal: {
        backgroundColor: '#333',
        opacity: 0.8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})