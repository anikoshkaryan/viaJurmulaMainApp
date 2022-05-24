import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
import {TextInput} from "react-native-paper";
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import QRCode  from 'react-native-qrcode-svg';

import i18n from "i18n-js";
import {en, ru, lv} from "../../i18n/supportedLanguages";
i18n.fallbacks = false;
i18n.translations = { en, ru, lv };
i18n.locale = 'en'



import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    Modal
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store_items: [],
           show_details: false,
            store_details_info: {},
            showQrCode: false,
            userQrCode: 'https://www.pngplay.com/wp-content/uploads/12/QR-Code-PNG-Background.png',
            user_type: "buyer",
            qr_token: ''
        };

    }

    checkUserType = async () => {

        let  userData = await AsyncStorage.getItem('userData');
        let userData2 = JSON.parse(userData)

        this.setState({
            user_type: userData2.role_id == 1 ? 'buyer' : 'seller',
            qr_token: userData2.qr_token
        })

        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;

        fetch(
            'http://vjapp.reproto.com/api/get-all-shops',
            {
                method: "POST",
                headers: {
                    'Authorization': AuthStr,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => response.json())
            .catch((error) => {
                console.log("ERROR " , error)

            })
            .then((responseData) => {
                console.log( responseData.data.shops, 'responseData1')

                    if (responseData.success === true) {
                         this.setState({
                             store_items: responseData.data.shops,
                         })
                    }

            }).done();


    }

    componentDidMount() {
        const { navigation } = this.props;

        this.checkUserType();

        this.focusListener = navigation.addListener("focus", () => {
            this.checkUserType();
        });
    }
    componentWillUnmount() {
        // Remove the event listener
        if (this.focusListener) {
            this.focusListener();
            // console.log('Bum END')
        }

    }



    redirectToProfile= () => {
        this.props.navigation.navigate("Profile");

    }


    getStoreItem = () => {
        return this.state.store_items;
    }


    openShowDetails =  (store_item) => {
        this.setState({
            store_details_info: store_item,
            show_details: true,
        })

    }

    closeShowDetails = () => {
        this.setState({
            show_details: false,
        })
    }

    showQrCode = () => {
        this.setState({
            showQrCode: true,
        })
    }
    openQrScannerPage = () => {
        this.props.navigation.navigate("QrScanner");
    }
    closeQrCode = () => {
        this.setState({
            showQrCode: false,
        })
    }
    //
    //  Simple = () => {
    //     return (<SvgQRCode value="http://example.com" />)
    // }

    render() {
        let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.store_list_wrapper}>

                    <View style={styles.store_list_title_settings_icon_wrapper}>
                            <TouchableOpacity style={styles.settings_icon_btn} onPress={() => {this.redirectToProfile()}}>
                                <Svg
                                    width={22}
                                    height={22}
                                    xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 16 16">
                                    <Path d="M9.36 16H6.65c-.44 0-.8-.36-.8-.8v-1.6c-.09-.04-.19-.08-.28-.12l-1.13 1.13c-.31.31-.82.31-1.13 0L1.39 12.7a.803.803 0 010-1.13l1.13-1.13c-.04-.09-.08-.19-.12-.28H.8c-.44 0-.8-.36-.8-.8V6.65c0-.44.36-.8.8-.8h1.6c.04-.09.07-.19.12-.28L1.39 4.44a.803.803 0 010-1.13l1.92-1.92c.32-.3.81-.3 1.13 0l1.13 1.13c.09-.04.19-.08.28-.12V.8c-.01-.44.35-.8.79-.8h2.71c.44 0 .8.36.8.8v1.6c.09.04.19.08.28.12l1.13-1.13c.31-.31.82-.31 1.13 0l1.92 1.91c.31.31.31.82 0 1.13l-1.13 1.13c.04.09.08.18.11.28h1.6c.44 0 .8.36.8.8v2.71c0 .44-.36.8-.8.8h-1.6c-.04.09-.08.19-.12.28l1.13 1.13c.31.31.31.82 0 1.13l-1.91 1.92c-.31.31-.82.31-1.13 0l-1.13-1.13c-.09.04-.19.08-.28.12v1.6c0 .44-.36.8-.8.8m-1.91-1.6h1.11v-1.38c0-.36.24-.68.59-.77.37-.1.72-.25 1.05-.44.31-.18.71-.13.97.13l.98.98.79-.79-.98-.98a.802.802 0 01-.13-.97c.19-.33.33-.68.43-1.04.09-.35.41-.59.77-.59h1.38V7.44h-1.38c-.36 0-.68-.24-.77-.59-.1-.37-.24-.72-.43-1.04a.804.804 0 01.13-.97l.98-.97-.79-.79-.98.98c-.26.26-.65.31-.97.13-.33-.19-.68-.34-1.05-.44a.792.792 0 01-.59-.77V1.6H7.44v1.38c0 .36-.24.68-.59.77-.37.1-.72.25-1.05.44-.31.18-.71.13-.97-.13l-.97-.97-.79.79.98.98c.26.26.31.65.13.97-.19.33-.33.68-.43 1.04-.09.35-.41.59-.77.59H1.6v1.11h1.38c.36 0 .68.24.77.59.1.37.24.72.43 1.04.18.31.13.71-.13.97l-.97.98.79.79.98-.98c.26-.26.65-.31.97-.13.33.19.68.34 1.05.44.35.09.59.41.59.77v1.38zM8 11.12c-1.73 0-3.12-1.4-3.12-3.12S6.28 4.88 8 4.88s3.12 1.4 3.12 3.12c0 1.72-1.4 3.12-3.12 3.12m0-4.65a1.52 1.52 0 10-.001 3.039A1.52 1.52 0 008 6.47"  fill="#000000" />
                                </Svg>
                            </TouchableOpacity>
                           <Text style={styles.store_list_title}>{i18n.t('winter_sale')}</Text>

                    </View>

                    <ScrollView style={styles.store_lists_items_wrapper}>
                            {this.getStoreItem().map((store_item, index) => {
                                return (


                                        <TouchableOpacity style={styles.store_list_item} key={store_item.id} onPress={() => {this.openShowDetails(store_item)}}>
                                                <View style={styles.store_item_list_img}>

                                                   <Image style={styles.store_item_list_img_child}  source={{uri:"https://vjapp.reproto.com/storage/" + store_item.image}} />
                                               </View>
                                        </TouchableOpacity>


                                );
                            })}



                    </ScrollView>

                    {this.state.show_details &&

                       <TouchableOpacity style={styles.store_item_modal} onPress={() => {this.closeShowDetails()}}>

                          <TouchableHighlight style={styles.store_item_modal_wrapper}>
                              <View style={styles.store_item_modal_child}>
                                  <View style={styles.store_item_modal_img_child_parent}>
                                      <Image style={styles.store_item_modal_img_child}  source={{uri : "https://vjapp.reproto.com/storage/" + this.state.store_details_info.image}} />

                                  </View>
                                  <Text style={styles.store_item_modal_date_info}>
                                      {i18n.t('for_all_items_till')} {this.state.store_details_info.till_date}
                                  </Text>
                                  <Text style={styles.store_item_modal_price_info}>
                                      {i18n.t('from')} <Text style={styles.store_item_modal_price_info_number}>{this.state.store_details_info.from}</Text>  {i18n.t('to')} <Text style={styles.store_item_modal_price_info_number}>{this.state.store_details_info.to}</Text>
                                  </Text>
                                  <Text style={styles.store_item_modal_info}>
                                      * {i18n.t('from_retail_price')}
                                  </Text>
                              </View>



                           </TouchableHighlight>

                       </TouchableOpacity>
                    }



                    <View style={styles.store_list_footer}>
                        {this.state.user_type == "buyer" &&

                            <TouchableOpacity style={styles.qr_code_icon_btn} onPress={() => {this.showQrCode()}}>
                                <View style={styles.qr_code_icon}>
                                <Svg
                                    width={50}
                                    height={50}
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    enableBackground="new 0 0 512 512"
                                    fill="#ffffff"

                                >
                                    <Path d="M51.2 51.2H102.4V102.4H51.2z" />
                                    <Path d="M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4zm128 128H384V25.6h102.4V128z" />
                                    <Path d="M409.6 51.2H460.8V102.4H409.6z" />
                                    <Path d="M51.2 409.6H102.4V460.8H51.2z" />
                                    <Path d="M358.4 358.4H384V384H358.4z" />
                                    <Path d="M230.4 486.4H256V512H230.4z" />
                                    <Path d="M256 384H281.6V409.6H256z" />
                                    <Path d="M256 435.2H281.6V460.8H256z" />
                                    <Path d="M486.4 307.2H512V332.8H486.4z" />
                                    <Path d="M0 307.2H25.6V332.8H0z" />
                                    <Path d="M0 179.2H25.6V204.79999999999998H0z" />
                                    <Path d="M281.6 25.6L281.6 51.2 230.4 51.2 230.4 76.8 307.2 76.8 307.2 51.2 307.2 25.6z" />
                                    <Path d="M486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6H281.6v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6zm-76.8 128v76.8h-76.8v-76.8h76.8z" />
                                    <Path d="M332.8 153.6L307.2 153.6 307.2 179.2 281.6 179.2 281.6 204.8 281.6 230.4 307.2 230.4 307.2 204.8 332.8 204.8 332.8 179.2 358.4 179.2 358.4 153.6z" />
                                    <Path d="M281.6 486.4H332.8V512H281.6z" />
                                    <Path d="M204.8 25.6H230.4V51.2H204.8z" />
                                    <Path d="M409.6 204.8H435.20000000000005V230.4H409.6z" />
                                    <Path d="M435.2 179.2H460.8V204.79999999999998H435.2z" />
                                    <Path d="M102.4 307.2H128V332.8H102.4z" />
                                    <Path d="M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2zm-25.6 0H25.6V384H128v102.4z" />
                                    <Path d="M153.6 153.6H179.2V179.2H153.6z" />
                                    <Path d="M179.2 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0h-25.6zM128 128H25.6V25.6H128V128z" />
                                    <Path d="M307.2 76.8H332.8V102.4H307.2z" />
                                    <Path d="M256 0H281.6V25.6H256z" />
                                    <Path d="M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8zM153.6 256h-51.2v-25.6h51.2V256z" />
                                    <Path d="M230.4 409.6L230.4 384 230.4 358.4 204.8 358.4 204.8 384 179.2 384 179.2 409.6 204.8 409.6 204.8 435.2 179.2 435.2 179.2 460.8 230.4 460.8 230.4 435.2 256 435.2 256 409.6z" />
                                    <Path d="M460.8 460.8L460.8 435.2 435.2 435.2 435.2 460.8 358.4 460.8 358.4 486.4 409.6 486.4 409.6 512 435.2 512 435.2 486.4 486.4 486.4 486.4 512 512 512 512 486.4 512 460.8z" />
                                    <Path d="M486.4 358.4L486.4 384 460.8 384 460.8 409.6 512 409.6 512 384 512 358.4z" />
                                </Svg>
                            </View>
                            </TouchableOpacity>
                        }

                        {this.state.user_type == "seller" &&

                            <TouchableOpacity style={styles.qr_code_icon_btn} onPress={() => {this.openQrScannerPage()}}>
                                <View style={styles.qr_code_icon}>
                                <Svg
                                    width={50}
                                    height={50}
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    enableBackground="new 0 0 512 512"
                                    fill="#ffffff"

                                >
                                    <Path d="M51.2 51.2H102.4V102.4H51.2z" />
                                    <Path d="M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4zm128 128H384V25.6h102.4V128z" />
                                    <Path d="M409.6 51.2H460.8V102.4H409.6z" />
                                    <Path d="M51.2 409.6H102.4V460.8H51.2z" />
                                    <Path d="M358.4 358.4H384V384H358.4z" />
                                    <Path d="M230.4 486.4H256V512H230.4z" />
                                    <Path d="M256 384H281.6V409.6H256z" />
                                    <Path d="M256 435.2H281.6V460.8H256z" />
                                    <Path d="M486.4 307.2H512V332.8H486.4z" />
                                    <Path d="M0 307.2H25.6V332.8H0z" />
                                    <Path d="M0 179.2H25.6V204.79999999999998H0z" />
                                    <Path d="M281.6 25.6L281.6 51.2 230.4 51.2 230.4 76.8 307.2 76.8 307.2 51.2 307.2 25.6z" />
                                    <Path d="M486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6H281.6v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6zm-76.8 128v76.8h-76.8v-76.8h76.8z" />
                                    <Path d="M332.8 153.6L307.2 153.6 307.2 179.2 281.6 179.2 281.6 204.8 281.6 230.4 307.2 230.4 307.2 204.8 332.8 204.8 332.8 179.2 358.4 179.2 358.4 153.6z" />
                                    <Path d="M281.6 486.4H332.8V512H281.6z" />
                                    <Path d="M204.8 25.6H230.4V51.2H204.8z" />
                                    <Path d="M409.6 204.8H435.20000000000005V230.4H409.6z" />
                                    <Path d="M435.2 179.2H460.8V204.79999999999998H435.2z" />
                                    <Path d="M102.4 307.2H128V332.8H102.4z" />
                                    <Path d="M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2zm-25.6 0H25.6V384H128v102.4z" />
                                    <Path d="M153.6 153.6H179.2V179.2H153.6z" />
                                    <Path d="M179.2 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0h-25.6zM128 128H25.6V25.6H128V128z" />
                                    <Path d="M307.2 76.8H332.8V102.4H307.2z" />
                                    <Path d="M256 0H281.6V25.6H256z" />
                                    <Path d="M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8zM153.6 256h-51.2v-25.6h51.2V256z" />
                                    <Path d="M230.4 409.6L230.4 384 230.4 358.4 204.8 358.4 204.8 384 179.2 384 179.2 409.6 204.8 409.6 204.8 435.2 179.2 435.2 179.2 460.8 230.4 460.8 230.4 435.2 256 435.2 256 409.6z" />
                                    <Path d="M460.8 460.8L460.8 435.2 435.2 435.2 435.2 460.8 358.4 460.8 358.4 486.4 409.6 486.4 409.6 512 435.2 512 435.2 486.4 486.4 486.4 486.4 512 512 512 512 486.4 512 460.8z" />
                                    <Path d="M486.4 358.4L486.4 384 460.8 384 460.8 409.6 512 409.6 512 384 512 358.4z" />
                                </Svg>
                            </View>
                            </TouchableOpacity>
                        }

                    </View>

                    {this.state.showQrCode &&

                        <View style={styles.show_qr_code_modal}>
                            <View style={styles.show_qr_code_modal_wrapper}>
                                <View style={styles.show_qr_code_modal_img_parent}>

                                    <QRCode
                                        value={this.state.qr_token}
                                        logoSize={50}
                                        logoBackgroundColor='transparent'
                                    />
                                </View>

                                <TouchableOpacity style={styles.close_qr_code_icon_btn} onPress={() => {this.closeQrCode()}}>
                                    <View style={styles.qr_code_icon}>
                                        <Svg
                                            width={50}
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                            enableBackground="new 0 0 512 512"
                                            fill="#ffffff"

                                        >
                                            <Path d="M51.2 51.2H102.4V102.4H51.2z" />
                                            <Path d="M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4zm128 128H384V25.6h102.4V128z" />
                                            <Path d="M409.6 51.2H460.8V102.4H409.6z" />
                                            <Path d="M51.2 409.6H102.4V460.8H51.2z" />
                                            <Path d="M358.4 358.4H384V384H358.4z" />
                                            <Path d="M230.4 486.4H256V512H230.4z" />
                                            <Path d="M256 384H281.6V409.6H256z" />
                                            <Path d="M256 435.2H281.6V460.8H256z" />
                                            <Path d="M486.4 307.2H512V332.8H486.4z" />
                                            <Path d="M0 307.2H25.6V332.8H0z" />
                                            <Path d="M0 179.2H25.6V204.79999999999998H0z" />
                                            <Path d="M281.6 25.6L281.6 51.2 230.4 51.2 230.4 76.8 307.2 76.8 307.2 51.2 307.2 25.6z" />
                                            <Path d="M486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6H281.6v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6zm-76.8 128v76.8h-76.8v-76.8h76.8z" />
                                            <Path d="M332.8 153.6L307.2 153.6 307.2 179.2 281.6 179.2 281.6 204.8 281.6 230.4 307.2 230.4 307.2 204.8 332.8 204.8 332.8 179.2 358.4 179.2 358.4 153.6z" />
                                            <Path d="M281.6 486.4H332.8V512H281.6z" />
                                            <Path d="M204.8 25.6H230.4V51.2H204.8z" />
                                            <Path d="M409.6 204.8H435.20000000000005V230.4H409.6z" />
                                            <Path d="M435.2 179.2H460.8V204.79999999999998H435.2z" />
                                            <Path d="M102.4 307.2H128V332.8H102.4z" />
                                            <Path d="M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2zm-25.6 0H25.6V384H128v102.4z" />
                                            <Path d="M153.6 153.6H179.2V179.2H153.6z" />
                                            <Path d="M179.2 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0h-25.6zM128 128H25.6V25.6H128V128z" />
                                            <Path d="M307.2 76.8H332.8V102.4H307.2z" />
                                            <Path d="M256 0H281.6V25.6H256z" />
                                            <Path d="M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8zM153.6 256h-51.2v-25.6h51.2V256z" />
                                            <Path d="M230.4 409.6L230.4 384 230.4 358.4 204.8 358.4 204.8 384 179.2 384 179.2 409.6 204.8 409.6 204.8 435.2 179.2 435.2 179.2 460.8 230.4 460.8 230.4 435.2 256 435.2 256 409.6z" />
                                            <Path d="M460.8 460.8L460.8 435.2 435.2 435.2 435.2 460.8 358.4 460.8 358.4 486.4 409.6 486.4 409.6 512 435.2 512 435.2 486.4 486.4 486.4 486.4 512 512 512 512 486.4 512 460.8z" />
                                            <Path d="M486.4 358.4L486.4 384 460.8 384 460.8 409.6 512 409.6 512 384 512 358.4z" />
                                        </Svg>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    }

                </View>




            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
        width: "100%",

    },


    store_list_title_settings_icon_wrapper: {
       flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
        marginBottom: 23,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.5,

        elevation: 8,
        paddingTop: 18,
        paddingBottom: 16,
        paddingHorizontal: 20,
        position: "relative",
        zIndex: 9999,

    },
    store_list_title: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 110,
    },
    store_lists_items_wrapper: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 24,

    },
    store_lists_items_child_wrapper: {
        width: "100%",
        height: "100%",

    },
    store_list_item: {
        backgroundColor: "#ffffff",
        borderRadius: 4,
        marginBottom: 20,
        width: "100%",
        height: 152,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    store_item_list_img_child: {
       width: "100%",
       height: "100%",
    },
    store_item_list_img: {
        maxWidth: 300,
        width: "100%",
        height: 150,
    },

    store_list_wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor:'#f7f7f7',
        flex:1,
    },
    store_list_footer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
       height: 96,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.5,

        elevation: 8,
        // position: "relative",
        // zIndex: 9999,
        // bottom: 0,
        // left: 0,
        // right: 0,

    },

    qr_code_icon_btn: {
        width: 72,
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#af2a38",
        borderRadius: 4,
        position: "absolute",
        bottom: 60,


    },
    store_item_modal: {
         backgroundColor: "#000000cc",
        width: "100%",
         height: "100%",
        position: "absolute",
        paddingHorizontal: 20,
        paddingTop: 80,

    },
    store_item_modal_wrapper: {
        maxHeight: 350,
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.5,

        elevation: 8,
    },
    store_item_modal_img_child_parent: {
        maxWidth:  300,
        height: 150,
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
         marginBottom: 20,

    },
    store_item_modal_img_child: {
        width: "100%",
        height: "100%",
    },
    store_item_modal_child: {
        width: "100%",
        height: "100%",
    },
    store_item_modal_date_info: {
        fontSize: 22,
        color: "#000000",
        textAlign: "center",
        marginBottom: 5,
    },
    store_item_modal_price_info: {
        fontSize: 22,
        color: "#000000",
        textAlign: "center",
        marginBottom: 40,
    },
    store_item_modal_price_info_number: {
        fontSize: 35,
        color: "#af2a38",
        fontWeight: "bold",

    },
    store_item_modal_info: {
        fontSize: 16,
        color: "#000000",
        textAlign: "center",
    },

    show_qr_code_modal: {
       width: "100%",
       height: "100%",
        backgroundColor: "#af2a38",
        position: "absolute",
        zIndex: 99999999999999999999999999999999,
        left: 0,
        top: 0,
        elevation:9


    },
    show_qr_code_modal_wrapper: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 130,
        paddingHorizontal: 30,
    },
    close_qr_code_icon_btn: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: 99,
        left: 0,
        right: 0,
         top: 700,
    },
    show_qr_code_modal_img: {
       width: "100%",
       height: "100%",
    },
    show_qr_code_modal_img_parent: {
       width: "100%",
       height: 300,
       maxWidth: 300,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 20,
    },

});