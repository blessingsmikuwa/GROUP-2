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

const Registration = () => {
  const [enterYourDetails, setEnterYourDetails] = useState({
    registrationNumber: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    console.log("Enter Your Details:", enterYourDetails);
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.jpg")} style={styles.image} />
      <Text style={styles.header}>Registration Form</Text>
      <Text style={styles.sectionHeader}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Reg. Number"
        value={enterYourDetails.registrationNumber}
        onChangeText={(text) =>
          setEnterYourDetails({ ...enterYourDetails, registrationNumber: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={enterYourDetails.email}
        onChangeText={(text) =>
          setEnterYourDetails({ ...enterYourDetails, email: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={enterYourDetails.phoneNumber}
        onChangeText={(text) =>
          setEnterYourDetails({ ...enterYourDetails, phoneNumber: text })
        }
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={enterYourDetails.password}
        onChangeText={(text) =>
          setEnterYourDetails({ ...enterYourDetails, password: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={enterYourDetails.confirmPassword}
        onChangeText={(text) =>
          setEnterYourDetails({ ...enterYourDetails, confirmPassword: text })
        }
      />
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>Register</Text>
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
    width: 70,
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

export default Registration;
