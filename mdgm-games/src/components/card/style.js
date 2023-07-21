import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: '25%',
      width: '80%',
      backgroundColor: '#7928C9',  
      borderRadius: 15,
      marginTop: 10,
    },
    foto: {
        height: '100%',
        width: '40%',
        padding: 10,

    },
    img: {
        height: '100%',
        width: '100%',
    },
    texto: {
        height: '100%',
        width: '60%',
        padding: 10,
    },
    titulo: { 
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    atributos: {
        margin: 2,
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