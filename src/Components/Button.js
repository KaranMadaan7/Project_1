import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({text,onPress}) => {
  return (
    <View>
       <TouchableOpacity 
      style={styles.button} 
      onPress={onPress} >
        <Text style={styles.buttontext}>{text}</Text></TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
      button:{
        backgroundColor:'#00cccc',
        padding:10,
        alignItems:'center',
        margin:10
    },
    buttontext:{
        fontSize:20,
        fontWeight:'normal',
        color:'white'
    }
})