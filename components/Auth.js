
import {  StyleSheet, Text, TextInput, View,Image,TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';


const Universities=[
    {
        label: "Unima",
        value: "unima"
    },
    {
        label: "Mzuni",
        value: "mzuni"
    },
    {
        label: "Mubas",
        value: "mubas"
    },
    {
        label: "Luanar",
        value: "luanar"
    },
]

export default function Auth() {
  const [regiNumber, setRegiNumber] = useState();
  const [university, setUni] = useState();

  const handleAuth=()=>{
    console.log("clicked")
    //TODO: send api request then navigate to personal details page
  }

  return (
    <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo.jpeg")}
            />
            <Text
               style={styles.authText} 
            >
                Authenticate yourself
            </Text>
            <TextInput
                style={styles.regiNUmber}
                placeholder='Registration Number'
                value={regiNumber}
                onChangeText={newText=>setRegiNumber(newText)}
            />
            <RNPickerSelect 
               onValueChange={(value)=>setUni(value)}
               items={Universities}
               placeholder={{label: "University",value: "value"}}
               style={styles.picker}
            />
           <TouchableOpacity
              onPress={()=>handleAuth()}
              style={styles.authButton}
           >
                <Text>Authenticate</Text> 
           </TouchableOpacity>
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
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
    marginHorizontal: "auto"
  },
  authText:{
    fontSize: 24,
    fontStyle: "bold",
    marginVertical: 10,
    marginHorizontal: "auto"

  },
  regiNUmber: {
    backgroundColor:"#ccc",
    height: 53,
    marginHorizontal: 20,
    width: "90%",
    padding: 10,
    marginVertical: 20,
    fontSize: 18
  },
  authButton: {
    padding: 10,
    marginTop: 40,
    backgroundColor: "#ccc",
    width: "60%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontStyle: "bold"
  },
  picker:{
    inputIOS:{
        height: 40,
        width: "90%",
        marginVertical: 10,
        backgroundColor: "#ccc",
        padding: 10,
        color: "black"
    },
    inputAndroid: {
        height: 40,
        width: "90%",
        marginVertical: 10,
        backgroundColor: "#ccc",
        padding: 10,
        color: "black"
    }
}
});

/*const pickerStyles=StyleSheet.create(
    {
        inputAndroid: {
            backgroundColor:"#808080",
            height: 55,
            width: 300,
            marginHorizontal: 20,
            padding: 10,
            marginVertical: 20,
            fontSize: 20
        },
        inputIOS: {
            backgroundColor:"#808080",
            height: 55,
            width: 300,
            marginHorizontal: 20,
            padding: 10,
            marginVertical: 20,
            fontSize: 20
        }  
    }
)*/
