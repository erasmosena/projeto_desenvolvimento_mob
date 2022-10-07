import React from "react";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Aluno from "../../../models/Evento";
import EventoService from "../../../services/evento-service";
import Formulario from "../../Formulario";

export default class ListarAlunos extends React.Component {

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.findAll()
    }

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
    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            this.findAll();
        }
    }

    render(): ReactNode {
        const { data, value, dataInsert } = this.state;
        const animalList = data.map((item) => {
            return (
                <View key={item.id}
                    id={item.id} >
                    <Text>id: {item.id} nome:{item.nome}</Text>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})