import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/pages/DashboardPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ForgotPasswordPage from './src/pages/ForgotPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DashboardPage from './src/pages/DashboardPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#5E3E7D'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: '20px',
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        

      }}>
          <Stack.Screen name = "Página de Login" component={LoginPage} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name = "Página de Registro" component={RegisterPage}></Stack.Screen>
          <Stack.Screen name = "Dashboard" component={DashboardPage}></Stack.Screen>
          <Stack.Screen name = "Esqueceu a Senha" component={ForgotPasswordPage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});