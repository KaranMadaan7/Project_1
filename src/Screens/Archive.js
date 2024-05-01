import { BackHandler, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import ModalScreenHeader from '../Components/ModalScreenHeader'
import { useNavigation } from '@react-navigation/native'

const Archive = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: theme === 'light' ? 'white' : '#1a1a1a'
    }
  })

  return (
    <View style={styles.container}>
     <ModalScreenHeader text={'Archive'} onPress={()=>navigation.navigate('Account')}/>
    </View>
  )
}

export default Archive

