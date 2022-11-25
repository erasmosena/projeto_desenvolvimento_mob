import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import TextField from '../TextField'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import moment from 'moment';

export default TimePicker = ({ label, placeholder, onSelect, initialDate, minDate, initValue, onChangeText }) => {
    
    const [value, setValue] = useState(initValue==''?new Date(): new Date(initValue))
    const [modalVisible, setModalVisible] = useState(false)

    function alternarVisibilidade() {
        setModalVisible(!modalVisible);
    }


    return (
        <View style={{ flexDirection: 'row' }} vi>
            <TextField label={label} value={moment(value).format('H:mm')}
                onChangeText={onChangeText}
                placeholder={placeholder} />
            <TouchableOpacity onPress={alternarVisibilidade} style={styles.icone}>
                <FontAwesome name="clock-o" size={20} />
            </TouchableOpacity>
                <DatePicker
                    is24hourSource="locale"                    
                    locale='pt-br'
                    modal
                    title={label}
                    open={modalVisible}
                    date={value}
                    mode="time"
                    onConfirm={(date) => {
                        alternarVisibilidade();
                        setValue(date)
                        onChangeText(moment(date).format('HH:mm:ss'));
                    }}
                    onCancel={() => {
                        alternarVisibilidade();
                    }}
                />

            

        </View>
    );

}


const styles = StyleSheet.create({
    icone: {
        margin: 5
    },
    viewModal: {

        opacity: 0.9,
        margin: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#222222"
    },
    botao: {
        width: '75%'
    }
})
