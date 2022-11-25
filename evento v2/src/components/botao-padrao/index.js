import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BotaoPadrao = ({titulo, onPress,style, style2}) => (
    <View style={[styles.container]}>
        <TouchableOpacity style={[styles.button]}
            onPress={onPress}
        >
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    </View>
)


const styles = StyleSheet.create({
    container:{
        
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
    },
    button: {

        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 25,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
      },
})


export default BotaoPadrao;