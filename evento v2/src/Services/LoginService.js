import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api"
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
        await api.post(`/usuarios/login`,{"login":login, "senha":senha})
        .then(res => {
            usuario = res.data;            
        }); 
        if( usuario != undefined){
            await AsyncStorage.setItem(USUARIO_LOGADO_KEY, usuario.identificador);
        }
        
        return usuario;
    } catch (error) {
        console.error(error);
    } 
}

export async function cadastrar(nome, login, senha, senhaConfirmacao){
    if (nome == '') {
        notificar('Campo nome não pode ser vazio');
        return
    }
    if (login == '') {
        notificar('Campo login não pode ser vazio');
        return
    }
    if (senha == '') {
        notificar('Campo senha não pode ser vazio');
        return
    }
    if (senhaConfirmacao == '') {
        notificar('Campo confirmação senha não pode ser vazio'); 
        return
    }

    try {
        let usuario = {"nome": nome, "login":login, "senha":senha, "senhaConfirmacao": senhaConfirmacao};
        await api.post(`/usuarios`,usuario)
        .then(res => {
            usuario = res.data;            
        }); 
        
        
        return usuario;
    } catch (error) {
        console.error(error);
    } 
}



  

