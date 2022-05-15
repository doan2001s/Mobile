import React  from 'react';
import {View,StyleSheet, TouchableOpacity,ScrollView,Image,TextInput,Text,Pressable,onPressFunction,Button, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () =>{
    return(
    <View style={styles.container} >  
    <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
            <TouchableOpacity
            style={styles.button}
            onPress={onPress} >
            <Icon name="chevron-left" size={25} style={styles.icons}/>
            </TouchableOpacity>
            <Text style={styles.txt_header}>Phan Đức Thắng</Text>
            <View style={styles.header_icon}>
                <Icon name="pen" size={20}  style={styles.icons1}/>
                <Icon name="search" size={20} style={styles.icons}/>
            </View>
        </View>
        <View style={styles.duongke}></View>

        <View style={styles.body}>
            <View style={styles.anhChinh}>
                <Image  
                    style={styles.anhBia}
                    source={{
                    uri: 'https://cdn.tgdd.vn/Files/2017/09/11/1020789/dung-video-de-lam-anh-bia-facebook-tren-iphone-android-0.jpg'
                }}/>  

               <Image  
                    style={styles.avata}
                    source={{
                    uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/150446545_1389567931396022_1632175150819216811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GkZ_JQw-XboAX9zfpMh&_nc_ht=scontent-hkt1-2.xx&oh=00_AT94uU1Wqg8IpRqkt56xAbMSenN8T5BeP9hYfOWYjryC1Q&oe=61F0098C'
                }}/>  
            </View>

            <Text style={styles.ten}>Phan Đức Thắng (ĐT)</Text>
            <View style={styles.duongke}></View>

            <View style={styles.thongtin}>
                <View style={styles.from}>
                    <Icon name="map-marker-alt" size={20} style={styles.icon_gioiThieu}/>
                    <Text style={styles.txt_GioiThieu}>Đến từ Cầu Giấy, Hà Nội, Vietnam </Text>
                </View>

                <View style={styles.from}>
                    <Icon name="heart" size={20} style={styles.icon_gioiThieu}/>
                    <Text style={styles.txt_GioiThieu}>Độc Thân</Text>
                </View>

                <View style={styles.from}>
                    <Icon name="ellipsis-h" size={20} style={styles.icon_gioiThieu}/>
                    <Text style={styles.txt_GioiThieu}>Xem thêm thông tin giới thiệu</Text>
                </View>

                <Text style={styles.chinhSua}>
                    Chỉnh sửa chi tiết
                </Text>
                <View style={styles.duongke}></View>

                <View style={styles.banBe}>
                    <View style={styles.banBe1}>
                        <Text style={styles.txt_banbe}>Bạn bè</Text>
                        <Text style={styles.txtTim}>Tìm bạn bè</Text>
                    </View>
                    <Text style={styles.txt_thongtinbanbe}>700 người bạn</Text>
                </View>
                <View style={styles.thongtin_banbe}>
                    <View style={styles.chitiet_banbe}>
                        <Image  
                            style={styles.anh_banbe}
                            source={{
                            uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/75339514_2535758660044553_829042174048862208_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VOo4Hro2__cAX-M3RPu&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-wHnl0hHDDtkMBvvXPFO71WaPrOBoxxc4mXVYtkIP8kg&oe=61F1712F'
                        }}/>
                        <Text style={styles.txt_Tenban}>Hoàng Minh Ngọc</Text>  
                    </View>

                    <View style={styles.chitiet_banbe}>
                        <Image  
                            style={styles.anh_banbe}
                            source={{
                            uri: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t1.6435-1/p200x200/189153674_1367024760341830_3371542725366992486_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=crpcmK4Ps54AX9asxzf&_nc_ht=scontent.fhan5-10.fna&oh=00_AT_UUB4KMBXV7U5WOUoTdtn9N79KHaR0L8x5UcMY2MOqmw&oe=61EF6D92'
                        }}/>
                        <Text style={styles.txt_Tenban}>Vũ Dinh</Text>  
                    </View>

                    <View style={styles.chitiet_banbe}>
                        <Image  
                            style={styles.anh_banbe}
                            source={{
                            uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c2.1.199.198a/p200x200/146278794_3603427136402402_4086102094614750341_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=J41iQDIj9UAAX-_Xezz&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_yGOILSVxTeqxzAsvxMC9koxbncrp4KUkzU-1Qhk5bFw&oe=61F0E295'
                        }}/>
                        <Text style={styles.txt_Tenban}>Đoàn Minh Quang</Text>  
                    </View>

                    <View style={styles.chitiet_banbe}>
                        <Image  
                            style={styles.anh_banbe}
                            source={{
                            uri: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-1/c0.34.200.200a/p200x200/269607436_1291259121342281_4972732530048203073_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=2NnIbwk_QrAAX961p-n&_nc_ht=scontent-hkt1-1.xx&oh=00_AT8cJXvuLK3T3FNaJ76kFsI-IDO8unycrM5cAXAgKRkeQQ&oe=61D07342'
                        }}/>
                        <Text style={styles.txt_Tenban}>Nguyễn Phương Thảo</Text>  
                    </View>

                    <View style={styles.chitiet_banbe}>
                        <Image  
                            style={styles.anh_banbe}
                            source={{
                            uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-1/p200x200/268293908_2119266561557977_7969791547160954493_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GbfYhp3sBOcAX-Zx2qk&_nc_ht=scontent-hkt1-2.xx&oh=00_AT-rVioX8ldjDS5voDLfWYngSlp7szbJ4XONcXgv2ey8Cw&oe=61CF0858'
                        }}/>
                        <Text style={styles.txt_Tenban}>Nguyễn Linh Thúy</Text>  
                    </View>

                    <View style={styles.chitiet_banbe}>
                        <Image  
                            style={styles.anh_banbe}
                            source={{
                            uri: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t1.6435-1/p200x200/151755570_3054966844784961_6844464098556249213_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=quwPF0CKu78AX_l9AjA&_nc_ht=scontent.fhan5-9.fna&oh=00_AT8A2b5lvS4o3XQHEVSMoPpjy2_85Y0CXG0OSqypXZAEnw&oe=61EF6F8D'
                        }}/>
                        <Text style={styles.txt_Tenban}>Nguyễn Duy Đạt</Text>  
                    </View>
                </View>
                <Text style={styles.xem}>
                    Xem tất cả bạn bè
                </Text>
            </View>
            <View style={styles.duongkedai}></View>

            <View style={styles.Menu}>
                <View style={styles.header_menu}>
                    <Image  
                        style={styles.anh_nguoidang}
                        source={{
                        uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/150446545_1389567931396022_1632175150819216811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GkZ_JQw-XboAX9zfpMh&_nc_ht=scontent-hkt1-2.xx&oh=00_AT94uU1Wqg8IpRqkt56xAbMSenN8T5BeP9hYfOWYjryC1Q&oe=61F0098C'
                    }}/>

                    <View style={styles.chitiet_thongtin}>
                        <Text style={styles.txt_TenNguoiDang}>Phan Đức Thắng</Text>
                        <Text style={styles.txt_kieuDang}> đã cập nhật ảnh đại diện </Text>
                    </View>
                </View>
                <Text style={styles.txt_ngayDang}>16 thg 2</Text>
                <View style={styles.NoiDung}>
                    <Text style={styles.caption}>Thi lắm quá</Text>
                    <Image  
                        style={styles.anh_NoiDung}
                        source={{
                        uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/150446545_1389567931396022_1632175150819216811_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GkZ_JQw-XboAX9zfpMh&_nc_ht=scontent-hkt1-2.xx&oh=00_AT94uU1Wqg8IpRqkt56xAbMSenN8T5BeP9hYfOWYjryC1Q&oe=61F0098C'
                    }}/>
                </View>

                <View style={styles.Camxuc}>
                    <View style={styles.tongquan}>
                        <View style={styles.soluong}>
                            <Icon name="thumbs-up" size={18}  style={styles.icons3}/>
                            <Icon name="gratipay" size={18}  style={styles.icons4}/>
                            <Icon name="laugh-squint" size={18}  style={styles.icons5}/>
                            <Text style={styles.soluong_camxux}>200</Text>
                        </View>
                        <Text style={styles.comment}>50 bình luận</Text>
                    </View>
                    <View style={styles.duongke}></View>

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
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
        marginTop:20,
        marginBottom:10
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

    duongke:{
        borderWidth:0.2,
        borderColor:"#999",
    },

    body:{
        margin:18,
        marginTop:10,
        flex:1,
        flexDirection:'column',
    },

    anhBia:{
        width:358,
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode: 'stretch',// or 'cover'
    },

    avata:{
        width:180,
        height:180,
        position:"absolute",
        top:110,
        right:80,
        borderRadius:100,
    },

    ten:{
        marginTop:100,
        textAlign:"center",
        marginLeft:20,
        marginBottom:20,
        fontSize:20,
        fontWeight:"700",
        color:"#000"
    },

    from:{
        marginTop:10,
        flexDirection:"row",
    },

    txt_GioiThieu:{
        fontSize:15,
        fontWeight:"500",
        color:"#000",
        marginLeft:15,
        marginBottom:5
    },

    chinhSua:{
        marginTop:15,
        height:35,
        width:358,
        backgroundColor:"#AFD9DF",
        fontSize:14,
        fontWeight:"700",
        color:"#0A52D0",
        padding:7,
        paddingLeft:125,
        marginBottom:10,
        borderRadius:5,
    },

    banBe:{
        marginTop:15,
    },

    banBe1:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    
    txt_banbe:{
        fontSize:17,
        fontWeight:"bold",
        color:"#000"
    },

    txtTim:{
        fontSize:16,
        fontWeight:"400",
        color:"#3078F1"
    },

    txt_thongtinbanbe:{
        fontWeight:"400",
        fontSize:16,
    },


    thongtin_banbe:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },

    chitiet_banbe:{
        marginTop:10,
        width:110,
        height:160,
        backgroundColor:"#E2E2E2",
        borderRadius:10,
        flexDirection:'column',
        
    },

    anh_banbe:{
        width:110,
        height:110,
        resizeMode: 'stretch',// or 'cover',
        borderRadius:10,
    },
    
    txt_Tenban:{
        fontSize:13,
        fontWeight:"bold",
        margin:8,
        color:"#000"
    },

    xem:{
        marginTop:15,
        height:35,
        backgroundColor:"#BFBFBF",
        fontSize:14,
        fontWeight:"700",
        color:"#000",
        padding:7,
        paddingLeft:125,
        marginBottom:10,
        borderRadius:5,
    },

    duongkedai:{
        borderWidth:4,
        borderColor:"#999",
        marginLeft:-18,
        marginRight:-18
    },

    Menu:{
        flexDirection:"column",
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

    chitiet_thongtin:{
        flexDirection:"row",
        flexWrap:'wrap',

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

    txt_ngayDang:{
        position:"absolute",
        top:40,
        left:55,
        fontSize:15,
        color:"#000",
    },

    caption:{
        marginTop:10,
        fontSize:15,
        color:"#000",
        fontWeight:"400",
    },

    anh_NoiDung:{
        width:280,
        height:280,
        marginTop:10,
        borderRadius:200,
        alignSelf:"center"
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
    }

});
    
export default App;