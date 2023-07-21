import { Link  } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from './style';

export default function LoginPage(props) {
    const [text, onChangeText] = React.useState('');

    const[text2, onChangeText2] = React.useState('');

    return(
    

        <View style={styles.container}>
            <Image style={styles.Logo} source={require("/src/imgs/MDGM.png")} />
            
            <TextInput style={styles.barra} onChangeText={onChangeText} value={text} placeholder="Login" />

            <TextInput style={styles.barra} onChangeText={onChangeText2} value={text2} placeholder="Senha" secureTextEntry={true} />

            <TouchableOpacity style={styles.botao}>
                <Link style={styles.TextoBotao} to  ={{ screen: "Dashboard" }}>Entrar</Link>
            </TouchableOpacity>

            <Link style={styles.textinhos} to={{ screen: "Página de Registro" }}>Registrar-se</Link>

            <Link style={styles.textinhos} to={{ screen: "Esqueceu a Senha" }}>Esqueceu a Senha?</Link>


        </View>
    );


}