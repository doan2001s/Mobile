import react from 'react';
import React,{ useState,useEffect } from 'react';
import {
    Text,
     View,
     StyleSheet,
     Pressable,
     TextInput,
     Image,
     ImageBackground,
     FlatList,
     Alert,
     Button,
     ScrollView,
      } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import data_status from './data/status.json';
import data_story from './data/story.json';




function trangChu (){

    function renderItem  ({ item,index }) {
        return(
            <View key={index} style={styles.post_item}>
                <Text>{item.title}</Text>
            </View>
          );
    }


    return(
           <ScrollView  style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.header_title}>TPAMobile</Text>
                </View>
                <View style={styles.header_press}>
                    <Pressable style={styles.press_item}>
                        <Icon name="search" size={15} color={"black"}/>
                    </Pressable>
                    <Pressable style={styles.press_item}>
                        <Icon name="facebook-messenger" size={17} color={"black"}/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.header_control}>
                <View style={styles.header_post}>
                    <View style={styles.profile}>
                        <Pressable>
                        <Image style={styles.profile_img}
                             source={{ uri: 'https://nflfalconslockerroom.com/wp-content/uploads/2020/02/images-5.jpg'}}/>
                        </Pressable>
                    </View>
                    <TextInput placeholder='Bạn đang nghĩ gì ?' placeholderTextColor="#000"  style={styles.post_status}>

                    </TextInput>
                </View>
                <View style={styles.control_header}>
                    <View style={styles.item_control}>
                        <Text style={styles.title_control}><Icon name="camera" color={"red"} size={18} /> Phát trực tiếp</Text>
                    </View>
                    <View style={styles.item_control}>
                        <Text  style={styles.title_control}> <Icon name="images" color={"green"} size={18} /> Ảnh</Text>
                    </View>
                    <View style={styles.item_control}>
                        <Text  style={styles.title_control}> <Icon name="video" color={"violet"} size={18} /> Phòng họp mặt </Text>
                    </View>

                </View>
            </View>

            <View style={[styles.stories]}>

                <View  style={styles.main_story}>
                <ScrollView  showsHorizontalScrollIndicator = {false}
                horizontal>
                    <View style={styles.story}>
                    <ImageBackground source={{ uri: 'https://nflfalconslockerroom.com/wp-content/uploads/2020/02/images-5.jpg'}}
                        resizeMode="cover" style={styles.story_image}>
                        <View style={styles.story_title}>
                            <Text style={styles.story_text}><Icon name="plus-circle" size={16}/> Tạo tin</Text>
                        </View>
                    </ImageBackground>
                    </View>

                    {data_story.map((story,index) =>(
                       <View key={index} style={styles.story}>
                       <ImageBackground source={{uri:story.image}}
                           resizeMode="cover" style={styles.story_image}>
                           <View style={styles.story_title_2}>
                               <Text style={styles.story_text_2}>{story.name}</Text>
                           </View>
                       </ImageBackground>
                       </View>
                    ))}

            </ScrollView>
                </View>

            </View>
            <View style={styles.post}>
                 {data_status.map((status,index) =>(
                       <View key={index} style={styles.post_item}>
                           <View style={styles.post_infor}>
                               <View style={styles.infor_image}>
                               <Image style={styles.img_inf}
                                    source={{ uri:status.image}}/>
                               </View>
                               <Text style={styles.name_post}>{status.name}</Text>
                               <Icon style={styles.report} name="times" size={20}></Icon>
                           </View>
                           <Text style={styles.title_stt}>{status.title}</Text>
                           <ImageBackground source={{ uri:status.content }}
                            resizeMode="cover" style={styles.content}>
                            </ImageBackground>
                            <View style={styles.react}>
                                <View style={styles.react_camXuc}>
                                    <Icon size={20} color={"blue"} style={styles.react_item} name="thumbs-up"/>
                                    <Icon size={20} color={"red"} name="grin-hearts"/>
                                    <Text  style={styles.react_item_2}>{status.like}</Text>
                                </View>
                                <Text style={styles.quality_cmt}>{status.comment} bình luận</Text>

                            </View>
                            <View style={styles.control_post}>
                                <View style={styles.control}><Text><Icon name="thumbs-up" size={20} color={"blue"}/> Thích</Text></View>
                                <View style={styles.control}><Text><Icon name="comments" size={20} color={"grey"}/> Bình luận</Text></View>
                                <View style={styles.control}><Text><Icon name="share" size={20} color={"grey"} /> Chia sẻ</Text></View>

                            </View>
                       </View>
                        ))}
            </View>


       </ScrollView>




    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"white"
        },
    header:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        maxHeight:70,
        // backgroundColor:'red',
        flexDirection:"row",
        paddingLeft:10,
        padding:10,
    },
    header_title:{
        fontSize:20,
        color:"#1196F5",
        fontWeight:"bold"
    },
    header_press:{
        width:80,

        flexDirection:"row",
        justifyContent:"space-around"
    },
    press_item:{
        width:35,
        height:35,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#CACBD0",
    },

    header_control:{

    },
    header_post:{
        height:70,
        borderBottomColor:"lightgrey",
        borderBottomWidth:1,
        borderTopColor:"lightgrey",
        borderTopWidth:1,
        flexDirection:"row",
        alignItems:'center',

        padding:10,
    },
    control_header:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center',
        height:40,

    },
    profile:{
        width:40,
        height:40,
        borderRadius:25,
        overflow:'hidden'
    },
    post_status:{
        flex:4.5,
        height:"100%",
        paddingLeft:10,
    },
    profile_img:{
        width:40,
        height:40
    },
    item_control:{
        flexDirection:'row'
    },
    title_control:{
        color:"black",
        fontSize:15,
    },
    stories:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        maxHeight:220,
        borderTopWidth:10,
        borderBottomWidth:10,
        borderTopColor:"lightgrey",
        borderBottomColor:"lightgrey",

    },

    main_story:{
        width:'100%',
        height:200,
        backgroundColor:"white",
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
    },
    story:{
        width:120,
        height:180,
        backgroundColor:"lightgrey",
        borderRadius:15,
        overflow:"hidden",
        marginLeft:5,
    },
    story_image:{
        flex:1,
        flexDirection:"column-reverse"
    },
    story_title:{
        flex:1,
        maxHeight:50,
        opacity:0.8,
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center",
    },
    story_title_2:{
        flex:1,
        maxHeight:40,
        opacity:0.8,
        backgroundColor: "black",
        alignItems:"center",
        justifyContent:"center",
    },
    story_text:{
        color:"black",
        fontWeight:"bold"
    },
    story_text_2:{
        color:"white",
        fontWeight:"bold"
    },
    post:{
        flex:1,

    },
    post_item:{

        marginTop:10,
        width:'100%',
        height:500,


    },
    post_infor:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
        flex:.8
    },
    infor_image:{
        flex:1.5,
        maxWidth:50,
        height:50,
        borderRadius:25,
        overflow:'hidden',
        backgroundColor:"yellow",

    },
    img_inf:{
        width:50,
        height:50
    },
    name_post:{
        paddingLeft:10,
        flex:5,
        fontSize:18,
        color:"black",
        fontWeight:"bold"
    },
    report:{
        flex:.7,
    },
    title_stt:{
        paddingBottom:5,
        paddingLeft:10,
        color:"black"
    },
    content:{
        flex:4,

    },
    react:{
        flex:.7,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',

    },
    react_camXuc:{
        flex:1,
        marginRight:20,
        flexDirection:'row',

    },
    react_item:{
        marginLeft:10,
    },
    react_item_2:{
        marginLeft:5,
        color:"black",
        fontSize:16,
        fontWeight:"bold"
    },
    quality_cmt:{
        flex:.3,
    },

    control_post:{
        flex:.6,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:30,
        paddingTop:10,
        paddingRight:30,
        borderBottomColor:'lightgrey',
        borderTopColor:'lightgrey',
        borderTopWidth:.6,
        borderBottomWidth:.6,
    }

});


export default trangChu;