import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";
import React from 'react';
import { TouchableOpacity } from "react-native-web";
import { Link } from "@react-navigation/native";


export default function ForgotPasswordPage() {

    const[text, onChangeText] = React.useState('');

    return (
        <View style={styles.container2}>

            <Text style={styles.titulosBarras}>E-mail para recuperação de senha</Text>

            <TextInput style={styles.barra} onChangeText={onChangeText} value={text}/>

            <TouchableOpacity style={styles.botao}>
                <Link style={styles.TextoBotao} to  ={{ screen: "Página de Login" }}>Enviar e-mail</Link>
            </TouchableOpacity>

        </View>
    );

}