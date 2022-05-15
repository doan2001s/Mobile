import React  from 'react';
import {View,StyleSheet, TouchableOpacity,ScrollView,Image,TextInput,Text,Pressable,onPressFunction,Button, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () =>{
    return(
    <View style={styles.container} >  
        <ScrollView>
        <View style={styles.header}>
            <View style={styles.header1}>
                <Text style={styles.txt_header}>Menu</Text>
                <View style={styles.header_icon}>
                    <Icon name="cog" size={20}  style={styles.icons1}/>
                    <Icon name="search" size={20} style={styles.icons}/>
                </View>
            </View>

            <View style={styles.header_menu}>
                    <Image  
                        style={styles.anh_nguoidang}
                        source={{
                        uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/150446545_1389567931396022_1632175150819216811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GkZ_JQw-XboAX9zfpMh&_nc_ht=scontent-hkt1-2.xx&oh=00_AT94uU1Wqg8IpRqkt56xAbMSenN8T5BeP9hYfOWYjryC1Q&oe=61F0098C'
                    }}/>

                    <View style={styles.chitiet_thongtin}>
                        <Text style={styles.txt_TenNguoiDang}>Phan Đức Thắng</Text>
                        <Text style={styles.txt_kieuDang}>Xem trang cá nhân của bạn </Text>
                    </View>
            </View>
            <View style={styles.duongke}></View>

            <View style={styles.body}>
                    <View style={styles.menuChinh}>
                        <Icon name="clock" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenLoai}>Kỷ niệm</Text>  
                    </View>

    
                    <View style={styles.menuChinh}>
                        <Icon name="flag" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenLoai}>Trang</Text>  
                    </View>
            

                    <View style={styles.menuChinh}>
                        <Icon name="calendar-week" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenLoai}>Sự kiện</Text>  
                    </View>
      

                    <View style={styles.menuChinh}>
                        <Icon name="puzzle-piece" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenLoai}>Chơi game</Text>  
                    </View>
            

                    <View style={styles.menuChinh}>
                        <Icon name="shopping-basket" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenLoai}>Marketplace</Text>  
                    </View>
            

                    <View style={styles.menuChinh}>
                        <Icon name="briefcase" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenLoai}>Việc làm</Text>  
                    </View>

                    <Text style={styles.chinhSua}>
                        Xem thêm
                    </Text>

                    {/* Thêm vào đây nè!!!!!!!!! */}

                    <View style={styles.viewMap}>

                    </View>


            </View>
            <View briefcase></View>

            <View style={styles.menuDuoi}>
                        <Icon name="question-circle" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenMenuPhu}>Trợ giúp & hỗ trợ</Text>  
                        <Icon name="chevron-down" size={17}  style={styles.iconsPhu}/>
            </View>   

            <View style={styles.duongke}></View>  

            <View style={styles.menuDuoi}>
                        <Icon name="cog" size={20}  style={styles.iconsChinh}/>
                        <Text style={styles.txt_TenMenuPhu}>Cài đặt và & quyền riêng tư</Text>  
                        <Icon name="chevron-down" size={17}  style={styles.iconsPhu}/>
            </View>

            <Text style={styles.chinhSua}>
                Đăng xuất
            </Text>     

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

    header_icon:{
        flexDirection:'row',
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

    header_menu:{
        flexDirection:"row",
        marginTop:15,
    },

    anh_nguoidang:{
        width:45,
        height:45,
        borderRadius:100,
        marginRight:10
    },

    txt_TenNguoiDang:{
        fontSize:15,
        fontWeight:"bold",
        color:"#000",
    },

    txt_kieuDang:{
        width:200,
        fontSize:15,
        color:"#000",
    },

    duongke:{
        marginTop:10,
        borderWidth:0.2,
        borderColor:"#999",

    },

    body:{
        marginTop:15,
        flexDirection:'row',
        flexWrap:"wrap"
    },

    menuChinh:{
        width:170,
        height:70,
        backgroundColor:"#E2E2E2",
        padding:15,
        paddingLeft:10,
        borderRadius:10,
        marginBottom:10,
        marginLeft:10,
        justifyContent:"space-between",
    },

    iconsChinh:{
        color:"#3078F1"
    },
    
    txt_TenLoai:{
        fontSize:15,
        fontWeight:"500",
        color:"#000",
    },

    chinhSua:{
        marginTop:15,
        height:35,
        width:358,
        backgroundColor:"#BFBFBF",
        fontSize:14,
        fontWeight:"700",
        color:"#000",
        textAlign:"center",
        paddingTop:7,
        marginBottom:10,
        borderRadius:5,
    },

    menuDuoi:{
        marginTop:15,
        flexDirection:'row',
    },

    txt_TenMenuPhu:{
        marginLeft:15,
        fontSize:16,
        fontWeight:"500",
        color:"#000",
    },
    
    iconsPhu:{
        position:"absolute",
        right:0
    },

    viewMap:{
        backgroundColor:"#2b1c",
        height:270,
        width:10
    }

});
    
export default App;