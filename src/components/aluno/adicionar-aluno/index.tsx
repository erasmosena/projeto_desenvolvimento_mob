import { Dimensions, StyleSheet, View } from "react-native";
import Formulario from "../../Formulario";

export default function AdicionarAluno(){
    return(
        <View style={styles.container}>
            <Formulario></Formulario>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:25,
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: Dimensions.get("screen").height
      },
})
