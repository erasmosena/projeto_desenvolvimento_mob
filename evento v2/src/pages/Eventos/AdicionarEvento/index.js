import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableHighlight, TouchableOpacity, Button } from 'react-native'
import TextField from "../../../components/TextField";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import BotaoPadrao from "../../../components/botao-padrao";
import Datepicker from "../../../components/Datepicker";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function AdicionarEventos() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [horaInicio, setHoraInicio] = useState('')
    const [dataFim, setDataFim] = useState('')
    const [horaFim, setHoraFim] = useState('')


    const [modalVisibleDataInicio, setModalVisibleDataInicio] = useState(false)
    const [modalVisibleDataFim, setModalVisibleDataFim] = useState(false)

    const minDate = new Date().toISOString()

    const salvar = () => {
        console.log("Salvar");
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        alert(JSON.stringify(selectedDate.toString("yyyy-mm-dd")));
        setDataInicio(currentDate);
    };
    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDataInicio(currentDate);
    };

    const showMode = (currentMode, valorInicial) => {
        const onchage = (currentMode == 'Date') ? onChangeDate : onChangeTime;
        DateTimePickerAndroid.open({
            value: new Date(),
            onchage,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepickerInicio = () => {
        if (dataInicio == '') {
            setDataInicio(new Date().toDateString());
        }
        const onchage =  (event, selectedDate) => {
            const currentDate = selectedDate;
            setDataInicio(currentDate);
        }
        DateTimePickerAndroid.open({
            value: new Date(),
            onchage,
            mode: 'date',
            is24Hour: true,
        });

    };

    const showDatepickerFim = () => {
        if (dataFim == '') {
            setDataFim(new Date().toDateString());
        }
        const onchage =  (event, selectedDate) => {
            const currentDate = selectedDate;
            setDataFim(currentDate);
        }
        DateTimePickerAndroid.open({
            value: new Date(),
            onchage,
            mode: 'date',
            is24Hour: true,
        });
    };

    const showTimepickerInicio = () => {
        
        if (horaInicio == '') {
            setHoraInicio(new Date().toDateString());
        }
        const onchage =  (event, selectedDate) => {
            const currentDate = selectedDate;
            setHoraInicio(currentDate.toTimeString());
        }
        DateTimePickerAndroid.open({
            value: new Date(),
            onchage,
            mode: 'time',
            is24Hour: true,
        });
    };

    const showTimepickerFim = () => {
        
        if (horaFim == '') {
            setHoraFim(new Date().toDateString());
        }
        const onchage =  (event, selectedDate) => {
            const currentDate = selectedDate;
            setHoraFim(currentDate.toTimeString());
        }
        DateTimePickerAndroid.open({
            value: new Date(),
            onchage,
            mode: 'time',
            is24Hour: true,
        });
    };



    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.campos}>

                    <TextField label={'Nome do evento'} value={nome}
                        onChangeText={(nome) => { setNome(nome) }}
                        placeholder={'Informe o nome do evento'} />

                    <TextField label={'Descricao do evento'} value={descricao}
                        onChangeText={(descricao) => { setDescricao(descricao) }}
                        placeholder={'Escolha uma descrição para o evento'} />


                    <View style={{ flexDirection: 'row' }}>
                        <TextField label={'Data Inicio'} value={dataInicio}
                            onChangeText={(dataInicio) => { setDataInicio(dataInicio) }}
                            placeholder={'Data de inicio'} />
                        <TouchableOpacity onPress={() => showDatepickerInicio()} style={styles.icone}>
                            <FontAwesome name="calendar" size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TextField label={'Hora Inicio'} value={horaInicio}
                            onChangeText={(horaInicio) => { setHoraInicio(horaInicio) }}
                            placeholder={'Hora de inicio'} />
                        <TouchableOpacity onPress={() => showTimepickerInicio()} style={styles.icone}>
                            <FontAwesome name="clock-o" size={20} />
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <TextField label={'Data'} value={dataFim}
                            onChangeText={(dataFim) => { setDataFim(dataFim) }}
                            placeholder={'Data e hora de término'} />
                        <TouchableOpacity onPress={() => showDatepickerFim()} style={styles.icone}>
                            <FontAwesome name="calendar" size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TextField label={'Hora de término'} value={horaInicio}
                            onChangeText={(horaFim) => { setHoraFim(horaFim) }}
                            placeholder={'Hora de término'} />
                        <TouchableOpacity onPress={() => showTimepickerFim()} style={styles.icone}>
                            <FontAwesome name="clock-o" size={20} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.button}>
                    <BotaoPadrao titulo='Salvar' onPress={salvar} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
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
    icone: {
        margin: 5
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