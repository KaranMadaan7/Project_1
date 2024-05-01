import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import Button from '../Components/Button';

const ForgetPassword = ({navigation}) => {
    const theme = useColorScheme();
  return (
    <View style={{flex:1,backgroundColor:theme==='light'? 'white':'#1a1a1a',justifyContent:'center'}}>
    
    <View style={{}}>
        <View style={{alignItems:'center',marginVertical:10}}>
        <Image
         style={{height:100,width:100}} 
         source={theme==='light'?require('../Image/356775-200.png'):require('../Image/lock_white.png')}/>
         </View>
         <View style={{alignItems:'center',marginVertical:10}}>
        <Text
         style={{
            fontSize:19,
            fontWeight:"normal",
            color:theme==='light'?'black':'white'}}>Trouble Logging In</Text>
        </View>

        <View style={{alignItems:'center',marginVertical:10}}>
            <Text style={{color:theme==='light'?'black':'white'}}>Enter your email, phone or username and will</Text>
            <Text style={{color:theme==='light'?'black':'white'}}>send you a link to get back into your account</Text>
        </View>

        <View style={{marginVertical:10,marginHorizontal:10}}>
        <View style={{top:11}}>
            <TextInput 
            placeholder='Email, Phone or Username'
            placeholderTextColor={theme==='light'?'black':'white'}
            ></TextInput>
        </View>
        <View style={{borderWidth:1,borderColor:theme==='light'?'black':'white'}}></View>
        </View>
        
       <View style={{marginVertical:10}}>
       <Button text={'Send Login Link'}/> 
       </View>
        

        <View style={{alignItems:'center'}}><Text>or</Text></View>
        
        <View style={{alignItems:"center",marginVertical:10}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Signup')}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#0099ff'}}>Create New Account</Text>
                </TouchableOpacity></View>
        
        <View style={{alignItems:'center',marginVertical:10}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#0099ff'}}>Back To Login </Text>
                </TouchableOpacity>
                </View>
       
    </View>
   
    
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})