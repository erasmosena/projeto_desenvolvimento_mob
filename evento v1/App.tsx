

import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AdicionarAluno from './src/components/aluno/adicionar-aluno';
import Formulario from './src/components/Formulario';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListarAlunos from './src/components/aluno/listar-aluno';
import DatabaseInit from './src/database/database-init';

export default class App extends React.Component { 


  constructor(props: {} | Readonly<{}>) {
    super(props);
    new DatabaseInit
    console.log("initialize database")
  }


  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
      <Drawer.Navigator  >
        <Drawer.Screen name="Ver Eventos" component={ListarAlunos} />
        <Drawer.Screen name="Adicionar Novo Evento" component={AdicionarAluno} />
      </Drawer.Navigator>     
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get("screen").height
  },
});
