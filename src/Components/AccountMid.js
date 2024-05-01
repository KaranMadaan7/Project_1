import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import FIcon from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import Modal from "react-native-modal";
import ModalScreenHeader from './ModalScreenHeader';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountMid = () => {

// console.log('user_Name', user_Name)

  const theme = useColorScheme();

 

  useEffect(() => {
    get_user_name();
  }, )

  const [userName,setUserName] = useState('') 
  const get_user_name =async ()=>{
    const userid = await AsyncStorage.getItem('userid');
    // console.log('userid', userid);
    setUserName(userid);
    console.log('userName', userName)
  }
 

 

  const [visible, setvisible] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [selectedimage,setselectedimage] = useState(null)
  const [width, setWidth] = useState(70);
  const [height, setHeight] = useState(70);
  const [show, setshow] = useState(true);
  const hide = () => {
    if (show) {
      setshow(false);
    } else {
      setshow(true);
    }
  };

  const handleProfileImage=()=>{
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
      cropperCircleOverlay:true
    })
      .then((image) => {
        setselectedimage(image.path);
        setHeight(height);
        setWidth(width);
        setvisible2(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleCamera=()=>{
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
    
    })
      .then((image) => {
        setselectedimage(image.path);
        setHeight(height);
        setWidth(width);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  const styles = StyleSheet.create({
    box: {
      padding: 10,
      backgroundColor: theme === 'light' ? '#d9d9d9' : '#333333',
      borderRadius: 7,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme === 'light' ? 'black' : 'white',
    },
    box: {
      paddingHorizontal: 35,
      paddingVertical: 4,
      backgroundColor: theme === 'light' ? '#d9d9d9' : '#333333',
      borderRadius: 7,
    },
    iconbox: {
      padding: 5,
      borderRadius: 7,
      backgroundColor: theme === 'light' ? '#d9d9d9' : '#333333',
    },
    circle: {
      height: 60,
      width: 60,
      borderRadius: 100,
      marginHorizontal: 10,
      backgroundColor: theme === 'light' ? '#d9d9d9' : '#333333',
    },
    Midcontainer: {
      marginVertical: 10,
    },
    container2: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    text2: {
      fontSize: 14,
      color: theme === 'light' ? 'black' : 'white',
      fontWeight: '600',
    },
    container3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      marginTop: 10,
    },
    container4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    text3: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme === 'light' ? 'black' : 'white',
    },
    container5: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    modal:{
      position: 'absolute',
      backgroundColor: theme === 'light' ? 'white' : 'black',
      bottom: 0,
      width: '100%',
      marginHorizontal: 0,
      marginBottom: 0,
      height: '100%',
    },
    EditProfileModal:{
      position: 'absolute',
      backgroundColor: theme === 'light' ? 'white' : 'black',
      bottom: 0,
      width: '100%',
      marginHorizontal: 0,
      marginBottom: 0,
      height: '30%',
      borderTopRightRadius:10,
      borderTopLeftRadius:10
    },
    PhotoText:{
      fontSize:20,
      color: theme === 'light' ? 'black' : 'white',
      margin:10
    }
  });
  return (
    <View style={styles.Midcontainer}>
      <View style={styles.container5}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{setvisible2(true)}}>
          <Image source={selectedimage ? {uri:selectedimage} :require('../Image/user.png') } style={{height:height,width: width,borderRadius:100}}/>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text3}>{userName}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text2}>Posts</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text2}>Followers</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text2}>Following</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <View>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {setvisible(true)}}>
            <Text style={styles.text3}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.text3}>Share Profile</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.iconbox}>
            <Ionicons
              name={'person-add'}
              size={17}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          hide();
        }}>
        <View style={styles.container3}>
          <Text style={styles.text3}>Story highlights</Text>
          {show ? (
            <FIcon
              name={'chevron-down'}
              size={20}
              color={theme === 'light' ? 'black' : 'white'}
            />
          ) : (
            <FIcon
              name={'chevron-up'}
              size={20}
              color={theme === 'light' ? 'black' : 'white'}
            />
          )}
        </View>
      </TouchableWithoutFeedback>

      {show && (
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.text2}>
            Keep your favorite stories on your profile
          </Text>
        </View>
      )}

      {show && (
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container4}>
              <View style={{marginHorizontal: 10}}>
                <TouchableOpacity>
                  <AntDesign
                    name={'pluscircleo'}
                    size={60}
                    color={theme === 'light' ? 'black' : 'white'}
                  />
                </TouchableOpacity>

                <Text style={{...styles.text2, textAlign: 'center'}}>New</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <View style={styles.circle}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.circle}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.circle}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.circle}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.circle}></View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}

<Modal isVisible={visible} style={styles.modal} onBackButtonPress={()=>{setvisible(false)}}>
        <View style={{flex:1}}>
          <ModalScreenHeader text={'Edit profile'} onPress={()=>{setvisible(false)}}/>
        </View>
      </Modal>

      <Modal isVisible={visible2} style={styles.EditProfileModal} onBackdropPress={()=>{setvisible2(false)}}>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={handleProfileImage}>
            <Text style={styles.PhotoText}>Upload from device</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCamera}>
            <Text style={styles.PhotoText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setvisible2(false)}}>
            <Text style={styles.PhotoText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default AccountMid;

const styles = StyleSheet.create({});
