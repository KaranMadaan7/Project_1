import {View, useColorScheme, ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import TopNav from '../../Navigation/TopNav';

import AccountMid from '../Components/AccountMid';
import AccountHeader from '../Components/AccountHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = ({navigation}) => {
  const theme = useColorScheme();
  // const [userName, setUserName] = useState('');
  // console.log('userName', userName)
  // useEffect(() => {
  //   console.log('object');
  //   user_Name();
  //   console.log('object2');
  // }, [navigation]);
  // const user_Name = async () => {
  //   console.log('object3');
  //   const value = await AsyncStorage.getItem('UserName');
  //   console.log('object4');
  //   setUserName(value);
  //   console.log('object5');
  // };
  return (
    // <ScrollView>
    <View
      style={{
        flex: 1,
        backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
      }}>
      <AccountHeader />

      <AccountMid  />

      <TopNav />
      {/* <View><Text>gfgfdgfdgfd</Text></View> */}
    </View>
    // </ScrollView>
  );
};
export default Account;
