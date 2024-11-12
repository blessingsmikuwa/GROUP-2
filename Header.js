import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
export default function Header() {
  return (
     
      <View style={styles.header}>
          <Image
        style={styles.logo}
        source={require('./assets/Loanslogo.png')}
      />
      
         
        
      </View>
     
  );
}

const styles = StyleSheet.create({
  logo: {
    
    width: 40,
    height: 40,

  },

  header: {
    width:360,
    height: 80,
    backgroundColor: '#55535c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
   
});
