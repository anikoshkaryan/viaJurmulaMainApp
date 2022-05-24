import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { AuthContext } from '../AuthContext/context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import DropDownPicker from "react-native-custom-dropdown";
import i18n from "i18n-js";
import {en, ru, lv} from "../../i18n/supportedLanguages";
i18n.fallbacks = false;
i18n.translations = { en, ru, lv };
i18n.locale = 'en'

import {TextInput} from "react-native-paper";
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Dropdown } from 'react-native-element-dropdown';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';



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
            login: null,
            password: null,
            stepOne: true,
            stepSecond: false,
            stepThird: false,
            name_field: '',

            name_field_error:false ,
            name_field_valid: false,
            name_field_error_text: '',

            surname_field: '',

            surname_field_error:false ,
            surname_field_valid: false,
            surname_field_error_text: '',

            email_field: '',

            email_field_error:false ,
            email_field_valid: false,
            email_field_error_text: '',


            password_field: '',

            password_field_error:false ,
            password_field_valid: false,
            password_field_error_text: '',

            repeat_password_field: '',

            repeat_password_field_error:false ,
            repeat_password_field_valid: false,
            repeat_password_field_error_text: '',

            edit_birth: '',
            edit_birth_error: false,
            edit_birth_valid: false,
            edit_birth_error_text: '',

            // phone_code_field: '',

            // phone_code_field_error:false ,
            // phone_code_field_valid: false,
            // phone_code_field_error_text: '',

            phone_number_field: '',

            phone_number_field_error:false ,
            phone_number_field_valid: false,
            phone_number_field_error_text: '',



            selectedCountry: null,
            selectedLanguage: null,

            selectedGender: null,

            selectedPhoneCode: "371",
            error_phone_code: false,
            valid_phone_code: false,

            country_field_valid: false,
            country_field_error: false,
            country_field_error_text: "",


            language_field_valid: false,
            language_field_error: false,
            language_field_error_text: "",


            gender_field_valid: false,
            gender_field_error: false,
            gender_field_error_text: "",


           

        };



    }
    static contextType = AuthContext

    getUserData = async () => {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;


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
                // console.log(responseData, 'responseData')

                let full_phone = responseData.user.phone.toString();
                let phone_code = full_phone.slice(0,3);
                let phone_number = full_phone.replace(phone_code, "");

                this.setState({
                    name_field: responseData.user.name,
                    name_field_valid: true,
                    surname_field: responseData.user.surname,
                    surname_field_valid: true,
                    email_field: responseData.user.email,
                    email_field_valid: true,
                    phone_number_field: phone_number,
                    phone_number_field_valid: true,
                    selectedCountry: responseData.user.country,
                    country_field_valid: true,
                    country_field_error: false,
                    selectedLanguage: responseData.user.language,
                    language_field_valid: true,
                    language_field_error: false,
                    selectedGender: responseData.user.gender.toLowerCase(),
                    gender_field_valid: true,
                    gender_field_error: false,
                    selectedPhoneCode: phone_code,
                    valid_phone_code: true,
                    error_phone_code: false,
                    edit_birth: responseData.user.birth_day,
                    edit_birth_error: false,
                    edit_birth_valid: true,
                })
            }).done();

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

    chooseCountry = (item) => {
        this.setState({
            selectedCountry: item.value,
        })
        console.log(item.value);
    }



    chooseLanguage = (item) => {
        this.setState({
            selectedLanguage: item.value,
        })
        console.log(item.value);
    }
    redirectToDashboard= () => {
        this.props.navigation.navigate("Dashboard");
    }

    chooseGender = (item) => {
        this.setState({
            selectedGender: item.value,
        })
        console.log(item.value);
    }

    doneEditUserData = async () => {

        let  name_valid    = this.state.name_field_valid;
        let  name    = this.state.name_field;
        let  surname_valid = this.state.surname_field_valid;
        let  surname = this.state.surname_field;
        let  email_valid   = this.state.email_field_valid;
        let  email   = this.state.email_field;

        let  phone   = this.state.phone_number_field;
        let  phone_valid   = this.state.phone_number_field_valid;


        let phone_code = this.state.selectedPhoneCode;
        let phone_code_valid = this.state.valid_phone_code;

        let  country_valid  = this.state.country_field_valid;
        let  country   = this.state.selectedCountry;
        let  language_valid  = this.state.language_field_valid;
        let  language  = this.state.selectedLanguage;
        let  gender_valid  = this.state.gender_field_valid;
        let  gender  = this.state.selectedGender;
        let  edit_birth_valid  = this.state.edit_birth_valid;
        let  edit_birth  = this.state.edit_birth;

        let full_phone = phone_code + phone;




        if (name_valid === true && surname_valid === true && email_valid === true && phone_valid === true && phone_code_valid === true && country_valid === true && language_valid === true && gender_valid === true && edit_birth_valid === true) {

            let req = {
                name: name,
                surname: surname,
                email: email,
                phone: parseInt(full_phone),
                country: country,
                language: language,
                gender: gender,
                birth_day: edit_birth,
            }

            console.log(req, 'reqreqreqreq')


            //
            // let userToken = await AsyncStorage.getItem('userToken');
            // let AuthStr = 'Bearer ' + userToken;

            // const headers = {
            //     'Authorization': AuthStr,
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // }

            // axios.post("http://vjapp.reproto.com/api/edit-profile", req, headers).then(
            //
            //     (response) => {
            //
            //
            //         console.log(response.data,  'api/edit-profile');
            //         if (response.data.success === true) {
            //
            //             let user_id = response.data.data.reset_user_id;
            //             this.props.navigation.navigate("PasswordRecoveryNewPassword", {
            //
            //             });
            //
            //
            //         }
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

            let userToken = await AsyncStorage.getItem('userToken');
            let AuthStr = 'Bearer ' + userToken;

            // console.log(AuthStr)

            fetch(
                'http://vjapp.reproto.com/api/edit-profile',
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

                    if(responseData.success === true) {
                        this.props.navigation.navigate("Profile");
                    } else {

                        if (responseData.data.hasOwnProperty("name")) {
                            this.setState({
                                name_field_error: true,
                                name_field_valid: false,
                                name_field_error_text: i18n.t('error_text_required'),
                            })
                        }

                        if (responseData.data.hasOwnProperty("surname")) {
                            this.setState({
                                surname_field_error: true,
                                surname_field_valid: false,
                                surname_field_error_text: i18n.t('error_text_required'),
                            })
                        }

                        if (responseData.data.hasOwnProperty("email")) {
                            this.setState({
                                email_field_error: true,
                                email_field_valid: false,
                                email_field_error_text: i18n.t('error_text_required'),

                            })
                        }


                        if (responseData.data.hasOwnProperty("phone")) {
                            this.setState({

                                phone_number_field_error:true ,
                                phone_number_field_valid: false,
                                phone_number_field_error_text:  i18n.t('error_text_required'),
                                error_phone_code: true,
                                valid_phone_code: false,

                            })
                        }
                        if (responseData.data.hasOwnProperty("country")) {
                            this.setState({

                                country_field_error: true,
                                country_field_valid: false,
                                country_field_error_text: i18n.t('error_text_required'),


                            })
                        }

                        if (responseData.data.hasOwnProperty("language")) {
                            this.setState({

                                language_field_error: true,
                                language_field_valid: false,
                                language_field_error_text: i18n.t('error_text_required'),


                            })
                        }

                        if (responseData.data.hasOwnProperty("gender")) {
                            this.setState({

                                gender_field_error: true,
                                gender_field_valid: false,
                                gender_field_error_text: i18n.t('error_text_required'),

                            })
                        }

                        if (responseData.data.hasOwnProperty("birth_day")) {
                            this.setState({

                                edit_birth_error: true,
                                edit_birth_valid: false,
                                edit_birth_error_text: i18n.t('error_text_required'),

                            })
                        }






                    }
                    console.log(responseData, 'responseData2')
                }).done();



        } else {
            if (name_valid === false) {
                this.setState({
                    name_field_error: true,
                    name_field_valid: false,
                    name_field_error_text: i18n.t('error_text_required'),
                })
            }

            if (surname_valid === false) {
                this.setState({
                    surname_field_error: true,
                    surname_field_valid: false,
                    surname_field_error_text: i18n.t('error_text_required'),
                })
            }
            if (email_valid === false) {
                this.setState({
                    email_field_error: true,
                    email_field_valid: false,
                    email_field_error_text: i18n.t('error_text_required'),
                })
            }

            if (phone_valid === false) {
                this.setState({
                    phone_number_field_error:true ,
                    phone_number_field_valid: false,
                    phone_number_field_error_text:  i18n.t('error_text_required'),
                })
            }

            if (phone_code_valid === false) {
                this.setState({
                    error_phone_code: true,
                    valid_phone_code: false,
                })
            }
            if (country_valid === false) {
                this.setState({
                    country_field_error: true,
                    country_field_valid: false,
                    country_field_error_text: i18n.t('error_text_required'),
                })
            }

            if (language_valid === false) {
                this.setState({
                    language_field_error: true,
                    language_field_valid: false,
                    language_field_error_text: i18n.t('error_text_required'),
                })
            }

            if (gender_valid === false) {
                this.setState({
                    gender_field_error: true,
                    gender_field_valid: false,
                    gender_field_error_text: i18n.t('error_text_required'),

                })
            }

            if (edit_birth_valid === false) {
                this.setState({
                    edit_birth_error: true,
                    edit_birth_valid: false,
                    edit_birth_error_text: i18n.t('error_text_required'),

                })
            }

        }


    }


    choosePhoneCode = (item) => {
        this.setState({
            selectedPhoneCode: item.value,
            error_phone_code: false,
            valid_phone_code: true,
        })

    }






    clearNameInput = () => {
        this.setState({
            name_field: '',
            name_field_error:false,
        })
    }
    changeRegisterName = (name_field) => {
        this.setState({
            name_field: name_field,
        })


        if (name_field == "") {
            this.setState({
                name_field_error:false,
                name_field_valid: false,
            })
        } else {
            if (name_field.length > 2) {

                this.setState({
                    name_field_error:false,
                    name_field_valid: true,
                })


            }
        }

    }

    onBlurRegisterName = () => {

    }

    clearSurnameInput = () => {
        this.setState({
            surname_field: '',
            surname_field_error:false,
        })
    }
    changeRegisterSurname = (surname_field) => {
        this.setState({
            surname_field: surname_field,
        })


        if (surname_field == "") {
            this.setState({
                surname_field_error:false,
                surname_field_valid: false,
            })
        } else {
            if (surname_field.length > 6) {

                this.setState({
                    surname_field_error:false,
                    surname_field_valid: true,
                })


            }
        }

    }

    onBlurRegisterSurname = () => {

    }

    clearEmailInput = () => {
        this.setState({
            email_field: '',
            email_field_error:false,
        })
    }
    changeRegisterEmail = (email_field) => {

        this.setState({ email_field:email_field })

        if (email_field == '') {
            this.setState({
                email_field_error:false,
                email_field_valid:false
            })
            return false;

        }


        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let is_error_email = reg.test(this.state.email_field) ? false : true;
        if (is_error_email === false) {
            this.setState({
                email_field_error:false,
                email_field_valid: true
            })
        } else {
            this.setState({
                email_field_valid: false
            })
        }


    }

    onBlurRegisterEmail = () => {

    }





    clearPhoneCodeInput = () => {
        this.setState({
            phone_code_field: '',
            phone_code_field_error:false,
        })
    }



    clearPhoneNumberInput = () => {
        this.setState({
            phone_number_field: '',
            phone_number_field_error:false,
        })
    }
    changeRegisterPhoneNumber = (phone_number_field) => {
        this.setState({
            phone_number_field: phone_number_field,
        })


        if (phone_number_field == "") {
            this.setState({
                phone_number_field_error:false,
                phone_number_field_valid: false,
            })
        } else {
            if (phone_number_field.length == 8) {

                this.setState({
                    phone_number_field_error:false,
                    phone_number_field_valid: true,
                })


            } else if (phone_number_field.length > 8) {
                this.setState({
                    phone_number_field_error: true,
                    phone_number_field_valid: false,
                })
            }
        }

    }

    onBlurRegisterPhoneNumber = () => {

    }

    redirectToProfile= () => {
        this.props.navigation.navigate("Profile");

    }



    render() {

        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.edit_page_main_wrapper} >

                    <View style={styles.edit_page_btn_title_wrapper}>
                          <TouchableOpacity style={styles.cancel_btn} onPress={() => {this.redirectToProfile()}}>
                              <Text style={styles.cancel_btn_text}>
                                  {i18n.t('cancel')}
                              </Text>

                          </TouchableOpacity>
                        <Text style={styles.edit_page_title}>
                            {i18n.t('edit_profile')}
                        </Text>
                        <TouchableOpacity style={styles.done_btn} onPress={() => {this.doneEditUserData()}}>
                            <Text style={styles.done_btn_text}>
                                {i18n.t('done')}
                            </Text>

                        </TouchableOpacity>
                    </View>
                        <View style={styles.stepOne_inputs_wrapper}>
                            <View style={styles.inputWrapper}>

                                {this.state.name_field_error &&

                                <TouchableOpacity style={styles.emptyInput}
                                                  onPress={()=>this.clearNameInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <Path fillRule="evenodd" clipRule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z" fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.name_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <Path  fillRule="evenodd"  clipRule="evenodd"  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"  fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.name_field}
                                    onChangeText={(name_field) => this.changeRegisterName(name_field)}
                                    style={[

                                        styles.input,
                                        this.state.name_field_error && {
                                            borderWidth:1, borderColor:'#A4223C'
                                        },
                                        this.state.name_field_valid && {
                                            borderWidth:1, borderColor:'#337363'
                                        }
                                    ]}
                                    underlineColorAndroid ='transparent'
                                    label={
                                        <Text
                                            style={[
                                                {color: !this.state.name_field_error ? '#55545F' : '#A4223C'},
                                                {color: this.state.name_field_valid ? '#337363' : '#55545F'},
                                                {fontWeight: "normal", fontSize: 12}
                                            ]
                                            }>
                                            {i18n.t('name')}
                                        </Text>
                                    }
                                    error={false}
                                    onBlur={() => this.onBlurRegisterName()}
                                    theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                    underlineColor='transparent'
                                    selectionColor='transparent'
                                    activeOutlineColor='transparent'
                                    placeholderTextColor="#c9a477"

                                />


                                {this.state.name_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.name_field_error_text}
                                </Text>

                                }


                            </View>

                            <View style={styles.inputWrapper}>

                                {this.state.surname_field_error &&

                                <TouchableOpacity style={styles.emptyInput}
                                                  onPress={()=>this.clearSurnameInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <Path fillRule="evenodd" clipRule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z" fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.surname_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <Path  fillRule="evenodd"  clipRule="evenodd"  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"  fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.surname_field}
                                    onChangeText={(surname_field) => this.changeRegisterSurname(surname_field)}
                                    style={[

                                        styles.input,
                                        this.state.surname_field_error && {
                                            borderWidth:1, borderColor:'#A4223C'
                                        },
                                        this.state.surname_field_valid && {
                                            borderWidth:1, borderColor:'#337363'
                                        }
                                    ]}
                                    underlineColorAndroid ='transparent'
                                    label={
                                        <Text
                                            style={[
                                                {color: !this.state.surname_field_error ? '#55545F' : '#A4223C'},
                                                {color: this.state.surname_field_valid ? '#337363' : '#55545F'},
                                                {fontWeight: "normal", fontSize: 12}
                                            ]
                                            }>
                                            {i18n.t('surname')}
                                        </Text>
                                    }
                                    error={false}
                                    onBlur={() => this.onBlurRegisterSurname()}
                                    theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                    underlineColor='transparent'
                                    selectionColor='transparent'
                                    activeOutlineColor='transparent'
                                    placeholderTextColor="#c9a477"

                                />

                                {this.state.surname_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.surname_field_error_text}
                                </Text>

                                }


                            </View>


                            <View style={styles.inputWrapper}>

                                {this.state.email_field_error &&

                                <TouchableOpacity style={styles.emptyInput}
                                                  onPress={()=>this.clearEmailInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <Path fillRule="evenodd" clipRule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z" fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.email_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <Path  fillRule="evenodd"  clipRule="evenodd"  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"  fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.email_field}
                                    onChangeText={(email_field) => this.changeRegisterEmail(email_field)}
                                    style={[

                                        styles.input,
                                        this.state.email_field_error && {
                                            borderWidth:1, borderColor:'#A4223C'
                                        },
                                        this.state.email_field_valid && {
                                            borderWidth:1, borderColor:'#337363'
                                        }
                                    ]}
                                    underlineColorAndroid ='transparent'
                                    label={
                                        <Text
                                            style={[
                                                {color: !this.state.email_field_error ? '#55545F' : '#A4223C'},
                                                {color: this.state.email_field_valid ? '#337363' : '#55545F'},
                                                {fontWeight: "normal", fontSize: 12}
                                            ]
                                            }>
                                            {i18n.t('email')}
                                        </Text>
                                    }
                                    error={false}
                                    onBlur={() => this.onBlurRegisterEmail()}
                                    theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                    underlineColor='transparent'
                                    selectionColor='transparent'
                                    activeOutlineColor='transparent'
                                    placeholderTextColor="#c9a477"

                                />

                                {this.state.email_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.email_field_error_text}
                                </Text>

                                }


                            </View>

                            <View style={styles.phones_inputs_wrapper}>
                                {/*<View style={styles.phone_code_dropdown_wrapper}>*/}
                                {/*    <Dropdown*/}
                                {/*        style={[*/}
                                {/*            styles.phone_code_dropdown,*/}
                                {/*            {width: 95, marginRight: 10},*/}


                                {/*            {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },*/}


                                {/*        ]}*/}
                                {/*        data={*/}
                                {/*            [*/}
                                {/*                {label: '+371', value: '371'},*/}

                                {/*            ]*/}

                                {/*        }*/}
                                {/*        placeholderStyle={styles.placeholderStyle}*/}
                                {/*        defaultValue={"371"}*/}
                                {/*        selectedTextStyle={styles.selectedTextStyle}*/}
                                {/*        inputSearchStyle={styles.inputSearchStyle}*/}
                                {/*        iconStyle={styles.iconStyle}*/}
                                {/*        placeholder={i18n.t('code')}*/}
                                {/*        maxHeight={150}*/}
                                {/*        labelField="label"*/}
                                {/*        valueField="value"*/}
                                {/*        value={this.state.selectedPhoneCode}*/}

                                {/*        onChange={item => {*/}
                                {/*            this.choosePhoneCode(item);*/}
                                {/*        }}*/}
                                {/*    />*/}


                                {/*</View>*/}


                                <DropDownPicker
                                    items={
                                        [
                                            {label: '+371', value: '371'},


                                        ]

                                    }
                                    placeholder={"+371"}
                                    containerStyle={{height: 52, width: 95,  marginRight: 10, zIndex: 15}}
                                    style={[styles.phone_code_dropdown,

                                        {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },

                                    ]}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                        width: '100%',
                                        zIndex: 15
                                    }}
                                    dropDownStyle={{backgroundColor: '#fafafa',  width: '100%',  zIndex: 15}}
                                    defaultValue={this.state.selectedPhoneCode}
                                    // onChangeItem={this.onChangeDropDownItem}
                                    onChangeItem={item => {
                                        this.choosePhoneCode(item);
                                    }}
                                />

                                <View style={[styles.inputWrapper, {flex: 1}]}>

                                    {this.state.phone_number_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={()=>this.clearPhoneNumberInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <Path fillRule="evenodd" clipRule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z" fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.phone_number_field_valid &&

                                    <TouchableOpacity style={styles.emptyInput}>
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <Path  fillRule="evenodd"  clipRule="evenodd"  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"  fill="#337363"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }


                                    <TextInput
                                        value={this.state.phone_number_field}
                                        onChangeText={(phone_code_field) => this.changeRegisterPhoneNumber(phone_code_field)}
                                        style={[

                                            styles.input,
                                            this.state.phone_number_field_error && {
                                                borderWidth:1, borderColor:'#A4223C'
                                            },
                                            this.state.phone_number_field_valid && {
                                                borderWidth:1, borderColor:'#337363'
                                            }
                                        ]}
                                        underlineColorAndroid ='transparent'
                                        label={
                                            <Text
                                                style={[
                                                    {color: !this.state.phone_number_field_error ? '#55545F' : '#A4223C'},
                                                    {color: this.state.phone_number_field_valid ? '#337363' : '#55545F'},
                                                    {fontWeight: "normal", fontSize: 12}
                                                ]
                                                }>
                                                {i18n.t('phone')}
                                            </Text>
                                        }
                                        error={false}
                                        onBlur={() => this.onBlurRegisterPhoneNumber()}
                                        theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                        underlineColor='transparent'
                                        selectionColor='transparent'
                                        activeOutlineColor='transparent'
                                        placeholderTextColor="#c9a477"

                                    />

                                    {this.state.phone_number_field_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.phone_number_field_error_text}
                                    </Text>

                                    }


                                </View>
                            </View>
                        </View>

                        <View style={styles.stepSecond_inputs_wrapper}>

                            <View style={styles.country_dropdown_wrapper}>
                                <Dropdown
                                    style={[
                                        styles.country_dropdown,
                                        {borderWidth:1,borderColor: this.state.country_field_error ? '#A4223C' : this.state.country_field_valid ? '#337363' :  '#d9d9d9'  }

                                    ]}
                                    data={
                                        [
                                            {label: 'Armenia', value: 'armenia'},
                                            { label: 'Australia', value: 'australia' },
                                            { label: 'Austria', value: 'austria' },
                                            { label: 'Belgium', value: 'belgium' },
                                            { label: 'Brazil', value: 'brazil' },
                                            { label: 'Russia', value: 'russia' },
                                            { label: 'Georgia', value: 'georgia' },
                                            { label: 'Germany', value: 'germany' },
                                            { label: 'Greece', value: 'greece' },
                                            { label: 'Indonesia', value: 'indonesia' },
                                            { label: 'Iran', value: 'iran' },
                                            { label: 'Israel', value: 'Israel' },
                                            { label: 'Italy', value: 'italy' },
                                            { label: 'Japan', value: 'japan' },
                                            { label: 'Kuwait', value: 'kuwait' },
                                            { label: 'Lebanon', value: 'lebanon' },
                                            { label: 'Maldives', value: 'maldives' },
                                            { label: 'Monaco', value: 'monaco' },
                                            { label: 'New Zealand', value: 'new zealand' },
                                            { label: 'Netherlands', value: 'netherlands' },
                                            { label: 'Philippines', value: 'philippines' },
                                            { label: 'Portugal', value: 'portugal' },
                                            { label: 'Poland', value: 'poland' },
                                            { label: 'Singapore', value: 'singapore' },
                                            { label: 'South Africa', value: 'south africa' },
                                            { label: 'Spain', value: 'spain' },
                                            { label: 'Sri Lanka', value: 'sri lanka' },
                                            { label: 'Switzerland', value: 'switzerland' },
                                            { label: 'Thailand', value: 'thailand' },
                                            { label: 'Ukraine', value: 'Ukraine' },
                                            { label: 'United Arab Emirates', value: 'united arab emirates' },
                                            { label: 'United Kingdom', value: 'united kingdom' },
                                            { label: 'United States of America', value: 'united states of america' },
                                        ]

                                    }
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('country')}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    value={this.state.selectedCountry}

                                    onChange={item => {
                                        this.chooseCountry(item);
                                    }}
                                />

                                {this.state.country_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.country_field_error_text}
                                </Text>

                                }


                            </View>



                            <View style={styles.language_dropdown_wrapper}>
                                <Dropdown
                                    style={[
                                        styles.language_dropdown,

                                        {borderWidth:1,borderColor: this.state.language_field_error ? '#A4223C' : this.state.language_field_valid ? '#337363' :  '#d9d9d9'  }




                                    ]}
                                    data={
                                        [
                                            { label: 'Armenian', value: 'armenian' },
                                            { label: 'Arabic', value: 'arabic' },
                                            {label: 'English', value: 'english'},
                                            { label: 'Russian', value: 'russian' },
                                            { label: 'French', value: 'french' },
                                            { label: 'German', value: 'german' },
                                            { label: 'Italian', value: 'italian' },
                                            { label: 'Japanese', value: 'japanese' },
                                            { label: 'Ukrainian', value: 'ukrainian' },
                                            { label: 'Hindi', value: 'hindi' },
                                            { label: 'Portuguese', value: 'Portuguese' },
                                            { label: 'Polish', value: 'polish' },
                                            { label: 'Thai', value: 'thai' },
                                            { label: 'Korean', value: 'korean' },
                                            { label: 'Spanish', value: 'spanish' },
                                            { label: 'Greek', value: 'greek' },
                                            { label: 'Swedish', value: 'swedish' },
                                            { label: 'Romanian', value: 'romanian' },
                                        ]

                                    }
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('language')}
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    value={this.state.selectedLanguage}

                                    onChange={item => {
                                        this.chooseLanguage(item);
                                    }}
                                />

                                {this.state.language_field_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.language_field_error_text}
                                    </Text>

                                }


                            </View>


                            <View style={styles.gender_dropdown_wrapper}>
                                <Dropdown
                                    style={[

                                        styles.gender_dropdown,
                                        {borderWidth:1,borderColor: this.state.gender_field_error ? '#A4223C' : this.state.gender_field_valid ? '#337363' :  '#d9d9d9'  }


                                    ]}
                                    data={
                                        [
                                            { label: 'Female', value: 'female' },
                                            { label: 'Male', value: 'male' },

                                        ]

                                    }
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('gender')}
                                    maxHeight={150}
                                    labelField="label"
                                    valueField="value"
                                    value={this.state.selectedGender}

                                    onChange={item => {
                                        this.chooseGender(item);
                                    }}
                                />

                                {this.state.gender_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.gender_field_error_text}
                                </Text>

                                }


                            </View>





                            <View style={styles.inputWrapper}>


                                <View style={[styles.emptyInput, {top:5, zIndex:98}]}>
                                    <DatePicker
                                        style={{width:30, height:30}}
                                        mode="date" //The enum of date, datetime and time
                                        // placeholder="select date"
                                        format="DD-MM-YYYY"
                                        minDate="01-01-1940"
                                        maxDate="30-12-20r22"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                // display: 'none',
                                                position: 'absolute',
                                                // right: 0,
                                                // top: 4,
                                                // marginLeft: 0,
                                                zIndex:56,

                                            },
                                            dateInput: {
                                                // flex:1,
                                                // backgroundColor:'white',
                                                display:'none',
                                                // textAlign:'left'
                                                position: 'absolute',

                                                width:0,
                                                height:0
                                            },
                                            datePicker: {
                                                backgroundColor: "#af2a38",

                                            },

                                        }}
                                        onDateChange={(date) => {
                                            this.setState({
                                                edit_birth: date
                                            })
                                            console.log(date)
                                        }}
                                        iconComponent={// 设置之后 iconSource 失效 且 icon 不能改变位置
                                            <Svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <Path
                                                    d="M2 7.5V19a4 4 0 004 4h12a4 4 0 004-4V7.5m-20 0v0A3.5 3.5 0 015.5 4h1M2 7.5h20m0 0v0A3.5 3.5 0 0018.5 4h-1m-11 0V.5m0 3.5h11m0 0V.5"
                                                    stroke="#9F9EAE"
                                                    strokeLinecap="round"
                                                />
                                            </Svg>
                                        }
                                    />
                                </View>
                                <TextInput
                                    value={this.state.edit_birth}
                                    editable={false}
                                    style={[

                                        styles.input,
                                        this.state.edit_birth_error && {
                                            borderWidth:1, borderColor:'#A4223C'
                                        },
                                        this.state.edit_birth_valid && {
                                            borderWidth:1, borderColor:'#337363'
                                        }
                                    ]}
                                    underlineColorAndroid ='transparent'
                                    label={
                                        <Text
                                            style={[
                                                {color: this.state.edit_birth_error ? '#A4223C' : this.state.edit_birth_valid ? '#337363' : '#55545F' },
                                                {color: "#000000", fontWeight: 'normal', fontSize: 12,}

                                            ]
                                            }>
                                            {i18n.t('date_of_birth')}
                                        </Text>
                                    }
                                    error={false}
                                    // onBlur={() => this.onBlurCountry()}
                                    theme={{colors: {text: '#000000', primary: 'transparent'}}}
                                    underlineColor='transparent'
                                    selectionColor='transparent'
                                    activeOutlineColor='transparent'

                                />

                                {this.state.edit_birth_error &&

                                <Text style={styles.error_text}>
                                    {this.state.edit_birth_error_text}
                                </Text>

                                }




                                {/*<Text style={styles.inp_buttom_label}>*/}
                                {/*    Выберите дату вашего рождения*/}
                                {/*</Text>*/}



                            </View>
                        </View>


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
        paddingBottom: 165,
        width: "100%",



    },

    edit_page_btn_title_wrapper: {
        width: "100%",
        marginBottom: 53,
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    cancel_btn_text: {
       fontSize: 14,
        color: "#000000",
        fontWeight: "bold",
    },
    done_btn_text: {
        fontSize: 14,
        color: "#000000",
        fontWeight: "bold",
    },
    edit_page_title: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "bold",
    },
    input: {
        width:'100%',
        height: 50,
        backgroundColor: '#f4f4f4',
        fontFamily: "Roboto_700Bold",
        fontSize:15,
        color:'#000000',
        borderRadius:4,
        paddingHorizontal:14,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontWeight: "bold",

    },
    stepOne_inputs_wrapper: {
         marginBottom: 40,
    },
    emptyInput:{
        position: 'absolute',
        zIndex: 5,
        alignSelf: 'center',
        top: 12,
        right: 12,
    },
    inputWrapper: {
        width:'100%',
        marginBottom: 20,
    },



    phones_inputs_wrapper: {
        flexDirection: "row",
    },
    country_dropdown_menu: {
        width:'100%',
        height: 50,
        marginBottom: 20,
        backgroundColor: '#f4f4f4',
        borderRadius:4,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontSize:15,
        color:'#000000',
        fontWeight: "500",
    },
    placeholderStyle: {
        fontSize: 12,
        color: "#55545F",
        fontWeight: "normal",
    },

    selectedTextStyle: {
        fontSize: 15,
        color:'#55545F',
        fontWeight: "bold",
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 15,
    },
    country_dropdown: {
        width: "100%",
        height: 50,
        borderRadius:4,
        paddingHorizontal:14,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontFamily: "Roboto_700Bold",
        // fontSize:15,
        // color:'#000000',
        // fontWeight: "bold",
        backgroundColor: '#f4f4f4',

    },
    country_dropdown_wrapper: {
        width: "100%",
        marginBottom:20,
    },
    language_dropdown: {
        width: "100%",
        height: 50,
        borderRadius:4,
        paddingHorizontal:14,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontFamily: "Roboto_700Bold",
        // fontSize:15,
        // color:'#000000',
        // fontWeight: "bold",
        backgroundColor: '#f4f4f4',

    },
    language_dropdown_wrapper: {
        width: "100%",
        marginBottom:20,
    },
    gender_dropdown: {
        width: "100%",
        height: 50,
        borderRadius:4,
        paddingHorizontal:14,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontFamily: "Roboto_700Bold",
        // fontSize:15,
        // color:'#000000',
        // fontWeight: "bold",
        backgroundColor: '#f4f4f4',

    },
    gender_dropdown_wrapper: {
        width: "100%",
        marginBottom:20,
    },
    edit_page_main_wrapper: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    phone_code_dropdown: {
        height: 52,
        borderRadius:4,
        paddingHorizontal:14,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontFamily: "Roboto_700Bold",
        // fontSize:15,
        // color:'#000000',
        // fontWeight: "bold",
        backgroundColor: '#f4f4f4',
    },
    error_text: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 4,
    },
});