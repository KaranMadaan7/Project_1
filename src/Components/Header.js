import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const theme= useColorScheme();
    const navigation=useNavigation();
  return (
    <View style={{flex:1,alignItems:'flex-start',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <View style={{left:10,top:4}}>
        <Image style={{height:40,width:135}} source={theme==='light'? require('../Image/Instagram-Logo-2016-present.png'):require('../Image/insta.png')}/>
        </View>
        <View style={{flexDirection:'row',right: 12,top:4}}>
      <View style={{right:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate()}>
      <Icon name={'cards-heart-outline'} size={30} color={theme==='light'? 'black':'white'}/>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity>
      <FIcon name={'send'} size={29} color={theme==='light'? 'black':'white'}/>
      </TouchableOpacity>
      </View>
      </View>
       </View>
  )
}

export default Header

const styles = StyleSheet.create({})