import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import React from 'react';
import Bankdetails from './Bankdetails';
import Footer from './footer';
export default function App() {
  return (
    <View style={styles.container}>
        
      
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
