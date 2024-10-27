import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styled from "styled-components/native";
const Input = styled.TextInput`
    background-color: #fff;
    height: 45px;
    border-radius: 6px;
    margin-bottom: 6px;
    padding-left: 12px;
`;
const NotificationTester = () => {
    const [message, setMessage] = useState("Nenhuma mensagem recebida.");
    const [send, setSend] = useState("");
    const webSocket = useRef(null);

    useEffect(() => {
        // Substitua o URL pelo endereço do seu backend (mantenha ws:// para WebSocket)
        webSocket.current = new WebSocket("ws://127.0.0.1:8000/ws/backendheat/");

        // Quando o WebSocket se conectar
        webSocket.current.onopen = () => {
            console.log("Conectado ao WebSocket");
        };

        // Quando receber uma mensagem do servidor
        webSocket.current.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data);
            setMessage(data.message);
        };

        // Quando o WebSocket fechar a conexão
        webSocket.current.onclose = () => {
            console.log("Desconectado do WebSocket");
        };

        return () => {
            // Limpar o WebSocket ao desmontar o componente
            webSocket.current.close();
        };
    }, []);

    // Função para enviar uma mensagem para o backend
    const sendMessage = () => {
        if (webSocket.current) {
            webSocket.current.send(
                JSON.stringify({
                    message: "Mensagem de teste do React Native!",
                })
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>WebSocket Tester</Text>
            <Text style={styles.message}>Mensagem Recebida: {message}</Text>
            <Input secureTextEntry={false} placeholder="Escreva aqui..." value={send} onChangeText={(e) => setSend(e)} />
            <Button title="Enviar Mensagem" onPress={sendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default NotificationTester;
