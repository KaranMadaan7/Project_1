import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import Modal from 'react-native-modal';

const AccountHeader = () => {
  const theme = useColorScheme();
 
  const navigation = useNavigation();
  const [visible, setvisible] = useState(false);
  const [visible2, setvisible2] = useState(false);
 

  const styles = StyleSheet.create({
    container11: {
      flex: 1,
      marginVertical: 20,
      
    },

    text1: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    modal: {
      position: 'absolute',
      backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
      bottom: 0,
      width: '100%',
      marginHorizontal: 0,
      marginBottom: 0,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      height: '73%',
    },
    containerText: {
      marginLeft: 20,
      fontSize: 22,
      fontWeight: '600',
      color: theme === 'light' ? 'black' : 'white',
    },
    viewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
    },
    starimage: {
      height: 28,
      width: 28,
      tintColor: theme === 'light' ? 'black' : 'white',
    },
    dash: {
      height: 5,
      width: 40,
      backgroundColor: theme === 'light' ? '#333333' : '#d9d9d9',
      borderRadius: 100,
    },
    modal2: {
      position: 'absolute',
      backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
      bottom: 0,
      width: '100%',
      marginHorizontal: 0,
      height: '30%',
      marginBottom: 0,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    userimage: {
      height: 60,
      width: 60,
    },
    plus: {
      borderWidth: 1,
      height: 60,
      width: 60,
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme === 'light' ? '#333333' : '#d9d9d9',
    },
    bluecircle: {
      marginHorizontal: 10,
      height: 30,
      width: 30,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0066ff',
    },
    viewContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    container22: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    headercontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
  });
  return (
    <View style={styles.headercontainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 10}}>
          <OIcon
            name={'lock'}
            size={20}
            color={theme === 'light' ? 'black' : 'white'}
          />
        </View>

        <View style={{marginLeft: 10}}>
          <Text
            style={{
              ...styles.text1,
              color: theme === 'light' ? 'black' : 'white',
            }}>
            Profile Name
          </Text>
        </View>

        <View style={{marginLeft: 10}}>
          <TouchableWithoutFeedback
            onPress={() => {
              setvisible2(true);
            }}>
            <FIcon
              name={'chevron-down'}
              size={22}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginRight: 25}}>
          <TouchableOpacity>
            <FontAwesome
              name={'plus-square-o'}
              size={30}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginRight: 10}}>
          <TouchableOpacity
            onPress={() => {
              setvisible(true);
            }}>
            <OIcon
              name={'three-bars'}
              size={28}
              color={theme === 'light' ? 'black' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={visible}
        style={styles.modal}
        onBackdropPress={() => {
          setvisible(false);
        }}
        onBackButtonPress={() => {
          setvisible(false);
        }}>
        <View style={styles.container11}>
          <View style={{alignItems: 'center',marginBottom:10}}>
            <View style={styles.dash}></View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsPrivacy')}>
            <View style={styles.viewContainer}>
              <Ionicons
                name={'settings-outline'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Settings and privacy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.viewContainer}>
              <FontAwesome6
                name={'threads'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
                brand
              />
              <Text style={styles.containerText}>Threads</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Your_activity')}>
            <View style={styles.viewContainer}>
              <FIcon
                name={'activity'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Your activity</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Archive')}>
            <View style={styles.viewContainer}>
              <FontAwesome6
                name={'clock-rotate-left'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Archive</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.viewContainer}>
              <MaterialCommunityIcons
                name={'qrcode-scan'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>QR code</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Saved')}>
            <View style={styles.viewContainer}>
              <MaterialCommunityIcons
                name={'bookmark-outline'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Saved</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.viewContainer}>
              <FIcon
                name={'users'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Supervision</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Orders_and_payments')}>
            <View style={styles.viewContainer}>
              <FontAwesome
                name={'credit-card'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Orders and payments</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.viewContainer}>
              <MaterialCommunityIcons
                name={'check-decagram-outline'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Meta Verified</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Close_Friends')}>
            <View style={styles.viewContainer}>
              <Image
                style={styles.starimage}
                source={require('../Image/list.png')}
              />
              <Text style={styles.containerText}>Close Friends</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <View style={styles.viewContainer}>
              <Ionicons
                name={'star-outline'}
                size={28}
                color={theme === 'light' ? 'black' : 'white'}
              />
              <Text style={styles.containerText}>Favorites</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={visible2}
        style={styles.modal2}
        onBackdropPress={() => {
          setvisible2(false);
        }}
        onBackButtonPress={() => {
          setvisible2(false);
        }}>
        <View style={styles.container22}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.dash}></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.viewContainer2}>
              <Image
                style={styles.userimage}
                source={require('../Image/user.png')}
              />
              <Text style={styles.containerText}>Profile Name</Text>
            </View>
            <View style={styles.bluecircle}>
              <FontAwesome
                name={'circle'}
                size={12}
                color={theme === 'light' ? 'black' : 'white'}
              />
            </View>
          </View>

          <View style={styles.viewContainer2}>
            <TouchableOpacity>
              <View style={styles.plus}>
                <AntDesign
                  name={'plus'}
                  size={40}
                  color={theme === 'light' ? 'black' : 'white'}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.containerText}>Add account</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({});
