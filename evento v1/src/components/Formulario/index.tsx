import { Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";

import React, { } from 'react';

import EventoService from "../../services/evento-service";
import { Calendar } from "react-native-calendars";
import TextField from "../TextField";
import Datepicker from "../Datepicker";
import Evento from "../../models/Evento";

export default class Formulario extends React.Component {
  
  data = new Date();
  state = {
    show: false,
    id: "",
    nome: "",
    descricao: "",
    dataInicio: `${this.data.toLocaleDateString()} ${this.data.toLocaleTimeString()}`,
    dataFim: `${this.data.toLocaleDateString()} ${this.data.toLocaleTimeString()}`,
    date: new Date(1598051730000),
    mode: 'date'

  }



  salvar = () => {
    let evento:any  =  { nome:this.state.nome, descricao:this.state.descricao, dataInicio: this.state.dataInicio, dataFim: this.state.dataFim}
    EventoService.addData(evento)
    .then((response: any) => {
      console.log(`Aluno inserido ${JSON.stringify(evento)}`)
      
    }), (error) => {
      console.log(error);
    }
    
  }


  // useEffect(() => {
  //   readData(); 
  // }, []);
  //acionado quando o componente e montado
  componentDidMount() {

  }

  //escuta atualizações na lista
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {

    }
  }


  render() {
    const { id, nome, descricao, dataInicio, dataFim, date, mode, show } = this.state;

    const minDate = new Date().toISOString()



    return (

      <View style={styles.mainContainer}>
        <View style={styles.campos}>
          <TextField label={'Nome do evento'} value={nome}
            onChangeText={(nome: any) => { this.setState({ nome: nome }) }}
            placeholder={'Informe o nome do evento'} />

          <TextField label={'Descricao do evento'} value={descricao}
            onChangeText={(descricao: any) => { this.setState({ descricao: descricao }) }}
            placeholder={'Escolha uma descrição para o evento'} />
          
          <Datepicker  key={'dataInicio'}
            label= {'Data e hora de inicio'}
            placeholder = {'Que horas irá começar o evento ?'}
            initialDate={dataInicio} 
            onDayPress={(day: any) => {
              this.setState({ dataInicio: `${day.dateString}` })
            }}
            minDate={minDate}
            onChangeText={(dataInicio: any) => { this.setState({ dataInicio: dataInicio }) }}
            value={dataInicio}

          />

          <Datepicker key={'dataFim'}
            label= {'Data e hora de término'}
            placeholder = {'Qual o horário irá finalizar? '}
            initialDate={dataFim} 
            onDayPress={(day: any) => {              
              this.setState({ dataFim: `${day.dateString}` })              
            }}
            minDate={minDate}
            onChangeText={(dataFim: any) => { this.setState({ dataFim: dataFim }) } }
            value={dataFim}
          />

        </View>
        <View style={styles.button}>
          <Button onPress={()=>{
            this.salvar()
           
          }} title={'Salvar'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePickerStyle: {

  },
  button: {

  },
  campos: {

    paddingBottom: 20
  },
  
  ultimaAtualizacao: {
    paddingTop: 20
  },
  mainContainer: {

    justifyContent: "space-between",
    flexDirection: "column",
    height: '100%'
  }
})