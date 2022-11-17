import React from "react";
import { ReactNode } from "react";
import { ActivityIndicator,  StyleSheet, View } from "react-native";
import Evento from "../../../models/Evento";
import Aluno from "../../../models/Evento";
import EventoService from "../../../services/evento-service";
import CustomListView from "../../custom-list-view";
import CustomRow from "../../custom-row";
import Formulario from "../../Formulario";


export default class ListarAlunos extends React.Component {




    state = {        
        isLoading: true, 
        data: []        
    }

     componentDidMount() {
        this.findAll();
    }

    //escuta atualizações na lista
    componentDidUpdate(prevProps, prevState) {    
        let prev = Object.assign([], prevState.data)
        let atual = this.state.data
        if (prev.equals(atual)) {
            this.findAll(); 
        } 
    }

    findAll = () => {
        // console.log("find all ")
        this.setState({isLoading:true})
        EventoService.findAll()
            .then((response: any) => {
                if (response.length > 0) {
                    console.log(`Igual ${this.state.data === response} \n\n | ${JSON.stringify(this.state.data) } \n\n| ${JSON.stringify(response)} \n\n`)
                    this.setState({
                        data: response,
                        isLoading: true,
                    })
                } else {
                    console.log("sem data")
                }
            }), (error) => {
                console.log(error);
            }

    }
   
   

    render(): ReactNode {
        const { data, isLoading } = this.state;
        
        if( isLoading){
            {loading}
        }else{
            return (
                
                <View style={styles.container}>
                    <CustomListView
                        itemList={data}
                    />
                </View>
            );
        }

    }
}

const loading = ()=>{
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      },
})