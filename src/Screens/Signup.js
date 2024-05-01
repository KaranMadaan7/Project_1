import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  useColorScheme,
  ScrollView,
  KeyboardAvoidingView,
  TextComponent,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Components/Button';
import axios, {AxiosHeaders} from 'axios';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Signup = ({navigation}) => {
 
  const theme = useColorScheme();

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showpass, setShowpass] = useState(true);
  const [emailerror, setEmailerror] = useState(false);
  const [fullnameerror, setFullNameerror] = useState(false);
  const [userNameerror, setUserNameerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [errormessage,setErrorMessage] = useState("");
  
  
  const handleSignup = async () => {
    try {
      // Create user with email and password
      const res = await auth().createUserWithEmailAndPassword(email, password);
  
      // Add user details to Firestore
      await firestore()
        .collection('Users')
        .doc(res.user.uid)
        .set({
          email: email,
          fullName: fullName,
          username: username,
          password: password,
          id: res.user.uid
        });
  
      console.log('User added successfully!');
      navigation.navigate('Login')
  
    } catch (error) {
      // Handle errors
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        // You can show an alert or set an error state to inform the user
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        // You can show an alert or set an error state to inform the user
      } else {
        console.error('Error signing up:', error);
        // You can show a generic error message or set an error state to inform the user
      }
    }
  };
  



  const check = () => {
    if (email === '') {
      setEmailerror(true);
    }
    if (fullName === '') {
      setFullNameerror(true);
    }
    if (username === '') {
      setUserNameerror(true);
    }
    if (password === '') {
      setPassworderror(true);
    } else if (email && fullName && username && password) {
      {
        handleSignup();
      }
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
    <View style={{flex: 1, backgroundColor:theme==='light'?'white':'black', justifyContent: 'center'}}>
      <View>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{height: 60, width: 200}}
              source={
                theme === 'light'
                  ? require('../Image/Instagram-Logo-2016-present.png')
                  : require('../Image/insta.png')
              }
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: theme === 'light' ? 'black' : 'white',
            }}>
            Sign up to see photos and videos from your
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '600',
              color: theme === 'light' ? 'black' : 'white',
            }}>
            friends
          </Text>
          <View style={styles.facebook}>
            <TouchableOpacity>
              <Image
                style={{height: 22, width: 22}}
                source={{
                  uri: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-pth4zu2i.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{left: 15, color: '#00BFFF', fontWeight: 'bold'}}>
                Log in with facebook
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 13, fontWeight: '600',marginBottom:8}}>OR</Text>
        </View>

        <View >
          <View style={styles.credentials}>
            <TextInput
              value={email}
              onChangeText={text => {
                setEmail(text), setEmailerror(false);
              }}
              placeholder="Mobile Number or Email"
              placeholderTextColor={
                theme === 'light' ? 'black' : 'white'
              }></TextInput>
            <Icon
              name="asterisk"
              size={11}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: theme === 'light' ? 'black' : 'white',
            }}></View>
          {emailerror ? (
            <Text
              style={{
                ...styles.error,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Required
            </Text>
          ) : null}

          <View style={styles.credentials}>
            <TextInput
              value={fullName}
              onChangeText={text => {
                setFullName(text), setFullNameerror(false);
              }}
              placeholder="Full Name"
              placeholderTextColor={
                theme === 'light' ? 'black' : 'white'
              }></TextInput>
            <Icon
              name="asterisk"
              size={11}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: theme === 'light' ? 'black' : 'white',
            }}></View>
          {fullnameerror ? (
            <Text
              style={{
                ...styles.error,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Required
            </Text>
          ) : null}

          <View style={styles.credentials}>
            <TextInput
              value={username}
              onChangeText={text => {
                setUsername(text), setUserNameerror(false);
              }}
              placeholder="Username"
              placeholderTextColor={
                theme === 'light' ? 'black' : 'white'
              }></TextInput>
            <Icon
              name="asterisk"
              size={11}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: theme === 'light' ? 'black' : 'white',
            }}></View>
          {userNameerror ? (
            <Text
              style={{
                ...styles.error,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Please Enter Username
            </Text>
          ) : null}

          <View style={styles.credentials}>
            <View>
              <TextInput
                value={password}
                onChangeText={text => {
                  setPassword(text), setPassworderror(false);
                }}
                secureTextEntry={showpass}
                placeholder="Password"
                placeholderTextColor={
                  theme === 'light' ? 'black' : 'white'
                }></TextInput>
            </View>

            <View>
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
          {passworderror ? (
            <Text
              style={{
                ...styles.error,
                color: theme === 'light' ? 'black' : 'white',
              }}>
              Please Enter Password
            </Text>
          ) : null}

          <View style={{justifyContent: 'center'}}>
            <View style={{marginTop: 10}}>
              <Button text="Sign Up" onPress={check} />
              {/* <Text style={{color:'black',fontSize:15}}>{errormessage}</Text> */}
            </View>

           
              
              
            
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: theme === 'light' ? 'black' : 'white',
                }}>
                By signing up, you agree to our Terms, Data
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: theme === 'light' ? 'black' : 'white',
                }}>
                Policy and Cookies Policy.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginHorizontal: 40,
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: theme === 'light' ? 'black' : 'white',
                  }}>
                  Have an account?
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: '#00e6e6', fontWeight: 'bold'}}>
                    Log in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  facebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  error: {
    marginLeft: 10,
    bottom: 14,
  },
  line: {
    height: 1,
    marginHorizontal: 10,
    bottom: 14,
  },
  credentials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
