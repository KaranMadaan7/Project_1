import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';

export const gettoken=async()=>{
    let token = await messaging().getToken();
    console.log('token : ', token)
  }

export async function notificationListeners(){
    const unsubscribe = messaging().onMessage(async remoteMessage => {
    // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    displayNotifications(remoteMessage);
    });
  
    return unsubscribe; 
};

const displayNotifications=async(data)=>{
  await notifee.requestPermission()

// Create a channel (required for Android)
const channelId = await notifee.createChannel({
id: 'default5',
name: 'Default Channel 5',
importance:AndroidImportance.HIGH
});

// Display a notification
await notifee.displayNotification({
  title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
  subtitle: '&#129395;',
  body:
    'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
  android: {
    channelId,
    color: '#4caf50',
    actions: [
      {
        title: '<b>Dance</b> &#128111;',
        pressAction: { id: 'dance' },
      },
      {
        title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
        pressAction: { id: 'cry' },
      },
    ],
  },
});
}

