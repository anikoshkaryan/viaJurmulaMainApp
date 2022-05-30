import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
// import {TextInput} from "react-native-paper";
// import DatePicker from 'react-native-datepicker';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AuthContext } from '../AuthContext/context';
import AsyncStorage from '@react-native-async-storage/async-storage'



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
    Image,
    ActivityIndicator,
    ImageBackground
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import axios from "axios";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {


            name: '',
            surname: "",
            email: "",
            phone: "",
            country: "",
            language: "",
            gender: "",
            birth_day: "",

        };

    }
    static contextType = AuthContext

    getUserData = async () => {
        let userData = await AsyncStorage.getItem('userData');
        let userData2 = JSON.parse(userData)


        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;

        console.log(AuthStr, "hhhhhhhh");
        fetch(
            'http://vjapp.reproto.com/api/get-user-data',
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
                console.log(responseData, 'responseData12')

                i18n.locale = userData2.language

                if (responseData.hasOwnProperty("success")) {
                    if (responseData.success === true) {

                        this.setState({
                            name: responseData.user.name,
                            surname: responseData.user.surname,
                            email: responseData.user.email,
                            phone: responseData.user.phone,
                            phone_code: responseData.user.phone_code,
                            country: responseData.user.country,
                            language: responseData.user.language,
                            gender: responseData.user.gender,
                            birth_day: responseData.user.birth_day,
                        })

                    }
                }

            }).done();



        // axios.post("http://vjapp.reproto.com/api/get-user-data", {
        //     headers: {'Authorization': AuthStr},
        //     "content-type": "application/json",
        // }).then(
        //
        //     (response) => {
        //
        //
        //         console.log(response.data,  'api/reset-password');
        //         // if (response.data.success === true) {
        //         //
        //         //
        //         //
        //         // }
        //
        //
        //     },
        //
        //     (err) => {
        //         console.log(err.response.data, 'err')
        //
        //
        //     },
        //
        // );

        // console.log(AuthStr);
     }
    componentDidMount() {
        const { navigation } = this.props;

        this.getUserData();
        this.focusListener = navigation.addListener("focus", () => {
            this.getUserData();
        });
    }
    componentWillUnmount() {
        // Remove the event listener
        if (this.focusListener) {
            this.focusListener();
            // console.log('Bum END')
        }

    }


    redirectToDashboard= () => {
        // this.props.navigation.navigate("Dashboard");
        let navigate = this.props.navigation;
        this.context.signOut( function () {
            navigate.navigate('Dashboard')
        });

    }
    redirectToStoreList= () => {
        this.props.navigation.navigate("StoreList");

    }

    redirectToEdit= () => {
        this.props.navigation.navigate("Edit");

    }


    changeBirthDayFormat = (birth_day) => {
        console.log(birth_day, 'birth_daybirth_daybirth_daybirth_daybirth_day');
        // let new_birth_day  = birth_day.split("-");
        // let new_birth_day2 = new_birth_day.join("/");
        return new_birth_day2;
    }








    render() {

        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.profile_buttons_title_wrapper}>
                       <TouchableOpacity style={styles.back_to_store_list_page_btn} onPress={() => {this.redirectToStoreList()}}>
                           <Text style={styles.back_to_store_list_page_btn_text}>
                               {i18n.t('back')}
                           </Text>
                       </TouchableOpacity>
                      <Text style={styles.profile_title}>{i18n.t('profile')}</Text>
                    <TouchableOpacity style={styles.go_to_edit_profile_info_page_btn} onPress={() => {this.redirectToEdit()}}>
                        <Text style={styles.go_to_edit_profile_info_page_btn_text}>
                            {i18n.t('edit')}
                        </Text>
                    </TouchableOpacity>
                </View>

               <View style={styles.profile_information_wrapper}>
                   <Text style={styles.profile_info1}>
                       { this.state.name} { this.state.surname }
                   </Text>
                   <Text style={styles.profile_gmail_info}>{this.state.email}</Text>
                   <Text style={styles.profile_phone_info}>{this.state.phone_code}{this.state.phone}</Text>
                   <Text style={styles.profile_country_info}>{this.state.country}</Text>
                   <Text style={styles.profile_language_info}>{this.state.language}</Text>
                   <Text style={styles.profile_gender_info}>{this.state.gender}</Text>
                   <Text style={styles.profile_date_of_birth_info}>
                       {this.state.birth_day}
                   </Text>

                   <TouchableOpacity style={styles.sign_out_btn} onPress={() => {this.redirectToDashboard()}}>
                       <Text style={styles.sign_out_btn_text}>
                           {i18n.t('sign_out')}
                       </Text>

                   </TouchableOpacity>
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
        paddingTop: 20,
        paddingBottom: 200,
        width: "100%",

    },
    profile_buttons_title_wrapper: {
       marginBottom: 62,
       paddingHorizontal: 20,
        // paddingBottom: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottomWidth: 1,
        // borderBottomColor: "#C0C0C0",
    },
    back_to_store_list_page_btn_text: {
        fontSize: 14,
        color: "#000000",
        fontWeight: "bold",

    },
    profile_title: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
    },
    go_to_edit_profile_info_page_btn_text: {
        fontSize: 14,
        color: "#000000",
        fontWeight: "bold",
    },
    profile_information_wrapper: {
         paddingHorizontal: 42,
    },
    profile_info1: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold",
        marginBottom: 34,
    },
    profile_gmail_info: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "normal",
        marginBottom: 10,
    },
    profile_phone_info: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "normal",
        marginBottom: 38,
    },
    profile_country_info: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "normal",
        marginBottom: 10,
    },
    profile_language_info: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "normal",
        marginBottom: 10,
    },
    profile_gender_info: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "normal",
        marginBottom: 10,
    },
    profile_date_of_birth_info: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "normal",
        marginBottom: 38,
    },
    sign_out_btn_text: {
        fontSize: 15,
        color: "#A9A9A9",
        fontWeight: "500",
        textDecorationLine: "underline",
    },
});