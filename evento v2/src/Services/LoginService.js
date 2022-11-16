import api from "./api"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USUARIO_LOGADO_KEY } from "./Constantes";
import { notificar } from "./NotificacoesService";

export const logar = async (login, senha) => {
      
    if (login == '') {
        notificar('Campo login não pode ser vazio');
        return
    }
    if (senha == '') {
        notificar('Campo senha não pode ser vazio');
        return
    }
    
    try {
        let usuario;
        await api.get(`/usuarios?login=${login}&senha=${senha}`)
        .then(res => {            
            usuario = res.data;            
        }); 
        if( usuario != undefined){
            await AsyncStorage.setItem(USUARIO_LOGADO_KEY, JSON.stringify(usuario)); 
        }
        notificar(JSON.stringify(usuario))
        return usuario;
    } catch (error) {
        console.error(error);
    } 
}



  
