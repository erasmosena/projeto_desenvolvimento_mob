import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable'
import BotaoPadrao from '../../../components/botao-padrao';
import { USUARIO_LOGADO_KEY } from '../../../Services/Constantes';
import { cadastrar, logar } from '../../../Services/LoginService';
import { notificar } from '../../../Services/NotificacoesService';

export default function SignOn() {

    const navigation = useNavigation();
    const [usuario, setUsuario] = useState(null);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');



    function voltar() {
        navigation.goBack();
    }
    function adicionarUsuario() {
        let usuario = cadastrar(nome, email, senha, senhaConfirmacao)
        if (usuario != undefined) {
            //notificar(usuario)
            navigation.navigate('SignIn');
        } else {
            notificar("Não foi possível cadastrar usuário.");
        }
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} >
            <View style={styles.container}>

                <View style={styles.containerHeader}>
                    <Text style={styles.message}>Cadastre-se</Text>
                </View>



                <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                    <Text style={styles.title}>Nome</Text>
                    <TextInput
                        placeholder='Digite o seu nome...'
                        value={nome}
                        onChangeText={(nome) => setNome(nome)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder='Digite o seu e-email...'
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder='Digite sua senha...'
                        value={senha}
                        onChangeText={(senha) => setSenha(senha)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Confirmar Senha</Text>
                    <TextInput
                        placeholder='Digite sua senha novamente...'
                        value={senhaConfirmacao}
                        onChangeText={(senhaConfirmacao) => setSenhaConfirmacao(senhaConfirmacao)}
                        style={styles.input}
                    />

                    <BotaoPadrao titulo="Cadastrar" onPress={adicionarUsuario} />

                    <BotaoPadrao titulo="Voltar" onPress={voltar} />



                </Animatable.View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
})