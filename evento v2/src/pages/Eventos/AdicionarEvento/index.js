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
    const [dataFim, setDataFim] = useState('')


    const [modalVisibleDataInicio, setModalVisibleDataInicio] = useState(false)
    const [modalVisibleDataFim, setModalVisibleDataFim] = useState(false)

    const minDate = new Date().toISOString()

    const salvar = () => {
        console.log("Salvar");
    }

    const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
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
                        <TextField label={'Data'} value={dataInicio}
                        onChangeText={(dataInicio) => { setDataInicio(dataInicio) }}
                        placeholder={'Data e hora de inicio'} />
                        <TouchableOpacity onPress={() => setModalVisibleDataInicio(true)} style={styles.icone}>
                            <FontAwesome name="calendar" size={20} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.input}>{dataInicio}</Text>
                        
                        <Modal transparent={true} style={styles.modal} animationType="slide" visible={modalVisibleDataInicio}>
                            <View style={styles.viewModal}>
                                <Datepicker key={'dataInicio'}
                                    label={'Data e hora de inicio'}
                                    placeholder={'Que horas irá começar o evento ?'}
                                    initialDate={dataInicio}
                                    onDayPress={(day) => {
                                        setDataInicio(day.dateString)
                                        setModalVisibleDataInicio(false);
                                    }}
                                    minDate={minDate}
                                    onChangeText={(dataInicio) => {
                                        setDataInicio(dataInicio);
                                    }}
                                    value={dataInicio}
                                />
                                <View style={{ width: 150 }}>
                                    <BotaoPadrao titulo="Voltar" style={{ areaTexto: { width: 25 } }} onPress={() => setModalVisibleDataInicio(false)} />
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextField label={'Data'} value={dataFim}
                            onChangeText={(dataFim) => { setDataFim(dataFim) }}
                            placeholder={'Data e hora de término'} />
                            <TouchableOpacity onPress={() => setModalVisibleDataFim(true)} style={styles.icone}>
                                <FontAwesome name="calendar" size={20} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.input}>{dataFim}</Text>
                        <Modal transparent={true} style={styles.modal} animationType="slide" visible={modalVisibleDataFim}>
                            <View style={styles.viewModal}>
                                <Datepicker key={'dataFim'}
                                    label={'Data e hora de término'}
                                    placeholder={'Qual o horário irá finalizar? '}
                                    initialDate={dataFim}
                                    onDayPress={(day) => {
                                        setDataFim(day.dateString)
                                        setModalVisibleDataFim(false);
                                    }}
                                    minDate={minDate}
                                    onChangeText={(data) => {
                                        setDataFim(data);
                                    }}
                                    value={dataFim}
                                />
                                <View style={{ width: 150 }}>
                                    <BotaoPadrao titulo="Voltar" style={{ areaTexto: { width: 25 } }} onPress={() => setModalVisibleDataFim(false)} />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
                <View style={styles.button}>
                    <BotaoPadrao titulo='Salvar' onPress={salvar} />
                </View>
                
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />

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
    viewModal:{
        backgroundColor:'#333',
        opacity: 0.8,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})