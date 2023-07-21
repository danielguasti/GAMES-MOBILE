import { View, Text, TextInput, Button, Alert, alert, TouchableOpacity} from "react-native";
import styles from "./style";
import React from 'react';
import { Link } from "@react-navigation/native";

export default function RegisterPage() {

    const[text, onChangeText] = React.useState('');

    const[text2, onChangeText2] = React.useState('');

    const[text3, onChangeText3] = React.useState('');

    return(

        <View style={styles.container2}>

            <Text style={styles.titulosBarras}>Nome de Usuário</Text>

            <TextInput style={styles.barra} onChangeText={onChangeText} value={text}/>

            <Text style={styles.titulosBarras2}>E-mail</Text>

            <TextInput style={styles.barra} onChangeText={onChangeText2} value={text2}/>

            <Text style={styles.titulosBarras2}>Senha</Text>

            <TextInput style={styles.barra} onChangeText={onChangeText3} value={text3} secureTextEntry = {true}/>

            <TouchableOpacity style={styles.botao}>
                <Link style={styles.TextoBotao} to  ={{ screen: "Página de Login" }}>Registrar</Link>
            </TouchableOpacity>

        </View>
    );
}



