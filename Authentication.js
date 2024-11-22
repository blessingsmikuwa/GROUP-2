import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AuthenticateForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleAuthenticate = () => {
    //  backend call ikhala pano
    if (!registrationNumber || !selectedUniversity) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert(
      'Authenticate',
      `Fetching data for: \nReg. Number: ${registrationNumber}\nUniversity: ${selectedUniversity}`
    );
    // backend fetch logic ikhala apa
  };

  return (
    <View style={styles.container}>
      
      <Image source={require('./assets/Loanslogo.png')} style={styles.logo} />

      
      <Text style={styles.heading}>Authenticate Yourself</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
      />

      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedUniversity}
          onValueChange={(itemValue) => setSelectedUniversity(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select University" value="" />
          <Picker.Item label="Unima" value="Unima" />
          <Picker.Item label="Luana" value="Luana" />
          <Picker.Item label="Kuhes" value="Kuhes" />
          <Picker.Item label="Must" value="Must" />
        </Picker>
      </View>

       
      <TouchableOpacity style={styles.button} onPress={handleAuthenticate}>
        <Text style={styles.buttonText}>Authenticate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    width:300,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthenticateForm;
