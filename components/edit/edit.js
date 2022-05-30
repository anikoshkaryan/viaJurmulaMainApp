import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { AuthContext } from '../AuthContext/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    ImageBackground, Platform,
    ScrollView,
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
            stepOne: false,
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

            selectedPhoneCode: "",
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

            phoneCodesArray: [
                {
                    "label": "+1",
                    "value": "+1",
                },
                {
                    "label": "+7",
                    "value": "+7",
                },
                {
                    "label": "+20",
                    "value": "+20",
                },
                {
                    "label": "+27",
                    "value": "+27",
                },
                {
                    "label": "+30",
                    "value": "+30",
                },

                {
                    "label": "+31",
                    "value": "+31",
                },
                {
                    "label": "+32",
                    "value": "+32",
                },
                {
                    "label": "+33",
                    "value": "+33",
                },
                {
                    "label": "+34",
                    "value": "+34",
                },
                {
                    "label": "+36",
                    "value": "+36",
                },

                {
                    "label": "+39",
                    "value": "+39",
                },


                {
                    "label": "+40",
                    "value": "+40",
                },


                {
                    "label": "+41",
                    "value": "+41",
                },
                {
                    "label": "+43",
                    "value": "+43",
                },

                {
                    "label": "+44",
                    "value": "+44",
                },

                {
                    "label": "+45",
                    "value": "+45",
                },
                {
                    "label": "+46",
                    "value": "+46",
                },



                {
                    "label": "+47",
                    "value": "+47",
                },



                {
                    "label": "+48",
                    "value": "+48",
                },

                {
                    "label": "+49",
                    "value": "+49",
                },
                {
                    "label": "+51",
                    "value": "+51",
                },
                {
                    "label": "+52",
                    "value": "+52",
                },
                {
                    "label": "+53",
                    "value": "+53",
                },


                {
                    "label": "+54",
                    "value": "+54",
                },
                {
                    "label": "+55",
                    "value": "+55",
                },
                {
                    "label": "+56",
                    "value": "+56",
                },
                {
                    "label": "+57",
                    "value": "+57",
                },
                {
                    "label": "+58",
                    "value": "+58",
                },

                {
                    "label": "+60",
                    "value": "+60",
                },
                {
                    "label": "+61",
                    "value": "+61",
                },
                {
                    "label": "+62",
                    "value": "+62",
                },
                {
                    "label": "+63",
                    "value": "+63",
                },
                {
                    "label": "+64",
                    "value": "+64",
                },

                {
                    "label": "+65",
                    "value": "+65",
                },


                {
                    "label": "+66",
                    "value": "+66",
                },
                {
                    "label": "+77",
                    "value": "+77",
                },

                {
                    "label": "+81",
                    "value": "+81",
                },

                {
                    "label": "+82",
                    "value": "+82",
                },
                {
                    "label": "+84",
                    "value": "+84",
                },

                {
                    "label": "+86",
                    "value": "+86",
                },
                {
                    "label": "+90",
                    "value": "+90",
                },
                {
                    "label": "+91",
                    "value": "+91",
                },
                {
                    "label": "+92",
                    "value": "+92",
                },



                {
                    "label": "+93",
                    "value": "+93",
                },
                {
                    "label": "+94",
                    "value": "+94",
                },

                {
                    "label": "+95",
                    "value": "+95",
                },

                {
                    "label": "+98",
                    "value": "+98",
                },


                {
                    "label": "+211",
                    "value": "+211",
                },


                {
                    "label": "+212",
                    "value": "+212",
                },


                {
                    "label": "+213",
                    "value": "+213",
                },
                {
                    "label": "+216",
                    "value": "+216",
                },

                {
                    "label": "+218",
                    "value": "+218",
                },

                {
                    "label": "+220",
                    "value": "+220",
                },
                {
                    "label": "+221",
                    "value": "+221",
                },

                {
                    "label": "+222",
                    "value": "+222",
                },
                {
                    "label": "+223",
                    "value": "+223",
                },
                {
                    "label": "+224",
                    "value": "+224",
                },
                {
                    "label": "+225",
                    "value": "+225",
                },

                {
                    "label": "+226",
                    "value": "+226",
                },
                {
                    "label": "+227",
                    "value": "+227",
                },

                {
                    "label": "+228",
                    "value": "+228",
                },

                {
                    "label": "+229",
                    "value": "+229",
                },

                {
                    "label": "+230",
                    "value": "+230",
                },

                {
                    "label": "+231",
                    "value": "+231",
                },
                {
                    "label": "+232",
                    "value": "+232",
                },

                {
                    "label": "+233",
                    "value": "+233",
                },
                {
                    "label": "+234",
                    "value": "+234",
                },


                {
                    "label": "+235",
                    "value": "+235",
                },
                {
                    "label": "+236",
                    "value": "+236",
                },
                {
                    "label": "+237",
                    "value": "+237",
                },

                {
                    "label": "+238",
                    "value": "+238",
                },

                {
                    "label": "+239",
                    "value": "+239",
                },
                {
                    "label": "+240",
                    "value": "+240",
                },
                {
                    "label": "+241",
                    "value": "+241",
                },
                {
                    "label": "+242",
                    "value": "+242",
                },
                {
                    "label": "+243",
                    "value": "+243",
                },
                {
                    "label": "+244",
                    "value": "+244",
                },

                {
                    "label": "+245",
                    "value": "+245",
                },

                {
                    "label": "+246",
                    "value": "+246",
                },
                {
                    "label": "+248",
                    "value": "+248",
                },
                {
                    "label": "+249",
                    "value": "+249",
                },

                {
                    "label": "+250",
                    "value": "+250",
                },

                {
                    "label": "+251",
                    "value": "+251",
                },
                {
                    "label": "+252",
                    "value": "+252",
                },

                {
                    "label": "+253",
                    "value": "+253",
                },

                {
                    "label": "+254",
                    "value": "+254",
                },


                {
                    "label": "+255",
                    "value": "+255",
                },

                {
                    "label": "+256",
                    "value": "+256",
                },


                {
                    "label": "+257",
                    "value": "+257",
                },
                {
                    "label": "+258",
                    "value": "+258",
                },
                {
                    "label": "+260",
                    "value": "+260",
                },
                {
                    "label": "+261",
                    "value": "+261",
                },

                {
                    "label": "+262",
                    "value": "+262",
                },

                {
                    "label": "+263",
                    "value": "+263",
                },
                {
                    "label": "+264",
                    "value": "+264",
                },
                {
                    "label": "+265",
                    "value": "+265",
                },

                {
                    "label": "+266",
                    "value": "+266",
                },


                {
                    "label": "+267",
                    "value": "+267",
                },
                {
                    "label": "+268",
                    "value": "+268",
                },





                {
                    "label": "+269",
                    "value": "+269",
                },
                {
                    "label": "+290",
                    "value": "+290",
                },


                {
                    "label": "+291",
                    "value": "+291",
                },


                {
                    "label": "+297",
                    "value": "+297",
                },
                {
                    "label": "+298",
                    "value": "+298",
                },
                {
                    "label": "+299",
                    "value": "+299",
                },


                {
                    "label": "+ 345",
                    "value": "+ 345",
                },

                {
                    "label": "+350",
                    "value": "+350",
                },



                {
                    "label": "+351",
                    "value": "+351",
                },

                {
                    "label": "+352",
                    "value": "+352",
                },

                {
                    "label": "+353",
                    "value": "+353",
                },
                {
                    "label": "+354",
                    "value": "+354",
                },


                {
                    "label": "+355",
                    "value": "+355",
                },

                {
                    "label": "+356",
                    "value": "+356",
                },

                {
                    "label": "+357",
                    "value": "+357",
                },
                {
                    "label": "+358",
                    "value": "+358",
                },
                {
                    "label": "+359",
                    "value": "+359",
                },

                {
                    "label": "+370",
                    "value": "+370",
                },

                {
                    "label": "+371",
                    "value": "+371",
                },


                {
                    "label": "+372",
                    "value": "+372",
                },

                {
                    "label": "+373",
                    "value": "+373",
                },

                {
                    "label": "+374",
                    "value": "+374",
                },
                {
                    "label": "+375",
                    "value": "+375",
                },
                {
                    "label": "+376",
                    "value": "+376",
                },
                {
                    "label": "+377",
                    "value": "+377",
                },

                {
                    "label": "+378",
                    "value": "+378",
                },

                {
                    "label": "+379",
                    "value": "+379",
                },
                {
                    "label": "+380",
                    "value": "+380",
                },

                {
                    "label": "+381",
                    "value": "+381",
                },

                {
                    "label": "+382",
                    "value": "+382",
                },

                {
                    "label": "+385",
                    "value": "+385",
                },
                {
                    "label": "+386",
                    "value": "+386",
                },

                {
                    "label": "+387",
                    "value": "+387",
                },
                {
                    "label": "+389",
                    "value": "+389",
                },

                {
                    "label": "+420",
                    "value": "+420",
                },
                {
                    "label": "+421",
                    "value": "+421",
                },
                {
                    "label": "+423",
                    "value": "+423",
                },


                {
                    "label": "+500",
                    "value": "+500",
                },
                {
                    "label": "+501",
                    "value": "+501",
                },
                {
                    "label": "+502",
                    "value": "+502",
                },
                {
                    "label": "+503",
                    "value": "+503",
                },

                {
                    "label": "+504",
                    "value": "+504",
                },


                {
                    "label": "+505",
                    "value": "+505",
                },


                {
                    "label": "+506",
                    "value": "+506",
                },

                {
                    "label": "+507",
                    "value": "+507",
                },

                {
                    "label": "+508",
                    "value": "+508",
                },

                {
                    "label": "+509",
                    "value": "+509",
                },

                {
                    "label": "+590",
                    "value": "+590",
                },



                {
                    "label": "+591",
                    "value": "+591",
                },
                {
                    "label": "+593",
                    "value": "+593",
                },
                {
                    "label": "+594",
                    "value": "+594",
                },
                {
                    "label": "+595",
                    "value": "+595",
                },


                {
                    "label": "+596",
                    "value": "+596",
                },


                {
                    "label": "+597",
                    "value": "+597",
                },

                {
                    "label": "+598",
                    "value": "+598",
                },
                {
                    "label": "+599",
                    "value": "+599",
                },
                {
                    "label": "+670",
                    "value": "+670",
                },
                {
                    "label": "+672",
                    "value": "+672",
                },
                {
                    "label": "+673",
                    "value": "+673",
                },
                {
                    "label": "+674",
                    "value": "+674",
                },


                {
                    "label": "+675",
                    "value": "+675",
                },




                {
                    "label": "+676",
                    "value": "+676",
                },

                {
                    "label": "+677",
                    "value": "+677",
                },


                {
                    "label": "+678",
                    "value": "+678",
                },

                {
                    "label": "+679",
                    "value": "+679",
                },

                {
                    "label": "+680",
                    "value": "+680",
                },



                {
                    "label": "+681",
                    "value": "+681",
                },
                {
                    "label": "+682",
                    "value": "+682",
                },
                {
                    "label": "+683",
                    "value": "+683",
                },



                {
                    "label": "+685",
                    "value": "+685",
                },

                {
                    "label": "+686",
                    "value": "+686",
                },
                {
                    "label": "+687",
                    "value": "+687",
                },


                {
                    "label": "+688",
                    "value": "+688",
                },
                {
                    "label": "+689",
                    "value": "+689",
                },

                {
                    "label": "+690",
                    "value": "+690",
                },

                {
                    "label": "+691",
                    "value": "+691",
                },
                {
                    "label": "+692",
                    "value": "+692",
                },
                {
                    "label": "+850",
                    "value": "+850",
                },
                {
                    "label": "+852",
                    "value": "+852",
                },
                {
                    "label": "+853",
                    "value": "+853",
                },
                {
                    "label": "+855",
                    "value": "+855",
                },

                {
                    "label": "+856",
                    "value": "+856",
                },

                {
                    "label": "+872",
                    "value": "+872",
                },



                {
                    "label": "+880",
                    "value": "+880",
                },
                {
                    "label": "+886",
                    "value": "+886",
                },



                {
                    "label": "+960",
                    "value": "+960",
                },
                {
                    "label": "+961",
                    "value": "+961",
                },
                {
                    "label": "+962",
                    "value": "+962",
                },

                {
                    "label": "+963",
                    "value": "+963",
                },
                {
                    "label": "+964",
                    "value": "+964",
                },

                {
                    "label": "+965",
                    "value": "+965",
                },

                {
                    "label": "+966",
                    "value": "+966",
                },


                {
                    "label": "+967",
                    "value": "+967",
                },
                {
                    "label": "+968",
                    "value": "+968",
                },
                {
                    "label": "+970",
                    "value": "+970",
                },


                {
                    "label": "+971",
                    "value": "+971",
                },
                {
                    "label": "+972",
                    "value": "+972",
                },
                {
                    "label": "+973",
                    "value": "+973",
                },
                {
                    "label": "+974",
                    "value": "+974",
                },



                {
                    "label": "+975",
                    "value": "+975",
                },
                {
                    "label": "+976",
                    "value": "+976",
                },

                {
                    "label": "+977",
                    "value": "+977",
                },
                {
                    "label": "+992",
                    "value": "+992",
                },
                {
                    "label": "+993",
                    "value": "+993",
                },

                {
                    "label": "+994",
                    "value": "+994",
                },
                {
                    "label": "+995",
                    "value": "+995",
                },
                {
                    "label": "+996",
                    "value": "+996",
                },

                {
                    "label": "+998",
                    "value": "+998",
                },

                {
                    "label": "+1242",
                    "value": "+1242",
                },
                {
                    "label": "+1246",
                    "value": "+1246",
                },



                {
                    "label": "+1264",
                    "value": "+1264",
                },

                {
                    "label": "+1268",
                    "value": "+1268",
                },


                {
                    "label": "+1284",
                    "value": "+1284",
                },
                {
                    "label": "+1340",
                    "value": "+1340",
                },
                {
                    "label": "+1441",
                    "value": "+1441",
                },
                {
                    "label": "+1473",
                    "value": "+1473",
                },
                {
                    "label": "+1649",
                    "value": "+1649",
                },
                {
                    "label": "+1664",
                    "value": "+1664",
                },


                {
                    "label": "+1670",
                    "value": "+1670",
                },
                {
                    "label": "+1671",
                    "value": "+1671",
                },

                {
                    "label": "+1684",
                    "value": "+1684",
                },
                {
                    "label": "+1758",
                    "value": "+1758",
                },
                {
                    "label": "+1767",
                    "value": "+1767",
                },



                {
                    "label": "+1784",
                    "value": "+1784",
                },

                {
                    "label": "+1849",
                    "value": "+1849",
                },



                {
                    "label": "+1868",
                    "value": "+1868",
                },


                {
                    "label": "+1869",
                    "value": "+1869",
                },
                {
                    "label": "+1876",
                    "value": "+1876",
                },

                {
                    "label": "+1939",
                    "value": "+1939",
                },






            ],

           

        };



    }
    static contextType = AuthContext

    getUserData = async () => {
        let userData = await AsyncStorage.getItem('userData');
        let userData2 = JSON.parse(userData)

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


                i18n.locale = userData2.language

                // let full_phone = responseData.user.phone.toString();
                // let phone_code = full_phone.slice(0,4);
                // let phone_number = full_phone.replace(phone_code, "");

                let phone_number = responseData.user.phone
                let phone_code = responseData.user.phone_code
                console.log( phone_code, phone_number);


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

    redirectToStorAsync = async (_this, callback) => {
        callback(_this)

    }
    doneEditUserData = async () => {


        let userData = await AsyncStorage.getItem('userData');
        let userData2 = JSON.parse(userData)


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


        if (name_valid === true && surname_valid === true && email_valid === true && phone_valid === true && phone_code_valid === true && country_valid === true && language_valid === true && gender_valid === true && edit_birth_valid === true) {

            let req = {
                name: name,
                surname: surname,
                email: email,
                phone: phone,
                phone_code: phone_code,
                country: country,
                language: language,
                gender: gender,
                birth_day: edit_birth,
            }

            console.log(req, 'reqreqreqreq')


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

                        userData2.language = language
                        console.log(userData2, 'userData2userData2userData2')
                         AsyncStorage.setItem('userData', JSON.stringify(userData2), () => {
                            this.props.navigation.navigate("Profile");
                         });

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
                <View style={styles.edit_page_btn_title_wrapper}>
                    <TouchableOpacity style={styles.cancel_btn} onPress={() => {
                        this.redirectToProfile()
                    }}>
                        <Text style={styles.cancel_btn_text}>
                            {i18n.t('cancel')}
                        </Text>

                    </TouchableOpacity>
                    <Text style={styles.edit_page_title}>
                        {i18n.t('edit_profile')}
                    </Text>
                    <TouchableOpacity style={styles.done_btn} onPress={() => {
                        this.doneEditUserData()
                    }}>
                        <Text style={styles.done_btn_text}>
                            {i18n.t('done')}
                        </Text>

                    </TouchableOpacity>
                </View>
                {Platform.OS === 'ios'
                    ?

                    <ScrollView style={styles.edit_page_main_wrapper}>

                        <View style={styles.stepOne_inputs_wrapper}>
                            <View style={styles.inputWrapper}>

                                {this.state.name_field_error &&

                                <TouchableOpacity style={styles.emptyInput}
                                                  onPress={() => this.clearNameInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                              fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.name_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                              fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.name_field}
                                    onChangeText={(name_field) => this.changeRegisterName(name_field)}
                                    style={[

                                        styles.input,
                                        this.state.name_field_error && {
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.name_field_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
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
                                    selectionColor='#d9d9d9'
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
                                                  onPress={() => this.clearSurnameInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                              fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.surname_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                              fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.surname_field}
                                    onChangeText={(surname_field) => this.changeRegisterSurname(surname_field)}
                                    style={[

                                        styles.input,
                                        this.state.surname_field_error && {
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.surname_field_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
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
                                    selectionColor='#d9d9d9'
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
                                                  onPress={() => this.clearEmailInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                              fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.email_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                              fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.email_field}
                                    onChangeText={(email_field) => this.changeRegisterEmail(email_field)}
                                    style={[

                                        styles.input,
                                        this.state.email_field_error && {
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.email_field_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
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
                                    selectionColor='#d9d9d9'
                                    activeOutlineColor='transparent'
                                    placeholderTextColor="#c9a477"

                                />

                                {this.state.email_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.email_field_error_text}
                                </Text>

                                }


                            </View>

                            <View style={[styles.phones_inputs_wrapper, {elevation: 10, zIndex: 2000}]}>


                                {/*<DropDownPicker*/}
                                {/*    items={ this.state.phoneCodesArray }*/}
                                {/*    placeholder={i18n.t('code')}*/}
                                {/*    containerStyle={{height: 52, width: 95,  marginRight: 10, }}*/}
                                {/*    style={[styles.phone_code_dropdown,*/}

                                {/*        {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },*/}

                                {/*    ]}*/}
                                {/*    itemStyle={{*/}
                                {/*        justifyContent: 'flex-start',*/}
                                {/*        width: 60,*/}
                                {/*        zIndex: 15,*/}
                                {/*        marginBottom: 3,*/}
                                {/*        paddingLeft: 3*/}
                                {/*    }}*/}
                                {/*    dropDownStyle={{backgroundColor: '#fafafa',  width: 180,elevation: 10,  }}*/}
                                {/*    defaultValue={this.state.selectedPhoneCode}*/}
                                {/*    value={this.state.selectedPhoneCode}*/}
                                {/*    // onChangeItem={this.onChangeDropDownItem}*/}
                                {/*    onChangeItem={item => {*/}
                                {/*        this.choosePhoneCode(item);*/}
                                {/*    }}*/}
                                {/*/>*/}


                                <Dropdown
                                    style={[
                                        styles.phone_code_dropdown,
                                        {width: 95, marginRight: 10},


                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' : '#d9d9d9'
                                        },


                                    ]}
                                    data={this.state.phoneCodesArray}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('code')}
                                    maxHeight={150}
                                    labelField="label"
                                    valueField="value"
                                    value={this.state.selectedPhoneCode}

                                    onChange={item => {
                                        this.choosePhoneCode(item);
                                    }}
                                />


                                <View style={[styles.inputWrapper, {flex: 1}]}>

                                    {this.state.phone_number_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={() => this.clearPhoneNumberInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                                  fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.phone_number_field_valid &&

                                    <TouchableOpacity style={styles.emptyInput}>
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                                  fill="#337363"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }


                                    <TextInput
                                        value={this.state.phone_number_field}
                                        onChangeText={(phone_code_field) => this.changeRegisterPhoneNumber(phone_code_field)}
                                        style={[

                                            styles.input,
                                            this.state.phone_number_field_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.phone_number_field_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }
                                        ]}
                                        underlineColorAndroid='transparent'
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
                                        selectionColor='#d9d9d9'
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
                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.country_field_error ? '#A4223C' : this.state.country_field_valid ? '#337363' : '#d9d9d9'
                                        }

                                    ]}
                                    data={

                                        [
                                            {label: 'Latvia', value: 'Latvia'},
                                            {label: 'Armenia', value: 'Armenia'},
                                            {label: 'Australia', value: 'Australia'},
                                            {label: 'Austria', value: 'Austria'},
                                            {label: 'Belgium', value: 'Belgium'},
                                            {label: 'Brazil', value: 'Brazil'},
                                            {label: 'Russia', value: 'Russia'},
                                            {label: 'Georgia', value: 'Georgia'},
                                            {label: 'Germany', value: 'Germany'},
                                            {label: 'Greece', value: 'Greece'},
                                            {label: 'Indonesia', value: 'Indonesia'},
                                            {label: 'Iran', value: 'Iran'},
                                            {label: 'Israel', value: 'Israel'},
                                            {label: 'Italy', value: 'Italy'},
                                            {label: 'Japan', value: 'Japan'},
                                            {label: 'Kuwait', value: 'Kuwait'},
                                            {label: 'Lebanon', value: 'Lebanon'},
                                            {label: 'Maldives', value: 'Maldives'},
                                            {label: 'Monaco', value: 'Monaco'},
                                            {label: 'New Zealand', value: 'New zealand'},
                                            {label: 'Netherlands', value: 'Netherlands'},
                                            {label: 'Philippines', value: 'Philippines'},
                                            {label: 'Portugal', value: 'Portugal'},
                                            {label: 'Poland', value: 'Poland'},
                                            {label: 'Singapore', value: 'Singapore'},
                                            {label: 'South Africa', value: 'South africa'},
                                            {label: 'Spain', value: 'Spain'},
                                            {label: 'Sri Lanka', value: 'Sri lanka'},
                                            {label: 'Switzerland', value: 'Switzerland'},
                                            {label: 'Thailand', value: 'Thailand'},
                                            {label: 'Ukraine', value: 'Ukraine'},
                                            {label: 'United Arab Emirates', value: 'United Arab Emirates'},
                                            {label: 'United Kingdom', value: 'United Kingdom'},
                                            {label: 'United States of America', value: 'United States of America'},


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

                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.language_field_error ? '#A4223C' : this.state.language_field_valid ? '#337363' : '#d9d9d9'
                                        }


                                    ]}
                                    data={
                                        [
                                            {label: 'English', value: 'en'},
                                            {label: 'Русский', value: 'ru'},
                                            {label: 'Latviski', value: 'lv'},
                                        ]

                                    }
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('language')}
                                    maxHeight={150}
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
                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.gender_field_error ? '#A4223C' : this.state.gender_field_valid ? '#337363' : '#d9d9d9'
                                        }


                                    ]}
                                    data={
                                        [
                                            {label: 'Female', value: 'female'},
                                            {label: 'Male', value: 'male'},
                                            {label: 'Other', value: 'other'},

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


                            {/*<View style={styles.inputWrapper}>*/}


                            {/*    <View style={[styles.emptyInput, {top: 5, zIndex: 98}]}>*/}
                            {/*        <DatePicker*/}
                            {/*            style={{width: 30, height: 30}}*/}
                            {/*            mode="date" //The enum of date, datetime and time*/}
                            {/*            // placeholder="select date"*/}
                            {/*            format="DD-MM-YYYY"*/}
                            {/*            minDate="01-01-1940"*/}
                            {/*            maxDate="30-12-20r22"*/}
                            {/*            confirmBtnText="Confirm"*/}
                            {/*            cancelBtnText="Cancel"*/}
                            {/*            customStyles={{*/}
                            {/*                dateIcon: {*/}
                            {/*                    // display: 'none',*/}
                            {/*                    position: 'absolute',*/}
                            {/*                    // right: 0,*/}
                            {/*                    // top: 4,*/}
                            {/*                    // marginLeft: 0,*/}
                            {/*                    zIndex: 56,*/}

                            {/*                },*/}
                            {/*                dateInput: {*/}
                            {/*                    // flex:1,*/}
                            {/*                    // backgroundColor:'white',*/}
                            {/*                    display: 'none',*/}
                            {/*                    // textAlign:'left'*/}
                            {/*                    position: 'absolute',*/}

                            {/*                    width: 0,*/}
                            {/*                    height: 0*/}
                            {/*                },*/}
                            {/*                datePicker: {*/}
                            {/*                    backgroundColor: "#af2a38",*/}

                            {/*                },*/}

                            {/*            }}*/}
                            {/*            onDateChange={(date) => {*/}
                            {/*                this.setState({*/}
                            {/*                    edit_birth: date*/}
                            {/*                })*/}
                            {/*                console.log(date)*/}
                            {/*            }}*/}
                            {/*            iconComponent={// 设置之后 iconSource 失效 且 icon 不能改变位置*/}
                            {/*                <Svg*/}
                            {/*                    width={24}*/}
                            {/*                    height={24}*/}
                            {/*                    viewBox="0 0 24 24"*/}
                            {/*                    fill="none"*/}
                            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                >*/}
                            {/*                    <Path*/}
                            {/*                        d="M2 7.5V19a4 4 0 004 4h12a4 4 0 004-4V7.5m-20 0v0A3.5 3.5 0 015.5 4h1M2 7.5h20m0 0v0A3.5 3.5 0 0018.5 4h-1m-11 0V.5m0 3.5h11m0 0V.5"*/}
                            {/*                        stroke="#9F9EAE"*/}
                            {/*                        strokeLinecap="round"*/}
                            {/*                    />*/}
                            {/*                </Svg>*/}
                            {/*            }*/}
                            {/*        />*/}
                            {/*    </View>*/}
                            {/*    <TextInput*/}
                            {/*        value={this.state.edit_birth}*/}
                            {/*        editable={false}*/}
                            {/*        style={[*/}

                            {/*            styles.input,*/}
                            {/*            this.state.edit_birth_error && {*/}
                            {/*                borderWidth: 1, borderColor: '#A4223C'*/}
                            {/*            },*/}
                            {/*            this.state.edit_birth_valid && {*/}
                            {/*                borderWidth: 1, borderColor: '#337363'*/}
                            {/*            }*/}
                            {/*        ]}*/}
                            {/*        underlineColorAndroid='transparent'*/}
                            {/*        label={*/}
                            {/*            <Text*/}
                            {/*                style={[*/}
                            {/*                    {color: this.state.edit_birth_error ? '#A4223C' : this.state.edit_birth_valid ? '#337363' : '#55545F'},*/}
                            {/*                    {color: "#000000", fontWeight: 'normal', fontSize: 12,}*/}

                            {/*                ]*/}
                            {/*                }>*/}
                            {/*                {i18n.t('date_of_birth')}*/}
                            {/*            </Text>*/}
                            {/*        }*/}
                            {/*        error={false}*/}
                            {/*        // onBlur={() => this.onBlurCountry()}*/}
                            {/*        theme={{colors: {text: '#000000', primary: 'transparent'}}}*/}
                            {/*        underlineColor='transparent'*/}
                            {/*        selectionColor='transparent'*/}
                            {/*        activeOutlineColor='transparent'*/}

                            {/*    />*/}

                            {/*    {this.state.edit_birth_error &&*/}

                            {/*    <Text style={styles.error_text}>*/}
                            {/*        {this.state.edit_birth_error_text}*/}
                            {/*    </Text>*/}

                            {/*    }*/}


                            {/*    /!*<Text style={styles.inp_buttom_label}>*!/*/}
                            {/*    /!*    Выберите дату вашего рождения*!/*/}
                            {/*    /!*</Text>*!/*/}


                            {/*</View>*/}

                            <View style={styles.inputWrapper}>


                                <View style={[styles.emptyInput, {top: 5}]}>

                                    <DatePicker
                                        style={{width: 30, height: 30}}
                                        ref={(ref)=>this.datePickerRef=ref}
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
                                                zIndex: 56,

                                            },
                                            dateInput: {
                                                // flex:1,
                                                // backgroundColor:'white',
                                                display: 'none',
                                                // textAlign:'left'
                                                position: 'absolute',

                                                width: 0,
                                                height: 0
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
                                <TouchableOpacity onPress={() => {
                                    this.datePickerRef.onPressDate()
                                    console.log("alert");


                                }}

                                >



                                    <Text
                                        style={[

                                            styles.input,
                                            {fontWeight: "500", fontSize: 14,  paddingTop:14,},
                                            this.state.edit_birth_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.edit_birth_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }
                                        ]}
                                    >
                                        {this.state.edit_birth  == '' ?

                                            i18n.t('date_of_birth')
                                            :

                                            this.state.edit_birth

                                        }
                                    </Text>
                                    {/*<TextInput*/}
                                    {/*    value={this.state.edit_birth}*/}
                                    {/*    editable={false}*/}
                                    {/*    style={[*/}

                                    {/*        styles.input,*/}
                                    {/*        this.state.edit_birth_error && {*/}
                                    {/*            borderWidth: 1, borderColor: '#A4223C'*/}
                                    {/*        },*/}
                                    {/*        this.state.edit_birth_valid && {*/}
                                    {/*            borderWidth: 1, borderColor: '#337363'*/}
                                    {/*        }*/}
                                    {/*    ]}*/}
                                    {/*    underlineColorAndroid='transparent'*/}
                                    {/*    label={*/}
                                    {/*        <Text*/}
                                    {/*            style={[*/}
                                    {/*                {color: this.state.edit_birth_error ? '#A4223C' : this.state.edit_birth_valid ? '#337363' : '#55545F'},*/}
                                    {/*                {color: "#000000", fontWeight: 'normal', fontSize: 12,}*/}

                                    {/*            ]*/}
                                    {/*            }>*/}
                                    {/*            {i18n.t('date_of_birth')}*/}
                                    {/*        </Text>*/}
                                    {/*    }*/}
                                    {/*    error={false}*/}
                                    {/*    // onBlur={() => this.onBlurCountry()}*/}
                                    {/*    theme={{colors: {text: '#000000', primary: 'transparent'}}}*/}
                                    {/*    underlineColor='transparent'*/}
                                    {/*    selectionColor='transparent'*/}
                                    {/*    activeOutlineColor='transparent'*/}

                                    {/*/>*/}
                                    {this.state.edit_birth_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.edit_birth_error_text}
                                    </Text>

                                    }

                                </TouchableOpacity>







                                {/*<Text style={styles.inp_buttom_label}>*/}
                                {/*    Выберите дату вашего рождения*/}
                                {/*</Text>*/}


                            </View>
                        </View>


                    </ScrollView>

                    :
                    <KeyboardAwareScrollView style={styles.edit_page_main_wrapper}>

                        <View style={styles.stepOne_inputs_wrapper}>
                            <View style={styles.inputWrapper}>

                                {this.state.name_field_error &&

                                <TouchableOpacity style={styles.emptyInput}
                                                  onPress={() => this.clearNameInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                              fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.name_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                              fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.name_field}
                                    onChangeText={(name_field) => this.changeRegisterName(name_field)}
                                    style={[

                                        styles.input,
                                        this.state.name_field_error && {
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.name_field_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
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
                                    selectionColor='#d9d9d9'
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
                                                  onPress={() => this.clearSurnameInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                              fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.surname_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                              fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.surname_field}
                                    onChangeText={(surname_field) => this.changeRegisterSurname(surname_field)}
                                    style={[

                                        styles.input,
                                        this.state.surname_field_error && {
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.surname_field_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
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
                                    selectionColor='#d9d9d9'
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
                                                  onPress={() => this.clearEmailInput()}
                                >
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                              fill="#A4223C"/>
                                    </Svg>
                                </TouchableOpacity>

                                }

                                {this.state.email_field_valid &&

                                <TouchableOpacity style={styles.emptyInput}>
                                    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path fillRule="evenodd" clipRule="evenodd"
                                              d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                              fill="#337363"/>
                                    </Svg>
                                </TouchableOpacity>

                                }


                                <TextInput
                                    value={this.state.email_field}
                                    onChangeText={(email_field) => this.changeRegisterEmail(email_field)}
                                    style={[

                                        styles.input,
                                        this.state.email_field_error && {
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.email_field_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
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
                                    selectionColor='#d9d9d9'
                                    activeOutlineColor='transparent'
                                    placeholderTextColor="#c9a477"

                                />

                                {this.state.email_field_error &&

                                <Text style={styles.error_text}>
                                    {this.state.email_field_error_text}
                                </Text>

                                }


                            </View>

                            <View style={[styles.phones_inputs_wrapper, {elevation: 10, zIndex: 2000}]}>


                                {/*<DropDownPicker*/}
                                {/*    items={ this.state.phoneCodesArray }*/}
                                {/*    placeholder={i18n.t('code')}*/}
                                {/*    containerStyle={{height: 52, width: 95,  marginRight: 10, }}*/}
                                {/*    style={[styles.phone_code_dropdown,*/}

                                {/*        {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },*/}

                                {/*    ]}*/}
                                {/*    itemStyle={{*/}
                                {/*        justifyContent: 'flex-start',*/}
                                {/*        width: 60,*/}
                                {/*        zIndex: 15,*/}
                                {/*        marginBottom: 3,*/}
                                {/*        paddingLeft: 3*/}
                                {/*    }}*/}
                                {/*    dropDownStyle={{backgroundColor: '#fafafa',  width: 180,elevation: 10,  }}*/}
                                {/*    defaultValue={this.state.selectedPhoneCode}*/}
                                {/*    value={this.state.selectedPhoneCode}*/}
                                {/*    // onChangeItem={this.onChangeDropDownItem}*/}
                                {/*    onChangeItem={item => {*/}
                                {/*        this.choosePhoneCode(item);*/}
                                {/*    }}*/}
                                {/*/>*/}


                                <Dropdown
                                    style={[
                                        styles.phone_code_dropdown,
                                        {width: 95, marginRight: 10},


                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' : '#d9d9d9'
                                        },


                                    ]}
                                    data={this.state.phoneCodesArray}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('code')}
                                    maxHeight={150}
                                    labelField="label"
                                    valueField="value"
                                    value={this.state.selectedPhoneCode}

                                    onChange={item => {
                                        this.choosePhoneCode(item);
                                    }}
                                />


                                <View style={[styles.inputWrapper, {flex: 1}]}>

                                    {this.state.phone_number_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={() => this.clearPhoneNumberInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                                  fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.phone_number_field_valid &&

                                    <TouchableOpacity style={styles.emptyInput}>
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.09-2.917a.66.66 0 01.442-.197.547.547 0 01.427.176c.248.228.248.62.02.87l-4.758 4.985a.626.626 0 01-.91-.02l-2.71-2.918a.62.62 0 01.041-.869.619.619 0 01.869.042l2.255 2.42 4.324-4.49z"
                                                  fill="#337363"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }


                                    <TextInput
                                        value={this.state.phone_number_field}
                                        onChangeText={(phone_code_field) => this.changeRegisterPhoneNumber(phone_code_field)}
                                        style={[

                                            styles.input,
                                            this.state.phone_number_field_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.phone_number_field_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }
                                        ]}
                                        underlineColorAndroid='transparent'
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
                                        selectionColor='#d9d9d9'
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
                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.country_field_error ? '#A4223C' : this.state.country_field_valid ? '#337363' : '#d9d9d9'
                                        }

                                    ]}
                                    data={

                                        [
                                            {label: 'Latvia', value: 'Latvia'},
                                            {label: 'Armenia', value: 'Armenia'},
                                            {label: 'Australia', value: 'Australia'},
                                            {label: 'Austria', value: 'Austria'},
                                            {label: 'Belgium', value: 'Belgium'},
                                            {label: 'Brazil', value: 'Brazil'},
                                            {label: 'Russia', value: 'Russia'},
                                            {label: 'Georgia', value: 'Georgia'},
                                            {label: 'Germany', value: 'Germany'},
                                            {label: 'Greece', value: 'Greece'},
                                            {label: 'Indonesia', value: 'Indonesia'},
                                            {label: 'Iran', value: 'Iran'},
                                            {label: 'Israel', value: 'Israel'},
                                            {label: 'Italy', value: 'Italy'},
                                            {label: 'Japan', value: 'Japan'},
                                            {label: 'Kuwait', value: 'Kuwait'},
                                            {label: 'Lebanon', value: 'Lebanon'},
                                            {label: 'Maldives', value: 'Maldives'},
                                            {label: 'Monaco', value: 'Monaco'},
                                            {label: 'New Zealand', value: 'New zealand'},
                                            {label: 'Netherlands', value: 'Netherlands'},
                                            {label: 'Philippines', value: 'Philippines'},
                                            {label: 'Portugal', value: 'Portugal'},
                                            {label: 'Poland', value: 'Poland'},
                                            {label: 'Singapore', value: 'Singapore'},
                                            {label: 'South Africa', value: 'South africa'},
                                            {label: 'Spain', value: 'Spain'},
                                            {label: 'Sri Lanka', value: 'Sri lanka'},
                                            {label: 'Switzerland', value: 'Switzerland'},
                                            {label: 'Thailand', value: 'Thailand'},
                                            {label: 'Ukraine', value: 'Ukraine'},
                                            {label: 'United Arab Emirates', value: 'United Arab Emirates'},
                                            {label: 'United Kingdom', value: 'United Kingdom'},
                                            {label: 'United States of America', value: 'United States of America'},


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

                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.language_field_error ? '#A4223C' : this.state.language_field_valid ? '#337363' : '#d9d9d9'
                                        }


                                    ]}
                                    data={
                                        [
                                            {label: 'English', value: 'en'},
                                            {label: 'Русский', value: 'ru'},
                                            {label: 'Latviski', value: 'lv'},
                                        ]

                                    }
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    placeholder={i18n.t('language')}
                                    maxHeight={150}
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
                                        {
                                            borderWidth: 1,
                                            borderColor: this.state.gender_field_error ? '#A4223C' : this.state.gender_field_valid ? '#337363' : '#d9d9d9'
                                        }


                                    ]}
                                    data={
                                        [
                                            {label: 'Female', value: 'female'},
                                            {label: 'Male', value: 'male'},
                                            {label: 'Other', value: 'other'},

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


                                <View style={[styles.emptyInput, {top: 5, zIndex: 98}]}>
                                    <DatePicker
                                        style={{width: 30, height: 30}}
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
                                                zIndex: 56,

                                            },
                                            dateInput: {
                                                // flex:1,
                                                // backgroundColor:'white',
                                                display: 'none',
                                                // textAlign:'left'
                                                position: 'absolute',

                                                width: 0,
                                                height: 0
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
                                            borderWidth: 1, borderColor: '#A4223C'
                                        },
                                        this.state.edit_birth_valid && {
                                            borderWidth: 1, borderColor: '#337363'
                                        }
                                    ]}
                                    underlineColorAndroid='transparent'
                                    label={
                                        <Text
                                            style={[
                                                {color: this.state.edit_birth_error ? '#A4223C' : this.state.edit_birth_valid ? '#337363' : '#55545F'},
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


                    </KeyboardAwareScrollView>
                }

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

    edit_page_btn_title_wrapper: {
        width: "100%",
        marginBottom: 53,
        paddingTop: 20,
        paddingHorizontal: 20,
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
        position: "relative",
        zIndex: 10,
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
        // fontSize:15,
        // color:'#000000',
        // fontWeight: "bold",
        backgroundColor: '#f4f4f4',
        position: "relative",
        // zIndex: 999,

    },
    error_text: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 4,
    },
});