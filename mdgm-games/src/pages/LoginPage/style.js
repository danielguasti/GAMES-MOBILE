import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#180828',
    },
    Logo: {
        marginBottom: '10px',
        height: '250px',
        width: '250px'
    },
    barra: {
        textAlign: 'center',
        fontSize: '15px',
        fontStyle: 'italic',
        borderColor: 'white',
        height: 40,
        width: '70%',
        margin: '10px',
        borderWidth: '1px',
        borderRadius: '10px',
        color: "white"
    },
    textinhos: {
        color: 'white',
        margin: '5px',
        fontSize: '12px',
        fontStyle: 'bold',
        fontWeight: 'bold',

    },
    botao: {
        height: 40,
        width: "70%",
        backgroundColor: "#5E3E7D",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    TextoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"

    }

});


export default styles;