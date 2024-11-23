import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from './Login';
import Bankdetails from './Bankdetails';
import LandingPage from './LandingPage';
import ContactDetailsForm from './ContactDetails'
import AuthenticateForm from './Authentication';
import PersonalDetailsForm from './Personaldetail';


export default function App() {
  return (
    <View style={styles.container}>
      
       
        <PersonalDetailsForm />
    </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
