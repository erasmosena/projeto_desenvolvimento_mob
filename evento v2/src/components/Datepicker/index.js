import TextField from "../TextField";
import {StyleSheet, Modal, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import BotaoPadrao from "../botao-padrao";

import moment from 'moment';


import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt-br';


export default function Datepicker({ label, placeholder, onDayPress, initialDate, minDate, initValue, onChangeText }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState(initValue)
    function alternarVisibilidade() {
        setModalVisible(!modalVisible);
    }


    function innerDayPress(day) {
        setValue(moment(day.dateString, 'YYYY-MM-DD').format('DD/MM/YYYY'));
        onDayPress(day.dateString)
        alternarVisibilidade();
    }


    return (

        <View style={{ flexDirection: 'row' }}>
            <TextField label={label} value={value}
                onChangeText={onChangeText}
                placeholder={placeholder} />
            <TouchableOpacity onPress={alternarVisibilidade} style={styles.icone}>
                <FontAwesome name="calendar" size={20} />
            </TouchableOpacity>
            <Modal transparent={true} animationType="fade" visible={modalVisible}>
                <View style={styles.viewModal}>
                    <Calendar
                        // Initially visible month. Default = now
                        initialDate={initialDate}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={minDate}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2030-01-01'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={innerDayPress}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => {
                            //console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MMMM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => {
                            //console.log('month changed', month);
                        }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={false}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        //renderArrow={direction => <Arrow />}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={true}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={false}
                        // Disable right arrow. Default = false
                        disableArrowRight={false}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}

                        // Replace default month and year title with custom one. the function receive a date as parameter
                        // renderHeader={ date => {
                        //   /*Return JSX*/
                        // }}

                        // Enable the option to swipe between months. Default = false
                        enableSwipeMonths={true}
                    />
                    <View style={styles.botao} >
                        <BotaoPadrao titulo="Cancelar" onPress={alternarVisibilidade} />
                    </View>
                </View>
            </Modal>
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
