import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../Components/Card';
import styles from './styles';

const listacard = [
  {
    titulo: 'Bolsa Mágica',
    atributo1: 'Espaço: 25',
    atributo2: 'Defesa: 15',
    atributo3: 'Velocidade: 5',
    urlimg: 'https://i.pinimg.com/550x/96/ca/11/96ca11fc678bca3d428d04fae9cfb6ea.jpg',

  },
  {
    titulo: 'Espada X',
    atributo1: 'Ataque: 30',
    atributo2: 'Velocidade: 2',
    atributo3: 'Veneno: 10',
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlf7u3ayN3lnENab3K13flPXzOCoxXA2m6w&usqp=CAU',
  },
  {
    titulo: 'Arco poderoso',
    atributo1: 'Ataque: 15',
    atributo2: 'Velocidade: 5',
    atributo3: 'Distância: 20',
    urlimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfe0waUWxZ9WUhtAc5cTVsL3PEuBpJB5_tTg&usqp=CAU',
  }
]

export default function DashboardPage() {
  return (
    <View style={styles.container}>
      
      {listacard.map(card => <Card card={card}/>)}
      
    </View>
  );
}