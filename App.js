import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import Login from './Login';
import Bankdetails from './Bankdetails';
import LandingPage from './LandingPage';
import ContactDetailsForm from './ContactDetails'
import AuthenticateForm from './Authentication';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalDetailsForm from './Personaldetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Personal" component={PersonalDetailsForm} />
        <Stack.Screen name="Contact" component={ContactDetailsForm} />
        <Stack.Screen name="Loan" component={Bankdetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
