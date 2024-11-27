import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = "https://ggphmkmbycgatdbxfwhd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncGhta21ieWNnYXRkYnhmd2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMTkxMTYsImV4cCI6MjA0Nzg5NTExNn0.sQkDCdmYOkS7fIPTt3wDlDlHk5lHmlfVa4L-uT2alBU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Bankdetails() {
  const [tuition, setTuition] = useState('');
  const [upkeep, setUpkeep] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');

  const uuid = '0998877665';

  const handleTuitionChange = (value) => {
    setTuition(value);
    setError('');
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

  const handleFinish = async () => {
    if (!tuition || !upkeep || !accountName || !accountNumber) {
      setError('All fields must be filled');
      return;
    }

    try {
      setError('');
      
      // Fetch data from VerifyBank table
      const { data: bankData, error: bankError } = await supabase
        .from('VerifyBank')
        .select('*')
        .eq('uuid', uuid)
        .single();

      if (bankError || !bankData) {
        setError('Error checking bank details. Please try again.');
        return;
      }

      const { account_name, account_number } = bankData;
      if (account_name !== accountName || account_number !== accountNumber) {
        setError('Account details do not match.');
        return;
      }

      // Fetch data from VerifyLoanAmount table
      const { data: loanData, error: loanError } = await supabase
        .from('VerifyLoanAmount')
        .select('*')
        .eq('uuid', uuid)
        .single();

      if (loanError || !loanData) {
        setError('Error checking loan amount details. Please try again.');
        return;
      }

      const { tuition: dbTuition, upkeep: dbUpkeep } = loanData;
      if (parseFloat(dbTuition) !== parseFloat(tuition) || parseFloat(dbUpkeep) !== parseFloat(upkeep)) {
        setError('Loan amount details do not match.');
        return;
      }

      console.log('Verified');
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionHeading}>Loan Amount</Text>

      <Text style={styles.label}>Tuition</Text>
      <TextInput
        style={styles.input}
        value={tuition}
        onChangeText={handleTuitionChange}
        keyboardType="numeric"
        placeholder="Enter tuition amount"
      />

      <Text style={styles.label}>Upkeep</Text>
      <TextInput
        style={styles.input}
        value={upkeep}
        onChangeText={handleUpkeepChange}
        keyboardType="numeric"
        placeholder="Enter upkeep amount"
      />

      <Text style={styles.label}>Total</Text>
      <Text style={styles.total}>{calculateTotal().toString()}</Text>

      <Text style={styles.sectionHeading}>Bank Details</Text>

      <Text style={styles.label}>Account Name</Text>
      <TextInput
        style={styles.input}
        value={accountName}
        onChangeText={(value) => {
          setAccountName(value);
          setError('');
        }}
        placeholder="Enter account name"
      />

      <Text style={styles.label}>Account Number</Text>
      <TextInput
        style={styles.input}
        value={accountNumber}
        onChangeText={(value) => {
          setAccountNumber(value);
          setError('');
        }}
        keyboardType="numeric"
        placeholder="Enter account number"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Finish" onPress={handleFinish} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
