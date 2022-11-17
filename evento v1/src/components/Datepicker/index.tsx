import TextField from "../TextField";
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { Calendar } from "react-native-calendars";

import { useState } from 'react'


const Datepicker = ({ label, placeholder, onDayPress, initialDate, minDate, value, onChangeText }) => {
    
    const [show, setShow] = useState(false);
    let dataInicioComponent;
    if (show) {
        Keyboard.dismiss()
        dataInicioComponent =
            <View>
                <Calendar
                    // Initially visible month. Default = now
                    initialDate={initialDate}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={minDate}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2030-01-01'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day:any)=>{
                        onDayPress(day)
                        setShow(!show) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day: any) => {
                        console.log('selected day', day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month: any) => {
                        console.log('month changed', month);
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
                    disableArrowLeft={true}
                    // Disable right arrow. Default = false
                    disableArrowRight={true}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}

                    // Replace default month and year title with custom one. the function receive a date as parameter
                    // renderHeader={ date => {
                    //   /*Return JSX*/
                    // }}

                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                />

            </View>

    } else {
        dataInicioComponent =
            <View onTouchStart={()=>{setShow(!show) }}>
                <TextField label={label} value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder} />
            </View>
    }
    return (dataInicioComponent)
}

export default Datepicker