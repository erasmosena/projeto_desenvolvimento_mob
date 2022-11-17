import { ReactNode } from "react";
import { Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";

const TextField = ({ label, ...inputProps }) => (

    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            {...inputProps} />
    </View>
)


const styles = StyleSheet.create({
    input: {
        fontSize: 18
      },
      label: {
        fontSize: 20
      },
      container: {
    
      }
})

export default TextField