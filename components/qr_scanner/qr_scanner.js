import React, { useState, useEffect } from 'react';
import {Button, Dimensions, StyleSheet, TouchableOpacity, Text, View, NativeModules} from 'react-native';


// import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import Svg, { Path, Defs, G, ClipPath, Circle, Mask } from "react-native-svg"

import { Camera } from 'expo-camera';

const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - 280) / 2;
const viewMinY = (height - 230) / 2;


import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import axios from "axios";
import i18n from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function App(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [scanned, setScanned] = useState(false);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off );
    const { navigation } = props;

    const goToDashboard = () => {
        setScanned(true);
        navigation.navigate('StoreList')
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    const handleBarCodeScanned = async ({type, data}) => {

        setScanned(true);

        // alert(data)
        // let data_arr = data.split('ID=');


        // test
        //
        // navigation.navigate('Object', {
        //     params: {"data":{"ID":"1863","IBLOCK_ID":null,"NAME":"6262626262jjjj dwdwdw 3районное унитарное предприятие «Агрокомбинат «Ждановичи»","PREVIEW_TEXT":"Минскоеdwdw районное унитарное предприятие «Агрокомбинат «Ждановичи» - государственное сельскохозяйственное предприятие, подведомственное управлению сельского хозяйства исполнительного комитета Минского района. Вышестоящим органом государственного управления является Министерство сельского хозяйства и продовольствия Республики Беларусь. «Благостояние народа – задача всех и каждого». Эта задача, поставленная Главой государства, лежит в основе стратегии развития агрокомбината. Строительство новых и модернизация существующих производственных мощностей, расширение ассортимента выпускаемой продукции, повышение ее качества, расширение географии рынка сбыта. Все свои производственные возможности агрокомбинат представляет в направлениях, важных для государства.","DETAIL_TEXT":"Мы рады познакомить Вас со всеми выпускаемыми нами типами продукции. В работе со своими клиентами мы позиционируем личный подход. Ваши пожелания и требования важны для нас. Поэтому мы ведем непрерывную работу с нашими партнерами, а также совершенствуемся сами с тем, чтобы всегда соответствовать Вашим требованиям. В течение всего периода работы Агрокомбинатом проводятся серьезные исследования рынка продуктов питания. Как следствие, совершенствуются потребительские характеристики продукции.\r\nГрафик работы:\r\n\r\nс 08.00 до 17.00\r\nОбед с 12.30 до 13.30\r\nСуббота, воскресенье - выходной\r\n","PREVIEW_PICTURE":"http:\/\/qr-gid.by\/upload\/iblock\/1b0\/r4hrwq5wxraar1rtzdydo0uj0mqripxq.jpg","PROPERTIES":{"URL":{"VALUE":"https:\/\/www.google.com\/"},"SITE":{"VALUE":"https:\/\/akz.by\/"},"FAX":{"VALUE":"FAX"},"PHONE":{"VALUE":["+375 (17) 510-34-45 ","+375 (17) 516-88-61 ","+375 (17) 516-88-36 "]},"MAIL":{"VALUE":["info@akz.by"]},"TIME":{"VALUE":[{"VALUE":"8:00 - 17:00","NAME":"Офис"},{"VALUE":"13:00 - 14:00","NAME":"Обед"}]},"WORKING_DAYS":{"VALUE":{"MONDAY":true,"TUESDAY":true,"WEDNESDAY":false,"THURSDAY":true,"FRIDAY":true,"SATURDAY":false,"SUNDAY":false}},"POSTCODE":{"VALUE":"220136"},"ADDRESS":{"VALUE":"ул. Вышелесского, 2"},"CITY":{"VALUE":"г. Минск"},"REGION":{"VALUE":"Минская"},"AREA":{"VALUE":"Минский"},"GPS":{"VALUE":["53.906187","27.416621"]},"AUDIOGUIDE":{"VALUE":null}},"DISPLAY_PROPERTIES":{"MORE_PHOTO":{"VALUE":["http:\/\/qr-gid.by\/upload\/iblock\/a26\/roic8u7ygv2n11byq847o9rdr0x9ftgm.jpg","http:\/\/qr-gid.by\/upload\/iblock\/a67\/rjr0uw62zx6miu1mjgqhyqhpvdmsdnpj.jpg"]}}}},
        // })
        //
        // console.log(data_arr)





        let userData = await AsyncStorage.getItem('userData');
        userData = JSON.parse(userData);
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;

        let req = {
            user_token: data,
            salesman_id: userData.user_id,
        }

        console.log(req, 'reqreqreq')

        fetch(
            'http://vjapp.reproto.com/api/connect-sales',
            {
                method: "POST",
                headers: {
                    'Authorization': AuthStr,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req),
            }
        ).then((response) => response.json())
            .catch((error) => {
                console.log("ERROR " , error)

            })
            .then((responseData) => {

                if (responseData.success === true) {
                    navigation.navigate('StoreList')
                    alert("The QR code of buyer successfully scanned")
                } else {
                    alert("The QR code of buyer is wrong. Please try again");
                }
                console.log(responseData, 'responseData2')
            }).done();



        // if (data_arr.length == 2) {
        //
        //     if (data_arr[0] == 'http://qr-gid.by/api/detail/?') {
        //
        //
        //         axios.get(data).then((response) => {
        //             console.log(response.data);
        //
        //             navigation.navigate('Object', {
        //                 params: response.data,
        //             })
        //         });
        //     } else {
        //         alert('Error wrong QR')
        //     }
        // } else {
        //     alert('Error wrong QR')
        //
        // }


    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={ styles.topPanel}>

                <TouchableOpacity style={{marginRight:16,padding:10}} onPress={() => goToDashboard()}>
                    <Svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path  d="M16.75 8H1m0 0l6.3-7M1 8l6.3 7"  stroke="#000"  strokeLinecap="round"  strokeLinejoin="round"/>
                    </Svg>
                </TouchableOpacity>

                <Text style={{fontWeight: 'bold', fontSize: 20}}>QR-сканер</Text>

                <View style={{flex: 1, height:'100%', alignItems:'flex-end', justifyContent:'center', paddingRight:12}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>


                        <Svg  width={26}  height={26}  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg">
                            <Path fillRule="evenodd" clipRule="evenodd" d="M5.98 5H4a2 2 0 00-2 2 3 3 0 013 3v6h7.598a6.002 6.002 0 010-11H8v9a.5.5 0 01-1 0V5H5.98zM20 16h-2.598a6.002 6.002 0 000-11H20a2 2 0 012 2v7a2 2 0 01-2 2zM8 4h12a3 3 0 013 3v7l-.001.085c.014.02.028.042.04.065.297.58.461 1.201.461 1.85 0 1.641-1.04 3.073-2.61 4.149a.5.5 0 11-.565-.826C21.75 18.35 22.5 17.183 22.5 16c0-.105-.006-.21-.018-.315A2.997 2.997 0 0120 17H4a2.997 2.997 0 01-2.482-1.315A2.83 2.83 0 001.5 16c0 1.192.761 2.365 2.204 3.344 1.234.837 2.918 1.493 4.876 1.852l-.52-.958a.5.5 0 11.88-.476l1 1.844a.5.5 0 01-.07.574l-1.5 1.656a.5.5 0 11-.74-.672l.874-.965c-2.109-.375-3.967-1.082-5.361-2.028C1.553 19.093.5 17.653.5 16c0-.68.18-1.325.5-1.925V7a3 3 0 013-3h1a1 1 0 011-1h1a1 1 0 011 1zm11 6.5a4 4 0 11-8 0 4 4 0 018 0zm1 0a5 5 0 11-10 0 5 5 0 0110 0zm-2.5 2a.5.5 0 11-1 0 .5.5 0 011 0zm-4.785-3.015l-.914-.407A3.513 3.513 0 0112.9 7.7l.6.8c-.34.254-.611.593-.785.985zm1.494-1.357l-.316-.95C14.24 7.064 14.613 7 15 7c.506 0 .987.108 1.422.301l-.407.914a2.491 2.491 0 00-1.806-.087zm4.477 13.177a.5.5 0 10-.372-.928 15.557 15.557 0 01-3.39.903.5.5 0 00.152.988c1.31-.202 2.529-.53 3.61-.963z" fill="#393840"/>
                        </Svg>
                    </TouchableOpacity>
                </View>

            </View>


            {!scanned &&
            <Camera
                type={type}
                flashMode={flash}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{flex: 1, width:'100%'}}
            >

            </Camera>
            }

            {scanned &&

            <TouchableOpacity style={{backgroundColor: '#FF9161', padding:10, borderRadius:5, zIndex: 666}} title={'Tap to Scan Again'} onPress={() => setScanned(false)} >
                <Text style={{color:'white'}}>Сканировать еще раз</Text>
            </TouchableOpacity>
            }

            <View style={{width:'100%', alignItems: 'center', justifyContent: 'center', paddingVertical:10, zIndex: 555}}>

                <Text style={{color:'white', width:290}}>
                    Поместите код в середину квадрата.
                    Он будет отсканирован автоматически
                </Text>



            </View>

            {flash == Camera.Constants.FlashMode.torch &&

            <TouchableOpacity
                style={{ position:'absolute', top:STATUSBAR_HEIGHT+72, right:16, zIndex: 6666666666}}
                onPress={() => setFlash( Camera.Constants.FlashMode.off )    }
            >
                <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M5.468 12.59l8.386-10.463c.327-.408.982-.104.88.409l-1.461 7.448a1 1 0 00.981 1.192h3.772c.878 0 1.33 1.05.727 1.687l-8.481 8.979c-.36.38-.989.022-.845-.481l1.68-5.87a1 1 0 00-.96-1.276H6.247a1 1 0 01-.78-1.625z" fill="#fff" />
                </Svg>
            </TouchableOpacity>
            }




            {flash == Camera.Constants.FlashMode.off &&

            <TouchableOpacity
                style={{ position:'absolute', top:STATUSBAR_HEIGHT+72, right:16, zIndex: 6666666666}}
                onPress={() => setFlash( Camera.Constants.FlashMode.torch )    }
            >
                <Svg   width={24}  height={24}  viewBox="0 0 24 24"  fill="red"  xmlns="http://www.w3.org/2000/svg">
                    <Path fillRule="evenodd" clipRule="evenodd" d="M1.353.646a.5.5 0 10-.707.708l7.676 7.675-2.854 3.56a1 1 0 00.78 1.626h3.898a1 1 0 01.962 1.276l-1.68 5.87c-.145.503.484.861.844.48l5.276-5.585 7.098 7.098a.5.5 0 00.707-.708l-7.118-7.118 2.518-2.665c.603-.638.15-1.687-.727-1.687h-3.772a1 1 0 01-.981-1.192l1.462-7.448c.1-.513-.554-.817-.881-.409L8.951 8.244 1.353.646z" fill="#fff"/>
                </Svg>
            </TouchableOpacity>
            }




            <BarcodeMask style={{zIndex: 55, position:'relative'}} edgeColor="#62B1F6" showAnimatedLine/>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    topPanel:{
        backgroundColor:'white',
        width:'100%',
        height:56,
        zIndex:555,
        paddingLeft:12,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'row'
    }
});