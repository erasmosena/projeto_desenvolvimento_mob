import { Button, Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'
import EventoService from "../../services/evento-service";
import Aluno from "../../models/Evento";

let STORAGE_KEY = '@ultima_atualizacao';

const TextField = ({ label, ...inputProps }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      {...inputProps} />
  </View>
)


export default class Formulario extends React.Component {
  data = new Date();
  state = {
    dataUltimaAtualizacao: "",
    id: "",
    nome: "",
    descricao: "",
    dataInicio: `${this.data.toLocaleDateString()} ${this.data.toLocaleTimeString()}`,
    dataFim: `${this.data.toLocaleDateString()} ${this.data.toLocaleTimeString()}`

  }

  addToStorage = (aluno: any) => {
    EventoService.addData(aluno)
      .then((response: any) => {
        console.log(`Aluno inserido ${aluno}`)
      }), (error) => {
        console.log(error);
      }
  }


  salvar = () => {
    this.addToStorage(this.state)
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

    const { id, nome, descricao, dataInicio, dataFim } = this.state;

    return (

      <View style={styles.mainContainer}>
        <View style={styles.campos}>
          <TextField label={'Nome do evento'} value={nome}
            onChangeText={(nome: any) => { this.setState({ nome: nome }) }}
            placeholder={'Informe o nome do evento'} />

          <TextField label={'Descricao do evento'} value={descricao}
            onChangeText={(descricao: any) => { this.setState({ descricao: descricao }) }}
            placeholder={'Escolha uma descrição para o evento'} />

          <TextField label={'Data e hora de inicio'} value={dataInicio}
            onChangeText={(dataInicio: any) => { this.setState({ dataInicio: dataInicio }) }}
            placeholder={'Que horas irá começar o evento ?'} />

          <TextField label={'Data e hora de término'} value={dataFim}
            onChangeText={(dataFim: any) => { this.setState({ dataFim: dataFim }) }}
            placeholder={'Qual o horário irá finalizar? '} />
        </View>
        <View style={styles.button}>
          <Button onPress={this.salvar} title={'Salvar'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    
  }, 
  campos: {
    
    paddingBottom: 20
  }, 
  input: {
    fontSize: 18
  },
  label: {
    fontSize: 20
  },
  container: {

  },
  ultimaAtualizacao: {
    paddingTop: 20
  },
  mainContainer: {
    
    justifyContent:"space-between", 
    flexDirection: "column",
    height: '100%'
  }
})