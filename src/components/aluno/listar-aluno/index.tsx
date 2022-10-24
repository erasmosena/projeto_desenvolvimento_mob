import React from "react";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Evento from "../../../models/Evento";
import Aluno from "../../../models/Evento";
import EventoService from "../../../services/evento-service";
import Formulario from "../../Formulario";
//import { ListItem } from 'react-native-elements'
import { FlashList } from "@shopify/flash-list";

export default class ListarAlunos extends React.Component {

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.findAll()
    }

    
    data = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
  ];

    state = {
        data: []
    }

    findAll = () => {
        EventoService.findAll()
            .then((response: any) => {
                if (response.length > 0) {

                    this.setState({
                        data: response,
                        isLoading: false,
                    })
                } else {
                    console.log("sem data")
                }
            }), (error) => {
                console.log(error);
            }

    }
    // componentDidMount() {
    //     this.findAll();
    // }

    //escuta atualizações na lista
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.data !== this.state.data) {
    //         this.findAll();
    //     }
    // }

    render(): ReactNode {
        const { data } = this.state;
        const animalList = data.map((item: Evento) => {
            console.log(JSON.stringify(item.nome))
            console.log(JSON.stringify(item.id))
            return (
                <View key={item.id} >
                    <View style={styles.linha}>
                        <View style={{width:'75%', height:'15%'}}>
                            <View style={[styles.coluna,styles.coluna1]}>
                                <View style={styles.datas}>
                                    <Text style={{fontSize: 16}}>{item.dataInicio} - {item.dataFim}</Text>
                                </View>
                                <View style={styles.linha}>
                                    <Text>{item.nome} </Text>
                                </View>
                                <View style={styles.linha}>
                                    <Text>{item.descricao}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:'25%', height:'15%'}}>
                            <View style={[styles.coluna,styles.coluna2]}>
                                <View >

                                </View>
                            </View>
                        </View>
                    </View>                    
                </View>
            )
        })

        return (

               
            <View style={styles.container}>
                {animalList}
            </View>
        );

        
    }
}

const styles = StyleSheet.create({
    linha: {
        
        width:'100%',        
        flex: 1,
        flexDirection: "row",
        height: '15%'
        
    },
    datas:{
        // backgroundColor:"#443222",
        width:'100%',
    },
    coluna: {        
        alignItems:"flex-start",
        height: '15%',
        flex: 1,
        flexDirection: "column"
    },
    coluna1:{
        alignItems:"flex-start",
        // backgroundColor:"#768765",
        
    },
    coluna2:{
        // backgroundColor:"#654321",
        
    },
    container: {        
        width:'100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})