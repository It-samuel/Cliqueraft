import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LogIn() {
  return (
    <View>
      <Text style={styles.header}>CLIQUERAFT</Text>
      {/* Section to login user */}
      <View style={{alignItems:'center'}}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.inputs} placeholder='Enter your email' >
      </TextInput >
      <Text style={styles.text}> Password</Text>
      <TextInput style={styles.inputs} placeholder='Enter your Password' >
      </TextInput>
      </View>
      {/* Button to login user */}
      <View>
        <View>
          <TouchableOpacity style={styles.button} accessibilityActions={0.4}>
            <Text style={{color:'white', alignSelf:'center', fontWeight:'bold', fontSize:20}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputs:{
        height: 40,
        width: 230,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        justifyContent:'center',
        alignSelf:'center'

    },
    button:{
      height: 40,
      width: 200,
      alignSelf:'center',
      justifyContent:'center',
      backgroundColor:'blue',
      margin:30,
      borderRadius:10
    },
    text:{
      fontSize: 15,
      fontWeight:'bold',
      margin:10,
    },
    header:{
      fontSize: 35,
      alignSelf:'center',
      justifyContent:'center',
      color:'blue',
      marginBottom: 50
    }
})