import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Bankdetails() {
  const [tuition, setTuition] = useState('');
  const [upkeep, setUpkeep] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');

  const handleTuitionChange = (value) => {
    setTuition(value);
    setError(''); // Clear error when user starts typing
  };

  const handleUpkeepChange = (value) => {
    setUpkeep(value);
    setError('');
  };

  const calculateTotal = () => {
    const tuitionAmount = parseFloat(tuition) || 0;
    const upkeepAmount = parseFloat(upkeep) || 0;
    return tuitionAmount + upkeepAmount;
  };

  const handleFinish = () => {
    // Check if any field is empty
    if (!tuition || !upkeep || !accountName || !accountNumber) {
      setError('All fields must be filled');
    } else {
      setError('');
      alert('YOU HAVE BONDED SUCCESSFULLY');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
         
        <Text style={styles.sectionHeading}>Loan Amount</Text>

        <Text style={styles.label}>Tuition</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tuition}
          onChangeText={handleTuitionChange}
        />

        <Text style={styles.label}>Upkeep</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={upkeep}
          onChangeText={handleUpkeepChange}
        />

        <Text style={styles.label}>Total</Text>
        <TextInput
          style={styles.input}
          editable={false}
          value={calculateTotal().toString()}
        />

        {/* Bank Details Section */}
        <Text style={styles.sectionHeading}>Bank Details</Text>

        <Text style={styles.label}>Account Name</Text>
        <TextInput
          style={styles.input}
          value={accountName}
          onChangeText={(value) => {
            setAccountName(value);
            setError('');
          }}
        />

        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={accountNumber}
          onChangeText={(value) => {
            setAccountNumber(value);
            setError('');
          }}
        />

        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Button style= {styles.button} 
        title="Finish" onPress={handleFinish} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5d72b3',
    padding: 10,
    margin: 10,
    width:10
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});
