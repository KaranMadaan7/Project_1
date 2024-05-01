// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import BottomNav from '../../Navigation/BottomNav';
// import Nav from '../../Navigation/Nav';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const LoginDirection = () => {
//     const navigation = useNavigation();

//     useEffect(() => {
//       checkLoginStatusAndGetData();
//     }, )

//     const [loggedin, setloggedin] = useState(false);
   
//     const checkLoginStatusAndGetData = async () => {
//         try {
//           // Check if the user is logged in
//           const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
          
//           if (isLoggedIn === 'true') {
//             // User is logged in, retrieve data
//            setloggedin(true);
    
//             const userid = await AsyncStorage.getItem('userid');
//             const password = await AsyncStorage.getItem('password');
            
//             // Do something with the retrieved data
//             console.log('User ID:', userid);
//             console.log('Password:', password);
           
//             // You can proceed with any further logic here
//           } else {
//             // User is not logged in
//             setloggedin(false);
//             console.log('User is not logged in');
            
//             // You can navigate to the login screen or perform other actions
//           }
//         } catch (error) {
//           // Error handling
//           console.error('Error checking login status and retrieving data:', error);
//         }
//       };
        
//   return (
//     <View style={{flex:1}}>
//      {loggedin ? <BottomNav/> : <Nav/>}
//     </View>
//   )
// }

// export default LoginDirection

// const styles = StyleSheet.create({})