 import { StatusBar } from 'expo-status-bar';  
import { StyleSheet, Text, View } from 'react-native';  
import React from 'react';  

import Header from './Header';  
import Bankdetails from './Bankdetails';  
import Footer from './footer';  
import ContactDetailsForm from './ContactDetails';  

export default function App() {  
  return (  
    <View style={styles.container}>  
     
      <ContactDetailsForm />  
      <StatusBar style="auto" />  
      <Header />  
      <Bankdetails />  
      <Footer />  
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