import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text> © 2024 Higher Education Students Loans & Grants Board-HESLGB</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    height:70,
    backgroundColor: '#5d72b3',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
 
});
