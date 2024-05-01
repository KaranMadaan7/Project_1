import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Image, useColorScheme } from 'react-native'
import React, { cloneElement, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Oicon from 'react-native-vector-icons/Octicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Components/Header';
import Stories from '../Components/Stories';
import Feed from '../Components/Feed';


const Dashboard = ({navigation}) => {

  // const [selectid, setselectid] = useState('') 
  // const [horizontal, sethorizontal] = useState('')
const theme = useColorScheme();


  

  return (
    
      <View style={{flex:1,backgroundColor:theme==='light'?'white':'black' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1}}>
          <Header/>
        </View>
        <View style={{}}>
          <Stories/>
        </View>
        <View style={{flex:7}}>
          <Feed/>
        </View>
        </ScrollView>
      
      </View>
     
  )
}

export default Dashboard

const styles = StyleSheet.create({
  text: {
    margin: 3,
    borderRadius: 200,
    height:90,
    width:90,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    backgroundColor:'green'
  },
  centerList:{
    margin: 3,
    borderRadius: 10,
    height:200,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:'green'
  }
})


// const [data,setData]= useState(employee)

//   const handleOnPress = (item) => {
//   const tempData = data.map((val)=>{
//     if(val.eId===item.eId){
//       return{...val,selected:!val.selected}
//     }else{
//       return val;
//     }
//   });
//   setData(tempData)
  
//   }

//   const [data2,setData2]= useState(employee)

//   const handleOnPress2 = (item) => {
//   const tempData2 = data2.map((val)=>{
//     if(val.eId===item.eId){
//       return{...val,selected:!val.selected}
//     }else{
//       return val;
//     }
//   });
//   setData2(tempData2)
//   }