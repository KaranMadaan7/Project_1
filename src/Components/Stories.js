import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import IIcon from 'react-native-vector-icons/Ionicons';

const Stories = () => {

    const theme=useColorScheme();

  const employee = [
    {
      eId: 101,
      url:  require('../Image/image1.png') ,
      selected: false,
      name:'The office'
    },
    {
      eId: 102,
      url: require('../Image/image2.png'),
      selected: false,
      name:'Dwayne'
    },
    {
      eId: 103,
      url: require('../Image/image3.png'),
      selected: false,
      name:'Robert'
    },
    {
      eId: 104,
      url: require('../Image/image4.png'),
      selected: false,
      name:'Ryan'
    },
    {
      eId: 105,
      url: require('../Image/image5.png'),
      selected: false,
      name:'Jim'
    },
    {
      eId: 106,
      url: require('../Image/image6.png'),
      selected: false,
      name:'Dwight'
    },
    {
      eId: 107,
      url:require('../Image/image7.png'),
      selected: false,
      name:'Micheal'
    },
    {
      eId: 108,
      url: require('../Image/image8.png'),
      selected: false,
      name:"Pam"
    },


  ];
  return (
    
    <View style={{marginTop:15}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  <View style={{flexDirection:'row',alignItems:"center"}}>
    <View style={{alignItems:'center'}} >
      <View style={{marginHorizontal:8,top:3}}>
        <TouchableOpacity>
      <Image style={{height:70,width:70}}
      source={require ('../Image/user.png')}/>
      </TouchableOpacity>
      </View>
      <View style={{... styles.plus,
        backgroundColor:theme==='light'?'white':'#1a1a1a',
        borderColor:theme==='light'?'white':'#1a1a1a'}}>
      <IIcon name={'add-circle'} size={22} color={'#008ae6'}/>
      </View>
      <View style={{bottom:16}}> 
      <Text style={{color:theme==='light'?'black':'white'}}>Your story</Text>
      </View>
    </View>
    <View style={{flex:1}}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={employee}
        renderItem={({item})=>{
            
            return (
              
                <TouchableOpacity >
                  <View style={styles.design}>
                    <Image style={styles.image} source={item.url}></Image>
                    </View>
                    <Text style={{... styles.text,color:theme==='light'?'black':'white'}}>{item.name}</Text>
                </TouchableOpacity>
                
            )
        }
            
        }
        keyExtractor={item=>item.eId}/>
      </View>
      </View>
      </ScrollView>
      </View>
      
  )
}

export default Stories

const styles = StyleSheet.create({
      image:{
        height:70,
        width:70,
        borderRadius:35,
      },
      design:{
        borderRadius:40,
        borderWidth:3,
        padding:2,
        marginHorizontal:6,
        borderColor:'#c13584'
      },
      text:{
        textAlign:'center',
      },
    
      plus:{
        bottom:20,
        left:25,
        borderRadius:20,
        borderWidth:1,
        
      }
})

 {/* <View style={{ flex:1,flexDirection:'row' }}>
        <View style={{}}>
        <TouchableOpacity style={{backgroundColor:'orange'}}>
        <Text>Post</Text>
        </TouchableOpacity>
        </View> */}
        // <View>
        //   <FlatList
        //     style={{}}
        //     horizontal
        //     data={employee}
        //     keyExtractor={item => item.eId}
        //     renderItem={({item}) => {
        //       // console.log('item', item?.item?.selected)
             
                
        //         <View>
        //         <TouchableOpacity>
                  
        //           <Image style={styles.image} source={{uri: item.url}}/>
                 
                   
        //         </TouchableOpacity>
        //         </View>
              
        //     }}

        //   />
        // </View>