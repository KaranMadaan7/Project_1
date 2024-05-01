import { BackHandler, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const ModalScreenHeader = ({text,onPress}) => {
    const theme = useColorScheme();
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        text:{
            fontSize:19,
            fontWeight:'bold',
            color:theme==='light'?'black':'white',
            marginLeft:30
        },
        button:{
            marginLeft:10
        }
    })
    useEffect(() => {
      const backAction = () => {
        onPress: navigation.navigate('Account')
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();

    }, []);

  return (
    <View style={{flexDirection:'row',marginVertical:10,alignItems:'center'}}>
       <TouchableOpacity 
      style={styles.button} 
      onPress={onPress}
       >
        <FontAwesome6 name={'arrow-left-long'} size={25} color={theme==='light'?'black':'white'} brand/>
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default ModalScreenHeader

