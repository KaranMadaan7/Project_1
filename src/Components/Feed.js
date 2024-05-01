import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import Modal from 'react-native-modal';

const Feed = () => {
  const theme = useColorScheme();

  const [comment, setcomment] = useState('');

  const [commentsArr, setCommentsArr] = useState([]);
  const [visible, setvisible] = useState(false);

  const handleComments = () => {
    if (comment.length > 0) {
      setCommentsArr([...commentsArr, comment]);
      setcomment(null);

      console.log('commentsArr', commentsArr);
    }
  };

  const deleComment = index => {
    let itemscopy = [...commentsArr];
    itemscopy.splice(index, 1);
    setCommentsArr(itemscopy);
  };

  const styles = StyleSheet.create({
    imageStyle: {
      height: 400,
      width: '100%',
    },
    profile: {
      height: 30,
      width: 30,
      borderRadius: 35,
    },
    pdesign: {
      borderRadius: 40,
      borderWidth: 3,
      padding: 2,
      marginHorizontal: 6,
      borderColor: '#c13584',
    },
    upper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,

      justifyContent: 'space-between',
      flex: 1,
    },
    modal2: {
      position: 'absolute',
      backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
      bottom: 0,
      width: '100%',
      marginHorizontal: 0,
      // height:'100%',
      marginBottom: 0,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    container2: {
      flex: 1,
    },
    dash: {
      height: 5,
      width: 35,
      backgroundColor: theme === 'light' ? '#333333' : '#d9d9d9',
      borderRadius: 400,
      marginTop: 10,
    },
  });

  const [feedData, setfeedData] = useState([
    {
      eId: 101,
      url: require('../Image/image1.png'),
      liked: false,
      saved: false,
      name: 'The office',
    },
    {
      eId: 102,
      url: require('../Image/image2.png'),
      liked: false,
      saved: false,
      name: 'Dwayne',
    },
    {
      eId: 103,
      url: require('../Image/image3.png'),
      liked: false,
      saved: false,
      name: 'Robert',
    },
    {
      eId: 104,
      url: require('../Image/image4.png'),
      liked: false,
      saved: false,
      name: 'Ryan',
    },
    {
      eId: 105,
      url: require('../Image/image5.png'),
      liked: false,
      saved: false,
      name: 'Jim',
    },
    {
      eId: 106,
      url: require('../Image/image6.png'),
      liked: false,
      saved: false,
      name: 'Dwight',
    },
    {
      eId: 107,
      url: require('../Image/image7.png'),
      liked: false,
      saved: false,
      name: 'Micheal',
    },
    {
      eId: 108,
      url: require('../Image/image8.png'),
      liked: false,
      saved: false,
      name: 'Pam',
    },
  ]);

  const handleLike = item => {
    const newitem = feedData.map(val => {
      if (val.eId === item.eId) {
        return {...val, liked: !val.liked};
      } else {
        return val;
      }
    });
    setfeedData(newitem);
  };

  const handlesave = item => {
    const newitem = feedData.map(val => {
      if (val.eId === item.eId) {
        return {...val, saved: !val.saved};
      } else {
        return val;
      }
    });
    setfeedData(newitem);
  };

  return (
    <View style={{}}>
      <View style={{}}>
        <FlatList
          style={{}}
          data={feedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{marginBottom: 10}}>
                <View style={styles.upper}>
                  <View style={styles.pdesign}>
                    <TouchableOpacity>
                      <Image source={item.url} style={styles.profile} />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    }}>
                    <View>
                      <Text
                        style={{color: theme === 'light' ? 'black' : 'white'}}>
                        {item.name}
                      </Text>
                    </View>

                    <View style={{}}>
                      <TouchableOpacity>
                        <SLIcon
                          name={'options-vertical'}
                          size={18}
                          color={theme === 'light' ? 'black' : 'white'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={{}}>
                  <Image source={item.url} style={styles.imageStyle} />
                </View>
                <View
                  style={{ flexDirection: 'row', marginVertical: 12,justifyContent:'space-between'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems:'center',
                  
                    }}>
                    <TouchableOpacity style={{ marginLeft:10}} onPress={() => handleLike(item)}>
                      <FontAwesome
                        name={
                          item.liked ? 'heart' : 'heart-o'
                        }
                        size={28}
                        color={
                          item.liked
                            ? 'red'
                            : theme === 'light'
                            ? 'black'
                            : 'white'
                        }
                      />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft:20}}
                      onPress={() => {
                        setvisible(true);
                      }}>
                      <Ionicons
                        name={'chatbubble-outline'}
                        size={28}
                        color={theme === 'light' ? 'black' : 'white'}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft:20}}>
                      <Ionicons name={'paper-plane-outline'} size={28} color={theme === 'light' ? 'black' : 'white'}/>
                    </TouchableOpacity>
                  </View>

                  
                  
                    <TouchableOpacity style={{marginRight:10}} onPress={() => handlesave(item)}>
                      <FontAwesome
                        name={item.saved ? 'bookmark' : 'bookmark-o'}
                        size={28}
                        color={theme === 'light' ? 'black' : 'white'}
                      />
                    </TouchableOpacity>
                  
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.eId}
        />
      </View>

      <View>
        <Modal
          isVisible={visible}
          style={styles.modal2}
          swipeDirection="down"
          onBackButtonPress={() => {
            setvisible(false);
          }}
          onSwipeComplete={() => {
            setvisible(false);
          }}>
          <View style={styles.container2}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.dash}></View>
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: 25,
                backgroundColor: 'red',
              }}>
              <Text>Comments</Text>
            </View>

            <View style={{marginTop: 10, flex: 1}}>
              <FlatList
                style={{}}
                data={commentsArr}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity onPress={() => deleComment(index)}>
                      <View
                        style={{
                          margin: 10,
                          padding: 20,
                          backgroundColor: 'coral',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text>{item}</Text>
                        <TouchableOpacity>
                          <Icon
                            name={'cards-heart-outline'}
                            size={16}
                            color={theme === 'light' ? '#333333' : 'white'}
                          />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  );
                }}></FlatList>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="Add a comment"
                value={comment}
                onChangeText={text => setcomment(text)}
                onSubmitEditing={handleComments}></TextInput>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Feed;

// const [hearticon, sethearticon] = useState(0)
// const changehear = (NewItem) => {

//   if (NewItem?.eId === feedData?.eId && hearticon === 0) {
//     sethearticon(1)
//   } else {
//     sethearticon(0)
//   }
// }
