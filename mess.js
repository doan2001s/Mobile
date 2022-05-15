import React, { useState,useEffect } from "react";
import { Image, View, Text,onPress,
     ScrollView, StyleSheet, StatusBar,
     SafeAreaView, TextInput, TouchableOpacity,
      FlatList, ActivityIndicator, Pressable, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const DemoApi = () => {

    const[data,setData]=useState([]);
    const[isLoading,setIsloading]=useState(true);

    useEffect(() => {
        listPhoto();
        return () => {
        }
    },[])

    listPhoto = () => {
        const apiURL = "https://jsonplaceholder.typicode.com/users?fbclid=IwAR2-FbMe-6lAjcx8KENSbzYoVDOzwo2mmEsKdJ3VpYfZEAFy9FoGleE8Hp8";
        fetch(apiURL)
            .then(response => response.json())
            .then(json =>{
                setData(json)
            }).catch((error)=>{
                console.log("Error : ",error);
            }).finally(()=> setIsloading(false))
    }
    renderItem = ({item})=>{
        return(

            <View style={styles.items}>
                <View style={styles.image_rep}>
                     <Image style={styles.image} source={{uri:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-1/p320x320/150446545_1389567931396022_1632175150819216811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GkZ_JQw-XboAX8FF8iT&_nc_ht=scontent.fhan5-6.fna&oh=00_AT8DjNlvAMOTIqpGOoaCiBwoe6pihXEDB1ZMjdxVgzONjA&oe=61F02E92'}} />
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message}>{item.company.catchPhrase}{item.username}</Text>
                    <View style={styles.active}></View>
                </View>
       
            </View>

        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity
            style={styles.button}
            onPress={onPress} >
            <Icon name="chevron-left" size={25} style={styles.icons}/>
            </TouchableOpacity>
            
            <Text style={styles.txt_header}>Phan Đức Thắng</Text>
            <View style={styles.header_icon}>
                
                <Icon name="search" size={20} style={styles.icons}/>
            </View>
        </View>
        <View style={styles.duongke}></View>
            {isLoading ? <ActivityIndicator/> : (
                 <View style={styles.mainContainer}>
                     <FlatList style={styles.listItem}
                     data={data}
                     renderItem={renderItem}
                     keyExtractor={item=>`key-${item.id}`}
                     />
                 </View>
                 
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
        marginTop:20,
        marginBottom:10
    },

    header_icon:{
        flexDirection:'row',
    },
    duongke:{
        borderWidth:0.2,
        borderColor:"#999",
    },

    icons:{
        color:"#000",
    },

    icons1:{
        color:"#000",
        marginRight:10
    },
    
    txt_header:{
        color:"#000",
        marginLeft:10,
        fontSize:17,
        fontWeight:"600",
    },

    duongke:{
        borderWidth:0.2,
        borderColor:"#999",
    },
    image_rep:{
        flex:.7,
        borderRadius:35,
        overflow:"hidden"

    },
    items:{
        marginTop:10,
        height:70,
        marginBottom:20,
        flexDirection:"row",
    },
    name:{
        color:"black",
        paddingRight:10,
        paddingTop:5,
        fontSize:20,
        fontWeight:"bold"
      },

    btnXem:{
        width:150,
        height:30,
        backgroundColor:'#5529F7',
        alignItems:"center",
        justifyContent:'center',
        borderRadius:3,

    },
    btnTitle:{
        color:"white",
        fontWeight:"bold"
    },
    boxText:{
        flex:3,
        paddingTop:5,
        paddingLeft:10

    },
    message:{
      color:"black",
      paddingRight:10,
      paddingTop:5
    },
    active:{
        width:15,
        height:15,
        backgroundColor:"#00A780",
        borderRadius:8,
        position:"absolute",
        left:-17,
        top:50

    },
    titleDemo:{
        color:"black",
        fontWeight:'bold',
        fontSize:20,
    },
    image:{
        flex:1,
        backgroundColor:'lightgrey'
    },


});

export default DemoApi;