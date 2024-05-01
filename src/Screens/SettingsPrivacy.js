import { BackHandler, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import ModalScreenHeader from '../Components/ModalScreenHeader'
import { useNavigation } from '@react-navigation/native'

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsPrivacy = () => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: theme === 'light' ? 'white' : '#1a1a1a'
    }
  })

  const handleLogout = async () => {
    // await AsyncStorage.removeItem(
    //   'UserName',
    // );
    try {
      // Remove user data from Firestore
      await firestore()
        .collection('Users')
        .doc("id") // Assuming you have the userId available
        .delete();
        console.log('User data deleted from Firestore');
      // Clear stored credentials from AsyncStorage
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('userid');
      console.log('Stored credentials removed from AsyncStorage');

      // Navigate the user back to the login screen or any other desired screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }] // Replace 'Login' with your login screen name
      });// Replace 'Login' with your login screen name
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error, e.g., show an alert or navigate to login screen
      // navigation.replace('Login');
    }
  };

  return (
    <View style={styles.container}>
     <ModalScreenHeader text={'Settings and privacy'} onPress={()=>navigation.navigate('Account')}/>
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
    <TouchableOpacity onPress={handleLogout}>
      <Text style={{fontSize:20,color:'red'}}>Logout</Text>
     </TouchableOpacity>
    </View>
   
    </View>
  )
}

export default SettingsPrivacy

