
import {  StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import { Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';


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



export default function PDetails() {
   const [university, setUni] = useState();
   const [fullName, setfullName] = useState();
   const [email, setEmail] = useState();
   const [regiNUmber, setRegiNUmber] = useState();
   const [nationalID, setNationalID] = useState();
   const [program, setProgram] = useState();


  const handleNext=()=>{
      //navigate to next page
  }

  return (
    <View >
          <Image
             style={styles.logo}
             source={require("../assets/logo.jpeg")}
           />
           <Text
              style={styles.title}
            >
               Personal Details
           </Text>
            <TextInput
                    placeholder='Full name'
                    style={styles.input}
                    value={fullName}
            /> 
          <RNPickerSelect 
              onValueChange={(value)=>setUni(value)}
              items={Universities}
              placeholder={{label: "University",value: "value"}}
              style={styles.picker}
          />
          <TextInput
             placeholder='program of study'
             style={styles.input}
             value={program}
             onChangeText={text=>setProgram(text)}
          />
          <TextInput
             placeholder='national ID number'
             style={styles.input}
             value={nationalID}
             onChangeText={text=>setNationalID(text)}
          />
          <TextInput
             placeholder='student registration number'
             style={styles.input}
             value={regiNUmber}
             onChangeText={text=>setRegiNUmber(text)}
          />
          <TextInput
             placeholder='email'
             style={styles.input}
             value={email}
             onChangeText={text=>setEmail(text)}
          />
          <TouchableOpacity
             onPress={()=>handleNext()}  
             style={styles.nextWrap}  
          >
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
    </View>
  );
}



const styles=StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontWeight: "bold",
            color: "black",
            fontSize: 24,
            marginBottom: 10,
            marginHorizontal: "auto"
        },
        input: {
            height: 40,
            marginVertical: 10,
            backgroundColor: "#ccc",
            padding: 10,
            textAlign: "left",
        },
        logo: {
            height: 100,
            width: 100,
            marginBottom: 20,
            marginHorizontal: "auto"
        },
        next:{
            backgroundColor: "blue",
            paddingHorizontal: 20,
            paddingVertical: 5,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            borderRadius: 5
        },
        nextWrap:{
            marginLeft: 'auto'
        }
        ,
        picker:{
            inputIOS:{
                height: 40,
                marginVertical: 10,
                backgroundColor: "#ccc",
                padding: 10
            },
            inputAndroid: {
                height: 30,
                marginVertical: 10,
                backgroundColor: "#ccc",
            }
        }
    }
)