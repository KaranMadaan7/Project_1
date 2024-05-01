import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

const AddPost = () => {
  const theme = useColorScheme();
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:theme==='light'?'white':'black'}}>
    <Text style={{fontSize:30,fontWeight:'bold',color:theme==='light'?'black':'white'}}>AddPost</Text>
  </View>
  )
}

export default AddPost

const styles = StyleSheet.create({})