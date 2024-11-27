import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  onPressHandler,
} from "react-native";

const ContactDetailsForm = ({navigation}) => {
  const [nextOfKin, setNextOfKin] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [parentalDetails, setParentalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleNext = () => {
    // Handle the next button logic here
    console.log("Next of Kin:", nextOfKin);
    console.log("Parental Details:", parentalDetails);
    navigation.navigate('Loan')
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.jpg")} style={styles.image} />
      <Text style={styles.header}>Contact Details</Text>
      <Text style={styles.sectionHeader}>Next of Kin</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={nextOfKin.fullName}
        onChangeText={(text) => setNextOfKin({ ...nextOfKin, fullName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={nextOfKin.email}
        onChangeText={(text) => setNextOfKin({ ...nextOfKin, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={nextOfKin.phoneNumber}
        onChangeText={(text) =>
          setNextOfKin({ ...nextOfKin, phoneNumber: text })
        }
        keyboardType="phone-pad"
      />
      <Text style={styles.sectionHeader}>Parental Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={parentalDetails.fullName}
        onChangeText={(text) =>
          setParentalDetails({ ...parentalDetails, fullName: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={parentalDetails.email}
        onChangeText={(text) =>
          setParentalDetails({ ...parentalDetails, email: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={parentalDetails.phoneNumber}
        onChangeText={(text) =>
          setParentalDetails({ ...parentalDetails, phoneNumber: text })
        }
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: "white",
    width: 450,
    // alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: "#ccc",
  },
  button: {
    backgroundColor: "#510AC9",
    width: 50,
    borderRadius: 6,
    padding: 4,
    alignSelf: "flex-end",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
});

export default ContactDetailsForm;
