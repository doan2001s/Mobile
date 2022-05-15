import React  from 'react';
import {View,StyleSheet, TouchableOpacity,Image,TextInput,Text,Pressable,onPressFunction,Button, ImageBackground} from 'react-native';

const App = () =>{
    return(
    <View style={styles.container} >  
        <Image  
            style={styles.header_anh}
            source={{
            uri: 'https://lh3.googleusercontent.com/proxy/X06fpLYZDXJUDkTpGEgYTLoPdN7lkHPXKxySlBJDjbZWb509hKTYHZIJagXHALeWWCn3WIC4-be3oLUhUnE9cPQ5Sr1OSoTI43FhbLzoFnPKCf7dYA'
        }}/>  
        <View style={styles.body}>
            <TextInput 
                style={styles.input_Tk}
                placeholder="Nhập email hoặc số điện thoại"
            />
            <TextInput 
                style={styles.input_Mk}
                placeholder="Nhập mật khẩu"
                secureTextEntry={true}
            />

            <Pressable onPress={onPressFunction} style={styles.btn_DN}>
                <Text style={styles.txt_btn}>Đăng Nhập</Text>
            </Pressable>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#3A589E",
        justifyContent:"center"
    },

    header_anh:{

        width:170,
        height:85,
        resizeMode: 'stretch',
        position:'absolute',
        top:180,
    },

    body:{
        flexDirection:"column",
        flex:1,
        position:'absolute',
        top:300,  
    },

    input_Tk:{
        width:300,
        height: 40,
        //margin:10,
        backgroundColor:"#fff",
        borderWidth: 1,
        borderColor:"#fff",
        color:"#000",
        borderRadius:3,
        padding: 10,
        fontSize:17,
    },

    input_Mk:{
        marginTop:15,
        width:300,
        height: 40,
        //margin:10,
        backgroundColor:"#fff",
        borderWidth: 1,
        borderColor:"#fff",
        color:"#000",
        borderRadius:3,
        padding: 10,
        fontSize:17,
    },

    btn_DN:{
        width:120,
        height:45,
        backgroundColor:"#fff",
        marginTop:45,
        borderRadius:7,
        marginLeft:80,
    },

    txt_btn:{
        position:"absolute",
        top:7,
        left:9,
        fontSize:20,
        fontWeight:"500",
    }
    
});
    
export default App;