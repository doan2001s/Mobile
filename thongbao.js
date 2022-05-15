import React  from 'react';
import {View,StyleSheet, TouchableOpacity,ScrollView,Image,TextInput,Text,Pressable,onPressFunction,Button, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import thongbao from './thongbao.json';

const App = () =>{
    return(
    <View style={styles.container} >  
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Text style={styles.txt_header}>Thông báo</Text>
                    <Icon name="search" size={20} style={styles.icons}/>
                </View>
                <Text style={styles.txt_header1}>Mới</Text>
            </View>

            <View style={styles.body}>
            <View style={styles.body1}>
            <View style={styles.post}>
                {thongbao.map((status,index) =>(
                    <View key={index} style={styles.post_item}>
                        <View style={styles.post_infor}>
                            <View style={styles.infor_image}>
                                <Image style={styles.img_inf}
                                source={{ uri:status.image}}/>
                            </View>

                            <View style={styles.ndComment}>
                                <Text style={styles.name_post}>{status.name}</Text>
                            </View>
                            <Icon name="ellipsis-h" size={20} style={styles.icon_gioiThieu}/>
                        </View>                                   
                        <Text style={styles.control}>{status.time}</Text>
                                    
                       </View>
                ))}
            </View>
            </View>
            </View>
            <Text style={[{marginLeft:10},{marginBottom:10},styles.txt_header1]}>Trước đó</Text>
            <View style={styles.body}>
            <View style={styles.body1}>
            <View style={styles.post}>
                {thongbao.map((status,index) =>(
                    <View key={index} style={styles.post_item}>
                        <View style={styles.post_infor}>
                            <View style={styles.infor_image}>
                                <Image style={styles.img_inf}
                                source={{ uri:status.image}}/>
                            </View>

                            <View style={styles.ndComment}>
                                <Text style={styles.name_post}>{status.name}</Text>
                            </View>
                            <Icon name="ellipsis-h" size={20} style={styles.icon_gioiThieu}/>
                        </View>                                   
                        <Text style={styles.control}>{status.time}</Text>
                                    
                       </View>
                ))}
            </View>
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

    header1:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    icons:{
        color:"#000",
    },

    txt_header:{
        color:"#000",
        fontSize:20,
        fontWeight:"700",
    },

    txt_header1:{
        marginTop:10,color:"#000",
        fontSize:16,
        fontWeight:"700",
    },

    body:{
        backgroundColor:"#AFD9DF",
    },

    body1:{
        margin:15,
        
    },

    post_infor:{
        flexDirection:"row",
        marginBottom:15,
    },

    img_inf:{
        width:50,
        height:50,
        borderRadius:100,
        marginRight:10
    },

    ndComment:{
        paddingRight:15,
        paddingBottom:7,
        paddingTop:5,
        borderRadius:10,
    },

    name_post:{
        marginLeft:5,
        fontSize:14,
        fontWeight:"500",
        color:"#000",
        width:260
    },

    title_stt:{
        marginLeft:5,
        fontSize:14,
        fontWeight:"500",
        color:"#000"
    },

    icon_gioiThieu:{
        alignSelf:'center'
    },

    control:{
        fontWeight:"400",
        color:"#000",
        position:'absolute',
        bottom:10,
        left:65
    },


});
    
export default App;