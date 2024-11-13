import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';
import tw from 'twrnc';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://128.0.0.1/login', {
        username,
        password
      });

      if (response.data.success) {
        // Navigate to the main screen or display a success message
        Alert.alert('Success', 'You are logged in!');
        navigation.navigate('MainScreen');
      } else {
        // Show error messages
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
        <Image
        source={require('./assets/logo.jpg')}
      />
      <View style={tw`w-4/5 max-w-sm p-6 bg-white border border-blue-500 rounded-lg shadow-lg items-center`}>

        {/* Username Field */}
        <View style={tw`flex-row items-center w-full p-3 mb-4 border border-gray-300 rounded`}>
          <FontAwesome name="user" size={20} color="gray" style={tw`mr-2`} />
          <TextInput
            placeholder="Registration Number"
            value={username}
            onChangeText={setUsername}
            style={tw`flex-1`}
          />
        </View>

        {/* Password Field */}
        <View style={tw`flex-row items-center w-full p-3 mb-6 border border-gray-300 rounded`}>
          <FontAwesome name="lock" size={20} color="gray" style={tw`mr-2`} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={tw`flex-1`}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="gray" style={tw`ml-2`} />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={tw`w-full bg-blue-600 p-3 rounded`}
          onPress={handleLogin}
        >
          <Text style={tw`text-white text-center font-semibold`}>LOGIN</Text>
        </TouchableOpacity>

        {/* Forgot Password and Register Links */}
        <Text style={tw`mt-3 text-center`}>
          Don't have an account? <Text style={tw`text-blue-500`}>Register</Text>
        </Text>

        <Text style={tw`mt-2 text-center font-semibold`}>OR</Text>
        <Text style={tw`mt-3 text-center`}>
          Forgot password? <Text style={tw`text-blue-500`}>Reset</Text>
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
