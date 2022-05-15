import React  from 'react';
import {View,StyleSheet, TouchableOpacity,ScrollView,Image,TextInput,Text,Pressable,onPressFunction,Button, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import comment from './comment.json';

const App = () =>{
    return(
    <View style={styles.container} >  
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.Camxuc}>
                    <View style={styles.tongquan}>
                        <View style={styles.soluong}>
                            <Icon name="thumbs-up" size={18}  style={styles.icons3}/>
                            <Icon name="gratipay" size={18}  style={styles.icons4}/>
                            <Icon name="laugh-squint" size={18}  style={styles.icons5}/>
                            <Text style={styles.soluong_camxux}>200</Text>
                        </View>
                        <Icon name="thumbs-up" size={18}  style={styles.icons3}/>
                    </View>
                    <View style={styles.duongke}></View>
                </View>
            </View>

            <View style={styles.body}>
            <View style={styles.post}>
                 {comment.map((status,index) =>(
                       <View key={index} style={styles.post_item}>
                           <View style={styles.post_infor}>
                               <View style={styles.infor_image}>
                                    <Image style={styles.img_inf}
                                    source={{ uri:status.image}}/>
                                </View>

                               <View style={styles.ndComment}>
                                    <Text style={styles.name_post}>{status.name}</Text>
                                    <Text style={styles.title_stt}>{status.title}</Text>
                               </View>
                           </View>
                           
                            <View style={styles.react}>
                                <View style={styles.react_camXuc}>
                                    <Text style={styles.control}>{status.time}</Text>
                                    <Text style={styles.control}>Thích</Text>
                                    <Text style={styles.control}>Phản hồi</Text>
                                    <View style={styles.camxuc_comment}>
                                        <Text  style={styles.react_item_2}>{status.like}</Text>
                                        <Icon name="thumbs-up" size={18}  style={styles.icons3}/>
                                        <Icon name="gratipay" size={18}  style={styles.icons4}/>
                                        <Icon name="laugh-squint" size={18}  style={styles.icons5}/>
                                    </View>
                                    
                                </View>

                            </View>
                       </View>
                        ))}
            </View>
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },

    header:{
        margin:15,
        marginTop:20,
        marginBottom:10
    },

    tongquan:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    soluong:{
        flexDirection:'row',
        marginBottom:10
    },

    icons3:{
        color:"#43598C"
    },

    icons4:{
        color:"#FB5353"
    },
    
    icons5:{
        color:"yellow"
    },

    duongke:{
        borderWidth:0.2,
        borderColor:"#999",
    },

    body:{
        margin:15,
    },

    post_infor:{
        flexDirection:"row"
    },

    img_inf:{
        width:35,
        height:35,
        borderRadius:100,
        marginRight:10
    },

    ndComment:{
        backgroundColor:"#BFBFBF",
        paddingRight:15,
        paddingBottom:7,
        paddingTop:5,
        borderRadius:10
    },

    name_post:{
        marginLeft:5,
        fontSize:14,
        fontWeight:"bold",
        color:"#000"
    },

    title_stt:{
        marginLeft:5,
        fontSize:14,
        fontWeight:"500",
        color:"#000"
    },

    react_camXuc:{
        marginTop:5,
        flexDirection:"row",
        marginLeft:45,
        marginBottom:10
    },

    control:{
        fontWeight:"500",
        marginLeft:15
    },

    camxuc_comment:{
        flexDirection:"row",
        position:"absolute",
        right:0
    },

    react_item_2:{
        marginRight:5,
        fontWeight:"500",
    }


});
    
export default App;