import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PersonalDetailsForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    university: '',
    programOfStudy: '',
    nationalId: '',
    studentRegNumber: '',
    email: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleNext = () => {
    console.log('Form Data:', formData);
    navigation.navigate('Contact')
    //   navigation  here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/Loanslogo.png')} style={styles.logo} />
      <Text style={styles.heading}>Personal Details</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => handleChange('fullName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="University"
          value={formData.university}
          onChangeText={(text) => handleChange('university', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Program of Study"
          value={formData.programOfStudy}
          onChangeText={(text) => handleChange('programOfStudy', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="National ID Number"
          value={formData.nationalId}
          keyboardType="numeric"
          onChangeText={(text) => handleChange('nationalId', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Student Registration Number"
          value={formData.studentRegNumber}
          onChangeText={(text) => handleChange('studentRegNumber', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}> Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  form: {
    width: 300,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PersonalDetailsForm;
