import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

const Search = () => {
  
  const theme = useColorScheme();
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState(''); // State to hold sorting criteria
  
  const [filter1,setfilter1] = useState(false)
  const [filter2,setfilter2] = useState(false)
  const [filter3,setfilter3] = useState(false)
  const searchRef = useRef();

  const styles = StyleSheet.create({
    title: {
      fontSize: 15,
      color: theme==='light'?'black':'white',
      fontWeight: 'bold'
    },
    image: {
      height: 200,
      width: '100%',
      borderRadius: 10
    },
    search: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme==='light'?'black':'white',
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
    },
    modal: {
      position: 'relative',
      width: '90%',
    },
    filters:{
      margin: 10,
      
      borderRadius:20,
      padding:5
    }
  })

  const getApi = async () => {
    let res = await fetch("https://dummyjson.com/products")
    res = await res.json();
    setData(res?.products);
    setOldData(res?.products);
  }

  const handleSearch = text => {
    setSearch(text);
    if (text === '') {
      setData(oldData);
    } else {
      let tempData = oldData.filter(val => {
        return val?.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempData);
    }
  }

  useEffect(() => {
    getApi();
  }, [])

  const separate = () => {
    return (<View style={{ height: 20 }}></View>);
  }

  const handleSort = (sortBy) => {
    let sortedData = [...data];
    if (sortBy === 'priceLowToHigh') {
      sortedData.sort((a, b) => a.price - b.price );
    } else if (sortBy === 'priceHighToLow') {
      sortedData.sort((a, b) => b.price - a.price );
    } else if (sortBy === 'name') {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    }
    setData(sortedData);
  }

  return (
    <View style={{ flex: 1,backgroundColor:theme==='light'?'white':'black' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-evenly' }}>
        <View style={styles.search}>
          <View style={{ flex: 1 }} >
            <TextInput
              multiline
              placeholder='Search'
              placeholderTextColor={theme==='light'?'black':'white'}
              value={search}
              onChangeText={handleSearch}
              ref={searchRef}
            ></TextInput>
          </View>
          <View style={{}}>
            {search === '' ? null :
              (<TouchableOpacity onPress={() => { searchRef.current?.clear(); setSearch(''); handleSearch(''); }}>
                <Ionicons name={'close-circle-outline'} size={20} color={theme==='light'?'black':'white'} />
              </TouchableOpacity>)}
          </View>
        </View>

        <TouchableOpacity onPress={() => { setShow(true) }}>
          <Image source={require('../Image/filter.png')} style={{ height: 30, width: 30,tintColor:theme==='light'?'black':'white' }} />
        </TouchableOpacity>

      </View>
      <FlatList
        data={data}
        ItemSeparatorComponent={separate}
        renderItem={({ item, index }) => {
          return (
            <View style={{ margin: 10 }}>
              <Image style={styles.image} source={{ uri: item.thumbnail }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.title}>{item?.price}</Text>
              </View>
              <Text style={styles.title}>{item?.description}</Text>
            </View>
          )
        }} />

      <Modal isVisible={show} style={styles.modal} onBackdropPress={() => { setShow(false) }}>
        <View style={{ backgroundColor: 'coral', padding: 10, borderRadius: 20 }}>
          <TouchableOpacity style={styles.filters} onPress={() => {
            setData(oldData); // Resetting data
            setSortBy(''); // Clearing sorting criteria
            setfilter1(false)
            setfilter2(false)
            setfilter3(false)
          }} >
            <Text style={{ color:'black', fontSize: 20 }}>Clear Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.filters,backgroundColor:filter1  ? 'black':null}} onPress={() => {
            handleSort('priceLowToHigh');
            setShow(false);
            setSortBy('priceLowToHigh');
            setfilter1(true)
          }}>
            <Text style={{color: filter1  ? 'white':'black', fontSize: 20 }}>Sort by Price: Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.filters,backgroundColor:filter2  ? 'black':null}} onPress={() => {
            handleSort('priceHighToLow');
            setShow(false);
            setSortBy('priceHighToLow');
            setfilter2(true)
          }}>
            <Text style={{ color: filter2  ? 'white':'black', fontSize: 20 }}>Sort by Price: High to Low</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.filters,backgroundColor:filter3  ? 'black':null}} onPress={() => {
            handleSort('name');
            // setShow(false);
            setSortBy('name');
            setfilter3(true)
          }} >
            <Text style={{ color: filter3  ? 'white':'black', fontSize: 20 }}>Sort by Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'flex-end',marginTop:10}} onPress={() => {
           setShow(false);
          }} >
            <Text style={{ color: 'white', fontSize: 14 ,backgroundColor:'black',borderRadius:10,padding:2}}>Apply Filter</Text>
       </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default Search;


let b= 'karan';
 
let v = null
// let c=parseInt(v);
console.log('first', typeof(v))

