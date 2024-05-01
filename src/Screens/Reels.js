import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Reels = () => {
  const [files, setfiles] = useState([]);

  const uploadDoc = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });
      setfiles([...files, ...res]);

    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
        throw error;
      }
    }
  };

  const deletefiles = index => {
    let itemscopy = [...files];
    itemscopy.splice(index,1);
    setfiles(itemscopy);
  };

  const openFile = async uri => {
    try {
      await FileViewer.open(uri);
      console.log('File opened successfully');
    } catch (error) {
      console.log('Error opening file:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, backgroundColor: 'orange'}}></View>
      <View
        style={{
          flex: 3,
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={uploadDoc}>
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            data={files}
            renderItem={({item, index}) => {
              console.log('item', item);
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    backgroundColor: 'blue',
                    marginVertical: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                      marginLeft: 10,
                    }}>
                    <FontAwesome
                      name={'file-pdf-o'}
                      size={28}
                      color={'black'}
                    />

                    <TouchableOpacity
                      onPress={() => openFile(item?.uri)}
                      style={{marginLeft: 12}}>
                      <Text style={styles.text}>{item?.name}</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => deletefiles(index)}
                      style={{marginRight: 10}}>
                      <AntDesign name={'delete'} size={28} color={'black'} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
