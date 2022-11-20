import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdicionarEventos from "./src/pages/Eventos/AdicionarEvento";
import ListaEventos from "./src/pages/Eventos/ListaEventos";
import Home from "./src/pages/Home";
import EfetuarLogin from "./src/pages/Login/SignOn";
import Welcome from "./src/pages/Welcome";
import SignIn from "./src/pages/Login/SignIn";
import SignOn from "./src/pages/Login/SignOn";

// import Home from "./src/pages/Home";
// import ListaEventos from "./src/pages/Eventos/ListaEventos";
// import AdicionarEventos from "./src/pages/Eventos/AdicionarEvento";
// import EfetuarLogin from "./src/pages/Login/EfetuarLogin";


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <stack.Navigator >

      <stack.Screen name="Welcome"
          options={{
            headerShown: false
          }}
          component={Welcome} />

        <stack.Screen name="SignIn"
          options={{
            headerShown: false
          }}
          component={SignIn} />

        <stack.Screen name="SignOn"
          options={{
            headerShown: false
          }}
          component={SignOn} />

        

        <stack.Screen name="Login"
          options={{
            // title: 'Login',
            // headerStyle: {
            //   backgroundColor: '#121212'
            // },
            // headerTintColor: '#FFF', 
            headerShown: false
          }}
          component={EfetuarLogin} />
        <stack.Screen name="Home"
          options={{
            headerShown: false
          }}
          component={Home} />
        <stack.Screen name="ListarEventos"
          options={{
            title: 'Lista Eventos',
          }}
          component={ListaEventos} />

        <stack.Screen name="AdicionarEventos"
          options={{ title: 'Adicionar um novo evento' }}
          component={AdicionarEventos} />

      </stack.Navigator>
    </NavigationContainer>
  )
}