import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {cloneElement, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/messaging';
import { gettoken } from '../Utils/NotificationServices';

const Login = () => {
  const theme = useColorScheme();
  const navigation = useNavigation();
  // const [userName, setUserName] = useState('');
  // console.log('userName', userName)
  // useEffect(() => {
  //   checkLoginStatus();
  //   // user_Name();
     
  // }, );
  // const user_Name = async () => {
     
  //   const value = await AsyncStorage.getItem('UserName');
   
  //   setUserName(value);
    
  // };

  useEffect(() => {
    checkLoginStatusAndGetData();
    
  }, )
  

  const [userid, setUserid] = useState('');
  // console.log('userid', userid)
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('Users')
        .where('username', '==', userid)
        .where('password', '==', password)
        .get();
  
      if (!querySnapshot.empty) {
        // User found, save credentials and navigate to the next screen
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('userid', userid); // Save user ID
        await AsyncStorage.setItem('password', password); // Save password
  
        // You can save additional data here if needed
  
         checkLoginStatusAndGetData();// Replace 'BottomNav' with your screen name
      } else {
        // User not found, show an alert or set an error state
        Alert.alert('Invalid Credentials', 'Please check your username and password.');
      }
    } catch (error) {
      console.error('Error searching for user:', error);
      // Handle error, show an alert, or set an error state
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };
  


  const checkLoginStatusAndGetData = async () => {
    try {
      // Check if the user is logged in
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      
      if (isLoggedIn === 'true') {
        // User is logged in, retrieve data
        navigation.replace('BottomNav');

        const userid = await AsyncStorage.getItem('userid');
        const password = await AsyncStorage.getItem('password');
        gettoken();
        // Do something with the retrieved data
        console.log('User ID:', userid);
        console.log('Password:', password);
       
        // You can proceed with any further logic here
      } else {
        // User is not logged in
        console.log('User is not logged in');
        
        // You can navigate to the login screen or perform other actions
      }
    } catch (error) {
      // Error handling
      console.error('Error checking login status and retrieving data:', error);
    }
  };
  
  
  

  const [useriderror, setUseriderror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [showpass, setShowpass] = useState(true);

  const check =async () => {
    if (userid === '') {
      // navigation.navigate('BottomNav', { email: userid, pass: password }) &&
      setUseriderror(true);
    }
    if (password === '') {
      // navigation.navigate('BottomNav', { email: userid, pass: password }) &&
      setPassworderror(true);
    } else if (userid && password) {
    await handleLogin();
      
    }
  
   
  };

  const pass = () => {
    if (showpass === true) {
      setShowpass(false);
    } else {
      setShowpass(true);
    }
  };

 

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:theme==='light'?'white':'black',
        justifyContent:'center'
      }}>
      
      <View style={{}}>
        <View style={{alignItems: 'center',marginVertical:20}}>
          <Image
            style={{height: 60, width: 200}}
            source={
              theme === 'light'
                ? require('../Image/Instagram-Logo-2016-present.png')
                : require('../Image/insta.png')
            }
          />
        </View>
        <View style={{}}>
        <View style={{left: 8, top: 11}}>
          <TextInput
            value={userid}
            onChangeText={actualdata => {
              setUserid(actualdata), setUseriderror(false);
            }}
            placeholder="Phone number, username or email"
            placeholderTextColor={theme === 'light' ? 'black' : 'white'}
            style={{color: theme === 'light' ? 'black' : 'white'}}></TextInput>
        </View>
        <View
          style={{
            ...styles.line,
            backgroundColor: theme === 'light' ? 'black' : 'white',
          }}></View>
        {useriderror ? <Text style={{left: 13}}>Required</Text> : null}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 11,
            marginHorizontal: 8,
          }}>
          <TextInput
            value={password}
            onChangeText={actualdata => {
              setPassword(actualdata), setPassworderror(false);
            }}
            secureTextEntry={showpass}
            placeholder="Password"
            placeholderTextColor={
              theme === 'light' ? 'black' : 'white'
            }
            style={{color: theme === 'light' ? 'black' : 'white'}}></TextInput>
          <View style={{top: 15, right: 5}}>
            <TouchableOpacity onPress={pass}>
              {showpass ? (
                <Icon
                  name={'eye'}
                  size={20}
                  color={theme === 'light' ? 'black' : 'white'}
                />
              ) : (
                <Icon
                  name={'eye-off'}
                  size={20}
                  color={theme === 'light' ? 'black' : 'white'}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            ...styles.line,
            backgroundColor: theme === 'light' ? 'black' : 'white',
          }}></View>
          </View>
        {passworderror ? <Text style={{left: 13}}>Required</Text> : null}

        <View style={{marginTop: 20}}>
          <Button
            text="Log in"
            onPress={() => {
              check();
            }}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical:20
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: theme === 'light' ? 'black' : 'white',
            }}>
            or
          </Text>
        </View>

        <View style={styles.facebook}>
          <TouchableOpacity>
            <Image
              style={{height: 22, width: 22}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/800px-Facebook_icon_2013.svg.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#0000ff', fontWeight: 'bold',marginLeft:20}}>
              Log in with facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center',marginVertical:20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text
              style={{
                color: theme === 'light' ? 'black' : 'white',
                fontWeight: 'bold',
              }}>
              Forget password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center',marginVertical:20}}>
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
              fontWeight: 'bold'
            }}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#00e6e6', fontWeight: 'bold'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  facebook: {
    flexDirection: 'row',
    marginVertical:20,
    alignItems:"center",justifyContent:'center'
  },
  line: {
    height: 1,
    marginHorizontal: 12,
  },
});
