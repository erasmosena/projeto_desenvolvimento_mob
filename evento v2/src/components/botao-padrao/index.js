import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BotaoPadrao = ({titulo, onPress, style}) => (
    <View style={[styles.container, style]}>
        <TouchableOpacity style={styles.areaTexto}
            onPress={onPress}
        >
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    </View>
)


const styles = StyleSheet.create({
    container:{
        padding: 15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
    },
    areaTexto:{         
        flex:1, 
        height: 50, 
        padding: 5, 
        borderRadius:25,
        backgroundColor: '#C0C0C0', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    texto: {
        fontSize:20, 
    }
})


export default BotaoPadrao;