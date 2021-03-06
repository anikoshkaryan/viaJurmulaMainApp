import React, { Component } from 'react';
import axios from 'axios';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { LinearGradient } from 'expo-linear-gradient';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import {TextInput} from "react-native-paper";
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AuthContext } from '../AuthContext/context';
import { Dropdown } from 'react-native-element-dropdown';


import DropDownPicker from "react-native-custom-dropdown";

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
    ImageBackground,
    ScrollView,
    Platform,
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';


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


            phone_number_field: '',
            phone_number_field_error:false ,
            phone_number_field_valid: false,
            phone_number_field_error_text: '',

            selectedCountry: 'Latvia',
            selectedLanguage: null,


            selectedPhoneCode: "+371",

            error_phone_code: false,
            valid_phone_code: false,

            error_country: false,
            valid_country: true,
            error_country_text: "",

            error_language: false,
            valid_language: false,
            error_language_text: "",

            selectedGender: null,
            error_gender: false,
            valid_gender: false,
            error_gender_text: "",

            firstFormError: false,
            secondFormError: false,
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

    componentDidMount() {

    }

    chooseCountry = (item) => {
        this.setState({
            selectedCountry: item.label,
            error_country: false,
            valid_country: true,
        })

    }

    choosePhoneCode = (item) => {
        this.setState({
            selectedPhoneCode: item.value,
            error_phone_code: false,
            valid_phone_code: true,
        })

    }



    chooseLanguage = (item) => {
        this.setState({
            selectedLanguage: item.value,
            error_language: false,
            valid_language: true,
        })
    }
    redirectToDashboard= () => {
        this.props.navigation.navigate("Dashboard");

    }

    chooseGender = (item) => {
        this.setState({
            selectedGender: item.value,
            error_gender: false,
            valid_gender: true
        })

    }

    registerHandler= () => {
        // this.props.navigation.navigate("StoreList", {
        //     params:"buyer",
        // });
        let name = this.state.name_field;
        let surname = this.state.surname_field;
        let email = this.state.email_field;
        let phone_code = this.state.selectedPhoneCode;
        let phone_number = this.state.phone_number_field;
        let country = this.state.selectedCountry;
        let language = this.state.selectedLanguage;
        let gender = this.state.selectedGender;
        let password = this.state.password_field;
        let repeat_password = this.state.repeat_password_field;
        let birth_day       = this.state.edit_birth;


        if (password.length < 6 || repeat_password.length < 6) {

            if (password.length < 6) {
                console.log(password,repeat_password)

                this.setState({
                      password_field_error: true,
                      password_field_valid: false,
                      password_field_error_text:  i18n.t('password_error_text_must6'),
                  })
            }
            if (repeat_password.length < 6) {
                this.setState({
                    repeat_password_field_error: true,
                    repeat_password_field_valid: false,
                    repeat_password_field_error_text: i18n.t('password_error_text_must6'),
                })
            }
        } else {
            if (password != repeat_password) {
                this.setState({
                    repeat_password_field_error: true,
                    repeat_password_field_valid: false,
                    repeat_password_field_error_text:  i18n.t('password_error_text_do_not_match'),
                })
            } else {

                let req = {
                    name: name,
                    surname: surname,
                    phone_code: phone_code,
                    phone: phone_number,
                    gender: gender,
                    country: country,
                    language: language,
                    birth_day: birth_day,
                    email:     email,
                    password: password,
                    password_confirmation: repeat_password,
                }


                console.log(req);


                axios.post(`http://vjapp.reproto.com/api/registration`, req).then(
                    (response) => {

                        console.log(response.data, 'response.dataresponse.dataresponse.data')

                        if (response.data.success === true) {

                             let user_token = response.data.token;
                             let user_data = {
                                role_id: response.data.user.role_id,
                                user_id: response.data.user.id,
                                language: language,
                             }

                             if ( response.data.user.role_id == 1 ) {
                                 user_data.qr_token = response.data.user.qr_token
                             }

                            let foundUser = {
                                token: user_token,
                                user_data: user_data,
                            }

                             console.log(foundUser, 'foundUserfoundUserfoundUserfoundUserfoundUser')


                            let navigate = this.props.navigation;
                            this.context.signIn(foundUser, function () {
                                navigate.navigate('StoreList')
                            });
                        } else {
                                if (response.data.data.hasOwnProperty("birth_day")) {
                                     this.setState({
                                         secondFormError: true,
                                         edit_birth_error: true,
                                         edit_birth_valid: false,
                                         edit_birth_error_text: i18n.t('birth_day'),
                                     })
                                }


                            if (response.data.data.hasOwnProperty("name")) {
                                this.setState({
                                    firstFormError: true,
                                    name_field_error:true,
                                    name_field_valid: false,
                                    name_field_error_text: i18n.t('error_text_required'),
                                })
                            }
                            if (response.data.data.hasOwnProperty("surname")) {
                                this.setState({
                                    firstFormError: true,
                                    surname_field_error:true,
                                    surname_field_valid: false,
                                    surname_field_error_text: i18n.t('error_text_required'),
                                })
                            }
                            if (response.data.data.hasOwnProperty("phone")) {
                                this.setState({
                                    firstFormError: true,
                                    phone_number_field_error: true,
                                    phone_number_field_valid: false,
                                    phone_number_field_error_text: response.data.data.phone,
                                })
                            }
                            if (response.data.data.hasOwnProperty("email")) {
                                this.setState({
                                    firstFormError: true,
                                    email_field_error: true,
                                    email_field_valid: false,
                                    email_field_error_text: response.data.data.email,
                                })
                            }
                            if (response.data.data.hasOwnProperty("country")) {
                                this.setState({
                                    secondFormError: true,
                                    error_country: true,
                                    valid_country: false,
                                    error_country_text: i18n.t('error_text_required'),
                                })
                            }
                            if (response.data.data.hasOwnProperty("language")) {
                                this.setState({
                                    secondFormError: true,
                                    error_language: true,
                                    valid_language: false,
                                    error_language_text: i18n.t('error_text_required'),
                                })
                            }

                            if (response.data.data.hasOwnProperty("gender")) {
                                this.setState({
                                    secondFormError: true,
                                    error_gender: true,
                                    valid_gender: false,
                                    error_gender_text: i18n.t('error_text_required'),
                                })
                            }

                            if (response.data.data.hasOwnProperty("password")) {
                                this.setState({
                                    password_field_error:true,
                                    password_field_valid: false,
                                    password_field_error_text: i18n.t('error_text_required'),
                                })
                            }
                            if (response.data.data.hasOwnProperty("password_confirmation")) {
                                this.setState({
                                    repeat_password_field_error:true,
                                    repeat_password_field_valid: false,
                                    repeat_password_field_error_text: i18n.t('error_text_required'),
                                })
                            }




                        }

                        // if(response.data.TYPE == "OK") {
                        //
                        //     let userToken = response.headers['set-cookie'];
                        //     let userId = response.data.ID;
                        //
                        //
                        //     let foundUser = {
                        //         token: userToken,
                        //         userId:userId,
                        //         language: 'ru',
                        //         email: 'no'
                        //     }
                        //
                        //     let navigate = this.props.navigation;
                        //     this.context.signIn(foundUser, function () {
                        //         navigate.navigate('Profile')
                        //     });
                        //
                        //
                        // }

                    },

                    (err) => {
                        console.log(err.response, 'err')


                    },

                );
            }
        }




    }




    validateFirstForm = () => {

        let name = this.state.name_field_valid;
        let surname = this.state.surname_field_valid;
        let email = this.state.email_field_valid;
        let phone_number = this.state.phone_number_field_valid;
        let phone_code = this.state.valid_phone_code;

        if (name === true && surname === true && email === true && phone_number === true && phone_code) {

            console.log('ook')
                this.setState({
                    stepOne: false,
                    stepSecond: true,
                    stepThird: false,
                })
        } else {
            if (name === false) {
                this.setState({
                    name_field_error: true,
                    name_field_valid: false,
                    name_field_error_text:  i18n.t('error_text_required'),
                })

            }

            if (surname === false) {
                this.setState({
                    surname_field_error: true,
                    surname_field_valid: false,
                    surname_field_error_text: i18n.t('error_text_required'),
                })

            }


            if (email === false) {
                this.setState({
                    email_field_error: true,
                    email_field_valid: false,
                    email_field_error_text: i18n.t('error_text_required'),
                })

            }

            if (phone_number === false) {
                this.setState({
                    phone_number_field_error: true,
                    phone_number_field_valid: false,
                    phone_number_field_error_text: i18n.t('error_text_required'),
                })

            }

            if (phone_code === false) {
                this.setState({
                    error_phone_code: true,
                    valid_phone_code: false,
                })

            }





        }

    }

    backToStepOne = () => {
        this.setState({
            stepOne: true,
            stepSecond: false,
            stepThird: false,
            firstFormError: false,
        })

    }

    backToStepSecond = () => {
        this.setState({
            stepOne: false,
            stepSecond: true,
            stepThird: false,
            secondFormError: false,
        })


    }


    validateSecondForm = () => {

        let country    = this.state.valid_country;
        let language   = this.state.valid_language;
        let gender     = this.state.valid_gender;
        let edit_birth = this.state.edit_birth_valid;


        if (country === true && language === true && gender === true && edit_birth === true) {
            this.setState({
                stepOne: false,
                stepSecond: false,
                stepThird: true,

            });

        } else {

            if (country === false) {
                this.setState({
                    error_country: true,
                    valid_country: false,
                    error_country_text: i18n.t('error_text_required'),
                })

            }
            if (language === false) {
                this.setState({
                    error_language: true,
                    valid_language: false,
                    error_language_text: i18n.t('error_text_required'),
                })

            }
            if (gender === false) {
                this.setState({
                    error_gender: true,
                    valid_gender: false,
                    error_gender_text: i18n.t('error_text_required'),
                })

            }
            if (edit_birth === false) {
                this.setState({
                    edit_birth_error: true,
                    edit_birth_valid: false,
                    edit_birth_error_text: i18n.t('error_text_required'),
                })

            }

        }
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

                this.setState({
                    name_field_error:false,
                    name_field_valid: true,
                })


        }

    }

    onBlurRegisterName = () => {

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

                this.setState({
                    name_field_error:false,
                    name_field_valid: true,
                })


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


                this.setState({
                    surname_field_error:false,
                    surname_field_valid: true,
                })




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



    clearPasswordInput = () => {
        this.setState({
            password_field: '',
            password_field_error:false,
        })
    }
    changeRegisterPassword = (password_field) => {
        this.setState({
            password_field: password_field,
        })


        if (password_field == "") {
            this.setState({
                password_field_error:false,
                password_field_valid: false,
            })
        } else {
            if (password_field.length >= 6) {

                this.setState({
                    password_field_error:false,
                    password_field_valid: true,
                })


            }
        }

    }

    onBlurRegisterPassword = () => {

    }

    clearRepeatPasswordInput = () => {
        this.setState({
            password_field: '',
            password_field_error:false,
        })
    }
    changeRegisterRepeatPassword = (repeat_password_field) => {
        this.setState({
            repeat_password_field: repeat_password_field,
        })


        if (repeat_password_field == "") {
            this.setState({
                repeat_password_field_error:false,
                repeat_password_field_valid: false,
            })
        } else {
            if (repeat_password_field.length >= 6) {

                this.setState({
                    repeat_password_field_error:false,
                    repeat_password_field_valid: true,
                })


            }
        }

    }

    onBlurRegisterRepeatPassword = () => {

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

    dateBirth = (date) => {
        this.setState({
            edit_birth: date,
            edit_birth_error: false,
            edit_birth_valid: true,
        })

    }

    render() {

        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.sign_up_page_main_wrapper} >

                {this.state.stepOne &&
                    <View style={styles.stepOne_wrapper}>
                        <View style={styles.back_to_btn_step_numbers_wrapper}>
                            <TouchableOpacity style={styles.back_to_dashboard_btn} onPress={() => {this.redirectToDashboard()}}>
                                <Text style={styles.back_to_dashboard_btn_text}>{i18n.t('back')}</Text>
                            </TouchableOpacity>
                            <View style={styles.step_numbers_wrapper}>
                                 <Text style={styles.step_number}>1</Text>
                                 <Text style={styles.step_number_text}>{i18n.t('of')}</Text>
                                  <Text style={styles.step_number}>3</Text>
                            </View>
                        </View>
                        {Platform.OS === 'ios'
                            ?

                            <KeyboardAwareScrollView style={styles.logo_inputs_wrapper}>
                                <View style={styles.step_logo}>
                                    <Svg
                                        width={200}
                                        height={142}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 202 157.49" >

                                        <G id="b">
                                            <G id="c">
                                                <Path
                                                    d="M146.78 44.96c0 24.83-20.13 44.95-44.96 44.95S56.87 69.78 56.87 44.96 77 0 101.82 0s44.96 20.13 44.96 44.96z"
                                                    fill="#fff"
                                                />
                                                <Path
                                                    d="M46.76 148.12c2.6 0 4.68 2.09 4.68 4.69s-2.08 4.67-4.68 4.67-4.67-2.07-4.67-4.67 2.07-4.69 4.67-4.69zm0 8.06c1.86 0 3.38-1.51 3.38-3.37s-1.52-3.39-3.38-3.39-3.37 1.55-3.37 3.39 1.52 3.37 3.37 3.37zm7.46-7.68c0-.13.12-.25.25-.25h.87c.14 0 .25.12.25.25v5.37c0 1.3.83 2.31 2.16 2.31s2.18-1 2.18-2.29v-5.4c0-.13.1-.25.25-.25h.87c.13 0 .25.12.25.25v5.46c0 1.98-1.5 3.52-3.55 3.52s-3.52-1.55-3.52-3.52v-5.46zm11.79.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm6.12-.98c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61zm10.18.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm9.01-.88c-.08-.17.03-.34.22-.34h.92c.1 0 .2.08.22.14l2.86 6.43h.08l2.86-6.43c.03-.07.1-.14.22-.14h.92c.19 0 .3.17.22.34l-3.99 8.75c-.04.08-.12.14-.22.14H103c-.09 0-.18-.06-.22-.14l-3.96-8.75zm10.9-.09c0-.13.12-.25.25-.25h.86c.13 0 .25.12.25.25v8.61c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-8.61zm4.84 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm6.91 8.52l3.99-8.75c.04-.08.16-.14.22-.14h.13c.06 0 .18.07.22.14l3.97 8.75c.08.17-.03.34-.22.34h-.82c-.16 0-.25-.08-.3-.2l-.81-1.78h-4.25c-.26.6-.53 1.18-.79 1.78a.33.33 0 01-.3.2h-.82c-.2 0-.3-.17-.22-.34zm5.89-2.76l-1.6-3.56h-.06l-1.59 3.56h3.25zm8.68-6.14c1.25 0 2.27.46 3.16 1.21.1.1.12.26.01.36-.19.21-.39.4-.58.61-.1.12-.21.1-.34-.01-.61-.53-1.42-.88-2.21-.88-1.85 0-3.26 1.56-3.26 3.38s1.42 3.37 3.26 3.37c1.08 0 1.82-.39 1.95-.44v-1.46h-1.27c-.14 0-.25-.1-.25-.23v-.75c0-.14.1-.25.25-.25h2.37c.13 0 .23.12.23.25 0 1.04.01 2.11.01 3.15 0 .07-.05.17-.1.21 0 0-1.34.86-3.22.86-2.59 0-4.68-2.07-4.68-4.67s2.09-4.69 4.68-4.69zm6.49.38c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61z"
                                                    fill="#4c575d"
                                                />
                                                <Path
                                                    d="M62.69 126.98c0 4.38 0 6.05-.81 7.97-.57 1.35-1.75 2.62-3.94 4.13-.35.24-.78.54-1.05.67-.05.03-.11.05-.19.05s-.19-.05-.19-.16c0-.16.14-.24.38-.4.32-.19.7-.51.95-.76 1.76-1.78 2.59-3.21 2.59-10.18v-7.81c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.92.08 3.05.08s1.84-.08 2.65-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.13-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v6.48zm8.28-6.48c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.21-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.14-.22.43-.22 1.21 0 2.86.08 3.1.08s1.86-.08 2.67-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.11-.95.59-1 1.54-.06.87-.06 1.62-.06 5.84v3.78c0 3.89.86 5.57 2.03 6.67 1.32 1.24 2.54 1.48 4.08 1.48 1.65 0 3.27-.78 4.24-1.94 1.24-1.54 1.57-3.83 1.57-6.62v-3.38c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.7.08 2.86.08.19 0 1.46-.08 2.27-.08.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.67.08-.73.16-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v2.89c0 2.92-.32 6.16-2.48 8.08-1.95 1.73-3.97 2-5.57 2-.92 0-3.65-.11-5.56-1.92-1.32-1.27-2.35-3.16-2.35-7.11v-3.94zm41.92 12.21c-.16 0-.54 0-1.05-.08-.68-.11-1.84-.4-3.29-1.95-1.57-1.67-3.4-4.08-5.62-6.92 2.43-2.24 3.27-4.24 3.27-6.24 0-1.87-1.19-3.19-1.86-3.67-1.43-1.03-3.24-1.19-4.94-1.19-.84 0-2.89.08-3.19.08-.13 0-1.84-.08-3.05-.08-.3 0-.43.05-.43.22 0 .11.11.16.22.16.24 0 .7.03.92.08.89.19 1.11.62 1.16 1.54.05.87.05 1.62.05 5.84v4.75c0 2.59 0 4.73-.13 5.86-.11.78-.24 1.38-.78 1.49-.24.05-.57.11-.81.11-.16 0-.22.08-.22.16 0 .16.14.22.43.22.81 0 2.51-.08 2.54-.08.14 0 1.84.08 3.32.08.3 0 .43-.08.43-.22 0-.08-.05-.16-.22-.16-.24 0-.84-.05-1.21-.11-.81-.11-.97-.7-1.05-1.49-.13-1.13-.13-3.27-.13-5.86v-11.24c0-.16.08-.27.22-.32.27-.08 1-.16 1.81-.16 2.89 0 4.67 2.03 4.67 5.4 0 2.05-.7 3.51-1.65 4.16-.62.43-1.62.66-2.28.74-.21.03-.56.03-.74.02.7.14 1.25.12 1.84.75.54.7 1.81 2.51 2.94 4 1.54 2.02 2.48 3.35 3.65 3.97.7.38 1.38.51 2.89.51h1.92c.49 0 .65-.05.65-.22 0-.08-.11-.16-.24-.16zm25.35-3.08c.11.97.3 2.49 1.46 2.87.78.24 1.49.24 1.76.24.14 0 .22.03.22.14 0 .16-.24.24-.57.24-.6 0-3.51-.03-4.51-.11-.62-.06-.76-.14-.76-.27 0-.11.05-.16.19-.19s.16-.49.11-.97l-1.3-14.02h-.08l-6.62 14.04c-.57 1.19-.65 1.43-.89 1.43-.19 0-.32-.27-.84-1.24-.7-1.32-3.02-6-3.16-6.27-.24-.48-3.27-6.97-3.56-7.7h-.11l-1.08 12.53c-.03.43-.03.92-.03 1.38 0 .41.29.76.7.84.46.11.86.13 1.03.13.11 0 .22.05.22.14 0 .19-.16.24-.49.24-1 0-2.3-.08-2.51-.08-.24 0-1.54.08-2.27.08-.27 0-.46-.05-.46-.24 0-.08.14-.14.27-.14.22 0 .41 0 .81-.08.89-.16.97-1.22 1.08-2.24l1.94-17.61c.03-.3.14-.49.3-.49s.27.11.41.41l8.26 16.99 7.94-16.96c.11-.24.22-.43.4-.43s.27.22.32.73l1.81 16.61zm63.49 3.08c-.27 0-.68-.03-1.08-.16-.57-.16-1.35-.59-2.32-3-1.65-4.11-5.89-15.26-6.29-16.29-.32-.84-.43-.97-.6-.97s-.27.16-.59 1.05l-6.13 16.77c-.49 1.35-1.03 2.38-2.27 2.54-.22.03-.59.05-.78.05-.14 0-.24.05-.24.16 0 .16.16.22.51.22 1.27 0 2.76-.08 3.05-.08s1.46.08 2.11.08c.24 0 .4-.05.4-.22 0-.11-.08-.16-.27-.16h-.27c-.46 0-1.03-.24-1.03-.78 0-.49.14-1.13.38-1.81l2.11-6.16 2.38-7.29c.13-.41.27-.41.4 0l2.57 7.29 3 7.97c.16.43 0 .68-.16.73-.11.03-.19.08-.19.19 0 .16.3.16.81.19 1.86.05 3.83.05 4.24.05.3 0 .54-.05.54-.22 0-.14-.11-.16-.27-.16zm-30.46-7.4c0 3.97.11 5.7.6 6.19.43.43 1.13.62 3.24.62 1.43 0 2.62-.03 3.27-.81.35-.43.62-1.11.7-1.62.03-.21.08-.35.24-.35.13 0 .16.11.16.4s-.19 1.92-.41 2.7c-.19.62-.27.73-1.7.73-1.94 0-3.35-.06-4.48-.08-1.14-.05-1.97-.08-2.76-.08-.11 0-.57.03-1.11.03-.54.03-1.13.05-1.54.05-.3 0-.43-.05-.43-.22 0-.08.05-.16.22-.16.24 0 .57-.05.81-.11.54-.11.68-.7.79-1.49.13-1.13.13-3.27.13-5.86v-4.75c0-4.22 0-4.97-.05-5.84-.06-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.21 0 2.92.08 3.05.08s2.11-.08 2.92-.08c.29 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.57.03-.89.08-.78.13-1 .59-1.05 1.54-.05.87-.05 1.62-.05 5.84v4.81zm-159.79 4.56c1.58-3.66 5.23-13.18 5.83-15.15.14-.41.24-.79.24-1.04 0-.22-.08-.49-.35-.63-.33-.11-.74-.11-1.03-.11-.16 0-.3-.03-.3-.16 0-.17.16-.22.6-.22 1.09 0 2.35.08 2.67.08.16 0 1.34-.08 2.13-.08.3 0 .46.06.46.19s-.11.19-.33.19c-.19 0-.79 0-1.31.33-.35.24-.76.71-1.5 2.56-.3.77-1.66 4.04-3.05 7.4-1.66 3.99-2.89 6.93-3.52 8.27-.76 1.64-.87 2.08-1.14 2.08-.33 0-.46-.38-.98-1.69l-6.68-16.73c-.6-1.53-1.01-1.83-1.96-2.1-.41-.11-.87-.11-1.04-.11s-.22-.08-.22-.19c0-.16.27-.19.71-.19 1.31 0 2.86.08 3.19.08.27 0 1.5-.08 2.54-.08.49 0 .74.06.74.19s-.08.19-.27.19c-.3 0-.79.03-1.04.14-.3.14-.35.35-.35.55 0 .35.33 1.2.74 2.26l5.24 13.97zm16.02-4.58c0 2.62 0 4.78.14 5.92.08.79.25 1.39 1.06 1.5.38.06.98.11 1.23.11.16 0 .22.08.22.17 0 .14-.14.22-.44.22-1.5 0-3.22-.08-3.35-.08s-1.85.08-2.67.08c-.3 0-.44-.05-.44-.22 0-.08.06-.17.22-.17.24 0 .57-.05.82-.11.55-.11.68-.71.79-1.5.14-1.15.14-3.3.14-5.92v-4.8c0-4.26 0-5.02-.06-5.9-.05-.93-.33-1.39-.93-1.53-.3-.08-.65-.11-.84-.11-.11 0-.22-.05-.22-.16 0-.17.14-.22.44-.22.9 0 2.62.08 2.75.08s1.85-.08 2.67-.08c.3 0 .44.06.44.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.74.14-.96.6-1.01 1.56-.06.87-.06 1.64-.06 5.9v4.8zm24.3 7.53c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.34-3.03-1.66-4.15-5.95-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.16.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.24 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zm112.07 0c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.35-3.03-1.66-4.15-5.94-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.17.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.25 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zM101.82 82.72c-20.82 0-37.76-16.94-37.76-37.76S81 7.19 101.82 7.19s37.77 16.94 37.77 37.77-16.94 37.76-37.77 37.76zm0-74.53c-20.27 0-36.76 16.49-36.76 36.77s16.49 36.76 36.76 36.76 36.77-16.49 36.77-36.76S122.1 8.19 101.82 8.19zm16.1 15.84v.49s-4.94-.3-6.32 1.71c-.29.41-.42 1.24-.48 2.06v2.93l-7.96 3.7v-6.64c-.06-.82-.19-1.65-.47-2.06-1.38-2.01-6.31-1.71-6.31-1.71v-.49h21.54zm-14.76 28.91v10.19c0 3.62-.36 4.75-1.41 5.74-1.73 1.64-2.62 1.95-3.74 2.02 2.21-.1 4.75-.7 6.24-1.44 1.63-.8 3.41-2.12 4.4-3.52 1-1.41 1.63-3.02 2.06-4.89.43-1.87.42-4.43.42-6.56v-5.25l-7.96 3.7zm7.96-11.56l-7.96-3.7v1.84l7.96 3.69v-1.83zm0-8.81l-7.96 3.71v.02l7.96 3.69v-7.43zm0 12.18l-7.96-3.69v1.71l7.96 3.7v-1.72zm0 3.09l-7.96-3.72v7.44l7.96-3.69v-.03zM93.23 68.87c-.55-.6-.84-1.45-.58-1.96s.69-.65 1.13-.91c1.54-.93 2.57-2.61 2.57-4.54s-.96-3.49-2.41-4.44c-.49-.37-1.1-.62-1.82-.75-.1-.02-.2-.03-.3-.05-.25-.04-.5-.06-.77-.06h-.13c-1.68 0-2.85.6-3.71 1.56-.4.45-.74.98-.99 1.57-.3.66-.47 1.4-.47 2.17v.13c0 1.3.52 2.81 1.11 3.84.58 1.04 1.48 2.18 2.5 2.93 1.01.75 2.09 1.45 3.46 1.84 1.23.35 2.42.63 3.87.69-1.07-.1-2.12-.6-3.45-2.02zm6.73-63.85c.77.19 1.43.18 2.29-.07.6-.18 1.19-.54 1.99-1.22l.06-.05c.9-.74 1.68-1.37 2.5-1.53.94-.21 1.89-.01 3.02.61.12.06.2.17.23.29.03.13.01.26-.06.38-.14.23-.47.32-.7.19-.9-.5-1.53-.64-2.21-.49-.32.07-.64.21-1.03.44-.38.25-.8.6-1.2.93-.92.77-1.61 1.2-2.31 1.41-.43.11-.99.23-1.61.23-.4 0-.78-.05-1.17-.15-.25-.06-.41-.33-.36-.59.04-.22.23-.39.46-.39.03 0 .07 0 .1.01zm5.6.13c.73.3 1.39.38 2.27.25.62-.09 1.26-.37 2.14-.93l.06-.04c1-.6 1.85-1.12 2.69-1.17.96-.08 1.88.25 2.9 1.02.11.08.17.19.19.32.02.13-.02.26-.11.36-.17.21-.51.25-.72.09-.82-.62-1.43-.85-2.12-.8-.32.03-.67.12-1.08.29-.42.2-.88.48-1.31.75-1.01.64-1.76.96-2.48 1.08-.44.05-1.01.09-1.62 0-.39-.06-.77-.16-1.14-.31-.24-.09-.36-.38-.27-.64a.47.47 0 01.51-.32c.03 0 .07.01.1.02zm5.25.85c.69.39 1.33.56 2.22.55.62 0 1.29-.2 2.25-.63l.07-.03c1.07-.47 1.99-.87 2.82-.8.96.05 1.83.5 2.74 1.4.09.09.15.21.14.34 0 .13-.06.25-.16.35-.2.18-.54.18-.72 0-.73-.73-1.3-1.03-1.99-1.07-.32-.02-.67.03-1.11.14-.44.14-.93.36-1.4.57-1.09.5-1.87.72-2.61.74-.44-.01-1.02-.05-1.61-.21a4.95 4.95 0 01-1.09-.46c-.23-.12-.31-.43-.19-.67.1-.2.33-.31.54-.25.03 0 .06.02.09.04zm5.36 1.64c.62.48 1.24.74 2.12.86.62.08 1.31-.02 2.31-.31l.07-.02c1.12-.31 2.09-.58 2.91-.4.94.18 1.74.75 2.52 1.77.08.1.11.23.09.36a.46.46 0 01-.21.32c-.22.15-.56.11-.72-.11-.62-.82-1.15-1.2-1.82-1.34-.32-.06-.67-.07-1.12-.01-.45.08-.97.22-1.47.37-1.15.34-1.95.45-2.68.37-.43-.07-1-.19-1.56-.43-.36-.16-.69-.36-1.01-.61a.5.5 0 01-.09-.69c.13-.19.37-.26.57-.17.03.01.06.03.09.05zm4.82 2.23c.56.56 1.13.9 1.99 1.13.6.16 1.3.16 2.33 0h.07c1.15-.17 2.15-.31 2.94-.02.91.31 1.62.97 2.26 2.09.07.11.08.25.05.37a.48.48 0 01-.25.29c-.24.12-.57.03-.7-.2-.5-.9-.98-1.34-1.63-1.57-.31-.1-.66-.16-1.11-.16-.46.02-.99.09-1.5.17-1.18.18-2 .19-2.71 0-.42-.13-.97-.32-1.49-.64-.34-.21-.64-.45-.92-.74-.18-.18-.18-.49 0-.7a.46.46 0 01.67-.03zm4.72 3.02c.47.63 1 1.04 1.81 1.4.57.24 1.27.34 2.31.32h.07c1.16 0 2.17 0 2.91.4.86.43 1.47 1.19 1.95 2.38.05.12.05.25 0 .37a.48.48 0 01-.29.25.537.537 0 01-.66-.3c-.37-.96-.78-1.47-1.4-1.78-.29-.15-.63-.25-1.08-.32-.46-.05-1-.05-1.51-.04-1.2.02-2-.09-2.68-.37-.4-.19-.91-.45-1.39-.84-.31-.25-.57-.53-.81-.86-.16-.2-.11-.51.1-.69.17-.15.43-.15.6 0 .03.02.05.05.07.07zm4.04 3.45c.38.69.85 1.17 1.61 1.63.54.31 1.21.5 2.25.63h.07c1.15.16 2.15.3 2.83.79.79.54 1.3 1.38 1.61 2.62.03.13.01.26-.05.37a.45.45 0 01-.32.21.547.547 0 01-.62-.38c-.24-1-.58-1.56-1.15-1.95-.27-.18-.59-.33-1.02-.46-.45-.11-.98-.18-1.49-.24-1.19-.14-1.97-.36-2.61-.72-.37-.24-.85-.57-1.26-1.02-.27-.29-.5-.6-.69-.96-.13-.22-.04-.52.19-.67a.47.47 0 01.59.07c.02.02.04.05.06.08zm3.73 4.18c.28.74.68 1.27 1.37 1.84.49.39 1.13.67 2.14.93l.07.02c1.12.32 2.09.59 2.69 1.17.71.65 1.1 1.54 1.23 2.82.02.13-.02.26-.1.35-.09.1-.21.16-.34.17-.27.01-.53-.2-.56-.46-.1-1.02-.35-1.62-.86-2.09-.24-.22-.54-.41-.95-.59-.43-.17-.95-.32-1.45-.45-1.16-.31-1.9-.63-2.48-1.08-.33-.29-.76-.68-1.11-1.18a4.57 4.57 0 01-.55-1.05c-.1-.24.03-.52.28-.64.21-.09.45-.03.58.15.02.03.04.06.05.09zm2.96 4.41c.18.77.5 1.35 1.11 2 .43.45 1.03.81 2 1.21l.07.03c1.07.46 1.99.86 2.51 1.52.62.74.88 1.67.85 2.96 0 .13-.06.25-.15.34a.48.48 0 01-.36.12c-.27-.02-.5-.27-.49-.53.03-1.03-.14-1.66-.58-2.19-.21-.25-.48-.47-.86-.71-.4-.23-.9-.44-1.37-.64-1.11-.46-1.8-.88-2.32-1.4-.29-.33-.66-.77-.94-1.32-.18-.35-.32-.72-.4-1.11-.06-.25.1-.52.36-.59.22-.06.45.03.55.23.02.03.03.06.04.09zm2.46 5.03c.07.79.31 1.41.82 2.14.37.5.91.95 1.81 1.48l.06.04c.99.61 1.85 1.13 2.27 1.85.51.82.64 1.78.43 3.05a.44.44 0 01-.2.31c-.11.07-.24.1-.38.07-.26-.06-.46-.33-.41-.6.18-1.01.1-1.66-.27-2.25-.17-.28-.41-.54-.76-.83-.37-.28-.83-.56-1.27-.82-1.03-.61-1.66-1.12-2.1-1.71-.24-.37-.54-.86-.75-1.44-.13-.38-.21-.75-.24-1.16-.03-.26.17-.5.44-.54.22-.03.44.09.51.3.01.03.02.06.02.1zm1.66 5.05c-.03.79.12 1.44.53 2.23.29.55.77 1.06 1.59 1.7l.06.05c.9.73 1.68 1.36 2.01 2.14.39.88.4 1.85.02 3.08-.04.13-.12.23-.24.28-.12.06-.25.07-.38.02a.547.547 0 01-.33-.65c.31-.98.32-1.63.03-2.26-.13-.29-.33-.59-.64-.92-.32-.33-.75-.67-1.15-.98-.94-.74-1.5-1.33-1.85-1.97-.19-.39-.43-.92-.55-1.52a4.63 4.63 0 01-.09-1.18c0-.26.24-.47.51-.47.23 0 .43.15.47.37 0 .03.01.07 0 .1zm1.01 5.51c-.14.78-.08 1.44.21 2.28.22.58.62 1.16 1.34 1.91l.05.05c.79.85 1.48 1.59 1.69 2.4.27.92.14 1.89-.41 3.05-.05.12-.15.21-.27.25-.13.04-.26.03-.38-.04-.24-.13-.35-.45-.23-.68.44-.93.54-1.57.35-2.24-.09-.31-.25-.63-.5-1-.28-.37-.65-.76-1-1.13-.83-.86-1.3-1.53-1.56-2.21-.13-.42-.29-.97-.33-1.59-.03-.4 0-.78.08-1.18.04-.25.3-.43.57-.4.23.03.4.21.41.43v.1zm.24 5.31c-.24.75-.27 1.42-.09 2.29.14.61.46 1.23 1.08 2.07l.04.06c.67.95 1.25 1.77 1.36 2.6.14.95-.12 1.89-.82 2.97-.07.11-.18.18-.3.21-.13.02-.26 0-.37-.09-.22-.16-.29-.49-.14-.71.56-.86.75-1.49.64-2.17-.05-.32-.16-.66-.37-1.06-.22-.4-.54-.84-.84-1.26-.71-.97-1.08-1.69-1.25-2.4-.08-.43-.16-1-.12-1.62.03-.4.1-.78.23-1.16.08-.25.35-.39.62-.32.22.06.37.26.35.48 0 .03 0 .07-.02.1zm-.51 5.58c-.35.71-.47 1.36-.41 2.25.05.62.28 1.28.78 2.2l.03.06c.53 1.04.99 1.93.98 2.77.01.96-.38 1.86-1.22 2.83-.09.1-.2.16-.33.16s-.26-.04-.36-.14a.527.527 0 01-.04-.72c.68-.77.95-1.37.94-2.06 0-.32-.07-.67-.21-1.1-.17-.43-.41-.91-.66-1.36-.57-1.06-.84-1.82-.9-2.55-.02-.44-.02-1.02.11-1.62.08-.39.21-.75.39-1.12.11-.23.4-.34.66-.23.21.09.33.31.28.53 0 .03-.02.06-.03.09zm-1.2 5.17c-.44.66-.65 1.29-.71 2.18-.03.62.11 1.3.48 2.28l.02.07c.39 1.09.73 2.04.61 2.87-.12.95-.62 1.79-1.59 2.64-.1.09-.22.13-.35.12a.52.52 0 01-.34-.18c-.17-.21-.15-.55.06-.72.77-.68 1.12-1.23 1.2-1.92.04-.32.02-.68-.07-1.12-.11-.45-.29-.96-.47-1.44-.42-1.12-.59-1.92-.56-2.65.04-.44.11-1.01.32-1.59.13-.38.31-.72.54-1.05.14-.22.45-.28.68-.14.2.12.28.35.21.56-.01.03-.03.06-.04.09zm-2 5.23c-.52.59-.82 1.19-1 2.06-.12.61-.07 1.31.15 2.33l.02.07c.23 1.14.44 2.12.2 2.93-.25.93-.87 1.68-1.94 2.39-.11.07-.24.1-.36.07a.48.48 0 01-.31-.23.537.537 0 01.16-.71c.86-.56 1.28-1.06 1.46-1.73.08-.31.11-.67.09-1.12-.05-.46-.15-.99-.27-1.49-.26-1.17-.31-1.98-.18-2.7.1-.43.26-.98.54-1.53.18-.35.4-.67.68-.97.17-.19.48-.21.69-.04.18.14.23.38.13.58-.01.03-.03.06-.06.08zm-2.56 4.66c-.6.52-.97 1.07-1.27 1.91-.2.59-.24 1.29-.16 2.33v.07c.09 1.16.16 2.16-.19 2.93-.37.89-1.08 1.55-2.24 2.11-.12.06-.25.07-.37.02a.478.478 0 01-.27-.27c-.1-.25 0-.57.25-.68.93-.44 1.41-.88 1.68-1.52.12-.3.2-.65.24-1.1.02-.46-.02-1-.07-1.51-.1-1.19-.05-2 .18-2.7.16-.41.38-.94.74-1.44.23-.32.49-.61.8-.87.19-.17.51-.15.7.05.16.16.18.41.05.6-.02.03-.04.05-.06.07zm-3.34 4.5c-.66.42-1.11.92-1.52 1.71-.28.55-.42 1.24-.48 2.28v.07c-.09 1.16-.16 2.16-.6 2.87-.49.83-1.29 1.39-2.51 1.78-.12.04-.26.03-.37-.03a.44.44 0 01-.23-.3c-.07-.26.09-.56.34-.64.98-.31 1.52-.68 1.87-1.27.17-.28.29-.61.39-1.05.08-.45.12-.99.15-1.51.06-1.2.23-1.99.55-2.65.21-.38.51-.88.93-1.33.27-.29.57-.54.91-.75.21-.14.52-.08.68.15.13.18.12.43-.03.6-.02.03-.05.04-.08.07zm-3.72 3.79c-.71.34-1.22.77-1.74 1.5-.35.51-.58 1.17-.78 2.2l-.02.07c-.23 1.14-.44 2.12-.97 2.77-.6.75-1.46 1.2-2.73 1.43a.42.42 0 01-.36-.08.436.436 0 01-.19-.33c-.03-.27.16-.54.42-.59 1.01-.18 1.59-.47 2.02-1.01.2-.25.37-.57.52-.99.14-.44.25-.97.34-1.47.22-1.18.49-1.94.9-2.56.26-.35.62-.8 1.1-1.19.31-.25.64-.45 1-.62.23-.11.53 0 .66.23.11.2.06.45-.11.59-.02.02-.05.04-.08.05zm-4.43 3.43c-.75.23-1.32.59-1.93 1.24-.42.46-.74 1.08-1.08 2.07l-.02.07c-.39 1.1-.73 2.04-1.35 2.6-.69.66-1.61.99-2.9 1.04-.13 0-.25-.04-.35-.13a.427.427 0 01-.14-.35c0-.27.23-.52.5-.52 1.03-.03 1.64-.24 2.14-.72.24-.22.44-.51.66-.91.2-.41.38-.92.55-1.41.39-1.13.76-1.85 1.25-2.4.31-.31.73-.71 1.26-1.03.34-.21.69-.36 1.08-.47.24-.08.52.07.61.32.08.21 0 .45-.19.57-.03.02-.06.03-.09.04zm-4.6 2.65c-.78.13-1.38.41-2.07.97-.48.4-.88.97-1.34 1.91l-.04.06c-.53 1.03-.99 1.93-1.68 2.4-.78.56-1.73.76-3.01.64a.466.466 0 01-.43-.54c.04-.27.3-.48.57-.45 1.02.1 1.66-.02 2.22-.43.26-.19.51-.45.77-.81.25-.38.5-.87.73-1.33.53-1.08 1-1.74 1.56-2.22.35-.27.82-.61 1.38-.85.36-.16.73-.26 1.13-.33.25-.05.51.14.57.4.05.22-.06.45-.27.54l-.09.03zm-5.19 2.11c-.79.02-1.43.21-2.19.67-.53.33-1.01.84-1.6 1.7l-.04.06c-.67.95-1.25 1.77-2.01 2.14-.85.45-1.82.52-3.07.21a.48.48 0 01-.3-.22.457.457 0 01-.04-.38c.08-.26.37-.43.62-.37 1 .25 1.65.21 2.26-.11.29-.15.57-.37.88-.7.3-.35.62-.79.91-1.21.68-.99 1.23-1.58 1.85-1.98.38-.22.9-.48 1.49-.65.38-.11.76-.16 1.17-.16.26 0 .48.2.5.48.02.23-.12.43-.34.49-.03 0-.06.01-.1.02zm-5.15 1.31c-.79-.08-1.44.02-2.26.38-.57.26-1.11.7-1.81 1.47l-.05.05c-.79.85-1.48 1.59-2.27 1.86-.9.33-1.87.27-3.07-.2a.51.51 0 01-.27-.25.5.5 0 010-.38c.11-.25.42-.38.67-.28.96.38 1.61.43 2.25.19.3-.11.61-.29.96-.57.35-.3.72-.7 1.06-1.08.8-.89 1.43-1.41 2.1-1.72.41-.16.95-.36 1.56-.45.39-.05.78-.06 1.18 0 .26.02.45.27.44.54a.46.46 0 01-.4.44h-.1zm-5.57.63c-.76-.19-1.43-.18-2.29.06-.6.18-1.19.54-2 1.21l-.06.05c-.91.73-1.68 1.36-2.51 1.52-.94.21-1.89 0-3.02-.62a.476.476 0 01-.23-.29.51.51 0 01.06-.38c.14-.23.47-.32.7-.19.89.51 1.53.65 2.2.5.32-.07.65-.21 1.03-.43.38-.25.81-.59 1.2-.92.92-.77 1.61-1.19 2.32-1.4.43-.1.99-.22 1.61-.22.4 0 .78.05 1.17.16.25.06.41.33.36.6-.04.22-.23.38-.46.38-.03 0-.07 0-.1-.01zm-5.31-.13c-.73-.29-1.4-.37-2.28-.25-.61.09-1.25.37-2.14.93l-.06.04c-.99.61-1.85 1.13-2.69 1.18-.96.08-1.88-.25-2.91-1.02a.468.468 0 01-.19-.32c-.02-.13.02-.26.11-.37.17-.21.51-.25.72-.09.82.62 1.43.84 2.12.79.32-.03.67-.12 1.08-.29.42-.2.88-.48 1.31-.75 1.01-.64 1.76-.97 2.48-1.09.44-.05 1.01-.09 1.62 0 .39.06.77.16 1.14.31.24.09.36.38.28.64a.47.47 0 01-.51.32c-.03 0-.07-.01-.09-.02zm-5.53-.9c-.68-.39-1.33-.56-2.22-.56-.62 0-1.3.19-2.25.63l-.07.03c-1.07.46-1.99.86-2.83.79-.96-.05-1.83-.51-2.74-1.41a.476.476 0 01-.14-.34c0-.13.06-.25.16-.35.2-.18.54-.18.72 0 .72.73 1.3 1.04 1.99 1.08.33.02.68-.02 1.11-.14.44-.14.94-.35 1.4-.56 1.09-.49 1.87-.71 2.61-.73.44.01 1.02.05 1.61.22.38.11.74.26 1.09.47.22.13.31.43.18.67-.1.2-.33.31-.54.25-.03 0-.06-.02-.09-.04zm-5.08-1.55c-.63-.48-1.24-.73-2.13-.85-.62-.08-1.31.02-2.31.32l-.07.02c-1.12.32-2.09.59-2.91.41-.94-.18-1.74-.75-2.53-1.76a.46.46 0 01-.09-.36.46.46 0 01.2-.32c.22-.15.56-.11.71.11.62.82 1.15 1.2 1.83 1.33.32.06.67.07 1.12.01.45-.08.98-.23 1.47-.37 1.15-.34 1.95-.46 2.68-.38.43.07 1 .18 1.56.43.36.16.7.36 1.01.61a.5.5 0 01.09.69c-.13.19-.37.26-.57.17a.218.218 0 01-.08-.05zm-5.08-2.36c-.55-.56-1.13-.9-1.98-1.14-.6-.16-1.3-.16-2.33 0h-.07c-1.15.17-2.15.3-2.93 0-.91-.31-1.62-.98-2.25-2.1a.439.439 0 01-.04-.37.48.48 0 01.25-.29c.24-.12.57-.03.69.2.5.9.97 1.35 1.62 1.58.31.11.66.16 1.11.17.46-.02 1-.09 1.5-.16 1.19-.18 2-.18 2.71 0 .42.13.96.32 1.49.64.34.21.64.45.92.74.18.18.18.49 0 .69a.46.46 0 01-.59.09c-.03-.02-.05-.04-.08-.06zm-4.47-2.87c-.47-.63-1-1.04-1.82-1.39-.57-.24-1.27-.33-2.31-.31h-.07c-1.16 0-2.17 0-2.91-.39-.86-.43-1.47-1.19-1.96-2.38a.475.475 0 010-.37.51.51 0 01.28-.26c.26-.09.56.05.66.29.38.96.79 1.47 1.4 1.78.29.15.63.24 1.08.31.46.05 1 .04 1.51.04 1.2-.02 2 .09 2.69.36.4.19.91.45 1.39.84.31.25.57.53.81.86.16.21.11.51-.09.69-.18.15-.43.15-.6 0l-.07-.07zm-4.26-3.64c-.38-.69-.84-1.17-1.6-1.63-.54-.32-1.21-.51-2.25-.63h-.07c-1.15-.17-2.15-.31-2.83-.81-.79-.54-1.3-1.38-1.6-2.63a.448.448 0 01.06-.36.45.45 0 01.32-.21c.27-.05.55.12.61.38.24 1 .57 1.56 1.14 1.96.27.19.59.33 1.02.46.45.11.98.18 1.49.25 1.19.15 1.97.37 2.61.73.37.24.84.57 1.26 1.02.27.29.5.61.69.96.12.22.04.52-.19.67a.47.47 0 01-.59-.07c-.02-.02-.04-.05-.06-.08zm-3.53-3.97c-.29-.74-.68-1.27-1.37-1.83-.49-.38-1.13-.66-2.14-.93l-.07-.02c-1.12-.31-2.09-.58-2.7-1.16-.71-.65-1.1-1.54-1.24-2.82-.02-.13.02-.26.1-.35.09-.1.21-.16.34-.17.27-.01.53.2.56.46.11 1.02.36 1.62.87 2.09.24.22.54.4.95.59.43.17.95.31 1.45.44 1.16.3 1.91.63 2.49 1.07.33.29.76.68 1.11 1.18.23.33.41.67.55 1.04.1.24-.03.53-.28.64a.478.478 0 01-.63-.23zm-3.12-4.65c-.18-.77-.5-1.35-1.1-2.01-.43-.45-1.03-.81-1.99-1.21l-.07-.03c-1.07-.47-1.98-.87-2.51-1.53-.61-.74-.88-1.68-.83-2.96 0-.13.06-.25.15-.34.1-.09.23-.13.36-.12.27.02.5.27.49.54-.04 1.03.13 1.66.57 2.19.21.25.48.48.86.72.4.22.9.44 1.37.64 1.11.46 1.8.88 2.31 1.41.29.33.66.78.94 1.32.18.35.31.72.4 1.11.06.25-.1.51-.37.59a.456.456 0 01-.55-.23.161.161 0 01-.03-.09zm-2.33-4.77c-.08-.79-.31-1.41-.83-2.14-.37-.5-.91-.94-1.81-1.47l-.06-.04c-1-.6-1.85-1.12-2.28-1.84-.51-.82-.64-1.78-.43-3.05a.44.44 0 01.2-.31c.11-.08.24-.1.38-.07.26.06.46.33.41.6-.17 1.01-.09 1.66.28 2.25.17.27.41.54.76.83.37.28.83.56 1.27.82 1.04.61 1.67 1.12 2.11 1.7.24.37.55.86.75 1.44.13.38.21.75.25 1.15.03.26-.17.5-.44.54a.467.467 0 01-.52-.3c0-.03-.02-.07-.02-.09zm-1.75-5.32c.03-.79-.12-1.44-.52-2.23-.29-.55-.77-1.06-1.59-1.71l-.06-.05c-.9-.74-1.68-1.37-2-2.15-.39-.88-.39-1.85 0-3.08.04-.13.12-.23.24-.28a.5.5 0 01.38-.02c.25.09.41.39.33.65-.32.98-.32 1.63-.04 2.26.13.3.33.59.64.92.33.32.74.67 1.15.99.94.74 1.49 1.34 1.85 1.98.19.4.42.93.55 1.53.08.39.11.78.08 1.18 0 .25-.24.47-.51.47-.23 0-.42-.15-.47-.37v-.1zm-.96-5.22c.14-.78.08-1.44-.22-2.28-.22-.58-.62-1.15-1.35-1.9l-.05-.06c-.8-.85-1.48-1.58-1.7-2.39-.27-.92-.14-1.89.41-3.05.05-.12.15-.21.27-.25a.5.5 0 01.38.03c.24.13.35.44.23.68-.44.93-.54 1.57-.34 2.24.09.31.25.63.51 1 .28.37.65.76 1.01 1.13.83.86 1.3 1.52 1.57 2.21.13.42.3.98.34 1.59.02.4 0 .78-.07 1.18-.04.26-.3.43-.57.4a.479.479 0 01-.42-.43v-.1zm-.25-5.6c.25-.75.28-1.41.1-2.29-.13-.61-.45-1.23-1.07-2.07l-.04-.06c-.67-.95-1.24-1.77-1.35-2.61-.14-.95.13-1.89.83-2.97a.456.456 0 01.67-.12c.22.16.29.49.14.71-.57.86-.75 1.48-.65 2.17.05.32.16.66.36 1.06.23.4.54.84.84 1.26.7.97 1.08 1.69 1.24 2.41.07.43.16 1 .11 1.62-.03.4-.1.78-.24 1.16a.5.5 0 01-.62.31.462.462 0 01-.35-.48c0-.03 0-.07.02-.1zm.49-5.29c.34-.71.47-1.37.4-2.25-.05-.62-.29-1.28-.78-2.2l-.03-.07c-.54-1.03-1-1.92-.99-2.76-.01-.96.38-1.86 1.21-2.83.08-.1.2-.16.33-.16s.26.04.36.13c.19.19.22.52.04.72-.67.77-.94 1.37-.93 2.06 0 .32.07.67.22 1.1.17.43.42.91.66 1.36.57 1.06.84 1.82.92 2.55.02.44.02 1.02-.1 1.62-.08.39-.21.75-.39 1.12-.11.23-.4.34-.66.23a.467.467 0 01-.28-.53c0-.03.02-.07.03-.09zm1.27-5.46c.44-.66.65-1.29.71-2.18.03-.62-.11-1.31-.47-2.29l-.02-.07c-.39-1.1-.72-2.04-.59-2.87.12-.95.63-1.79 1.6-2.63.1-.09.22-.13.35-.12.13.01.25.08.33.18.17.21.14.55-.06.72-.78.67-1.12 1.23-1.21 1.91-.04.32-.02.67.06 1.12.11.45.29.96.47 1.44.42 1.12.58 1.92.55 2.65-.05.44-.12 1.01-.33 1.59-.13.37-.31.72-.54 1.05-.14.21-.44.28-.68.13a.457.457 0 01-.21-.56c.01-.03.03-.06.04-.09zm1.9-4.96c.52-.59.82-1.19 1-2.06.12-.61.07-1.31-.16-2.33v-.07c-.25-1.14-.46-2.12-.22-2.93.25-.93.86-1.68 1.93-2.4.11-.07.24-.1.36-.07.13.03.24.11.31.23.14.23.07.56-.16.71-.86.56-1.27 1.07-1.45 1.73-.08.31-.11.67-.09 1.12.05.46.16.99.27 1.49.26 1.17.32 1.98.19 2.7-.1.43-.25.99-.54 1.53-.19.35-.4.67-.67.97-.17.2-.48.21-.69.05a.468.468 0 01-.13-.58c.01-.03.03-.06.05-.08zm2.7-4.91c.6-.51.97-1.07 1.27-1.9.2-.59.25-1.29.16-2.33v-.07c-.08-1.16-.15-2.16.2-2.93.37-.88 1.09-1.55 2.25-2.11.12-.06.25-.06.37-.02.12.05.22.14.27.27.1.25 0 .57-.25.68-.93.44-1.41.88-1.68 1.51-.13.3-.2.64-.24 1.09-.02.46.02 1 .06 1.51.1 1.19.04 2-.19 2.7-.16.41-.39.94-.74 1.44-.23.32-.49.61-.8.87-.19.17-.5.15-.69-.05a.457.457 0 01-.05-.59c.02-.03.04-.05.07-.07zm3.17-4.27c.66-.43 1.11-.93 1.52-1.72.28-.56.42-1.24.47-2.28v-.07c.08-1.16.15-2.16.59-2.88.49-.83 1.28-1.39 2.51-1.79a.476.476 0 01.61.33c.07.26-.08.56-.34.64-.98.31-1.52.68-1.87 1.28-.16.28-.29.61-.39 1.05-.08.45-.11 1-.14 1.51-.06 1.2-.22 1.99-.54 2.65-.21.38-.51.88-.93 1.33-.27.29-.57.54-.91.75-.22.14-.52.08-.68-.14a.468.468 0 01.03-.6c.02-.02.05-.05.07-.06zm3.92-4c.72-.33 1.22-.76 1.74-1.49.35-.51.59-1.17.78-2.2l.02-.07c.24-1.14.45-2.12.99-2.76.6-.75 1.47-1.2 2.73-1.42.13-.02.26 0 .36.08.11.08.17.2.19.33.03.27-.16.54-.42.59-1.01.17-1.6.46-2.03 1-.2.25-.37.57-.53.99-.14.44-.25.97-.35 1.47-.23 1.18-.5 1.94-.91 2.55-.27.35-.63.8-1.1 1.19-.31.25-.64.45-1.01.62-.23.11-.52 0-.65-.24-.11-.2-.06-.45.11-.59.03-.02.05-.04.08-.05zm4.2-3.25c.75-.24 1.32-.59 1.92-1.25.42-.46.74-1.08 1.07-2.07l.03-.07c.39-1.1.72-2.04 1.34-2.61.69-.66 1.61-.99 2.9-1.04.13 0 .26.04.34.13.1.09.15.22.15.35 0 .27-.23.51-.5.52-1.03.04-1.64.25-2.14.73-.23.22-.44.51-.65.91-.2.42-.38.93-.54 1.41-.38 1.14-.75 1.86-1.24 2.41-.31.31-.73.71-1.25 1.03-.34.2-.69.36-1.08.48-.25.08-.52-.07-.62-.32-.08-.21 0-.45.19-.57.03-.02.06-.03.09-.04zm4.86-2.79c.78-.13 1.38-.41 2.08-.96.48-.4.88-.97 1.35-1.9l.03-.06c.54-1.03 1-1.92 1.7-2.39.78-.56 1.74-.76 3.01-.63.13.01.25.08.32.17.08.11.11.24.09.37-.04.27-.3.48-.57.45-1.02-.11-1.66.02-2.22.42-.26.19-.51.45-.77.81-.25.38-.5.86-.73 1.32-.54 1.07-1 1.73-1.57 2.21-.35.26-.82.6-1.38.84-.36.16-.74.26-1.14.32-.25.04-.5-.13-.56-.41-.05-.22.06-.45.27-.53.03-.02.06-.02.09-.03zm4.92-2c.79-.02 1.43-.21 2.19-.68.53-.33 1-.84 1.59-1.71l.04-.06c.67-.95 1.25-1.78 2-2.15.85-.45 1.82-.52 3.07-.22.13.03.24.11.3.22.07.12.08.25.05.38-.08.26-.36.43-.62.37-1-.24-1.65-.2-2.26.12-.29.15-.56.37-.88.7-.3.35-.61.79-.9 1.22-.67.99-1.23 1.59-1.84 1.99-.38.22-.89.49-1.49.65-.38.1-.76.16-1.17.17-.26 0-.48-.21-.51-.48-.02-.23.12-.43.34-.5.03 0 .07-.01.1-.02zm5.43-1.38c.78.09 1.44-.02 2.26-.37.57-.25 1.11-.69 1.81-1.47l.05-.05c.8-.85 1.48-1.58 2.28-1.85.9-.33 1.88-.26 3.07.21.12.05.22.14.27.25.05.12.05.26-.01.38-.11.25-.42.38-.67.28-.96-.38-1.61-.43-2.25-.2-.3.11-.61.29-.96.57-.35.3-.72.7-1.06 1.08-.81.89-1.43 1.4-2.1 1.71-.41.16-.95.36-1.56.44-.39.05-.78.06-1.18 0a.508.508 0 01-.43-.54c0-.23.18-.41.4-.44h.1z"
                                                    fill="#9e1c2b"
                                                />
                                            </G>
                                        </G>
                                    </Svg>
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
                                            // underlineColorAndroid ='transparent'
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

                                    <View style={[styles.phones_inputs_wrapper, {zIndex: 15}]}>



                                        <DropDownPicker
                                            items={ this.state.phoneCodesArray }
                                            placeholder={i18n.t('code')}
                                            containerStyle={{height: 52, width: 95,   marginRight: 10, zIndex: 15}}
                                            style={[styles.phone_code_dropdown,

                                                {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },

                                            ]}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                                width: 60,
                                                zIndex: 15,
                                                marginBottom: 3,
                                                paddingLeft: 3
                                            }}
                                            dropDownStyle={{backgroundColor: '#fafafa',  width: 180,  zIndex: 15}}
                                            // defaultValue={this.state.selectedPhoneCode}
                                            defaultValue={'+371'}
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
                                                selectionColor='#d9d9d9'
                                                activeOutlineColor='transparent'
                                                placeholderTextColor="#c9a477"
                                                keyboardType="numeric"

                                            />

                                            {this.state.phone_number_field_error &&

                                            <Text style={styles.error_text}>
                                                {this.state.phone_number_field_error_text}
                                            </Text>

                                            }


                                        </View>
                                    </View>
                                </View>

                                <TouchableOpacity style={[styles.turn_to_step2_btn, {zIndex: -1}]} onPress={() => {this.validateFirstForm()}}>
                                    <Text style={styles.turn_to_step2_btn_text}>{i18n.t('next')}</Text>
                                </TouchableOpacity>


                            </KeyboardAwareScrollView>

                            :
                            <ScrollView style={styles.logo_inputs_wrapper}>
                                <View style={styles.step_logo}>
                                    <Svg
                                        width={200}
                                        height={142}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 202 157.49" >

                                        <G id="b">
                                            <G id="c">
                                                <Path
                                                    d="M146.78 44.96c0 24.83-20.13 44.95-44.96 44.95S56.87 69.78 56.87 44.96 77 0 101.82 0s44.96 20.13 44.96 44.96z"
                                                    fill="#fff"
                                                />
                                                <Path
                                                    d="M46.76 148.12c2.6 0 4.68 2.09 4.68 4.69s-2.08 4.67-4.68 4.67-4.67-2.07-4.67-4.67 2.07-4.69 4.67-4.69zm0 8.06c1.86 0 3.38-1.51 3.38-3.37s-1.52-3.39-3.38-3.39-3.37 1.55-3.37 3.39 1.52 3.37 3.37 3.37zm7.46-7.68c0-.13.12-.25.25-.25h.87c.14 0 .25.12.25.25v5.37c0 1.3.83 2.31 2.16 2.31s2.18-1 2.18-2.29v-5.4c0-.13.1-.25.25-.25h.87c.13 0 .25.12.25.25v5.46c0 1.98-1.5 3.52-3.55 3.52s-3.52-1.55-3.52-3.52v-5.46zm11.79.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm6.12-.98c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61zm10.18.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm9.01-.88c-.08-.17.03-.34.22-.34h.92c.1 0 .2.08.22.14l2.86 6.43h.08l2.86-6.43c.03-.07.1-.14.22-.14h.92c.19 0 .3.17.22.34l-3.99 8.75c-.04.08-.12.14-.22.14H103c-.09 0-.18-.06-.22-.14l-3.96-8.75zm10.9-.09c0-.13.12-.25.25-.25h.86c.13 0 .25.12.25.25v8.61c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-8.61zm4.84 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm6.91 8.52l3.99-8.75c.04-.08.16-.14.22-.14h.13c.06 0 .18.07.22.14l3.97 8.75c.08.17-.03.34-.22.34h-.82c-.16 0-.25-.08-.3-.2l-.81-1.78h-4.25c-.26.6-.53 1.18-.79 1.78a.33.33 0 01-.3.2h-.82c-.2 0-.3-.17-.22-.34zm5.89-2.76l-1.6-3.56h-.06l-1.59 3.56h3.25zm8.68-6.14c1.25 0 2.27.46 3.16 1.21.1.1.12.26.01.36-.19.21-.39.4-.58.61-.1.12-.21.1-.34-.01-.61-.53-1.42-.88-2.21-.88-1.85 0-3.26 1.56-3.26 3.38s1.42 3.37 3.26 3.37c1.08 0 1.82-.39 1.95-.44v-1.46h-1.27c-.14 0-.25-.1-.25-.23v-.75c0-.14.1-.25.25-.25h2.37c.13 0 .23.12.23.25 0 1.04.01 2.11.01 3.15 0 .07-.05.17-.1.21 0 0-1.34.86-3.22.86-2.59 0-4.68-2.07-4.68-4.67s2.09-4.69 4.68-4.69zm6.49.38c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61z"
                                                    fill="#4c575d"
                                                />
                                                <Path
                                                    d="M62.69 126.98c0 4.38 0 6.05-.81 7.97-.57 1.35-1.75 2.62-3.94 4.13-.35.24-.78.54-1.05.67-.05.03-.11.05-.19.05s-.19-.05-.19-.16c0-.16.14-.24.38-.4.32-.19.7-.51.95-.76 1.76-1.78 2.59-3.21 2.59-10.18v-7.81c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.92.08 3.05.08s1.84-.08 2.65-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.13-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v6.48zm8.28-6.48c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.21-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.14-.22.43-.22 1.21 0 2.86.08 3.1.08s1.86-.08 2.67-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.11-.95.59-1 1.54-.06.87-.06 1.62-.06 5.84v3.78c0 3.89.86 5.57 2.03 6.67 1.32 1.24 2.54 1.48 4.08 1.48 1.65 0 3.27-.78 4.24-1.94 1.24-1.54 1.57-3.83 1.57-6.62v-3.38c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.7.08 2.86.08.19 0 1.46-.08 2.27-.08.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.67.08-.73.16-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v2.89c0 2.92-.32 6.16-2.48 8.08-1.95 1.73-3.97 2-5.57 2-.92 0-3.65-.11-5.56-1.92-1.32-1.27-2.35-3.16-2.35-7.11v-3.94zm41.92 12.21c-.16 0-.54 0-1.05-.08-.68-.11-1.84-.4-3.29-1.95-1.57-1.67-3.4-4.08-5.62-6.92 2.43-2.24 3.27-4.24 3.27-6.24 0-1.87-1.19-3.19-1.86-3.67-1.43-1.03-3.24-1.19-4.94-1.19-.84 0-2.89.08-3.19.08-.13 0-1.84-.08-3.05-.08-.3 0-.43.05-.43.22 0 .11.11.16.22.16.24 0 .7.03.92.08.89.19 1.11.62 1.16 1.54.05.87.05 1.62.05 5.84v4.75c0 2.59 0 4.73-.13 5.86-.11.78-.24 1.38-.78 1.49-.24.05-.57.11-.81.11-.16 0-.22.08-.22.16 0 .16.14.22.43.22.81 0 2.51-.08 2.54-.08.14 0 1.84.08 3.32.08.3 0 .43-.08.43-.22 0-.08-.05-.16-.22-.16-.24 0-.84-.05-1.21-.11-.81-.11-.97-.7-1.05-1.49-.13-1.13-.13-3.27-.13-5.86v-11.24c0-.16.08-.27.22-.32.27-.08 1-.16 1.81-.16 2.89 0 4.67 2.03 4.67 5.4 0 2.05-.7 3.51-1.65 4.16-.62.43-1.62.66-2.28.74-.21.03-.56.03-.74.02.7.14 1.25.12 1.84.75.54.7 1.81 2.51 2.94 4 1.54 2.02 2.48 3.35 3.65 3.97.7.38 1.38.51 2.89.51h1.92c.49 0 .65-.05.65-.22 0-.08-.11-.16-.24-.16zm25.35-3.08c.11.97.3 2.49 1.46 2.87.78.24 1.49.24 1.76.24.14 0 .22.03.22.14 0 .16-.24.24-.57.24-.6 0-3.51-.03-4.51-.11-.62-.06-.76-.14-.76-.27 0-.11.05-.16.19-.19s.16-.49.11-.97l-1.3-14.02h-.08l-6.62 14.04c-.57 1.19-.65 1.43-.89 1.43-.19 0-.32-.27-.84-1.24-.7-1.32-3.02-6-3.16-6.27-.24-.48-3.27-6.97-3.56-7.7h-.11l-1.08 12.53c-.03.43-.03.92-.03 1.38 0 .41.29.76.7.84.46.11.86.13 1.03.13.11 0 .22.05.22.14 0 .19-.16.24-.49.24-1 0-2.3-.08-2.51-.08-.24 0-1.54.08-2.27.08-.27 0-.46-.05-.46-.24 0-.08.14-.14.27-.14.22 0 .41 0 .81-.08.89-.16.97-1.22 1.08-2.24l1.94-17.61c.03-.3.14-.49.3-.49s.27.11.41.41l8.26 16.99 7.94-16.96c.11-.24.22-.43.4-.43s.27.22.32.73l1.81 16.61zm63.49 3.08c-.27 0-.68-.03-1.08-.16-.57-.16-1.35-.59-2.32-3-1.65-4.11-5.89-15.26-6.29-16.29-.32-.84-.43-.97-.6-.97s-.27.16-.59 1.05l-6.13 16.77c-.49 1.35-1.03 2.38-2.27 2.54-.22.03-.59.05-.78.05-.14 0-.24.05-.24.16 0 .16.16.22.51.22 1.27 0 2.76-.08 3.05-.08s1.46.08 2.11.08c.24 0 .4-.05.4-.22 0-.11-.08-.16-.27-.16h-.27c-.46 0-1.03-.24-1.03-.78 0-.49.14-1.13.38-1.81l2.11-6.16 2.38-7.29c.13-.41.27-.41.4 0l2.57 7.29 3 7.97c.16.43 0 .68-.16.73-.11.03-.19.08-.19.19 0 .16.3.16.81.19 1.86.05 3.83.05 4.24.05.3 0 .54-.05.54-.22 0-.14-.11-.16-.27-.16zm-30.46-7.4c0 3.97.11 5.7.6 6.19.43.43 1.13.62 3.24.62 1.43 0 2.62-.03 3.27-.81.35-.43.62-1.11.7-1.62.03-.21.08-.35.24-.35.13 0 .16.11.16.4s-.19 1.92-.41 2.7c-.19.62-.27.73-1.7.73-1.94 0-3.35-.06-4.48-.08-1.14-.05-1.97-.08-2.76-.08-.11 0-.57.03-1.11.03-.54.03-1.13.05-1.54.05-.3 0-.43-.05-.43-.22 0-.08.05-.16.22-.16.24 0 .57-.05.81-.11.54-.11.68-.7.79-1.49.13-1.13.13-3.27.13-5.86v-4.75c0-4.22 0-4.97-.05-5.84-.06-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.21 0 2.92.08 3.05.08s2.11-.08 2.92-.08c.29 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.57.03-.89.08-.78.13-1 .59-1.05 1.54-.05.87-.05 1.62-.05 5.84v4.81zm-159.79 4.56c1.58-3.66 5.23-13.18 5.83-15.15.14-.41.24-.79.24-1.04 0-.22-.08-.49-.35-.63-.33-.11-.74-.11-1.03-.11-.16 0-.3-.03-.3-.16 0-.17.16-.22.6-.22 1.09 0 2.35.08 2.67.08.16 0 1.34-.08 2.13-.08.3 0 .46.06.46.19s-.11.19-.33.19c-.19 0-.79 0-1.31.33-.35.24-.76.71-1.5 2.56-.3.77-1.66 4.04-3.05 7.4-1.66 3.99-2.89 6.93-3.52 8.27-.76 1.64-.87 2.08-1.14 2.08-.33 0-.46-.38-.98-1.69l-6.68-16.73c-.6-1.53-1.01-1.83-1.96-2.1-.41-.11-.87-.11-1.04-.11s-.22-.08-.22-.19c0-.16.27-.19.71-.19 1.31 0 2.86.08 3.19.08.27 0 1.5-.08 2.54-.08.49 0 .74.06.74.19s-.08.19-.27.19c-.3 0-.79.03-1.04.14-.3.14-.35.35-.35.55 0 .35.33 1.2.74 2.26l5.24 13.97zm16.02-4.58c0 2.62 0 4.78.14 5.92.08.79.25 1.39 1.06 1.5.38.06.98.11 1.23.11.16 0 .22.08.22.17 0 .14-.14.22-.44.22-1.5 0-3.22-.08-3.35-.08s-1.85.08-2.67.08c-.3 0-.44-.05-.44-.22 0-.08.06-.17.22-.17.24 0 .57-.05.82-.11.55-.11.68-.71.79-1.5.14-1.15.14-3.3.14-5.92v-4.8c0-4.26 0-5.02-.06-5.9-.05-.93-.33-1.39-.93-1.53-.3-.08-.65-.11-.84-.11-.11 0-.22-.05-.22-.16 0-.17.14-.22.44-.22.9 0 2.62.08 2.75.08s1.85-.08 2.67-.08c.3 0 .44.06.44.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.74.14-.96.6-1.01 1.56-.06.87-.06 1.64-.06 5.9v4.8zm24.3 7.53c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.34-3.03-1.66-4.15-5.95-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.16.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.24 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zm112.07 0c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.35-3.03-1.66-4.15-5.94-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.17.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.25 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zM101.82 82.72c-20.82 0-37.76-16.94-37.76-37.76S81 7.19 101.82 7.19s37.77 16.94 37.77 37.77-16.94 37.76-37.77 37.76zm0-74.53c-20.27 0-36.76 16.49-36.76 36.77s16.49 36.76 36.76 36.76 36.77-16.49 36.77-36.76S122.1 8.19 101.82 8.19zm16.1 15.84v.49s-4.94-.3-6.32 1.71c-.29.41-.42 1.24-.48 2.06v2.93l-7.96 3.7v-6.64c-.06-.82-.19-1.65-.47-2.06-1.38-2.01-6.31-1.71-6.31-1.71v-.49h21.54zm-14.76 28.91v10.19c0 3.62-.36 4.75-1.41 5.74-1.73 1.64-2.62 1.95-3.74 2.02 2.21-.1 4.75-.7 6.24-1.44 1.63-.8 3.41-2.12 4.4-3.52 1-1.41 1.63-3.02 2.06-4.89.43-1.87.42-4.43.42-6.56v-5.25l-7.96 3.7zm7.96-11.56l-7.96-3.7v1.84l7.96 3.69v-1.83zm0-8.81l-7.96 3.71v.02l7.96 3.69v-7.43zm0 12.18l-7.96-3.69v1.71l7.96 3.7v-1.72zm0 3.09l-7.96-3.72v7.44l7.96-3.69v-.03zM93.23 68.87c-.55-.6-.84-1.45-.58-1.96s.69-.65 1.13-.91c1.54-.93 2.57-2.61 2.57-4.54s-.96-3.49-2.41-4.44c-.49-.37-1.1-.62-1.82-.75-.1-.02-.2-.03-.3-.05-.25-.04-.5-.06-.77-.06h-.13c-1.68 0-2.85.6-3.71 1.56-.4.45-.74.98-.99 1.57-.3.66-.47 1.4-.47 2.17v.13c0 1.3.52 2.81 1.11 3.84.58 1.04 1.48 2.18 2.5 2.93 1.01.75 2.09 1.45 3.46 1.84 1.23.35 2.42.63 3.87.69-1.07-.1-2.12-.6-3.45-2.02zm6.73-63.85c.77.19 1.43.18 2.29-.07.6-.18 1.19-.54 1.99-1.22l.06-.05c.9-.74 1.68-1.37 2.5-1.53.94-.21 1.89-.01 3.02.61.12.06.2.17.23.29.03.13.01.26-.06.38-.14.23-.47.32-.7.19-.9-.5-1.53-.64-2.21-.49-.32.07-.64.21-1.03.44-.38.25-.8.6-1.2.93-.92.77-1.61 1.2-2.31 1.41-.43.11-.99.23-1.61.23-.4 0-.78-.05-1.17-.15-.25-.06-.41-.33-.36-.59.04-.22.23-.39.46-.39.03 0 .07 0 .1.01zm5.6.13c.73.3 1.39.38 2.27.25.62-.09 1.26-.37 2.14-.93l.06-.04c1-.6 1.85-1.12 2.69-1.17.96-.08 1.88.25 2.9 1.02.11.08.17.19.19.32.02.13-.02.26-.11.36-.17.21-.51.25-.72.09-.82-.62-1.43-.85-2.12-.8-.32.03-.67.12-1.08.29-.42.2-.88.48-1.31.75-1.01.64-1.76.96-2.48 1.08-.44.05-1.01.09-1.62 0-.39-.06-.77-.16-1.14-.31-.24-.09-.36-.38-.27-.64a.47.47 0 01.51-.32c.03 0 .07.01.1.02zm5.25.85c.69.39 1.33.56 2.22.55.62 0 1.29-.2 2.25-.63l.07-.03c1.07-.47 1.99-.87 2.82-.8.96.05 1.83.5 2.74 1.4.09.09.15.21.14.34 0 .13-.06.25-.16.35-.2.18-.54.18-.72 0-.73-.73-1.3-1.03-1.99-1.07-.32-.02-.67.03-1.11.14-.44.14-.93.36-1.4.57-1.09.5-1.87.72-2.61.74-.44-.01-1.02-.05-1.61-.21a4.95 4.95 0 01-1.09-.46c-.23-.12-.31-.43-.19-.67.1-.2.33-.31.54-.25.03 0 .06.02.09.04zm5.36 1.64c.62.48 1.24.74 2.12.86.62.08 1.31-.02 2.31-.31l.07-.02c1.12-.31 2.09-.58 2.91-.4.94.18 1.74.75 2.52 1.77.08.1.11.23.09.36a.46.46 0 01-.21.32c-.22.15-.56.11-.72-.11-.62-.82-1.15-1.2-1.82-1.34-.32-.06-.67-.07-1.12-.01-.45.08-.97.22-1.47.37-1.15.34-1.95.45-2.68.37-.43-.07-1-.19-1.56-.43-.36-.16-.69-.36-1.01-.61a.5.5 0 01-.09-.69c.13-.19.37-.26.57-.17.03.01.06.03.09.05zm4.82 2.23c.56.56 1.13.9 1.99 1.13.6.16 1.3.16 2.33 0h.07c1.15-.17 2.15-.31 2.94-.02.91.31 1.62.97 2.26 2.09.07.11.08.25.05.37a.48.48 0 01-.25.29c-.24.12-.57.03-.7-.2-.5-.9-.98-1.34-1.63-1.57-.31-.1-.66-.16-1.11-.16-.46.02-.99.09-1.5.17-1.18.18-2 .19-2.71 0-.42-.13-.97-.32-1.49-.64-.34-.21-.64-.45-.92-.74-.18-.18-.18-.49 0-.7a.46.46 0 01.67-.03zm4.72 3.02c.47.63 1 1.04 1.81 1.4.57.24 1.27.34 2.31.32h.07c1.16 0 2.17 0 2.91.4.86.43 1.47 1.19 1.95 2.38.05.12.05.25 0 .37a.48.48 0 01-.29.25.537.537 0 01-.66-.3c-.37-.96-.78-1.47-1.4-1.78-.29-.15-.63-.25-1.08-.32-.46-.05-1-.05-1.51-.04-1.2.02-2-.09-2.68-.37-.4-.19-.91-.45-1.39-.84-.31-.25-.57-.53-.81-.86-.16-.2-.11-.51.1-.69.17-.15.43-.15.6 0 .03.02.05.05.07.07zm4.04 3.45c.38.69.85 1.17 1.61 1.63.54.31 1.21.5 2.25.63h.07c1.15.16 2.15.3 2.83.79.79.54 1.3 1.38 1.61 2.62.03.13.01.26-.05.37a.45.45 0 01-.32.21.547.547 0 01-.62-.38c-.24-1-.58-1.56-1.15-1.95-.27-.18-.59-.33-1.02-.46-.45-.11-.98-.18-1.49-.24-1.19-.14-1.97-.36-2.61-.72-.37-.24-.85-.57-1.26-1.02-.27-.29-.5-.6-.69-.96-.13-.22-.04-.52.19-.67a.47.47 0 01.59.07c.02.02.04.05.06.08zm3.73 4.18c.28.74.68 1.27 1.37 1.84.49.39 1.13.67 2.14.93l.07.02c1.12.32 2.09.59 2.69 1.17.71.65 1.1 1.54 1.23 2.82.02.13-.02.26-.1.35-.09.1-.21.16-.34.17-.27.01-.53-.2-.56-.46-.1-1.02-.35-1.62-.86-2.09-.24-.22-.54-.41-.95-.59-.43-.17-.95-.32-1.45-.45-1.16-.31-1.9-.63-2.48-1.08-.33-.29-.76-.68-1.11-1.18a4.57 4.57 0 01-.55-1.05c-.1-.24.03-.52.28-.64.21-.09.45-.03.58.15.02.03.04.06.05.09zm2.96 4.41c.18.77.5 1.35 1.11 2 .43.45 1.03.81 2 1.21l.07.03c1.07.46 1.99.86 2.51 1.52.62.74.88 1.67.85 2.96 0 .13-.06.25-.15.34a.48.48 0 01-.36.12c-.27-.02-.5-.27-.49-.53.03-1.03-.14-1.66-.58-2.19-.21-.25-.48-.47-.86-.71-.4-.23-.9-.44-1.37-.64-1.11-.46-1.8-.88-2.32-1.4-.29-.33-.66-.77-.94-1.32-.18-.35-.32-.72-.4-1.11-.06-.25.1-.52.36-.59.22-.06.45.03.55.23.02.03.03.06.04.09zm2.46 5.03c.07.79.31 1.41.82 2.14.37.5.91.95 1.81 1.48l.06.04c.99.61 1.85 1.13 2.27 1.85.51.82.64 1.78.43 3.05a.44.44 0 01-.2.31c-.11.07-.24.1-.38.07-.26-.06-.46-.33-.41-.6.18-1.01.1-1.66-.27-2.25-.17-.28-.41-.54-.76-.83-.37-.28-.83-.56-1.27-.82-1.03-.61-1.66-1.12-2.1-1.71-.24-.37-.54-.86-.75-1.44-.13-.38-.21-.75-.24-1.16-.03-.26.17-.5.44-.54.22-.03.44.09.51.3.01.03.02.06.02.1zm1.66 5.05c-.03.79.12 1.44.53 2.23.29.55.77 1.06 1.59 1.7l.06.05c.9.73 1.68 1.36 2.01 2.14.39.88.4 1.85.02 3.08-.04.13-.12.23-.24.28-.12.06-.25.07-.38.02a.547.547 0 01-.33-.65c.31-.98.32-1.63.03-2.26-.13-.29-.33-.59-.64-.92-.32-.33-.75-.67-1.15-.98-.94-.74-1.5-1.33-1.85-1.97-.19-.39-.43-.92-.55-1.52a4.63 4.63 0 01-.09-1.18c0-.26.24-.47.51-.47.23 0 .43.15.47.37 0 .03.01.07 0 .1zm1.01 5.51c-.14.78-.08 1.44.21 2.28.22.58.62 1.16 1.34 1.91l.05.05c.79.85 1.48 1.59 1.69 2.4.27.92.14 1.89-.41 3.05-.05.12-.15.21-.27.25-.13.04-.26.03-.38-.04-.24-.13-.35-.45-.23-.68.44-.93.54-1.57.35-2.24-.09-.31-.25-.63-.5-1-.28-.37-.65-.76-1-1.13-.83-.86-1.3-1.53-1.56-2.21-.13-.42-.29-.97-.33-1.59-.03-.4 0-.78.08-1.18.04-.25.3-.43.57-.4.23.03.4.21.41.43v.1zm.24 5.31c-.24.75-.27 1.42-.09 2.29.14.61.46 1.23 1.08 2.07l.04.06c.67.95 1.25 1.77 1.36 2.6.14.95-.12 1.89-.82 2.97-.07.11-.18.18-.3.21-.13.02-.26 0-.37-.09-.22-.16-.29-.49-.14-.71.56-.86.75-1.49.64-2.17-.05-.32-.16-.66-.37-1.06-.22-.4-.54-.84-.84-1.26-.71-.97-1.08-1.69-1.25-2.4-.08-.43-.16-1-.12-1.62.03-.4.1-.78.23-1.16.08-.25.35-.39.62-.32.22.06.37.26.35.48 0 .03 0 .07-.02.1zm-.51 5.58c-.35.71-.47 1.36-.41 2.25.05.62.28 1.28.78 2.2l.03.06c.53 1.04.99 1.93.98 2.77.01.96-.38 1.86-1.22 2.83-.09.1-.2.16-.33.16s-.26-.04-.36-.14a.527.527 0 01-.04-.72c.68-.77.95-1.37.94-2.06 0-.32-.07-.67-.21-1.1-.17-.43-.41-.91-.66-1.36-.57-1.06-.84-1.82-.9-2.55-.02-.44-.02-1.02.11-1.62.08-.39.21-.75.39-1.12.11-.23.4-.34.66-.23.21.09.33.31.28.53 0 .03-.02.06-.03.09zm-1.2 5.17c-.44.66-.65 1.29-.71 2.18-.03.62.11 1.3.48 2.28l.02.07c.39 1.09.73 2.04.61 2.87-.12.95-.62 1.79-1.59 2.64-.1.09-.22.13-.35.12a.52.52 0 01-.34-.18c-.17-.21-.15-.55.06-.72.77-.68 1.12-1.23 1.2-1.92.04-.32.02-.68-.07-1.12-.11-.45-.29-.96-.47-1.44-.42-1.12-.59-1.92-.56-2.65.04-.44.11-1.01.32-1.59.13-.38.31-.72.54-1.05.14-.22.45-.28.68-.14.2.12.28.35.21.56-.01.03-.03.06-.04.09zm-2 5.23c-.52.59-.82 1.19-1 2.06-.12.61-.07 1.31.15 2.33l.02.07c.23 1.14.44 2.12.2 2.93-.25.93-.87 1.68-1.94 2.39-.11.07-.24.1-.36.07a.48.48 0 01-.31-.23.537.537 0 01.16-.71c.86-.56 1.28-1.06 1.46-1.73.08-.31.11-.67.09-1.12-.05-.46-.15-.99-.27-1.49-.26-1.17-.31-1.98-.18-2.7.1-.43.26-.98.54-1.53.18-.35.4-.67.68-.97.17-.19.48-.21.69-.04.18.14.23.38.13.58-.01.03-.03.06-.06.08zm-2.56 4.66c-.6.52-.97 1.07-1.27 1.91-.2.59-.24 1.29-.16 2.33v.07c.09 1.16.16 2.16-.19 2.93-.37.89-1.08 1.55-2.24 2.11-.12.06-.25.07-.37.02a.478.478 0 01-.27-.27c-.1-.25 0-.57.25-.68.93-.44 1.41-.88 1.68-1.52.12-.3.2-.65.24-1.1.02-.46-.02-1-.07-1.51-.1-1.19-.05-2 .18-2.7.16-.41.38-.94.74-1.44.23-.32.49-.61.8-.87.19-.17.51-.15.7.05.16.16.18.41.05.6-.02.03-.04.05-.06.07zm-3.34 4.5c-.66.42-1.11.92-1.52 1.71-.28.55-.42 1.24-.48 2.28v.07c-.09 1.16-.16 2.16-.6 2.87-.49.83-1.29 1.39-2.51 1.78-.12.04-.26.03-.37-.03a.44.44 0 01-.23-.3c-.07-.26.09-.56.34-.64.98-.31 1.52-.68 1.87-1.27.17-.28.29-.61.39-1.05.08-.45.12-.99.15-1.51.06-1.2.23-1.99.55-2.65.21-.38.51-.88.93-1.33.27-.29.57-.54.91-.75.21-.14.52-.08.68.15.13.18.12.43-.03.6-.02.03-.05.04-.08.07zm-3.72 3.79c-.71.34-1.22.77-1.74 1.5-.35.51-.58 1.17-.78 2.2l-.02.07c-.23 1.14-.44 2.12-.97 2.77-.6.75-1.46 1.2-2.73 1.43a.42.42 0 01-.36-.08.436.436 0 01-.19-.33c-.03-.27.16-.54.42-.59 1.01-.18 1.59-.47 2.02-1.01.2-.25.37-.57.52-.99.14-.44.25-.97.34-1.47.22-1.18.49-1.94.9-2.56.26-.35.62-.8 1.1-1.19.31-.25.64-.45 1-.62.23-.11.53 0 .66.23.11.2.06.45-.11.59-.02.02-.05.04-.08.05zm-4.43 3.43c-.75.23-1.32.59-1.93 1.24-.42.46-.74 1.08-1.08 2.07l-.02.07c-.39 1.1-.73 2.04-1.35 2.6-.69.66-1.61.99-2.9 1.04-.13 0-.25-.04-.35-.13a.427.427 0 01-.14-.35c0-.27.23-.52.5-.52 1.03-.03 1.64-.24 2.14-.72.24-.22.44-.51.66-.91.2-.41.38-.92.55-1.41.39-1.13.76-1.85 1.25-2.4.31-.31.73-.71 1.26-1.03.34-.21.69-.36 1.08-.47.24-.08.52.07.61.32.08.21 0 .45-.19.57-.03.02-.06.03-.09.04zm-4.6 2.65c-.78.13-1.38.41-2.07.97-.48.4-.88.97-1.34 1.91l-.04.06c-.53 1.03-.99 1.93-1.68 2.4-.78.56-1.73.76-3.01.64a.466.466 0 01-.43-.54c.04-.27.3-.48.57-.45 1.02.1 1.66-.02 2.22-.43.26-.19.51-.45.77-.81.25-.38.5-.87.73-1.33.53-1.08 1-1.74 1.56-2.22.35-.27.82-.61 1.38-.85.36-.16.73-.26 1.13-.33.25-.05.51.14.57.4.05.22-.06.45-.27.54l-.09.03zm-5.19 2.11c-.79.02-1.43.21-2.19.67-.53.33-1.01.84-1.6 1.7l-.04.06c-.67.95-1.25 1.77-2.01 2.14-.85.45-1.82.52-3.07.21a.48.48 0 01-.3-.22.457.457 0 01-.04-.38c.08-.26.37-.43.62-.37 1 .25 1.65.21 2.26-.11.29-.15.57-.37.88-.7.3-.35.62-.79.91-1.21.68-.99 1.23-1.58 1.85-1.98.38-.22.9-.48 1.49-.65.38-.11.76-.16 1.17-.16.26 0 .48.2.5.48.02.23-.12.43-.34.49-.03 0-.06.01-.1.02zm-5.15 1.31c-.79-.08-1.44.02-2.26.38-.57.26-1.11.7-1.81 1.47l-.05.05c-.79.85-1.48 1.59-2.27 1.86-.9.33-1.87.27-3.07-.2a.51.51 0 01-.27-.25.5.5 0 010-.38c.11-.25.42-.38.67-.28.96.38 1.61.43 2.25.19.3-.11.61-.29.96-.57.35-.3.72-.7 1.06-1.08.8-.89 1.43-1.41 2.1-1.72.41-.16.95-.36 1.56-.45.39-.05.78-.06 1.18 0 .26.02.45.27.44.54a.46.46 0 01-.4.44h-.1zm-5.57.63c-.76-.19-1.43-.18-2.29.06-.6.18-1.19.54-2 1.21l-.06.05c-.91.73-1.68 1.36-2.51 1.52-.94.21-1.89 0-3.02-.62a.476.476 0 01-.23-.29.51.51 0 01.06-.38c.14-.23.47-.32.7-.19.89.51 1.53.65 2.2.5.32-.07.65-.21 1.03-.43.38-.25.81-.59 1.2-.92.92-.77 1.61-1.19 2.32-1.4.43-.1.99-.22 1.61-.22.4 0 .78.05 1.17.16.25.06.41.33.36.6-.04.22-.23.38-.46.38-.03 0-.07 0-.1-.01zm-5.31-.13c-.73-.29-1.4-.37-2.28-.25-.61.09-1.25.37-2.14.93l-.06.04c-.99.61-1.85 1.13-2.69 1.18-.96.08-1.88-.25-2.91-1.02a.468.468 0 01-.19-.32c-.02-.13.02-.26.11-.37.17-.21.51-.25.72-.09.82.62 1.43.84 2.12.79.32-.03.67-.12 1.08-.29.42-.2.88-.48 1.31-.75 1.01-.64 1.76-.97 2.48-1.09.44-.05 1.01-.09 1.62 0 .39.06.77.16 1.14.31.24.09.36.38.28.64a.47.47 0 01-.51.32c-.03 0-.07-.01-.09-.02zm-5.53-.9c-.68-.39-1.33-.56-2.22-.56-.62 0-1.3.19-2.25.63l-.07.03c-1.07.46-1.99.86-2.83.79-.96-.05-1.83-.51-2.74-1.41a.476.476 0 01-.14-.34c0-.13.06-.25.16-.35.2-.18.54-.18.72 0 .72.73 1.3 1.04 1.99 1.08.33.02.68-.02 1.11-.14.44-.14.94-.35 1.4-.56 1.09-.49 1.87-.71 2.61-.73.44.01 1.02.05 1.61.22.38.11.74.26 1.09.47.22.13.31.43.18.67-.1.2-.33.31-.54.25-.03 0-.06-.02-.09-.04zm-5.08-1.55c-.63-.48-1.24-.73-2.13-.85-.62-.08-1.31.02-2.31.32l-.07.02c-1.12.32-2.09.59-2.91.41-.94-.18-1.74-.75-2.53-1.76a.46.46 0 01-.09-.36.46.46 0 01.2-.32c.22-.15.56-.11.71.11.62.82 1.15 1.2 1.83 1.33.32.06.67.07 1.12.01.45-.08.98-.23 1.47-.37 1.15-.34 1.95-.46 2.68-.38.43.07 1 .18 1.56.43.36.16.7.36 1.01.61a.5.5 0 01.09.69c-.13.19-.37.26-.57.17a.218.218 0 01-.08-.05zm-5.08-2.36c-.55-.56-1.13-.9-1.98-1.14-.6-.16-1.3-.16-2.33 0h-.07c-1.15.17-2.15.3-2.93 0-.91-.31-1.62-.98-2.25-2.1a.439.439 0 01-.04-.37.48.48 0 01.25-.29c.24-.12.57-.03.69.2.5.9.97 1.35 1.62 1.58.31.11.66.16 1.11.17.46-.02 1-.09 1.5-.16 1.19-.18 2-.18 2.71 0 .42.13.96.32 1.49.64.34.21.64.45.92.74.18.18.18.49 0 .69a.46.46 0 01-.59.09c-.03-.02-.05-.04-.08-.06zm-4.47-2.87c-.47-.63-1-1.04-1.82-1.39-.57-.24-1.27-.33-2.31-.31h-.07c-1.16 0-2.17 0-2.91-.39-.86-.43-1.47-1.19-1.96-2.38a.475.475 0 010-.37.51.51 0 01.28-.26c.26-.09.56.05.66.29.38.96.79 1.47 1.4 1.78.29.15.63.24 1.08.31.46.05 1 .04 1.51.04 1.2-.02 2 .09 2.69.36.4.19.91.45 1.39.84.31.25.57.53.81.86.16.21.11.51-.09.69-.18.15-.43.15-.6 0l-.07-.07zm-4.26-3.64c-.38-.69-.84-1.17-1.6-1.63-.54-.32-1.21-.51-2.25-.63h-.07c-1.15-.17-2.15-.31-2.83-.81-.79-.54-1.3-1.38-1.6-2.63a.448.448 0 01.06-.36.45.45 0 01.32-.21c.27-.05.55.12.61.38.24 1 .57 1.56 1.14 1.96.27.19.59.33 1.02.46.45.11.98.18 1.49.25 1.19.15 1.97.37 2.61.73.37.24.84.57 1.26 1.02.27.29.5.61.69.96.12.22.04.52-.19.67a.47.47 0 01-.59-.07c-.02-.02-.04-.05-.06-.08zm-3.53-3.97c-.29-.74-.68-1.27-1.37-1.83-.49-.38-1.13-.66-2.14-.93l-.07-.02c-1.12-.31-2.09-.58-2.7-1.16-.71-.65-1.1-1.54-1.24-2.82-.02-.13.02-.26.1-.35.09-.1.21-.16.34-.17.27-.01.53.2.56.46.11 1.02.36 1.62.87 2.09.24.22.54.4.95.59.43.17.95.31 1.45.44 1.16.3 1.91.63 2.49 1.07.33.29.76.68 1.11 1.18.23.33.41.67.55 1.04.1.24-.03.53-.28.64a.478.478 0 01-.63-.23zm-3.12-4.65c-.18-.77-.5-1.35-1.1-2.01-.43-.45-1.03-.81-1.99-1.21l-.07-.03c-1.07-.47-1.98-.87-2.51-1.53-.61-.74-.88-1.68-.83-2.96 0-.13.06-.25.15-.34.1-.09.23-.13.36-.12.27.02.5.27.49.54-.04 1.03.13 1.66.57 2.19.21.25.48.48.86.72.4.22.9.44 1.37.64 1.11.46 1.8.88 2.31 1.41.29.33.66.78.94 1.32.18.35.31.72.4 1.11.06.25-.1.51-.37.59a.456.456 0 01-.55-.23.161.161 0 01-.03-.09zm-2.33-4.77c-.08-.79-.31-1.41-.83-2.14-.37-.5-.91-.94-1.81-1.47l-.06-.04c-1-.6-1.85-1.12-2.28-1.84-.51-.82-.64-1.78-.43-3.05a.44.44 0 01.2-.31c.11-.08.24-.1.38-.07.26.06.46.33.41.6-.17 1.01-.09 1.66.28 2.25.17.27.41.54.76.83.37.28.83.56 1.27.82 1.04.61 1.67 1.12 2.11 1.7.24.37.55.86.75 1.44.13.38.21.75.25 1.15.03.26-.17.5-.44.54a.467.467 0 01-.52-.3c0-.03-.02-.07-.02-.09zm-1.75-5.32c.03-.79-.12-1.44-.52-2.23-.29-.55-.77-1.06-1.59-1.71l-.06-.05c-.9-.74-1.68-1.37-2-2.15-.39-.88-.39-1.85 0-3.08.04-.13.12-.23.24-.28a.5.5 0 01.38-.02c.25.09.41.39.33.65-.32.98-.32 1.63-.04 2.26.13.3.33.59.64.92.33.32.74.67 1.15.99.94.74 1.49 1.34 1.85 1.98.19.4.42.93.55 1.53.08.39.11.78.08 1.18 0 .25-.24.47-.51.47-.23 0-.42-.15-.47-.37v-.1zm-.96-5.22c.14-.78.08-1.44-.22-2.28-.22-.58-.62-1.15-1.35-1.9l-.05-.06c-.8-.85-1.48-1.58-1.7-2.39-.27-.92-.14-1.89.41-3.05.05-.12.15-.21.27-.25a.5.5 0 01.38.03c.24.13.35.44.23.68-.44.93-.54 1.57-.34 2.24.09.31.25.63.51 1 .28.37.65.76 1.01 1.13.83.86 1.3 1.52 1.57 2.21.13.42.3.98.34 1.59.02.4 0 .78-.07 1.18-.04.26-.3.43-.57.4a.479.479 0 01-.42-.43v-.1zm-.25-5.6c.25-.75.28-1.41.1-2.29-.13-.61-.45-1.23-1.07-2.07l-.04-.06c-.67-.95-1.24-1.77-1.35-2.61-.14-.95.13-1.89.83-2.97a.456.456 0 01.67-.12c.22.16.29.49.14.71-.57.86-.75 1.48-.65 2.17.05.32.16.66.36 1.06.23.4.54.84.84 1.26.7.97 1.08 1.69 1.24 2.41.07.43.16 1 .11 1.62-.03.4-.1.78-.24 1.16a.5.5 0 01-.62.31.462.462 0 01-.35-.48c0-.03 0-.07.02-.1zm.49-5.29c.34-.71.47-1.37.4-2.25-.05-.62-.29-1.28-.78-2.2l-.03-.07c-.54-1.03-1-1.92-.99-2.76-.01-.96.38-1.86 1.21-2.83.08-.1.2-.16.33-.16s.26.04.36.13c.19.19.22.52.04.72-.67.77-.94 1.37-.93 2.06 0 .32.07.67.22 1.1.17.43.42.91.66 1.36.57 1.06.84 1.82.92 2.55.02.44.02 1.02-.1 1.62-.08.39-.21.75-.39 1.12-.11.23-.4.34-.66.23a.467.467 0 01-.28-.53c0-.03.02-.07.03-.09zm1.27-5.46c.44-.66.65-1.29.71-2.18.03-.62-.11-1.31-.47-2.29l-.02-.07c-.39-1.1-.72-2.04-.59-2.87.12-.95.63-1.79 1.6-2.63.1-.09.22-.13.35-.12.13.01.25.08.33.18.17.21.14.55-.06.72-.78.67-1.12 1.23-1.21 1.91-.04.32-.02.67.06 1.12.11.45.29.96.47 1.44.42 1.12.58 1.92.55 2.65-.05.44-.12 1.01-.33 1.59-.13.37-.31.72-.54 1.05-.14.21-.44.28-.68.13a.457.457 0 01-.21-.56c.01-.03.03-.06.04-.09zm1.9-4.96c.52-.59.82-1.19 1-2.06.12-.61.07-1.31-.16-2.33v-.07c-.25-1.14-.46-2.12-.22-2.93.25-.93.86-1.68 1.93-2.4.11-.07.24-.1.36-.07.13.03.24.11.31.23.14.23.07.56-.16.71-.86.56-1.27 1.07-1.45 1.73-.08.31-.11.67-.09 1.12.05.46.16.99.27 1.49.26 1.17.32 1.98.19 2.7-.1.43-.25.99-.54 1.53-.19.35-.4.67-.67.97-.17.2-.48.21-.69.05a.468.468 0 01-.13-.58c.01-.03.03-.06.05-.08zm2.7-4.91c.6-.51.97-1.07 1.27-1.9.2-.59.25-1.29.16-2.33v-.07c-.08-1.16-.15-2.16.2-2.93.37-.88 1.09-1.55 2.25-2.11.12-.06.25-.06.37-.02.12.05.22.14.27.27.1.25 0 .57-.25.68-.93.44-1.41.88-1.68 1.51-.13.3-.2.64-.24 1.09-.02.46.02 1 .06 1.51.1 1.19.04 2-.19 2.7-.16.41-.39.94-.74 1.44-.23.32-.49.61-.8.87-.19.17-.5.15-.69-.05a.457.457 0 01-.05-.59c.02-.03.04-.05.07-.07zm3.17-4.27c.66-.43 1.11-.93 1.52-1.72.28-.56.42-1.24.47-2.28v-.07c.08-1.16.15-2.16.59-2.88.49-.83 1.28-1.39 2.51-1.79a.476.476 0 01.61.33c.07.26-.08.56-.34.64-.98.31-1.52.68-1.87 1.28-.16.28-.29.61-.39 1.05-.08.45-.11 1-.14 1.51-.06 1.2-.22 1.99-.54 2.65-.21.38-.51.88-.93 1.33-.27.29-.57.54-.91.75-.22.14-.52.08-.68-.14a.468.468 0 01.03-.6c.02-.02.05-.05.07-.06zm3.92-4c.72-.33 1.22-.76 1.74-1.49.35-.51.59-1.17.78-2.2l.02-.07c.24-1.14.45-2.12.99-2.76.6-.75 1.47-1.2 2.73-1.42.13-.02.26 0 .36.08.11.08.17.2.19.33.03.27-.16.54-.42.59-1.01.17-1.6.46-2.03 1-.2.25-.37.57-.53.99-.14.44-.25.97-.35 1.47-.23 1.18-.5 1.94-.91 2.55-.27.35-.63.8-1.1 1.19-.31.25-.64.45-1.01.62-.23.11-.52 0-.65-.24-.11-.2-.06-.45.11-.59.03-.02.05-.04.08-.05zm4.2-3.25c.75-.24 1.32-.59 1.92-1.25.42-.46.74-1.08 1.07-2.07l.03-.07c.39-1.1.72-2.04 1.34-2.61.69-.66 1.61-.99 2.9-1.04.13 0 .26.04.34.13.1.09.15.22.15.35 0 .27-.23.51-.5.52-1.03.04-1.64.25-2.14.73-.23.22-.44.51-.65.91-.2.42-.38.93-.54 1.41-.38 1.14-.75 1.86-1.24 2.41-.31.31-.73.71-1.25 1.03-.34.2-.69.36-1.08.48-.25.08-.52-.07-.62-.32-.08-.21 0-.45.19-.57.03-.02.06-.03.09-.04zm4.86-2.79c.78-.13 1.38-.41 2.08-.96.48-.4.88-.97 1.35-1.9l.03-.06c.54-1.03 1-1.92 1.7-2.39.78-.56 1.74-.76 3.01-.63.13.01.25.08.32.17.08.11.11.24.09.37-.04.27-.3.48-.57.45-1.02-.11-1.66.02-2.22.42-.26.19-.51.45-.77.81-.25.38-.5.86-.73 1.32-.54 1.07-1 1.73-1.57 2.21-.35.26-.82.6-1.38.84-.36.16-.74.26-1.14.32-.25.04-.5-.13-.56-.41-.05-.22.06-.45.27-.53.03-.02.06-.02.09-.03zm4.92-2c.79-.02 1.43-.21 2.19-.68.53-.33 1-.84 1.59-1.71l.04-.06c.67-.95 1.25-1.78 2-2.15.85-.45 1.82-.52 3.07-.22.13.03.24.11.3.22.07.12.08.25.05.38-.08.26-.36.43-.62.37-1-.24-1.65-.2-2.26.12-.29.15-.56.37-.88.7-.3.35-.61.79-.9 1.22-.67.99-1.23 1.59-1.84 1.99-.38.22-.89.49-1.49.65-.38.1-.76.16-1.17.17-.26 0-.48-.21-.51-.48-.02-.23.12-.43.34-.5.03 0 .07-.01.1-.02zm5.43-1.38c.78.09 1.44-.02 2.26-.37.57-.25 1.11-.69 1.81-1.47l.05-.05c.8-.85 1.48-1.58 2.28-1.85.9-.33 1.88-.26 3.07.21.12.05.22.14.27.25.05.12.05.26-.01.38-.11.25-.42.38-.67.28-.96-.38-1.61-.43-2.25-.2-.3.11-.61.29-.96.57-.35.3-.72.7-1.06 1.08-.81.89-1.43 1.4-2.1 1.71-.41.16-.95.36-1.56.44-.39.05-.78.06-1.18 0a.508.508 0 01-.43-.54c0-.23.18-.41.4-.44h.1z"
                                                    fill="#9e1c2b"
                                                />
                                            </G>
                                        </G>
                                    </Svg>
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

                                    <View style={styles.phones_inputs_wrapper}>

                                        <View style={styles.phone_code_dropdown_wrapper}>
                                            {/*<Dropdown*/}
                                            {/*    style={[*/}
                                            {/*        styles.phone_code_dropdown,*/}
                                            {/*        {width: 95, marginRight: 10},*/}


                                            {/*        {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },*/}


                                            {/*    ]}*/}
                                            {/*    data={*/}
                                            {/*        [*/}
                                            {/*            {label: '+371', value: '371'},*/}

                                            {/*        ]*/}

                                            {/*    }*/}
                                            {/*    placeholderStyle={styles.placeholderStyle}*/}
                                            {/*    selectedTextStyle={styles.selectedTextStyle}*/}
                                            {/*    inputSearchStyle={styles.inputSearchStyle}*/}
                                            {/*    iconStyle={styles.iconStyle}*/}
                                            {/*    placeholder={i18n.t('code')}*/}
                                            {/*    maxHeight={150}*/}
                                            {/*    labelField="label"*/}
                                            {/*    valueField="value"*/}
                                            {/*    value={this.state.selectedPhoneCode}*/}

                                            {/*    onChange={item => {*/}
                                            {/*        this.choosePhoneCode(item);*/}
                                            {/*    }}*/}
                                            {/*/>*/}


                                            <DropDownPicker
                                                items={ this.state.phoneCodesArray }
                                                placeholder={i18n.t('code')}
                                                containerStyle={{height: 52, width: 95,  marginRight: 10,}}
                                                style={[styles.phone_code_dropdown,

                                                    {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },

                                                ]}
                                                itemStyle={{
                                                    justifyContent: 'flex-start',
                                                    width: 60,
                                                    zIndex: 15,
                                                    marginBottom: 3,
                                                    paddingLeft: 3
                                                }}
                                                dropDownStyle={{backgroundColor: '#fafafa',  width: 180,  zIndex: 15}}
                                                // defaultValue={this.state.selectedPhoneCode}
                                                defaultValue={'+371'}
                                                // onChangeItem={this.onChangeDropDownItem}
                                                onChangeItem={item => {
                                                    this.choosePhoneCode(item);
                                                }}
                                            />



                                        </View>

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

                                <TouchableOpacity style={styles.turn_to_step2_btn} onPress={() => {this.validateFirstForm()}}>
                                    <Text style={styles.turn_to_step2_btn_text}>{i18n.t('next')}</Text>
                                </TouchableOpacity>


                            </ScrollView>
                        }

                        <View style={styles.step_rounds_wrapper}>
                            <View style={styles.step_round_active}></View>
                            <View style={styles.step_round}></View>
                            <View style={styles.step_round}></View>
                        </View>


                    </View>

                }


                {this.state.stepSecond &&
                <View style={styles.stepOne_wrapper}>
                    <View style={styles.back_to_btn_step_numbers_wrapper}>
                        <TouchableOpacity style={styles.back_to_dashboard_btn} onPress={() => {this.backToStepOne()}}>
                            <Text style={[styles.back_to_dashboard_btn_text, this.state.firstFormError ? {color:'red'} : {}]}>{i18n.t('back')}</Text>
                        </TouchableOpacity>
                        <View style={styles.step_numbers_wrapper}>
                            <Text style={styles.step_number}>2</Text>
                            <Text style={styles.step_number_text}>{i18n.t('of')}</Text>
                            <Text style={styles.step_number}>3</Text>
                        </View>
                    </View>
                    {Platform.OS === 'ios'
                        ?
                        <KeyboardAwareScrollView style={styles.logo_inputs_wrapper}>

                            <View style={styles.step_logo}>
                                <Svg
                                    width={200}
                                    height={142}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 202 157.49">

                                    <G id="b">
                                        <G id="c">
                                            <Path
                                                d="M146.78 44.96c0 24.83-20.13 44.95-44.96 44.95S56.87 69.78 56.87 44.96 77 0 101.82 0s44.96 20.13 44.96 44.96z"
                                                fill="#fff"
                                            />
                                            <Path
                                                d="M46.76 148.12c2.6 0 4.68 2.09 4.68 4.69s-2.08 4.67-4.68 4.67-4.67-2.07-4.67-4.67 2.07-4.69 4.67-4.69zm0 8.06c1.86 0 3.38-1.51 3.38-3.37s-1.52-3.39-3.38-3.39-3.37 1.55-3.37 3.39 1.52 3.37 3.37 3.37zm7.46-7.68c0-.13.12-.25.25-.25h.87c.14 0 .25.12.25.25v5.37c0 1.3.83 2.31 2.16 2.31s2.18-1 2.18-2.29v-5.4c0-.13.1-.25.25-.25h.87c.13 0 .25.12.25.25v5.46c0 1.98-1.5 3.52-3.55 3.52s-3.52-1.55-3.52-3.52v-5.46zm11.79.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm6.12-.98c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61zm10.18.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm9.01-.88c-.08-.17.03-.34.22-.34h.92c.1 0 .2.08.22.14l2.86 6.43h.08l2.86-6.43c.03-.07.1-.14.22-.14h.92c.19 0 .3.17.22.34l-3.99 8.75c-.04.08-.12.14-.22.14H103c-.09 0-.18-.06-.22-.14l-3.96-8.75zm10.9-.09c0-.13.12-.25.25-.25h.86c.13 0 .25.12.25.25v8.61c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-8.61zm4.84 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm6.91 8.52l3.99-8.75c.04-.08.16-.14.22-.14h.13c.06 0 .18.07.22.14l3.97 8.75c.08.17-.03.34-.22.34h-.82c-.16 0-.25-.08-.3-.2l-.81-1.78h-4.25c-.26.6-.53 1.18-.79 1.78a.33.33 0 01-.3.2h-.82c-.2 0-.3-.17-.22-.34zm5.89-2.76l-1.6-3.56h-.06l-1.59 3.56h3.25zm8.68-6.14c1.25 0 2.27.46 3.16 1.21.1.1.12.26.01.36-.19.21-.39.4-.58.61-.1.12-.21.1-.34-.01-.61-.53-1.42-.88-2.21-.88-1.85 0-3.26 1.56-3.26 3.38s1.42 3.37 3.26 3.37c1.08 0 1.82-.39 1.95-.44v-1.46h-1.27c-.14 0-.25-.1-.25-.23v-.75c0-.14.1-.25.25-.25h2.37c.13 0 .23.12.23.25 0 1.04.01 2.11.01 3.15 0 .07-.05.17-.1.21 0 0-1.34.86-3.22.86-2.59 0-4.68-2.07-4.68-4.67s2.09-4.69 4.68-4.69zm6.49.38c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61z"
                                                fill="#4c575d"
                                            />
                                            <Path
                                                d="M62.69 126.98c0 4.38 0 6.05-.81 7.97-.57 1.35-1.75 2.62-3.94 4.13-.35.24-.78.54-1.05.67-.05.03-.11.05-.19.05s-.19-.05-.19-.16c0-.16.14-.24.38-.4.32-.19.7-.51.95-.76 1.76-1.78 2.59-3.21 2.59-10.18v-7.81c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.92.08 3.05.08s1.84-.08 2.65-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.13-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v6.48zm8.28-6.48c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.21-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.14-.22.43-.22 1.21 0 2.86.08 3.1.08s1.86-.08 2.67-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.11-.95.59-1 1.54-.06.87-.06 1.62-.06 5.84v3.78c0 3.89.86 5.57 2.03 6.67 1.32 1.24 2.54 1.48 4.08 1.48 1.65 0 3.27-.78 4.24-1.94 1.24-1.54 1.57-3.83 1.57-6.62v-3.38c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.7.08 2.86.08.19 0 1.46-.08 2.27-.08.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.67.08-.73.16-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v2.89c0 2.92-.32 6.16-2.48 8.08-1.95 1.73-3.97 2-5.57 2-.92 0-3.65-.11-5.56-1.92-1.32-1.27-2.35-3.16-2.35-7.11v-3.94zm41.92 12.21c-.16 0-.54 0-1.05-.08-.68-.11-1.84-.4-3.29-1.95-1.57-1.67-3.4-4.08-5.62-6.92 2.43-2.24 3.27-4.24 3.27-6.24 0-1.87-1.19-3.19-1.86-3.67-1.43-1.03-3.24-1.19-4.94-1.19-.84 0-2.89.08-3.19.08-.13 0-1.84-.08-3.05-.08-.3 0-.43.05-.43.22 0 .11.11.16.22.16.24 0 .7.03.92.08.89.19 1.11.62 1.16 1.54.05.87.05 1.62.05 5.84v4.75c0 2.59 0 4.73-.13 5.86-.11.78-.24 1.38-.78 1.49-.24.05-.57.11-.81.11-.16 0-.22.08-.22.16 0 .16.14.22.43.22.81 0 2.51-.08 2.54-.08.14 0 1.84.08 3.32.08.3 0 .43-.08.43-.22 0-.08-.05-.16-.22-.16-.24 0-.84-.05-1.21-.11-.81-.11-.97-.7-1.05-1.49-.13-1.13-.13-3.27-.13-5.86v-11.24c0-.16.08-.27.22-.32.27-.08 1-.16 1.81-.16 2.89 0 4.67 2.03 4.67 5.4 0 2.05-.7 3.51-1.65 4.16-.62.43-1.62.66-2.28.74-.21.03-.56.03-.74.02.7.14 1.25.12 1.84.75.54.7 1.81 2.51 2.94 4 1.54 2.02 2.48 3.35 3.65 3.97.7.38 1.38.51 2.89.51h1.92c.49 0 .65-.05.65-.22 0-.08-.11-.16-.24-.16zm25.35-3.08c.11.97.3 2.49 1.46 2.87.78.24 1.49.24 1.76.24.14 0 .22.03.22.14 0 .16-.24.24-.57.24-.6 0-3.51-.03-4.51-.11-.62-.06-.76-.14-.76-.27 0-.11.05-.16.19-.19s.16-.49.11-.97l-1.3-14.02h-.08l-6.62 14.04c-.57 1.19-.65 1.43-.89 1.43-.19 0-.32-.27-.84-1.24-.7-1.32-3.02-6-3.16-6.27-.24-.48-3.27-6.97-3.56-7.7h-.11l-1.08 12.53c-.03.43-.03.92-.03 1.38 0 .41.29.76.7.84.46.11.86.13 1.03.13.11 0 .22.05.22.14 0 .19-.16.24-.49.24-1 0-2.3-.08-2.51-.08-.24 0-1.54.08-2.27.08-.27 0-.46-.05-.46-.24 0-.08.14-.14.27-.14.22 0 .41 0 .81-.08.89-.16.97-1.22 1.08-2.24l1.94-17.61c.03-.3.14-.49.3-.49s.27.11.41.41l8.26 16.99 7.94-16.96c.11-.24.22-.43.4-.43s.27.22.32.73l1.81 16.61zm63.49 3.08c-.27 0-.68-.03-1.08-.16-.57-.16-1.35-.59-2.32-3-1.65-4.11-5.89-15.26-6.29-16.29-.32-.84-.43-.97-.6-.97s-.27.16-.59 1.05l-6.13 16.77c-.49 1.35-1.03 2.38-2.27 2.54-.22.03-.59.05-.78.05-.14 0-.24.05-.24.16 0 .16.16.22.51.22 1.27 0 2.76-.08 3.05-.08s1.46.08 2.11.08c.24 0 .4-.05.4-.22 0-.11-.08-.16-.27-.16h-.27c-.46 0-1.03-.24-1.03-.78 0-.49.14-1.13.38-1.81l2.11-6.16 2.38-7.29c.13-.41.27-.41.4 0l2.57 7.29 3 7.97c.16.43 0 .68-.16.73-.11.03-.19.08-.19.19 0 .16.3.16.81.19 1.86.05 3.83.05 4.24.05.3 0 .54-.05.54-.22 0-.14-.11-.16-.27-.16zm-30.46-7.4c0 3.97.11 5.7.6 6.19.43.43 1.13.62 3.24.62 1.43 0 2.62-.03 3.27-.81.35-.43.62-1.11.7-1.62.03-.21.08-.35.24-.35.13 0 .16.11.16.4s-.19 1.92-.41 2.7c-.19.62-.27.73-1.7.73-1.94 0-3.35-.06-4.48-.08-1.14-.05-1.97-.08-2.76-.08-.11 0-.57.03-1.11.03-.54.03-1.13.05-1.54.05-.3 0-.43-.05-.43-.22 0-.08.05-.16.22-.16.24 0 .57-.05.81-.11.54-.11.68-.7.79-1.49.13-1.13.13-3.27.13-5.86v-4.75c0-4.22 0-4.97-.05-5.84-.06-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.21 0 2.92.08 3.05.08s2.11-.08 2.92-.08c.29 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.57.03-.89.08-.78.13-1 .59-1.05 1.54-.05.87-.05 1.62-.05 5.84v4.81zm-159.79 4.56c1.58-3.66 5.23-13.18 5.83-15.15.14-.41.24-.79.24-1.04 0-.22-.08-.49-.35-.63-.33-.11-.74-.11-1.03-.11-.16 0-.3-.03-.3-.16 0-.17.16-.22.6-.22 1.09 0 2.35.08 2.67.08.16 0 1.34-.08 2.13-.08.3 0 .46.06.46.19s-.11.19-.33.19c-.19 0-.79 0-1.31.33-.35.24-.76.71-1.5 2.56-.3.77-1.66 4.04-3.05 7.4-1.66 3.99-2.89 6.93-3.52 8.27-.76 1.64-.87 2.08-1.14 2.08-.33 0-.46-.38-.98-1.69l-6.68-16.73c-.6-1.53-1.01-1.83-1.96-2.1-.41-.11-.87-.11-1.04-.11s-.22-.08-.22-.19c0-.16.27-.19.71-.19 1.31 0 2.86.08 3.19.08.27 0 1.5-.08 2.54-.08.49 0 .74.06.74.19s-.08.19-.27.19c-.3 0-.79.03-1.04.14-.3.14-.35.35-.35.55 0 .35.33 1.2.74 2.26l5.24 13.97zm16.02-4.58c0 2.62 0 4.78.14 5.92.08.79.25 1.39 1.06 1.5.38.06.98.11 1.23.11.16 0 .22.08.22.17 0 .14-.14.22-.44.22-1.5 0-3.22-.08-3.35-.08s-1.85.08-2.67.08c-.3 0-.44-.05-.44-.22 0-.08.06-.17.22-.17.24 0 .57-.05.82-.11.55-.11.68-.71.79-1.5.14-1.15.14-3.3.14-5.92v-4.8c0-4.26 0-5.02-.06-5.9-.05-.93-.33-1.39-.93-1.53-.3-.08-.65-.11-.84-.11-.11 0-.22-.05-.22-.16 0-.17.14-.22.44-.22.9 0 2.62.08 2.75.08s1.85-.08 2.67-.08c.3 0 .44.06.44.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.74.14-.96.6-1.01 1.56-.06.87-.06 1.64-.06 5.9v4.8zm24.3 7.53c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.34-3.03-1.66-4.15-5.95-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.16.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.24 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zm112.07 0c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.35-3.03-1.66-4.15-5.94-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.17.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.25 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zM101.82 82.72c-20.82 0-37.76-16.94-37.76-37.76S81 7.19 101.82 7.19s37.77 16.94 37.77 37.77-16.94 37.76-37.77 37.76zm0-74.53c-20.27 0-36.76 16.49-36.76 36.77s16.49 36.76 36.76 36.76 36.77-16.49 36.77-36.76S122.1 8.19 101.82 8.19zm16.1 15.84v.49s-4.94-.3-6.32 1.71c-.29.41-.42 1.24-.48 2.06v2.93l-7.96 3.7v-6.64c-.06-.82-.19-1.65-.47-2.06-1.38-2.01-6.31-1.71-6.31-1.71v-.49h21.54zm-14.76 28.91v10.19c0 3.62-.36 4.75-1.41 5.74-1.73 1.64-2.62 1.95-3.74 2.02 2.21-.1 4.75-.7 6.24-1.44 1.63-.8 3.41-2.12 4.4-3.52 1-1.41 1.63-3.02 2.06-4.89.43-1.87.42-4.43.42-6.56v-5.25l-7.96 3.7zm7.96-11.56l-7.96-3.7v1.84l7.96 3.69v-1.83zm0-8.81l-7.96 3.71v.02l7.96 3.69v-7.43zm0 12.18l-7.96-3.69v1.71l7.96 3.7v-1.72zm0 3.09l-7.96-3.72v7.44l7.96-3.69v-.03zM93.23 68.87c-.55-.6-.84-1.45-.58-1.96s.69-.65 1.13-.91c1.54-.93 2.57-2.61 2.57-4.54s-.96-3.49-2.41-4.44c-.49-.37-1.1-.62-1.82-.75-.1-.02-.2-.03-.3-.05-.25-.04-.5-.06-.77-.06h-.13c-1.68 0-2.85.6-3.71 1.56-.4.45-.74.98-.99 1.57-.3.66-.47 1.4-.47 2.17v.13c0 1.3.52 2.81 1.11 3.84.58 1.04 1.48 2.18 2.5 2.93 1.01.75 2.09 1.45 3.46 1.84 1.23.35 2.42.63 3.87.69-1.07-.1-2.12-.6-3.45-2.02zm6.73-63.85c.77.19 1.43.18 2.29-.07.6-.18 1.19-.54 1.99-1.22l.06-.05c.9-.74 1.68-1.37 2.5-1.53.94-.21 1.89-.01 3.02.61.12.06.2.17.23.29.03.13.01.26-.06.38-.14.23-.47.32-.7.19-.9-.5-1.53-.64-2.21-.49-.32.07-.64.21-1.03.44-.38.25-.8.6-1.2.93-.92.77-1.61 1.2-2.31 1.41-.43.11-.99.23-1.61.23-.4 0-.78-.05-1.17-.15-.25-.06-.41-.33-.36-.59.04-.22.23-.39.46-.39.03 0 .07 0 .1.01zm5.6.13c.73.3 1.39.38 2.27.25.62-.09 1.26-.37 2.14-.93l.06-.04c1-.6 1.85-1.12 2.69-1.17.96-.08 1.88.25 2.9 1.02.11.08.17.19.19.32.02.13-.02.26-.11.36-.17.21-.51.25-.72.09-.82-.62-1.43-.85-2.12-.8-.32.03-.67.12-1.08.29-.42.2-.88.48-1.31.75-1.01.64-1.76.96-2.48 1.08-.44.05-1.01.09-1.62 0-.39-.06-.77-.16-1.14-.31-.24-.09-.36-.38-.27-.64a.47.47 0 01.51-.32c.03 0 .07.01.1.02zm5.25.85c.69.39 1.33.56 2.22.55.62 0 1.29-.2 2.25-.63l.07-.03c1.07-.47 1.99-.87 2.82-.8.96.05 1.83.5 2.74 1.4.09.09.15.21.14.34 0 .13-.06.25-.16.35-.2.18-.54.18-.72 0-.73-.73-1.3-1.03-1.99-1.07-.32-.02-.67.03-1.11.14-.44.14-.93.36-1.4.57-1.09.5-1.87.72-2.61.74-.44-.01-1.02-.05-1.61-.21a4.95 4.95 0 01-1.09-.46c-.23-.12-.31-.43-.19-.67.1-.2.33-.31.54-.25.03 0 .06.02.09.04zm5.36 1.64c.62.48 1.24.74 2.12.86.62.08 1.31-.02 2.31-.31l.07-.02c1.12-.31 2.09-.58 2.91-.4.94.18 1.74.75 2.52 1.77.08.1.11.23.09.36a.46.46 0 01-.21.32c-.22.15-.56.11-.72-.11-.62-.82-1.15-1.2-1.82-1.34-.32-.06-.67-.07-1.12-.01-.45.08-.97.22-1.47.37-1.15.34-1.95.45-2.68.37-.43-.07-1-.19-1.56-.43-.36-.16-.69-.36-1.01-.61a.5.5 0 01-.09-.69c.13-.19.37-.26.57-.17.03.01.06.03.09.05zm4.82 2.23c.56.56 1.13.9 1.99 1.13.6.16 1.3.16 2.33 0h.07c1.15-.17 2.15-.31 2.94-.02.91.31 1.62.97 2.26 2.09.07.11.08.25.05.37a.48.48 0 01-.25.29c-.24.12-.57.03-.7-.2-.5-.9-.98-1.34-1.63-1.57-.31-.1-.66-.16-1.11-.16-.46.02-.99.09-1.5.17-1.18.18-2 .19-2.71 0-.42-.13-.97-.32-1.49-.64-.34-.21-.64-.45-.92-.74-.18-.18-.18-.49 0-.7a.46.46 0 01.67-.03zm4.72 3.02c.47.63 1 1.04 1.81 1.4.57.24 1.27.34 2.31.32h.07c1.16 0 2.17 0 2.91.4.86.43 1.47 1.19 1.95 2.38.05.12.05.25 0 .37a.48.48 0 01-.29.25.537.537 0 01-.66-.3c-.37-.96-.78-1.47-1.4-1.78-.29-.15-.63-.25-1.08-.32-.46-.05-1-.05-1.51-.04-1.2.02-2-.09-2.68-.37-.4-.19-.91-.45-1.39-.84-.31-.25-.57-.53-.81-.86-.16-.2-.11-.51.1-.69.17-.15.43-.15.6 0 .03.02.05.05.07.07zm4.04 3.45c.38.69.85 1.17 1.61 1.63.54.31 1.21.5 2.25.63h.07c1.15.16 2.15.3 2.83.79.79.54 1.3 1.38 1.61 2.62.03.13.01.26-.05.37a.45.45 0 01-.32.21.547.547 0 01-.62-.38c-.24-1-.58-1.56-1.15-1.95-.27-.18-.59-.33-1.02-.46-.45-.11-.98-.18-1.49-.24-1.19-.14-1.97-.36-2.61-.72-.37-.24-.85-.57-1.26-1.02-.27-.29-.5-.6-.69-.96-.13-.22-.04-.52.19-.67a.47.47 0 01.59.07c.02.02.04.05.06.08zm3.73 4.18c.28.74.68 1.27 1.37 1.84.49.39 1.13.67 2.14.93l.07.02c1.12.32 2.09.59 2.69 1.17.71.65 1.1 1.54 1.23 2.82.02.13-.02.26-.1.35-.09.1-.21.16-.34.17-.27.01-.53-.2-.56-.46-.1-1.02-.35-1.62-.86-2.09-.24-.22-.54-.41-.95-.59-.43-.17-.95-.32-1.45-.45-1.16-.31-1.9-.63-2.48-1.08-.33-.29-.76-.68-1.11-1.18a4.57 4.57 0 01-.55-1.05c-.1-.24.03-.52.28-.64.21-.09.45-.03.58.15.02.03.04.06.05.09zm2.96 4.41c.18.77.5 1.35 1.11 2 .43.45 1.03.81 2 1.21l.07.03c1.07.46 1.99.86 2.51 1.52.62.74.88 1.67.85 2.96 0 .13-.06.25-.15.34a.48.48 0 01-.36.12c-.27-.02-.5-.27-.49-.53.03-1.03-.14-1.66-.58-2.19-.21-.25-.48-.47-.86-.71-.4-.23-.9-.44-1.37-.64-1.11-.46-1.8-.88-2.32-1.4-.29-.33-.66-.77-.94-1.32-.18-.35-.32-.72-.4-1.11-.06-.25.1-.52.36-.59.22-.06.45.03.55.23.02.03.03.06.04.09zm2.46 5.03c.07.79.31 1.41.82 2.14.37.5.91.95 1.81 1.48l.06.04c.99.61 1.85 1.13 2.27 1.85.51.82.64 1.78.43 3.05a.44.44 0 01-.2.31c-.11.07-.24.1-.38.07-.26-.06-.46-.33-.41-.6.18-1.01.1-1.66-.27-2.25-.17-.28-.41-.54-.76-.83-.37-.28-.83-.56-1.27-.82-1.03-.61-1.66-1.12-2.1-1.71-.24-.37-.54-.86-.75-1.44-.13-.38-.21-.75-.24-1.16-.03-.26.17-.5.44-.54.22-.03.44.09.51.3.01.03.02.06.02.1zm1.66 5.05c-.03.79.12 1.44.53 2.23.29.55.77 1.06 1.59 1.7l.06.05c.9.73 1.68 1.36 2.01 2.14.39.88.4 1.85.02 3.08-.04.13-.12.23-.24.28-.12.06-.25.07-.38.02a.547.547 0 01-.33-.65c.31-.98.32-1.63.03-2.26-.13-.29-.33-.59-.64-.92-.32-.33-.75-.67-1.15-.98-.94-.74-1.5-1.33-1.85-1.97-.19-.39-.43-.92-.55-1.52a4.63 4.63 0 01-.09-1.18c0-.26.24-.47.51-.47.23 0 .43.15.47.37 0 .03.01.07 0 .1zm1.01 5.51c-.14.78-.08 1.44.21 2.28.22.58.62 1.16 1.34 1.91l.05.05c.79.85 1.48 1.59 1.69 2.4.27.92.14 1.89-.41 3.05-.05.12-.15.21-.27.25-.13.04-.26.03-.38-.04-.24-.13-.35-.45-.23-.68.44-.93.54-1.57.35-2.24-.09-.31-.25-.63-.5-1-.28-.37-.65-.76-1-1.13-.83-.86-1.3-1.53-1.56-2.21-.13-.42-.29-.97-.33-1.59-.03-.4 0-.78.08-1.18.04-.25.3-.43.57-.4.23.03.4.21.41.43v.1zm.24 5.31c-.24.75-.27 1.42-.09 2.29.14.61.46 1.23 1.08 2.07l.04.06c.67.95 1.25 1.77 1.36 2.6.14.95-.12 1.89-.82 2.97-.07.11-.18.18-.3.21-.13.02-.26 0-.37-.09-.22-.16-.29-.49-.14-.71.56-.86.75-1.49.64-2.17-.05-.32-.16-.66-.37-1.06-.22-.4-.54-.84-.84-1.26-.71-.97-1.08-1.69-1.25-2.4-.08-.43-.16-1-.12-1.62.03-.4.1-.78.23-1.16.08-.25.35-.39.62-.32.22.06.37.26.35.48 0 .03 0 .07-.02.1zm-.51 5.58c-.35.71-.47 1.36-.41 2.25.05.62.28 1.28.78 2.2l.03.06c.53 1.04.99 1.93.98 2.77.01.96-.38 1.86-1.22 2.83-.09.1-.2.16-.33.16s-.26-.04-.36-.14a.527.527 0 01-.04-.72c.68-.77.95-1.37.94-2.06 0-.32-.07-.67-.21-1.1-.17-.43-.41-.91-.66-1.36-.57-1.06-.84-1.82-.9-2.55-.02-.44-.02-1.02.11-1.62.08-.39.21-.75.39-1.12.11-.23.4-.34.66-.23.21.09.33.31.28.53 0 .03-.02.06-.03.09zm-1.2 5.17c-.44.66-.65 1.29-.71 2.18-.03.62.11 1.3.48 2.28l.02.07c.39 1.09.73 2.04.61 2.87-.12.95-.62 1.79-1.59 2.64-.1.09-.22.13-.35.12a.52.52 0 01-.34-.18c-.17-.21-.15-.55.06-.72.77-.68 1.12-1.23 1.2-1.92.04-.32.02-.68-.07-1.12-.11-.45-.29-.96-.47-1.44-.42-1.12-.59-1.92-.56-2.65.04-.44.11-1.01.32-1.59.13-.38.31-.72.54-1.05.14-.22.45-.28.68-.14.2.12.28.35.21.56-.01.03-.03.06-.04.09zm-2 5.23c-.52.59-.82 1.19-1 2.06-.12.61-.07 1.31.15 2.33l.02.07c.23 1.14.44 2.12.2 2.93-.25.93-.87 1.68-1.94 2.39-.11.07-.24.1-.36.07a.48.48 0 01-.31-.23.537.537 0 01.16-.71c.86-.56 1.28-1.06 1.46-1.73.08-.31.11-.67.09-1.12-.05-.46-.15-.99-.27-1.49-.26-1.17-.31-1.98-.18-2.7.1-.43.26-.98.54-1.53.18-.35.4-.67.68-.97.17-.19.48-.21.69-.04.18.14.23.38.13.58-.01.03-.03.06-.06.08zm-2.56 4.66c-.6.52-.97 1.07-1.27 1.91-.2.59-.24 1.29-.16 2.33v.07c.09 1.16.16 2.16-.19 2.93-.37.89-1.08 1.55-2.24 2.11-.12.06-.25.07-.37.02a.478.478 0 01-.27-.27c-.1-.25 0-.57.25-.68.93-.44 1.41-.88 1.68-1.52.12-.3.2-.65.24-1.1.02-.46-.02-1-.07-1.51-.1-1.19-.05-2 .18-2.7.16-.41.38-.94.74-1.44.23-.32.49-.61.8-.87.19-.17.51-.15.7.05.16.16.18.41.05.6-.02.03-.04.05-.06.07zm-3.34 4.5c-.66.42-1.11.92-1.52 1.71-.28.55-.42 1.24-.48 2.28v.07c-.09 1.16-.16 2.16-.6 2.87-.49.83-1.29 1.39-2.51 1.78-.12.04-.26.03-.37-.03a.44.44 0 01-.23-.3c-.07-.26.09-.56.34-.64.98-.31 1.52-.68 1.87-1.27.17-.28.29-.61.39-1.05.08-.45.12-.99.15-1.51.06-1.2.23-1.99.55-2.65.21-.38.51-.88.93-1.33.27-.29.57-.54.91-.75.21-.14.52-.08.68.15.13.18.12.43-.03.6-.02.03-.05.04-.08.07zm-3.72 3.79c-.71.34-1.22.77-1.74 1.5-.35.51-.58 1.17-.78 2.2l-.02.07c-.23 1.14-.44 2.12-.97 2.77-.6.75-1.46 1.2-2.73 1.43a.42.42 0 01-.36-.08.436.436 0 01-.19-.33c-.03-.27.16-.54.42-.59 1.01-.18 1.59-.47 2.02-1.01.2-.25.37-.57.52-.99.14-.44.25-.97.34-1.47.22-1.18.49-1.94.9-2.56.26-.35.62-.8 1.1-1.19.31-.25.64-.45 1-.62.23-.11.53 0 .66.23.11.2.06.45-.11.59-.02.02-.05.04-.08.05zm-4.43 3.43c-.75.23-1.32.59-1.93 1.24-.42.46-.74 1.08-1.08 2.07l-.02.07c-.39 1.1-.73 2.04-1.35 2.6-.69.66-1.61.99-2.9 1.04-.13 0-.25-.04-.35-.13a.427.427 0 01-.14-.35c0-.27.23-.52.5-.52 1.03-.03 1.64-.24 2.14-.72.24-.22.44-.51.66-.91.2-.41.38-.92.55-1.41.39-1.13.76-1.85 1.25-2.4.31-.31.73-.71 1.26-1.03.34-.21.69-.36 1.08-.47.24-.08.52.07.61.32.08.21 0 .45-.19.57-.03.02-.06.03-.09.04zm-4.6 2.65c-.78.13-1.38.41-2.07.97-.48.4-.88.97-1.34 1.91l-.04.06c-.53 1.03-.99 1.93-1.68 2.4-.78.56-1.73.76-3.01.64a.466.466 0 01-.43-.54c.04-.27.3-.48.57-.45 1.02.1 1.66-.02 2.22-.43.26-.19.51-.45.77-.81.25-.38.5-.87.73-1.33.53-1.08 1-1.74 1.56-2.22.35-.27.82-.61 1.38-.85.36-.16.73-.26 1.13-.33.25-.05.51.14.57.4.05.22-.06.45-.27.54l-.09.03zm-5.19 2.11c-.79.02-1.43.21-2.19.67-.53.33-1.01.84-1.6 1.7l-.04.06c-.67.95-1.25 1.77-2.01 2.14-.85.45-1.82.52-3.07.21a.48.48 0 01-.3-.22.457.457 0 01-.04-.38c.08-.26.37-.43.62-.37 1 .25 1.65.21 2.26-.11.29-.15.57-.37.88-.7.3-.35.62-.79.91-1.21.68-.99 1.23-1.58 1.85-1.98.38-.22.9-.48 1.49-.65.38-.11.76-.16 1.17-.16.26 0 .48.2.5.48.02.23-.12.43-.34.49-.03 0-.06.01-.1.02zm-5.15 1.31c-.79-.08-1.44.02-2.26.38-.57.26-1.11.7-1.81 1.47l-.05.05c-.79.85-1.48 1.59-2.27 1.86-.9.33-1.87.27-3.07-.2a.51.51 0 01-.27-.25.5.5 0 010-.38c.11-.25.42-.38.67-.28.96.38 1.61.43 2.25.19.3-.11.61-.29.96-.57.35-.3.72-.7 1.06-1.08.8-.89 1.43-1.41 2.1-1.72.41-.16.95-.36 1.56-.45.39-.05.78-.06 1.18 0 .26.02.45.27.44.54a.46.46 0 01-.4.44h-.1zm-5.57.63c-.76-.19-1.43-.18-2.29.06-.6.18-1.19.54-2 1.21l-.06.05c-.91.73-1.68 1.36-2.51 1.52-.94.21-1.89 0-3.02-.62a.476.476 0 01-.23-.29.51.51 0 01.06-.38c.14-.23.47-.32.7-.19.89.51 1.53.65 2.2.5.32-.07.65-.21 1.03-.43.38-.25.81-.59 1.2-.92.92-.77 1.61-1.19 2.32-1.4.43-.1.99-.22 1.61-.22.4 0 .78.05 1.17.16.25.06.41.33.36.6-.04.22-.23.38-.46.38-.03 0-.07 0-.1-.01zm-5.31-.13c-.73-.29-1.4-.37-2.28-.25-.61.09-1.25.37-2.14.93l-.06.04c-.99.61-1.85 1.13-2.69 1.18-.96.08-1.88-.25-2.91-1.02a.468.468 0 01-.19-.32c-.02-.13.02-.26.11-.37.17-.21.51-.25.72-.09.82.62 1.43.84 2.12.79.32-.03.67-.12 1.08-.29.42-.2.88-.48 1.31-.75 1.01-.64 1.76-.97 2.48-1.09.44-.05 1.01-.09 1.62 0 .39.06.77.16 1.14.31.24.09.36.38.28.64a.47.47 0 01-.51.32c-.03 0-.07-.01-.09-.02zm-5.53-.9c-.68-.39-1.33-.56-2.22-.56-.62 0-1.3.19-2.25.63l-.07.03c-1.07.46-1.99.86-2.83.79-.96-.05-1.83-.51-2.74-1.41a.476.476 0 01-.14-.34c0-.13.06-.25.16-.35.2-.18.54-.18.72 0 .72.73 1.3 1.04 1.99 1.08.33.02.68-.02 1.11-.14.44-.14.94-.35 1.4-.56 1.09-.49 1.87-.71 2.61-.73.44.01 1.02.05 1.61.22.38.11.74.26 1.09.47.22.13.31.43.18.67-.1.2-.33.31-.54.25-.03 0-.06-.02-.09-.04zm-5.08-1.55c-.63-.48-1.24-.73-2.13-.85-.62-.08-1.31.02-2.31.32l-.07.02c-1.12.32-2.09.59-2.91.41-.94-.18-1.74-.75-2.53-1.76a.46.46 0 01-.09-.36.46.46 0 01.2-.32c.22-.15.56-.11.71.11.62.82 1.15 1.2 1.83 1.33.32.06.67.07 1.12.01.45-.08.98-.23 1.47-.37 1.15-.34 1.95-.46 2.68-.38.43.07 1 .18 1.56.43.36.16.7.36 1.01.61a.5.5 0 01.09.69c-.13.19-.37.26-.57.17a.218.218 0 01-.08-.05zm-5.08-2.36c-.55-.56-1.13-.9-1.98-1.14-.6-.16-1.3-.16-2.33 0h-.07c-1.15.17-2.15.3-2.93 0-.91-.31-1.62-.98-2.25-2.1a.439.439 0 01-.04-.37.48.48 0 01.25-.29c.24-.12.57-.03.69.2.5.9.97 1.35 1.62 1.58.31.11.66.16 1.11.17.46-.02 1-.09 1.5-.16 1.19-.18 2-.18 2.71 0 .42.13.96.32 1.49.64.34.21.64.45.92.74.18.18.18.49 0 .69a.46.46 0 01-.59.09c-.03-.02-.05-.04-.08-.06zm-4.47-2.87c-.47-.63-1-1.04-1.82-1.39-.57-.24-1.27-.33-2.31-.31h-.07c-1.16 0-2.17 0-2.91-.39-.86-.43-1.47-1.19-1.96-2.38a.475.475 0 010-.37.51.51 0 01.28-.26c.26-.09.56.05.66.29.38.96.79 1.47 1.4 1.78.29.15.63.24 1.08.31.46.05 1 .04 1.51.04 1.2-.02 2 .09 2.69.36.4.19.91.45 1.39.84.31.25.57.53.81.86.16.21.11.51-.09.69-.18.15-.43.15-.6 0l-.07-.07zm-4.26-3.64c-.38-.69-.84-1.17-1.6-1.63-.54-.32-1.21-.51-2.25-.63h-.07c-1.15-.17-2.15-.31-2.83-.81-.79-.54-1.3-1.38-1.6-2.63a.448.448 0 01.06-.36.45.45 0 01.32-.21c.27-.05.55.12.61.38.24 1 .57 1.56 1.14 1.96.27.19.59.33 1.02.46.45.11.98.18 1.49.25 1.19.15 1.97.37 2.61.73.37.24.84.57 1.26 1.02.27.29.5.61.69.96.12.22.04.52-.19.67a.47.47 0 01-.59-.07c-.02-.02-.04-.05-.06-.08zm-3.53-3.97c-.29-.74-.68-1.27-1.37-1.83-.49-.38-1.13-.66-2.14-.93l-.07-.02c-1.12-.31-2.09-.58-2.7-1.16-.71-.65-1.1-1.54-1.24-2.82-.02-.13.02-.26.1-.35.09-.1.21-.16.34-.17.27-.01.53.2.56.46.11 1.02.36 1.62.87 2.09.24.22.54.4.95.59.43.17.95.31 1.45.44 1.16.3 1.91.63 2.49 1.07.33.29.76.68 1.11 1.18.23.33.41.67.55 1.04.1.24-.03.53-.28.64a.478.478 0 01-.63-.23zm-3.12-4.65c-.18-.77-.5-1.35-1.1-2.01-.43-.45-1.03-.81-1.99-1.21l-.07-.03c-1.07-.47-1.98-.87-2.51-1.53-.61-.74-.88-1.68-.83-2.96 0-.13.06-.25.15-.34.1-.09.23-.13.36-.12.27.02.5.27.49.54-.04 1.03.13 1.66.57 2.19.21.25.48.48.86.72.4.22.9.44 1.37.64 1.11.46 1.8.88 2.31 1.41.29.33.66.78.94 1.32.18.35.31.72.4 1.11.06.25-.1.51-.37.59a.456.456 0 01-.55-.23.161.161 0 01-.03-.09zm-2.33-4.77c-.08-.79-.31-1.41-.83-2.14-.37-.5-.91-.94-1.81-1.47l-.06-.04c-1-.6-1.85-1.12-2.28-1.84-.51-.82-.64-1.78-.43-3.05a.44.44 0 01.2-.31c.11-.08.24-.1.38-.07.26.06.46.33.41.6-.17 1.01-.09 1.66.28 2.25.17.27.41.54.76.83.37.28.83.56 1.27.82 1.04.61 1.67 1.12 2.11 1.7.24.37.55.86.75 1.44.13.38.21.75.25 1.15.03.26-.17.5-.44.54a.467.467 0 01-.52-.3c0-.03-.02-.07-.02-.09zm-1.75-5.32c.03-.79-.12-1.44-.52-2.23-.29-.55-.77-1.06-1.59-1.71l-.06-.05c-.9-.74-1.68-1.37-2-2.15-.39-.88-.39-1.85 0-3.08.04-.13.12-.23.24-.28a.5.5 0 01.38-.02c.25.09.41.39.33.65-.32.98-.32 1.63-.04 2.26.13.3.33.59.64.92.33.32.74.67 1.15.99.94.74 1.49 1.34 1.85 1.98.19.4.42.93.55 1.53.08.39.11.78.08 1.18 0 .25-.24.47-.51.47-.23 0-.42-.15-.47-.37v-.1zm-.96-5.22c.14-.78.08-1.44-.22-2.28-.22-.58-.62-1.15-1.35-1.9l-.05-.06c-.8-.85-1.48-1.58-1.7-2.39-.27-.92-.14-1.89.41-3.05.05-.12.15-.21.27-.25a.5.5 0 01.38.03c.24.13.35.44.23.68-.44.93-.54 1.57-.34 2.24.09.31.25.63.51 1 .28.37.65.76 1.01 1.13.83.86 1.3 1.52 1.57 2.21.13.42.3.98.34 1.59.02.4 0 .78-.07 1.18-.04.26-.3.43-.57.4a.479.479 0 01-.42-.43v-.1zm-.25-5.6c.25-.75.28-1.41.1-2.29-.13-.61-.45-1.23-1.07-2.07l-.04-.06c-.67-.95-1.24-1.77-1.35-2.61-.14-.95.13-1.89.83-2.97a.456.456 0 01.67-.12c.22.16.29.49.14.71-.57.86-.75 1.48-.65 2.17.05.32.16.66.36 1.06.23.4.54.84.84 1.26.7.97 1.08 1.69 1.24 2.41.07.43.16 1 .11 1.62-.03.4-.1.78-.24 1.16a.5.5 0 01-.62.31.462.462 0 01-.35-.48c0-.03 0-.07.02-.1zm.49-5.29c.34-.71.47-1.37.4-2.25-.05-.62-.29-1.28-.78-2.2l-.03-.07c-.54-1.03-1-1.92-.99-2.76-.01-.96.38-1.86 1.21-2.83.08-.1.2-.16.33-.16s.26.04.36.13c.19.19.22.52.04.72-.67.77-.94 1.37-.93 2.06 0 .32.07.67.22 1.1.17.43.42.91.66 1.36.57 1.06.84 1.82.92 2.55.02.44.02 1.02-.1 1.62-.08.39-.21.75-.39 1.12-.11.23-.4.34-.66.23a.467.467 0 01-.28-.53c0-.03.02-.07.03-.09zm1.27-5.46c.44-.66.65-1.29.71-2.18.03-.62-.11-1.31-.47-2.29l-.02-.07c-.39-1.1-.72-2.04-.59-2.87.12-.95.63-1.79 1.6-2.63.1-.09.22-.13.35-.12.13.01.25.08.33.18.17.21.14.55-.06.72-.78.67-1.12 1.23-1.21 1.91-.04.32-.02.67.06 1.12.11.45.29.96.47 1.44.42 1.12.58 1.92.55 2.65-.05.44-.12 1.01-.33 1.59-.13.37-.31.72-.54 1.05-.14.21-.44.28-.68.13a.457.457 0 01-.21-.56c.01-.03.03-.06.04-.09zm1.9-4.96c.52-.59.82-1.19 1-2.06.12-.61.07-1.31-.16-2.33v-.07c-.25-1.14-.46-2.12-.22-2.93.25-.93.86-1.68 1.93-2.4.11-.07.24-.1.36-.07.13.03.24.11.31.23.14.23.07.56-.16.71-.86.56-1.27 1.07-1.45 1.73-.08.31-.11.67-.09 1.12.05.46.16.99.27 1.49.26 1.17.32 1.98.19 2.7-.1.43-.25.99-.54 1.53-.19.35-.4.67-.67.97-.17.2-.48.21-.69.05a.468.468 0 01-.13-.58c.01-.03.03-.06.05-.08zm2.7-4.91c.6-.51.97-1.07 1.27-1.9.2-.59.25-1.29.16-2.33v-.07c-.08-1.16-.15-2.16.2-2.93.37-.88 1.09-1.55 2.25-2.11.12-.06.25-.06.37-.02.12.05.22.14.27.27.1.25 0 .57-.25.68-.93.44-1.41.88-1.68 1.51-.13.3-.2.64-.24 1.09-.02.46.02 1 .06 1.51.1 1.19.04 2-.19 2.7-.16.41-.39.94-.74 1.44-.23.32-.49.61-.8.87-.19.17-.5.15-.69-.05a.457.457 0 01-.05-.59c.02-.03.04-.05.07-.07zm3.17-4.27c.66-.43 1.11-.93 1.52-1.72.28-.56.42-1.24.47-2.28v-.07c.08-1.16.15-2.16.59-2.88.49-.83 1.28-1.39 2.51-1.79a.476.476 0 01.61.33c.07.26-.08.56-.34.64-.98.31-1.52.68-1.87 1.28-.16.28-.29.61-.39 1.05-.08.45-.11 1-.14 1.51-.06 1.2-.22 1.99-.54 2.65-.21.38-.51.88-.93 1.33-.27.29-.57.54-.91.75-.22.14-.52.08-.68-.14a.468.468 0 01.03-.6c.02-.02.05-.05.07-.06zm3.92-4c.72-.33 1.22-.76 1.74-1.49.35-.51.59-1.17.78-2.2l.02-.07c.24-1.14.45-2.12.99-2.76.6-.75 1.47-1.2 2.73-1.42.13-.02.26 0 .36.08.11.08.17.2.19.33.03.27-.16.54-.42.59-1.01.17-1.6.46-2.03 1-.2.25-.37.57-.53.99-.14.44-.25.97-.35 1.47-.23 1.18-.5 1.94-.91 2.55-.27.35-.63.8-1.1 1.19-.31.25-.64.45-1.01.62-.23.11-.52 0-.65-.24-.11-.2-.06-.45.11-.59.03-.02.05-.04.08-.05zm4.2-3.25c.75-.24 1.32-.59 1.92-1.25.42-.46.74-1.08 1.07-2.07l.03-.07c.39-1.1.72-2.04 1.34-2.61.69-.66 1.61-.99 2.9-1.04.13 0 .26.04.34.13.1.09.15.22.15.35 0 .27-.23.51-.5.52-1.03.04-1.64.25-2.14.73-.23.22-.44.51-.65.91-.2.42-.38.93-.54 1.41-.38 1.14-.75 1.86-1.24 2.41-.31.31-.73.71-1.25 1.03-.34.2-.69.36-1.08.48-.25.08-.52-.07-.62-.32-.08-.21 0-.45.19-.57.03-.02.06-.03.09-.04zm4.86-2.79c.78-.13 1.38-.41 2.08-.96.48-.4.88-.97 1.35-1.9l.03-.06c.54-1.03 1-1.92 1.7-2.39.78-.56 1.74-.76 3.01-.63.13.01.25.08.32.17.08.11.11.24.09.37-.04.27-.3.48-.57.45-1.02-.11-1.66.02-2.22.42-.26.19-.51.45-.77.81-.25.38-.5.86-.73 1.32-.54 1.07-1 1.73-1.57 2.21-.35.26-.82.6-1.38.84-.36.16-.74.26-1.14.32-.25.04-.5-.13-.56-.41-.05-.22.06-.45.27-.53.03-.02.06-.02.09-.03zm4.92-2c.79-.02 1.43-.21 2.19-.68.53-.33 1-.84 1.59-1.71l.04-.06c.67-.95 1.25-1.78 2-2.15.85-.45 1.82-.52 3.07-.22.13.03.24.11.3.22.07.12.08.25.05.38-.08.26-.36.43-.62.37-1-.24-1.65-.2-2.26.12-.29.15-.56.37-.88.7-.3.35-.61.79-.9 1.22-.67.99-1.23 1.59-1.84 1.99-.38.22-.89.49-1.49.65-.38.1-.76.16-1.17.17-.26 0-.48-.21-.51-.48-.02-.23.12-.43.34-.5.03 0 .07-.01.1-.02zm5.43-1.38c.78.09 1.44-.02 2.26-.37.57-.25 1.11-.69 1.81-1.47l.05-.05c.8-.85 1.48-1.58 2.28-1.85.9-.33 1.88-.26 3.07.21.12.05.22.14.27.25.05.12.05.26-.01.38-.11.25-.42.38-.67.28-.96-.38-1.61-.43-2.25-.2-.3.11-.61.29-.96.57-.35.3-.72.7-1.06 1.08-.81.89-1.43 1.4-2.1 1.71-.41.16-.95.36-1.56.44-.39.05-.78.06-1.18 0a.508.508 0 01-.43-.54c0-.23.18-.41.4-.44h.1z"
                                                fill="#9e1c2b"
                                            />
                                        </G>
                                    </G>
                                </Svg>
                            </View>
                            <View style={styles.stepOne_inputs_wrapper}>

                                <View style={styles.country_dropdown_wrapper}>


                                    <DropDownPicker
                                        items={
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
                                        placeholder={i18n.t('country')}
                                        containerStyle={{height: 52, width: '100%',  marginRight: 10, zIndex: 15}}
                                        style={[styles.phone_code_dropdown,

                                            {borderWidth:1,borderColor: this.state.error_country ? '#A4223C' : this.state.valid_country ? '#337363' :  '#d9d9d9'  },

                                        ]}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                            width: 150,
                                            zIndex: 15
                                        }}
                                        dropDownStyle={{backgroundColor: '#ffffff',  width: '100%',  zIndex: 15}}
                                        defaultValue={'Latvia'}
                                        // onChangeItem={this.onChangeDropDownItem}
                                        onChangeItem={item => {
                                            this.chooseCountry(item);
                                        }}
                                    />

                                    {/*<Dropdown   style={[*/}
                                    {/*        styles.country_dropdown,*/}

                                    {/*        {*/}
                                    {/*            borderWidth: 1,*/}
                                    {/*            borderColor: this.state.error_country ? '#A4223C' : this.state.valid_country ? '#337363' : '#d9d9d9'*/}
                                    {/*        },*/}

                                    {/*    ]}*/}

                                    {/*    data={*/}
                                    {/*        [*/}
                                    {/*            {label: 'Latvia', value: 'latvia'},*/}
                                    {/*            {label: 'Armenia', value: 'armenia'},*/}
                                    {/*            {label: 'Australia', value: 'australia'},*/}
                                    {/*            {label: 'Austria', value: 'austria'},*/}
                                    {/*            {label: 'Belgium', value: 'belgium'},*/}
                                    {/*            {label: 'Brazil', value: 'brazil'},*/}
                                    {/*            {label: 'Russia', value: 'russia'},*/}
                                    {/*            {label: 'Georgia', value: 'georgia'},*/}
                                    {/*            {label: 'Germany', value: 'germany'},*/}
                                    {/*            {label: 'Greece', value: 'greece'},*/}
                                    {/*            {label: 'Indonesia', value: 'indonesia'},*/}
                                    {/*            {label: 'Iran', value: 'iran'},*/}
                                    {/*            {label: 'Israel', value: 'Israel'},*/}
                                    {/*            {label: 'Italy', value: 'italy'},*/}
                                    {/*            {label: 'Japan', value: 'japan'},*/}
                                    {/*            {label: 'Kuwait', value: 'kuwait'},*/}
                                    {/*            {label: 'Lebanon', value: 'lebanon'},*/}
                                    {/*            {label: 'Maldives', value: 'maldives'},*/}
                                    {/*            {label: 'Monaco', value: 'monaco'},*/}
                                    {/*            {label: 'New Zealand', value: 'new zealand'},*/}
                                    {/*            {label: 'Netherlands', value: 'netherlands'},*/}
                                    {/*            {label: 'Philippines', value: 'philippines'},*/}
                                    {/*            {label: 'Portugal', value: 'portugal'},*/}
                                    {/*            {label: 'Poland', value: 'poland'},*/}
                                    {/*            {label: 'Singapore', value: 'singapore'},*/}
                                    {/*            {label: 'South Africa', value: 'south africa'},*/}
                                    {/*            {label: 'Spain', value: 'spain'},*/}
                                    {/*            {label: 'Sri Lanka', value: 'sri lanka'},*/}
                                    {/*            {label: 'Switzerland', value: 'switzerland'},*/}
                                    {/*            {label: 'Thailand', value: 'thailand'},*/}
                                    {/*            {label: 'Ukraine', value: 'Ukraine'},*/}
                                    {/*            {label: 'United Arab Emirates', value: 'united arab emirates'},*/}
                                    {/*            {label: 'United Kingdom', value: 'united kingdom'},*/}
                                    {/*            {label: 'United States of America', value: 'united states of america'},*/}
                                    {/*        ]*/}

                                    {/*    }*/}
                                    {/*    placeholderStyle={styles.placeholderStyle}*/}
                                    {/*    selectedTextStyle={styles.selectedTextStyle}*/}
                                    {/*    inputSearchStyle={styles.inputSearchStyle}*/}
                                    {/*    iconStyle={styles.iconStyle}*/}
                                    {/*    placeholder={i18n.t('country')}*/}
                                    {/*    maxHeight={300}*/}
                                    {/*    labelField="label"*/}
                                    {/*    valueField="value"*/}
                                    {/*    value={this.state.selectedCountry}*/}
                                    {/*    defaultValue={{label: 'Latvia', value: 'latvia'}}*/}

                                    {/*onChange={item => {*/}
                                    {/*        this.chooseCountry(item);*/}
                                    {/*    }}*/}
                                    {/*/>*/}

                                    {this.state.error_country &&

                                        <Text style={styles.error_text}>
                                            {this.state.error_country_text}
                                        </Text>

                                    }


                                </View>


                                <View style={styles.language_dropdown_wrapper}>
                                    <Dropdown
                                        style={[
                                            styles.language_dropdown,

                                            {
                                                borderWidth: 1,
                                                borderColor: this.state.error_language ? '#A4223C' : this.state.valid_language ? '#337363' : '#d9d9d9'
                                            },

                                        ]}
                                        data={
                                            [
                                                {label: 'English', value: 'en'},
                                                {label: '??????????????', value: 'ru'},
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
                                    {this.state.error_language &&

                                    <Text style={styles.error_text}>
                                        {this.state.error_language_text}
                                    </Text>

                                    }


                                </View>


                                <View style={styles.gender_dropdown_wrapper}>
                                    <Dropdown
                                        style={[
                                            styles.gender_dropdown,

                                            {
                                                borderWidth: 1,
                                                borderColor: this.state.error_gender ? '#A4223C' : this.state.valid_gender ? '#337363' : '#d9d9d9'
                                            },

                                        ]}
                                        data={
                                            [
                                                { label: 'Female', value: 'female' },
                                                { label: 'Male', value: 'male' },
                                                { label: 'Other', value: 'other' },

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
                                    {this.state.error_gender &&

                                    <Text style={styles.error_text}>
                                        {this.state.error_gender_text}
                                    </Text>

                                    }

                                </View>


                                <View style={styles.inputWrapper}>


                                    <View style={[styles.emptyInput, {top: 5}]}>
                                        <DatePicker
                                            style={[
                                                {width: 30, height: 30},

                                                // {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },

                                            ]}
                                            ref={(ref)=>this.datePickerRef=ref}
                                            mode="date" //The enum of date, datetime and time
                                            // placeholder="select date"
                                            format="DD-MM-YYYY"
                                            minDate="01-01-1940"
                                            maxDate="30-12-2022"

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
                                                this.dateBirth(date);
                                            }}
                                            textColor="black"
                                            isDarkModeEnabled='true'
                                            iconComponent={// ???????????? iconSource ?????? ??? icon ??????????????????
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
                                    {/*    ???????????????? ???????? ???????????? ????????????????*/}
                                    {/*</Text>*/}


                                </View>
                            </View>

                            <TouchableOpacity style={styles.turn_to_step2_btn} onPress={() => {
                                this.validateSecondForm()
                            }}>
                                <Text style={styles.turn_to_step2_btn_text}>{i18n.t('next')}</Text>
                            </TouchableOpacity>



                        </KeyboardAwareScrollView>

                        :

                        <ScrollView style={styles.logo_inputs_wrapper}>

                            <View style={styles.step_logo}>
                                <Svg
                                    width={200}
                                    height={142}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 202 157.49">

                                    <G id="b">
                                        <G id="c">
                                            <Path
                                                d="M146.78 44.96c0 24.83-20.13 44.95-44.96 44.95S56.87 69.78 56.87 44.96 77 0 101.82 0s44.96 20.13 44.96 44.96z"
                                                fill="#fff"
                                            />
                                            <Path
                                                d="M46.76 148.12c2.6 0 4.68 2.09 4.68 4.69s-2.08 4.67-4.68 4.67-4.67-2.07-4.67-4.67 2.07-4.69 4.67-4.69zm0 8.06c1.86 0 3.38-1.51 3.38-3.37s-1.52-3.39-3.38-3.39-3.37 1.55-3.37 3.39 1.52 3.37 3.37 3.37zm7.46-7.68c0-.13.12-.25.25-.25h.87c.14 0 .25.12.25.25v5.37c0 1.3.83 2.31 2.16 2.31s2.18-1 2.18-2.29v-5.4c0-.13.1-.25.25-.25h.87c.13 0 .25.12.25.25v5.46c0 1.98-1.5 3.52-3.55 3.52s-3.52-1.55-3.52-3.52v-5.46zm11.79.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm6.12-.98c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61zm10.18.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm9.01-.88c-.08-.17.03-.34.22-.34h.92c.1 0 .2.08.22.14l2.86 6.43h.08l2.86-6.43c.03-.07.1-.14.22-.14h.92c.19 0 .3.17.22.34l-3.99 8.75c-.04.08-.12.14-.22.14H103c-.09 0-.18-.06-.22-.14l-3.96-8.75zm10.9-.09c0-.13.12-.25.25-.25h.86c.13 0 .25.12.25.25v8.61c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-8.61zm4.84 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm6.91 8.52l3.99-8.75c.04-.08.16-.14.22-.14h.13c.06 0 .18.07.22.14l3.97 8.75c.08.17-.03.34-.22.34h-.82c-.16 0-.25-.08-.3-.2l-.81-1.78h-4.25c-.26.6-.53 1.18-.79 1.78a.33.33 0 01-.3.2h-.82c-.2 0-.3-.17-.22-.34zm5.89-2.76l-1.6-3.56h-.06l-1.59 3.56h3.25zm8.68-6.14c1.25 0 2.27.46 3.16 1.21.1.1.12.26.01.36-.19.21-.39.4-.58.61-.1.12-.21.1-.34-.01-.61-.53-1.42-.88-2.21-.88-1.85 0-3.26 1.56-3.26 3.38s1.42 3.37 3.26 3.37c1.08 0 1.82-.39 1.95-.44v-1.46h-1.27c-.14 0-.25-.1-.25-.23v-.75c0-.14.1-.25.25-.25h2.37c.13 0 .23.12.23.25 0 1.04.01 2.11.01 3.15 0 .07-.05.17-.1.21 0 0-1.34.86-3.22.86-2.59 0-4.68-2.07-4.68-4.67s2.09-4.69 4.68-4.69zm6.49.38c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61z"
                                                fill="#4c575d"
                                            />
                                            <Path
                                                d="M62.69 126.98c0 4.38 0 6.05-.81 7.97-.57 1.35-1.75 2.62-3.94 4.13-.35.24-.78.54-1.05.67-.05.03-.11.05-.19.05s-.19-.05-.19-.16c0-.16.14-.24.38-.4.32-.19.7-.51.95-.76 1.76-1.78 2.59-3.21 2.59-10.18v-7.81c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.92.08 3.05.08s1.84-.08 2.65-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.13-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v6.48zm8.28-6.48c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.21-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.14-.22.43-.22 1.21 0 2.86.08 3.1.08s1.86-.08 2.67-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.11-.95.59-1 1.54-.06.87-.06 1.62-.06 5.84v3.78c0 3.89.86 5.57 2.03 6.67 1.32 1.24 2.54 1.48 4.08 1.48 1.65 0 3.27-.78 4.24-1.94 1.24-1.54 1.57-3.83 1.57-6.62v-3.38c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.7.08 2.86.08.19 0 1.46-.08 2.27-.08.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.67.08-.73.16-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v2.89c0 2.92-.32 6.16-2.48 8.08-1.95 1.73-3.97 2-5.57 2-.92 0-3.65-.11-5.56-1.92-1.32-1.27-2.35-3.16-2.35-7.11v-3.94zm41.92 12.21c-.16 0-.54 0-1.05-.08-.68-.11-1.84-.4-3.29-1.95-1.57-1.67-3.4-4.08-5.62-6.92 2.43-2.24 3.27-4.24 3.27-6.24 0-1.87-1.19-3.19-1.86-3.67-1.43-1.03-3.24-1.19-4.94-1.19-.84 0-2.89.08-3.19.08-.13 0-1.84-.08-3.05-.08-.3 0-.43.05-.43.22 0 .11.11.16.22.16.24 0 .7.03.92.08.89.19 1.11.62 1.16 1.54.05.87.05 1.62.05 5.84v4.75c0 2.59 0 4.73-.13 5.86-.11.78-.24 1.38-.78 1.49-.24.05-.57.11-.81.11-.16 0-.22.08-.22.16 0 .16.14.22.43.22.81 0 2.51-.08 2.54-.08.14 0 1.84.08 3.32.08.3 0 .43-.08.43-.22 0-.08-.05-.16-.22-.16-.24 0-.84-.05-1.21-.11-.81-.11-.97-.7-1.05-1.49-.13-1.13-.13-3.27-.13-5.86v-11.24c0-.16.08-.27.22-.32.27-.08 1-.16 1.81-.16 2.89 0 4.67 2.03 4.67 5.4 0 2.05-.7 3.51-1.65 4.16-.62.43-1.62.66-2.28.74-.21.03-.56.03-.74.02.7.14 1.25.12 1.84.75.54.7 1.81 2.51 2.94 4 1.54 2.02 2.48 3.35 3.65 3.97.7.38 1.38.51 2.89.51h1.92c.49 0 .65-.05.65-.22 0-.08-.11-.16-.24-.16zm25.35-3.08c.11.97.3 2.49 1.46 2.87.78.24 1.49.24 1.76.24.14 0 .22.03.22.14 0 .16-.24.24-.57.24-.6 0-3.51-.03-4.51-.11-.62-.06-.76-.14-.76-.27 0-.11.05-.16.19-.19s.16-.49.11-.97l-1.3-14.02h-.08l-6.62 14.04c-.57 1.19-.65 1.43-.89 1.43-.19 0-.32-.27-.84-1.24-.7-1.32-3.02-6-3.16-6.27-.24-.48-3.27-6.97-3.56-7.7h-.11l-1.08 12.53c-.03.43-.03.92-.03 1.38 0 .41.29.76.7.84.46.11.86.13 1.03.13.11 0 .22.05.22.14 0 .19-.16.24-.49.24-1 0-2.3-.08-2.51-.08-.24 0-1.54.08-2.27.08-.27 0-.46-.05-.46-.24 0-.08.14-.14.27-.14.22 0 .41 0 .81-.08.89-.16.97-1.22 1.08-2.24l1.94-17.61c.03-.3.14-.49.3-.49s.27.11.41.41l8.26 16.99 7.94-16.96c.11-.24.22-.43.4-.43s.27.22.32.73l1.81 16.61zm63.49 3.08c-.27 0-.68-.03-1.08-.16-.57-.16-1.35-.59-2.32-3-1.65-4.11-5.89-15.26-6.29-16.29-.32-.84-.43-.97-.6-.97s-.27.16-.59 1.05l-6.13 16.77c-.49 1.35-1.03 2.38-2.27 2.54-.22.03-.59.05-.78.05-.14 0-.24.05-.24.16 0 .16.16.22.51.22 1.27 0 2.76-.08 3.05-.08s1.46.08 2.11.08c.24 0 .4-.05.4-.22 0-.11-.08-.16-.27-.16h-.27c-.46 0-1.03-.24-1.03-.78 0-.49.14-1.13.38-1.81l2.11-6.16 2.38-7.29c.13-.41.27-.41.4 0l2.57 7.29 3 7.97c.16.43 0 .68-.16.73-.11.03-.19.08-.19.19 0 .16.3.16.81.19 1.86.05 3.83.05 4.24.05.3 0 .54-.05.54-.22 0-.14-.11-.16-.27-.16zm-30.46-7.4c0 3.97.11 5.7.6 6.19.43.43 1.13.62 3.24.62 1.43 0 2.62-.03 3.27-.81.35-.43.62-1.11.7-1.62.03-.21.08-.35.24-.35.13 0 .16.11.16.4s-.19 1.92-.41 2.7c-.19.62-.27.73-1.7.73-1.94 0-3.35-.06-4.48-.08-1.14-.05-1.97-.08-2.76-.08-.11 0-.57.03-1.11.03-.54.03-1.13.05-1.54.05-.3 0-.43-.05-.43-.22 0-.08.05-.16.22-.16.24 0 .57-.05.81-.11.54-.11.68-.7.79-1.49.13-1.13.13-3.27.13-5.86v-4.75c0-4.22 0-4.97-.05-5.84-.06-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.21 0 2.92.08 3.05.08s2.11-.08 2.92-.08c.29 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.57.03-.89.08-.78.13-1 .59-1.05 1.54-.05.87-.05 1.62-.05 5.84v4.81zm-159.79 4.56c1.58-3.66 5.23-13.18 5.83-15.15.14-.41.24-.79.24-1.04 0-.22-.08-.49-.35-.63-.33-.11-.74-.11-1.03-.11-.16 0-.3-.03-.3-.16 0-.17.16-.22.6-.22 1.09 0 2.35.08 2.67.08.16 0 1.34-.08 2.13-.08.3 0 .46.06.46.19s-.11.19-.33.19c-.19 0-.79 0-1.31.33-.35.24-.76.71-1.5 2.56-.3.77-1.66 4.04-3.05 7.4-1.66 3.99-2.89 6.93-3.52 8.27-.76 1.64-.87 2.08-1.14 2.08-.33 0-.46-.38-.98-1.69l-6.68-16.73c-.6-1.53-1.01-1.83-1.96-2.1-.41-.11-.87-.11-1.04-.11s-.22-.08-.22-.19c0-.16.27-.19.71-.19 1.31 0 2.86.08 3.19.08.27 0 1.5-.08 2.54-.08.49 0 .74.06.74.19s-.08.19-.27.19c-.3 0-.79.03-1.04.14-.3.14-.35.35-.35.55 0 .35.33 1.2.74 2.26l5.24 13.97zm16.02-4.58c0 2.62 0 4.78.14 5.92.08.79.25 1.39 1.06 1.5.38.06.98.11 1.23.11.16 0 .22.08.22.17 0 .14-.14.22-.44.22-1.5 0-3.22-.08-3.35-.08s-1.85.08-2.67.08c-.3 0-.44-.05-.44-.22 0-.08.06-.17.22-.17.24 0 .57-.05.82-.11.55-.11.68-.71.79-1.5.14-1.15.14-3.3.14-5.92v-4.8c0-4.26 0-5.02-.06-5.9-.05-.93-.33-1.39-.93-1.53-.3-.08-.65-.11-.84-.11-.11 0-.22-.05-.22-.16 0-.17.14-.22.44-.22.9 0 2.62.08 2.75.08s1.85-.08 2.67-.08c.3 0 .44.06.44.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.74.14-.96.6-1.01 1.56-.06.87-.06 1.64-.06 5.9v4.8zm24.3 7.53c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.34-3.03-1.66-4.15-5.95-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.16.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.24 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zm112.07 0c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.35-3.03-1.66-4.15-5.94-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.17.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.25 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zM101.82 82.72c-20.82 0-37.76-16.94-37.76-37.76S81 7.19 101.82 7.19s37.77 16.94 37.77 37.77-16.94 37.76-37.77 37.76zm0-74.53c-20.27 0-36.76 16.49-36.76 36.77s16.49 36.76 36.76 36.76 36.77-16.49 36.77-36.76S122.1 8.19 101.82 8.19zm16.1 15.84v.49s-4.94-.3-6.32 1.71c-.29.41-.42 1.24-.48 2.06v2.93l-7.96 3.7v-6.64c-.06-.82-.19-1.65-.47-2.06-1.38-2.01-6.31-1.71-6.31-1.71v-.49h21.54zm-14.76 28.91v10.19c0 3.62-.36 4.75-1.41 5.74-1.73 1.64-2.62 1.95-3.74 2.02 2.21-.1 4.75-.7 6.24-1.44 1.63-.8 3.41-2.12 4.4-3.52 1-1.41 1.63-3.02 2.06-4.89.43-1.87.42-4.43.42-6.56v-5.25l-7.96 3.7zm7.96-11.56l-7.96-3.7v1.84l7.96 3.69v-1.83zm0-8.81l-7.96 3.71v.02l7.96 3.69v-7.43zm0 12.18l-7.96-3.69v1.71l7.96 3.7v-1.72zm0 3.09l-7.96-3.72v7.44l7.96-3.69v-.03zM93.23 68.87c-.55-.6-.84-1.45-.58-1.96s.69-.65 1.13-.91c1.54-.93 2.57-2.61 2.57-4.54s-.96-3.49-2.41-4.44c-.49-.37-1.1-.62-1.82-.75-.1-.02-.2-.03-.3-.05-.25-.04-.5-.06-.77-.06h-.13c-1.68 0-2.85.6-3.71 1.56-.4.45-.74.98-.99 1.57-.3.66-.47 1.4-.47 2.17v.13c0 1.3.52 2.81 1.11 3.84.58 1.04 1.48 2.18 2.5 2.93 1.01.75 2.09 1.45 3.46 1.84 1.23.35 2.42.63 3.87.69-1.07-.1-2.12-.6-3.45-2.02zm6.73-63.85c.77.19 1.43.18 2.29-.07.6-.18 1.19-.54 1.99-1.22l.06-.05c.9-.74 1.68-1.37 2.5-1.53.94-.21 1.89-.01 3.02.61.12.06.2.17.23.29.03.13.01.26-.06.38-.14.23-.47.32-.7.19-.9-.5-1.53-.64-2.21-.49-.32.07-.64.21-1.03.44-.38.25-.8.6-1.2.93-.92.77-1.61 1.2-2.31 1.41-.43.11-.99.23-1.61.23-.4 0-.78-.05-1.17-.15-.25-.06-.41-.33-.36-.59.04-.22.23-.39.46-.39.03 0 .07 0 .1.01zm5.6.13c.73.3 1.39.38 2.27.25.62-.09 1.26-.37 2.14-.93l.06-.04c1-.6 1.85-1.12 2.69-1.17.96-.08 1.88.25 2.9 1.02.11.08.17.19.19.32.02.13-.02.26-.11.36-.17.21-.51.25-.72.09-.82-.62-1.43-.85-2.12-.8-.32.03-.67.12-1.08.29-.42.2-.88.48-1.31.75-1.01.64-1.76.96-2.48 1.08-.44.05-1.01.09-1.62 0-.39-.06-.77-.16-1.14-.31-.24-.09-.36-.38-.27-.64a.47.47 0 01.51-.32c.03 0 .07.01.1.02zm5.25.85c.69.39 1.33.56 2.22.55.62 0 1.29-.2 2.25-.63l.07-.03c1.07-.47 1.99-.87 2.82-.8.96.05 1.83.5 2.74 1.4.09.09.15.21.14.34 0 .13-.06.25-.16.35-.2.18-.54.18-.72 0-.73-.73-1.3-1.03-1.99-1.07-.32-.02-.67.03-1.11.14-.44.14-.93.36-1.4.57-1.09.5-1.87.72-2.61.74-.44-.01-1.02-.05-1.61-.21a4.95 4.95 0 01-1.09-.46c-.23-.12-.31-.43-.19-.67.1-.2.33-.31.54-.25.03 0 .06.02.09.04zm5.36 1.64c.62.48 1.24.74 2.12.86.62.08 1.31-.02 2.31-.31l.07-.02c1.12-.31 2.09-.58 2.91-.4.94.18 1.74.75 2.52 1.77.08.1.11.23.09.36a.46.46 0 01-.21.32c-.22.15-.56.11-.72-.11-.62-.82-1.15-1.2-1.82-1.34-.32-.06-.67-.07-1.12-.01-.45.08-.97.22-1.47.37-1.15.34-1.95.45-2.68.37-.43-.07-1-.19-1.56-.43-.36-.16-.69-.36-1.01-.61a.5.5 0 01-.09-.69c.13-.19.37-.26.57-.17.03.01.06.03.09.05zm4.82 2.23c.56.56 1.13.9 1.99 1.13.6.16 1.3.16 2.33 0h.07c1.15-.17 2.15-.31 2.94-.02.91.31 1.62.97 2.26 2.09.07.11.08.25.05.37a.48.48 0 01-.25.29c-.24.12-.57.03-.7-.2-.5-.9-.98-1.34-1.63-1.57-.31-.1-.66-.16-1.11-.16-.46.02-.99.09-1.5.17-1.18.18-2 .19-2.71 0-.42-.13-.97-.32-1.49-.64-.34-.21-.64-.45-.92-.74-.18-.18-.18-.49 0-.7a.46.46 0 01.67-.03zm4.72 3.02c.47.63 1 1.04 1.81 1.4.57.24 1.27.34 2.31.32h.07c1.16 0 2.17 0 2.91.4.86.43 1.47 1.19 1.95 2.38.05.12.05.25 0 .37a.48.48 0 01-.29.25.537.537 0 01-.66-.3c-.37-.96-.78-1.47-1.4-1.78-.29-.15-.63-.25-1.08-.32-.46-.05-1-.05-1.51-.04-1.2.02-2-.09-2.68-.37-.4-.19-.91-.45-1.39-.84-.31-.25-.57-.53-.81-.86-.16-.2-.11-.51.1-.69.17-.15.43-.15.6 0 .03.02.05.05.07.07zm4.04 3.45c.38.69.85 1.17 1.61 1.63.54.31 1.21.5 2.25.63h.07c1.15.16 2.15.3 2.83.79.79.54 1.3 1.38 1.61 2.62.03.13.01.26-.05.37a.45.45 0 01-.32.21.547.547 0 01-.62-.38c-.24-1-.58-1.56-1.15-1.95-.27-.18-.59-.33-1.02-.46-.45-.11-.98-.18-1.49-.24-1.19-.14-1.97-.36-2.61-.72-.37-.24-.85-.57-1.26-1.02-.27-.29-.5-.6-.69-.96-.13-.22-.04-.52.19-.67a.47.47 0 01.59.07c.02.02.04.05.06.08zm3.73 4.18c.28.74.68 1.27 1.37 1.84.49.39 1.13.67 2.14.93l.07.02c1.12.32 2.09.59 2.69 1.17.71.65 1.1 1.54 1.23 2.82.02.13-.02.26-.1.35-.09.1-.21.16-.34.17-.27.01-.53-.2-.56-.46-.1-1.02-.35-1.62-.86-2.09-.24-.22-.54-.41-.95-.59-.43-.17-.95-.32-1.45-.45-1.16-.31-1.9-.63-2.48-1.08-.33-.29-.76-.68-1.11-1.18a4.57 4.57 0 01-.55-1.05c-.1-.24.03-.52.28-.64.21-.09.45-.03.58.15.02.03.04.06.05.09zm2.96 4.41c.18.77.5 1.35 1.11 2 .43.45 1.03.81 2 1.21l.07.03c1.07.46 1.99.86 2.51 1.52.62.74.88 1.67.85 2.96 0 .13-.06.25-.15.34a.48.48 0 01-.36.12c-.27-.02-.5-.27-.49-.53.03-1.03-.14-1.66-.58-2.19-.21-.25-.48-.47-.86-.71-.4-.23-.9-.44-1.37-.64-1.11-.46-1.8-.88-2.32-1.4-.29-.33-.66-.77-.94-1.32-.18-.35-.32-.72-.4-1.11-.06-.25.1-.52.36-.59.22-.06.45.03.55.23.02.03.03.06.04.09zm2.46 5.03c.07.79.31 1.41.82 2.14.37.5.91.95 1.81 1.48l.06.04c.99.61 1.85 1.13 2.27 1.85.51.82.64 1.78.43 3.05a.44.44 0 01-.2.31c-.11.07-.24.1-.38.07-.26-.06-.46-.33-.41-.6.18-1.01.1-1.66-.27-2.25-.17-.28-.41-.54-.76-.83-.37-.28-.83-.56-1.27-.82-1.03-.61-1.66-1.12-2.1-1.71-.24-.37-.54-.86-.75-1.44-.13-.38-.21-.75-.24-1.16-.03-.26.17-.5.44-.54.22-.03.44.09.51.3.01.03.02.06.02.1zm1.66 5.05c-.03.79.12 1.44.53 2.23.29.55.77 1.06 1.59 1.7l.06.05c.9.73 1.68 1.36 2.01 2.14.39.88.4 1.85.02 3.08-.04.13-.12.23-.24.28-.12.06-.25.07-.38.02a.547.547 0 01-.33-.65c.31-.98.32-1.63.03-2.26-.13-.29-.33-.59-.64-.92-.32-.33-.75-.67-1.15-.98-.94-.74-1.5-1.33-1.85-1.97-.19-.39-.43-.92-.55-1.52a4.63 4.63 0 01-.09-1.18c0-.26.24-.47.51-.47.23 0 .43.15.47.37 0 .03.01.07 0 .1zm1.01 5.51c-.14.78-.08 1.44.21 2.28.22.58.62 1.16 1.34 1.91l.05.05c.79.85 1.48 1.59 1.69 2.4.27.92.14 1.89-.41 3.05-.05.12-.15.21-.27.25-.13.04-.26.03-.38-.04-.24-.13-.35-.45-.23-.68.44-.93.54-1.57.35-2.24-.09-.31-.25-.63-.5-1-.28-.37-.65-.76-1-1.13-.83-.86-1.3-1.53-1.56-2.21-.13-.42-.29-.97-.33-1.59-.03-.4 0-.78.08-1.18.04-.25.3-.43.57-.4.23.03.4.21.41.43v.1zm.24 5.31c-.24.75-.27 1.42-.09 2.29.14.61.46 1.23 1.08 2.07l.04.06c.67.95 1.25 1.77 1.36 2.6.14.95-.12 1.89-.82 2.97-.07.11-.18.18-.3.21-.13.02-.26 0-.37-.09-.22-.16-.29-.49-.14-.71.56-.86.75-1.49.64-2.17-.05-.32-.16-.66-.37-1.06-.22-.4-.54-.84-.84-1.26-.71-.97-1.08-1.69-1.25-2.4-.08-.43-.16-1-.12-1.62.03-.4.1-.78.23-1.16.08-.25.35-.39.62-.32.22.06.37.26.35.48 0 .03 0 .07-.02.1zm-.51 5.58c-.35.71-.47 1.36-.41 2.25.05.62.28 1.28.78 2.2l.03.06c.53 1.04.99 1.93.98 2.77.01.96-.38 1.86-1.22 2.83-.09.1-.2.16-.33.16s-.26-.04-.36-.14a.527.527 0 01-.04-.72c.68-.77.95-1.37.94-2.06 0-.32-.07-.67-.21-1.1-.17-.43-.41-.91-.66-1.36-.57-1.06-.84-1.82-.9-2.55-.02-.44-.02-1.02.11-1.62.08-.39.21-.75.39-1.12.11-.23.4-.34.66-.23.21.09.33.31.28.53 0 .03-.02.06-.03.09zm-1.2 5.17c-.44.66-.65 1.29-.71 2.18-.03.62.11 1.3.48 2.28l.02.07c.39 1.09.73 2.04.61 2.87-.12.95-.62 1.79-1.59 2.64-.1.09-.22.13-.35.12a.52.52 0 01-.34-.18c-.17-.21-.15-.55.06-.72.77-.68 1.12-1.23 1.2-1.92.04-.32.02-.68-.07-1.12-.11-.45-.29-.96-.47-1.44-.42-1.12-.59-1.92-.56-2.65.04-.44.11-1.01.32-1.59.13-.38.31-.72.54-1.05.14-.22.45-.28.68-.14.2.12.28.35.21.56-.01.03-.03.06-.04.09zm-2 5.23c-.52.59-.82 1.19-1 2.06-.12.61-.07 1.31.15 2.33l.02.07c.23 1.14.44 2.12.2 2.93-.25.93-.87 1.68-1.94 2.39-.11.07-.24.1-.36.07a.48.48 0 01-.31-.23.537.537 0 01.16-.71c.86-.56 1.28-1.06 1.46-1.73.08-.31.11-.67.09-1.12-.05-.46-.15-.99-.27-1.49-.26-1.17-.31-1.98-.18-2.7.1-.43.26-.98.54-1.53.18-.35.4-.67.68-.97.17-.19.48-.21.69-.04.18.14.23.38.13.58-.01.03-.03.06-.06.08zm-2.56 4.66c-.6.52-.97 1.07-1.27 1.91-.2.59-.24 1.29-.16 2.33v.07c.09 1.16.16 2.16-.19 2.93-.37.89-1.08 1.55-2.24 2.11-.12.06-.25.07-.37.02a.478.478 0 01-.27-.27c-.1-.25 0-.57.25-.68.93-.44 1.41-.88 1.68-1.52.12-.3.2-.65.24-1.1.02-.46-.02-1-.07-1.51-.1-1.19-.05-2 .18-2.7.16-.41.38-.94.74-1.44.23-.32.49-.61.8-.87.19-.17.51-.15.7.05.16.16.18.41.05.6-.02.03-.04.05-.06.07zm-3.34 4.5c-.66.42-1.11.92-1.52 1.71-.28.55-.42 1.24-.48 2.28v.07c-.09 1.16-.16 2.16-.6 2.87-.49.83-1.29 1.39-2.51 1.78-.12.04-.26.03-.37-.03a.44.44 0 01-.23-.3c-.07-.26.09-.56.34-.64.98-.31 1.52-.68 1.87-1.27.17-.28.29-.61.39-1.05.08-.45.12-.99.15-1.51.06-1.2.23-1.99.55-2.65.21-.38.51-.88.93-1.33.27-.29.57-.54.91-.75.21-.14.52-.08.68.15.13.18.12.43-.03.6-.02.03-.05.04-.08.07zm-3.72 3.79c-.71.34-1.22.77-1.74 1.5-.35.51-.58 1.17-.78 2.2l-.02.07c-.23 1.14-.44 2.12-.97 2.77-.6.75-1.46 1.2-2.73 1.43a.42.42 0 01-.36-.08.436.436 0 01-.19-.33c-.03-.27.16-.54.42-.59 1.01-.18 1.59-.47 2.02-1.01.2-.25.37-.57.52-.99.14-.44.25-.97.34-1.47.22-1.18.49-1.94.9-2.56.26-.35.62-.8 1.1-1.19.31-.25.64-.45 1-.62.23-.11.53 0 .66.23.11.2.06.45-.11.59-.02.02-.05.04-.08.05zm-4.43 3.43c-.75.23-1.32.59-1.93 1.24-.42.46-.74 1.08-1.08 2.07l-.02.07c-.39 1.1-.73 2.04-1.35 2.6-.69.66-1.61.99-2.9 1.04-.13 0-.25-.04-.35-.13a.427.427 0 01-.14-.35c0-.27.23-.52.5-.52 1.03-.03 1.64-.24 2.14-.72.24-.22.44-.51.66-.91.2-.41.38-.92.55-1.41.39-1.13.76-1.85 1.25-2.4.31-.31.73-.71 1.26-1.03.34-.21.69-.36 1.08-.47.24-.08.52.07.61.32.08.21 0 .45-.19.57-.03.02-.06.03-.09.04zm-4.6 2.65c-.78.13-1.38.41-2.07.97-.48.4-.88.97-1.34 1.91l-.04.06c-.53 1.03-.99 1.93-1.68 2.4-.78.56-1.73.76-3.01.64a.466.466 0 01-.43-.54c.04-.27.3-.48.57-.45 1.02.1 1.66-.02 2.22-.43.26-.19.51-.45.77-.81.25-.38.5-.87.73-1.33.53-1.08 1-1.74 1.56-2.22.35-.27.82-.61 1.38-.85.36-.16.73-.26 1.13-.33.25-.05.51.14.57.4.05.22-.06.45-.27.54l-.09.03zm-5.19 2.11c-.79.02-1.43.21-2.19.67-.53.33-1.01.84-1.6 1.7l-.04.06c-.67.95-1.25 1.77-2.01 2.14-.85.45-1.82.52-3.07.21a.48.48 0 01-.3-.22.457.457 0 01-.04-.38c.08-.26.37-.43.62-.37 1 .25 1.65.21 2.26-.11.29-.15.57-.37.88-.7.3-.35.62-.79.91-1.21.68-.99 1.23-1.58 1.85-1.98.38-.22.9-.48 1.49-.65.38-.11.76-.16 1.17-.16.26 0 .48.2.5.48.02.23-.12.43-.34.49-.03 0-.06.01-.1.02zm-5.15 1.31c-.79-.08-1.44.02-2.26.38-.57.26-1.11.7-1.81 1.47l-.05.05c-.79.85-1.48 1.59-2.27 1.86-.9.33-1.87.27-3.07-.2a.51.51 0 01-.27-.25.5.5 0 010-.38c.11-.25.42-.38.67-.28.96.38 1.61.43 2.25.19.3-.11.61-.29.96-.57.35-.3.72-.7 1.06-1.08.8-.89 1.43-1.41 2.1-1.72.41-.16.95-.36 1.56-.45.39-.05.78-.06 1.18 0 .26.02.45.27.44.54a.46.46 0 01-.4.44h-.1zm-5.57.63c-.76-.19-1.43-.18-2.29.06-.6.18-1.19.54-2 1.21l-.06.05c-.91.73-1.68 1.36-2.51 1.52-.94.21-1.89 0-3.02-.62a.476.476 0 01-.23-.29.51.51 0 01.06-.38c.14-.23.47-.32.7-.19.89.51 1.53.65 2.2.5.32-.07.65-.21 1.03-.43.38-.25.81-.59 1.2-.92.92-.77 1.61-1.19 2.32-1.4.43-.1.99-.22 1.61-.22.4 0 .78.05 1.17.16.25.06.41.33.36.6-.04.22-.23.38-.46.38-.03 0-.07 0-.1-.01zm-5.31-.13c-.73-.29-1.4-.37-2.28-.25-.61.09-1.25.37-2.14.93l-.06.04c-.99.61-1.85 1.13-2.69 1.18-.96.08-1.88-.25-2.91-1.02a.468.468 0 01-.19-.32c-.02-.13.02-.26.11-.37.17-.21.51-.25.72-.09.82.62 1.43.84 2.12.79.32-.03.67-.12 1.08-.29.42-.2.88-.48 1.31-.75 1.01-.64 1.76-.97 2.48-1.09.44-.05 1.01-.09 1.62 0 .39.06.77.16 1.14.31.24.09.36.38.28.64a.47.47 0 01-.51.32c-.03 0-.07-.01-.09-.02zm-5.53-.9c-.68-.39-1.33-.56-2.22-.56-.62 0-1.3.19-2.25.63l-.07.03c-1.07.46-1.99.86-2.83.79-.96-.05-1.83-.51-2.74-1.41a.476.476 0 01-.14-.34c0-.13.06-.25.16-.35.2-.18.54-.18.72 0 .72.73 1.3 1.04 1.99 1.08.33.02.68-.02 1.11-.14.44-.14.94-.35 1.4-.56 1.09-.49 1.87-.71 2.61-.73.44.01 1.02.05 1.61.22.38.11.74.26 1.09.47.22.13.31.43.18.67-.1.2-.33.31-.54.25-.03 0-.06-.02-.09-.04zm-5.08-1.55c-.63-.48-1.24-.73-2.13-.85-.62-.08-1.31.02-2.31.32l-.07.02c-1.12.32-2.09.59-2.91.41-.94-.18-1.74-.75-2.53-1.76a.46.46 0 01-.09-.36.46.46 0 01.2-.32c.22-.15.56-.11.71.11.62.82 1.15 1.2 1.83 1.33.32.06.67.07 1.12.01.45-.08.98-.23 1.47-.37 1.15-.34 1.95-.46 2.68-.38.43.07 1 .18 1.56.43.36.16.7.36 1.01.61a.5.5 0 01.09.69c-.13.19-.37.26-.57.17a.218.218 0 01-.08-.05zm-5.08-2.36c-.55-.56-1.13-.9-1.98-1.14-.6-.16-1.3-.16-2.33 0h-.07c-1.15.17-2.15.3-2.93 0-.91-.31-1.62-.98-2.25-2.1a.439.439 0 01-.04-.37.48.48 0 01.25-.29c.24-.12.57-.03.69.2.5.9.97 1.35 1.62 1.58.31.11.66.16 1.11.17.46-.02 1-.09 1.5-.16 1.19-.18 2-.18 2.71 0 .42.13.96.32 1.49.64.34.21.64.45.92.74.18.18.18.49 0 .69a.46.46 0 01-.59.09c-.03-.02-.05-.04-.08-.06zm-4.47-2.87c-.47-.63-1-1.04-1.82-1.39-.57-.24-1.27-.33-2.31-.31h-.07c-1.16 0-2.17 0-2.91-.39-.86-.43-1.47-1.19-1.96-2.38a.475.475 0 010-.37.51.51 0 01.28-.26c.26-.09.56.05.66.29.38.96.79 1.47 1.4 1.78.29.15.63.24 1.08.31.46.05 1 .04 1.51.04 1.2-.02 2 .09 2.69.36.4.19.91.45 1.39.84.31.25.57.53.81.86.16.21.11.51-.09.69-.18.15-.43.15-.6 0l-.07-.07zm-4.26-3.64c-.38-.69-.84-1.17-1.6-1.63-.54-.32-1.21-.51-2.25-.63h-.07c-1.15-.17-2.15-.31-2.83-.81-.79-.54-1.3-1.38-1.6-2.63a.448.448 0 01.06-.36.45.45 0 01.32-.21c.27-.05.55.12.61.38.24 1 .57 1.56 1.14 1.96.27.19.59.33 1.02.46.45.11.98.18 1.49.25 1.19.15 1.97.37 2.61.73.37.24.84.57 1.26 1.02.27.29.5.61.69.96.12.22.04.52-.19.67a.47.47 0 01-.59-.07c-.02-.02-.04-.05-.06-.08zm-3.53-3.97c-.29-.74-.68-1.27-1.37-1.83-.49-.38-1.13-.66-2.14-.93l-.07-.02c-1.12-.31-2.09-.58-2.7-1.16-.71-.65-1.1-1.54-1.24-2.82-.02-.13.02-.26.1-.35.09-.1.21-.16.34-.17.27-.01.53.2.56.46.11 1.02.36 1.62.87 2.09.24.22.54.4.95.59.43.17.95.31 1.45.44 1.16.3 1.91.63 2.49 1.07.33.29.76.68 1.11 1.18.23.33.41.67.55 1.04.1.24-.03.53-.28.64a.478.478 0 01-.63-.23zm-3.12-4.65c-.18-.77-.5-1.35-1.1-2.01-.43-.45-1.03-.81-1.99-1.21l-.07-.03c-1.07-.47-1.98-.87-2.51-1.53-.61-.74-.88-1.68-.83-2.96 0-.13.06-.25.15-.34.1-.09.23-.13.36-.12.27.02.5.27.49.54-.04 1.03.13 1.66.57 2.19.21.25.48.48.86.72.4.22.9.44 1.37.64 1.11.46 1.8.88 2.31 1.41.29.33.66.78.94 1.32.18.35.31.72.4 1.11.06.25-.1.51-.37.59a.456.456 0 01-.55-.23.161.161 0 01-.03-.09zm-2.33-4.77c-.08-.79-.31-1.41-.83-2.14-.37-.5-.91-.94-1.81-1.47l-.06-.04c-1-.6-1.85-1.12-2.28-1.84-.51-.82-.64-1.78-.43-3.05a.44.44 0 01.2-.31c.11-.08.24-.1.38-.07.26.06.46.33.41.6-.17 1.01-.09 1.66.28 2.25.17.27.41.54.76.83.37.28.83.56 1.27.82 1.04.61 1.67 1.12 2.11 1.7.24.37.55.86.75 1.44.13.38.21.75.25 1.15.03.26-.17.5-.44.54a.467.467 0 01-.52-.3c0-.03-.02-.07-.02-.09zm-1.75-5.32c.03-.79-.12-1.44-.52-2.23-.29-.55-.77-1.06-1.59-1.71l-.06-.05c-.9-.74-1.68-1.37-2-2.15-.39-.88-.39-1.85 0-3.08.04-.13.12-.23.24-.28a.5.5 0 01.38-.02c.25.09.41.39.33.65-.32.98-.32 1.63-.04 2.26.13.3.33.59.64.92.33.32.74.67 1.15.99.94.74 1.49 1.34 1.85 1.98.19.4.42.93.55 1.53.08.39.11.78.08 1.18 0 .25-.24.47-.51.47-.23 0-.42-.15-.47-.37v-.1zm-.96-5.22c.14-.78.08-1.44-.22-2.28-.22-.58-.62-1.15-1.35-1.9l-.05-.06c-.8-.85-1.48-1.58-1.7-2.39-.27-.92-.14-1.89.41-3.05.05-.12.15-.21.27-.25a.5.5 0 01.38.03c.24.13.35.44.23.68-.44.93-.54 1.57-.34 2.24.09.31.25.63.51 1 .28.37.65.76 1.01 1.13.83.86 1.3 1.52 1.57 2.21.13.42.3.98.34 1.59.02.4 0 .78-.07 1.18-.04.26-.3.43-.57.4a.479.479 0 01-.42-.43v-.1zm-.25-5.6c.25-.75.28-1.41.1-2.29-.13-.61-.45-1.23-1.07-2.07l-.04-.06c-.67-.95-1.24-1.77-1.35-2.61-.14-.95.13-1.89.83-2.97a.456.456 0 01.67-.12c.22.16.29.49.14.71-.57.86-.75 1.48-.65 2.17.05.32.16.66.36 1.06.23.4.54.84.84 1.26.7.97 1.08 1.69 1.24 2.41.07.43.16 1 .11 1.62-.03.4-.1.78-.24 1.16a.5.5 0 01-.62.31.462.462 0 01-.35-.48c0-.03 0-.07.02-.1zm.49-5.29c.34-.71.47-1.37.4-2.25-.05-.62-.29-1.28-.78-2.2l-.03-.07c-.54-1.03-1-1.92-.99-2.76-.01-.96.38-1.86 1.21-2.83.08-.1.2-.16.33-.16s.26.04.36.13c.19.19.22.52.04.72-.67.77-.94 1.37-.93 2.06 0 .32.07.67.22 1.1.17.43.42.91.66 1.36.57 1.06.84 1.82.92 2.55.02.44.02 1.02-.1 1.62-.08.39-.21.75-.39 1.12-.11.23-.4.34-.66.23a.467.467 0 01-.28-.53c0-.03.02-.07.03-.09zm1.27-5.46c.44-.66.65-1.29.71-2.18.03-.62-.11-1.31-.47-2.29l-.02-.07c-.39-1.1-.72-2.04-.59-2.87.12-.95.63-1.79 1.6-2.63.1-.09.22-.13.35-.12.13.01.25.08.33.18.17.21.14.55-.06.72-.78.67-1.12 1.23-1.21 1.91-.04.32-.02.67.06 1.12.11.45.29.96.47 1.44.42 1.12.58 1.92.55 2.65-.05.44-.12 1.01-.33 1.59-.13.37-.31.72-.54 1.05-.14.21-.44.28-.68.13a.457.457 0 01-.21-.56c.01-.03.03-.06.04-.09zm1.9-4.96c.52-.59.82-1.19 1-2.06.12-.61.07-1.31-.16-2.33v-.07c-.25-1.14-.46-2.12-.22-2.93.25-.93.86-1.68 1.93-2.4.11-.07.24-.1.36-.07.13.03.24.11.31.23.14.23.07.56-.16.71-.86.56-1.27 1.07-1.45 1.73-.08.31-.11.67-.09 1.12.05.46.16.99.27 1.49.26 1.17.32 1.98.19 2.7-.1.43-.25.99-.54 1.53-.19.35-.4.67-.67.97-.17.2-.48.21-.69.05a.468.468 0 01-.13-.58c.01-.03.03-.06.05-.08zm2.7-4.91c.6-.51.97-1.07 1.27-1.9.2-.59.25-1.29.16-2.33v-.07c-.08-1.16-.15-2.16.2-2.93.37-.88 1.09-1.55 2.25-2.11.12-.06.25-.06.37-.02.12.05.22.14.27.27.1.25 0 .57-.25.68-.93.44-1.41.88-1.68 1.51-.13.3-.2.64-.24 1.09-.02.46.02 1 .06 1.51.1 1.19.04 2-.19 2.7-.16.41-.39.94-.74 1.44-.23.32-.49.61-.8.87-.19.17-.5.15-.69-.05a.457.457 0 01-.05-.59c.02-.03.04-.05.07-.07zm3.17-4.27c.66-.43 1.11-.93 1.52-1.72.28-.56.42-1.24.47-2.28v-.07c.08-1.16.15-2.16.59-2.88.49-.83 1.28-1.39 2.51-1.79a.476.476 0 01.61.33c.07.26-.08.56-.34.64-.98.31-1.52.68-1.87 1.28-.16.28-.29.61-.39 1.05-.08.45-.11 1-.14 1.51-.06 1.2-.22 1.99-.54 2.65-.21.38-.51.88-.93 1.33-.27.29-.57.54-.91.75-.22.14-.52.08-.68-.14a.468.468 0 01.03-.6c.02-.02.05-.05.07-.06zm3.92-4c.72-.33 1.22-.76 1.74-1.49.35-.51.59-1.17.78-2.2l.02-.07c.24-1.14.45-2.12.99-2.76.6-.75 1.47-1.2 2.73-1.42.13-.02.26 0 .36.08.11.08.17.2.19.33.03.27-.16.54-.42.59-1.01.17-1.6.46-2.03 1-.2.25-.37.57-.53.99-.14.44-.25.97-.35 1.47-.23 1.18-.5 1.94-.91 2.55-.27.35-.63.8-1.1 1.19-.31.25-.64.45-1.01.62-.23.11-.52 0-.65-.24-.11-.2-.06-.45.11-.59.03-.02.05-.04.08-.05zm4.2-3.25c.75-.24 1.32-.59 1.92-1.25.42-.46.74-1.08 1.07-2.07l.03-.07c.39-1.1.72-2.04 1.34-2.61.69-.66 1.61-.99 2.9-1.04.13 0 .26.04.34.13.1.09.15.22.15.35 0 .27-.23.51-.5.52-1.03.04-1.64.25-2.14.73-.23.22-.44.51-.65.91-.2.42-.38.93-.54 1.41-.38 1.14-.75 1.86-1.24 2.41-.31.31-.73.71-1.25 1.03-.34.2-.69.36-1.08.48-.25.08-.52-.07-.62-.32-.08-.21 0-.45.19-.57.03-.02.06-.03.09-.04zm4.86-2.79c.78-.13 1.38-.41 2.08-.96.48-.4.88-.97 1.35-1.9l.03-.06c.54-1.03 1-1.92 1.7-2.39.78-.56 1.74-.76 3.01-.63.13.01.25.08.32.17.08.11.11.24.09.37-.04.27-.3.48-.57.45-1.02-.11-1.66.02-2.22.42-.26.19-.51.45-.77.81-.25.38-.5.86-.73 1.32-.54 1.07-1 1.73-1.57 2.21-.35.26-.82.6-1.38.84-.36.16-.74.26-1.14.32-.25.04-.5-.13-.56-.41-.05-.22.06-.45.27-.53.03-.02.06-.02.09-.03zm4.92-2c.79-.02 1.43-.21 2.19-.68.53-.33 1-.84 1.59-1.71l.04-.06c.67-.95 1.25-1.78 2-2.15.85-.45 1.82-.52 3.07-.22.13.03.24.11.3.22.07.12.08.25.05.38-.08.26-.36.43-.62.37-1-.24-1.65-.2-2.26.12-.29.15-.56.37-.88.7-.3.35-.61.79-.9 1.22-.67.99-1.23 1.59-1.84 1.99-.38.22-.89.49-1.49.65-.38.1-.76.16-1.17.17-.26 0-.48-.21-.51-.48-.02-.23.12-.43.34-.5.03 0 .07-.01.1-.02zm5.43-1.38c.78.09 1.44-.02 2.26-.37.57-.25 1.11-.69 1.81-1.47l.05-.05c.8-.85 1.48-1.58 2.28-1.85.9-.33 1.88-.26 3.07.21.12.05.22.14.27.25.05.12.05.26-.01.38-.11.25-.42.38-.67.28-.96-.38-1.61-.43-2.25-.2-.3.11-.61.29-.96.57-.35.3-.72.7-1.06 1.08-.81.89-1.43 1.4-2.1 1.71-.41.16-.95.36-1.56.44-.39.05-.78.06-1.18 0a.508.508 0 01-.43-.54c0-.23.18-.41.4-.44h.1z"
                                                fill="#9e1c2b"
                                            />
                                        </G>
                                    </G>
                                </Svg>
                            </View>
                            <View style={styles.stepOne_inputs_wrapper}>

                                <View style={styles.country_dropdown_wrapper}>


                                    <DropDownPicker
                                        items={
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
                                        placeholder={i18n.t('country')}
                                        containerStyle={{height: 52, width: '100%',  marginRight: 10, zIndex: 15}}
                                        style={[styles.phone_code_dropdown,

                                            {borderWidth:1,borderColor: this.state.error_country ? '#A4223C' : this.state.valid_country ? '#337363' :  '#d9d9d9'  },

                                        ]}
                                        itemStyle={{
                                            justifyContent: 'flex-start',
                                            zIndex: 15,
                                            width: 150,

                                        }}
                                        dropDownStyle={{backgroundColor: '#ffffff',  width: '100%',  zIndex: 15}}
                                        defaultValue={'Latvia'}
                                        // onChangeItem={this.onChangeDropDownItem}
                                        onChangeItem={item => {
                                            this.chooseCountry(item);
                                        }}
                                    />

                                    {/*<Dropdown   style={[*/}
                                    {/*        styles.country_dropdown,*/}

                                    {/*        {*/}
                                    {/*            borderWidth: 1,*/}
                                    {/*            borderColor: this.state.error_country ? '#A4223C' : this.state.valid_country ? '#337363' : '#d9d9d9'*/}
                                    {/*        },*/}

                                    {/*    ]}*/}



                                    {/*    data={*/}
                                    {/*        [*/}
                                    {/*            {label: 'Latvia', value: 'latvia'},*/}
                                    {/*            {label: 'Armenia', value: 'armenia'},*/}
                                    {/*            {label: 'Australia', value: 'australia'},*/}
                                    {/*            {label: 'Austria', value: 'austria'},*/}
                                    {/*            {label: 'Belgium', value: 'belgium'},*/}
                                    {/*            {label: 'Brazil', value: 'brazil'},*/}
                                    {/*            {label: 'Russia', value: 'russia'},*/}
                                    {/*            {label: 'Georgia', value: 'georgia'},*/}
                                    {/*            {label: 'Germany', value: 'germany'},*/}
                                    {/*            {label: 'Greece', value: 'greece'},*/}
                                    {/*            {label: 'Indonesia', value: 'indonesia'},*/}
                                    {/*            {label: 'Iran', value: 'iran'},*/}
                                    {/*            {label: 'Israel', value: 'Israel'},*/}
                                    {/*            {label: 'Italy', value: 'italy'},*/}
                                    {/*            {label: 'Japan', value: 'japan'},*/}
                                    {/*            {label: 'Kuwait', value: 'kuwait'},*/}
                                    {/*            {label: 'Lebanon', value: 'lebanon'},*/}
                                    {/*            {label: 'Maldives', value: 'maldives'},*/}
                                    {/*            {label: 'Monaco', value: 'monaco'},*/}
                                    {/*            {label: 'New Zealand', value: 'new zealand'},*/}
                                    {/*            {label: 'Netherlands', value: 'netherlands'},*/}
                                    {/*            {label: 'Philippines', value: 'philippines'},*/}
                                    {/*            {label: 'Portugal', value: 'portugal'},*/}
                                    {/*            {label: 'Poland', value: 'poland'},*/}
                                    {/*            {label: 'Singapore', value: 'singapore'},*/}
                                    {/*            {label: 'South Africa', value: 'south africa'},*/}
                                    {/*            {label: 'Spain', value: 'spain'},*/}
                                    {/*            {label: 'Sri Lanka', value: 'sri lanka'},*/}
                                    {/*            {label: 'Switzerland', value: 'switzerland'},*/}
                                    {/*            {label: 'Thailand', value: 'thailand'},*/}
                                    {/*            {label: 'Ukraine', value: 'Ukraine'},*/}
                                    {/*            {label: 'United Arab Emirates', value: 'united arab emirates'},*/}
                                    {/*            {label: 'United Kingdom', value: 'united kingdom'},*/}
                                    {/*            {label: 'United States of America', value: 'united states of america'},*/}
                                    {/*        ]*/}

                                    {/*    }*/}
                                    {/*    placeholderStyle={styles.placeholderStyle}*/}
                                    {/*    selectedTextStyle={styles.selectedTextStyle}*/}
                                    {/*    inputSearchStyle={styles.inputSearchStyle}*/}
                                    {/*    iconStyle={styles.iconStyle}*/}
                                    {/*    placeholder={i18n.t('country')}*/}
                                    {/*    maxHeight={300}*/}
                                    {/*    labelField="label"*/}
                                    {/*    valueField="value"*/}
                                    {/*    value={this.state.selectedCountry}*/}
                                    {/*    defaultValue={{label: 'Latvia', value: 'latvia'}}*/}

                                    {/*onChange={item => {*/}
                                    {/*        this.chooseCountry(item);*/}
                                    {/*    }}*/}
                                    {/*/>*/}

                                    {this.state.error_country &&

                                    <Text style={styles.error_text}>
                                        {this.state.error_country_text}
                                    </Text>

                                    }


                                </View>


                                <View style={styles.language_dropdown_wrapper}>
                                    <Dropdown
                                        style={[
                                            styles.language_dropdown,

                                            {
                                                borderWidth: 1,
                                                borderColor: this.state.error_language ? '#A4223C' : this.state.valid_language ? '#337363' : '#d9d9d9'
                                            },

                                        ]}
                                        data={
                                            [
                                                {label: 'English', value: 'en'},
                                                {label: '??????????????', value: 'ru'},
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
                                    {this.state.error_language &&

                                    <Text style={styles.error_text}>
                                        {this.state.error_language_text}
                                    </Text>

                                    }


                                </View>


                                <View style={styles.gender_dropdown_wrapper}>
                                    <Dropdown
                                        style={[
                                            styles.gender_dropdown,

                                            {
                                                borderWidth: 1,
                                                borderColor: this.state.error_gender ? '#A4223C' : this.state.valid_gender ? '#337363' : '#d9d9d9'
                                            },

                                        ]}
                                        data={
                                            [
                                                { label: 'Female', value: 'female' },
                                                { label: 'Male', value: 'male' },
                                                { label: 'Other', value: 'other' },

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
                                    {this.state.error_gender &&

                                    <Text style={styles.error_text}>
                                        {this.state.error_gender_text}
                                    </Text>

                                    }

                                </View>


                                <View style={styles.inputWrapper}>


                                    <View style={[styles.emptyInput, {top: 5}]}>
                                        <DatePicker
                                            style={[
                                                {width: 30, height: 30},

                                                // {borderWidth:1,borderColor: this.state.error_phone_code ? '#A4223C' : this.state.valid_phone_code ? '#337363' :  '#d9d9d9'  },

                                            ]}
                                            ref={(ref)=>this.datePickerRef=ref}
                                            mode="date" //The enum of date, datetime and time
                                            // placeholder="select date"
                                            format="DD-MM-YYYY"
                                            minDate="01-01-1940"
                                            maxDate="30-12-2022"

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
                                                this.dateBirth(date);
                                            }}
                                            textColor="black"
                                            isDarkModeEnabled='true'
                                            iconComponent={// ???????????? iconSource ?????? ??? icon ??????????????????
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
                                    {/*    ???????????????? ???????? ???????????? ????????????????*/}
                                    {/*</Text>*/}


                                </View>
                            </View>

                            <TouchableOpacity style={styles.turn_to_step2_btn} onPress={() => {
                                this.validateSecondForm()
                            }}>
                                <Text style={styles.turn_to_step2_btn_text}>{i18n.t('next')}</Text>
                            </TouchableOpacity>



                        </ScrollView>

                       }
                        <View style={styles.step_rounds_wrapper}>
                            <View style={styles.step_round}></View>
                            <View style={styles.step_round_active}></View>
                            <View style={styles.step_round}></View>
                        </View>


                </View>

                }



                {this.state.stepThird &&
                <View style={styles.stepOne_wrapper}>
                    <View style={styles.back_to_btn_step_numbers_wrapper}>
                        <TouchableOpacity style={styles.back_to_dashboard_btn} onPress={() => {this.backToStepSecond()}}>
                            <Text style={[styles.back_to_dashboard_btn_text, this.state.secondFormError ? {color:'red'} : {}]}>{i18n.t('back')}</Text>
                        </TouchableOpacity>
                        <View style={styles.step_numbers_wrapper}>
                            <Text style={styles.step_number}>3</Text>
                            <Text style={styles.step_number_text}>{i18n.t('of')}</Text>
                            <Text style={styles.step_number}>3</Text>
                        </View>
                    </View>

                    {Platform.OS === 'ios'
                        ?
                        <KeyboardAwareScrollView style={styles.logo_inputs_wrapper}>

                            <View style={styles.step_logo}>
                                <Svg
                                    width={200}
                                    height={142}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 202 157.49">

                                    <G id="b">
                                        <G id="c">
                                            <Path
                                                d="M146.78 44.96c0 24.83-20.13 44.95-44.96 44.95S56.87 69.78 56.87 44.96 77 0 101.82 0s44.96 20.13 44.96 44.96z"
                                                fill="#fff"
                                            />
                                            <Path
                                                d="M46.76 148.12c2.6 0 4.68 2.09 4.68 4.69s-2.08 4.67-4.68 4.67-4.67-2.07-4.67-4.67 2.07-4.69 4.67-4.69zm0 8.06c1.86 0 3.38-1.51 3.38-3.37s-1.52-3.39-3.38-3.39-3.37 1.55-3.37 3.39 1.52 3.37 3.37 3.37zm7.46-7.68c0-.13.12-.25.25-.25h.87c.14 0 .25.12.25.25v5.37c0 1.3.83 2.31 2.16 2.31s2.18-1 2.18-2.29v-5.4c0-.13.1-.25.25-.25h.87c.13 0 .25.12.25.25v5.46c0 1.98-1.5 3.52-3.55 3.52s-3.52-1.55-3.52-3.52v-5.46zm11.79.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm6.12-.98c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61zm10.18.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm9.01-.88c-.08-.17.03-.34.22-.34h.92c.1 0 .2.08.22.14l2.86 6.43h.08l2.86-6.43c.03-.07.1-.14.22-.14h.92c.19 0 .3.17.22.34l-3.99 8.75c-.04.08-.12.14-.22.14H103c-.09 0-.18-.06-.22-.14l-3.96-8.75zm10.9-.09c0-.13.12-.25.25-.25h.86c.13 0 .25.12.25.25v8.61c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-8.61zm4.84 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm6.91 8.52l3.99-8.75c.04-.08.16-.14.22-.14h.13c.06 0 .18.07.22.14l3.97 8.75c.08.17-.03.34-.22.34h-.82c-.16 0-.25-.08-.3-.2l-.81-1.78h-4.25c-.26.6-.53 1.18-.79 1.78a.33.33 0 01-.3.2h-.82c-.2 0-.3-.17-.22-.34zm5.89-2.76l-1.6-3.56h-.06l-1.59 3.56h3.25zm8.68-6.14c1.25 0 2.27.46 3.16 1.21.1.1.12.26.01.36-.19.21-.39.4-.58.61-.1.12-.21.1-.34-.01-.61-.53-1.42-.88-2.21-.88-1.85 0-3.26 1.56-3.26 3.38s1.42 3.37 3.26 3.37c1.08 0 1.82-.39 1.95-.44v-1.46h-1.27c-.14 0-.25-.1-.25-.23v-.75c0-.14.1-.25.25-.25h2.37c.13 0 .23.12.23.25 0 1.04.01 2.11.01 3.15 0 .07-.05.17-.1.21 0 0-1.34.86-3.22.86-2.59 0-4.68-2.07-4.68-4.67s2.09-4.69 4.68-4.69zm6.49.38c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61z"
                                                fill="#4c575d"
                                            />
                                            <Path
                                                d="M62.69 126.98c0 4.38 0 6.05-.81 7.97-.57 1.35-1.75 2.62-3.94 4.13-.35.24-.78.54-1.05.67-.05.03-.11.05-.19.05s-.19-.05-.19-.16c0-.16.14-.24.38-.4.32-.19.7-.51.95-.76 1.76-1.78 2.59-3.21 2.59-10.18v-7.81c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.92.08 3.05.08s1.84-.08 2.65-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.13-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v6.48zm8.28-6.48c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.21-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.14-.22.43-.22 1.21 0 2.86.08 3.1.08s1.86-.08 2.67-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.11-.95.59-1 1.54-.06.87-.06 1.62-.06 5.84v3.78c0 3.89.86 5.57 2.03 6.67 1.32 1.24 2.54 1.48 4.08 1.48 1.65 0 3.27-.78 4.24-1.94 1.24-1.54 1.57-3.83 1.57-6.62v-3.38c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.7.08 2.86.08.19 0 1.46-.08 2.27-.08.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.67.08-.73.16-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v2.89c0 2.92-.32 6.16-2.48 8.08-1.95 1.73-3.97 2-5.57 2-.92 0-3.65-.11-5.56-1.92-1.32-1.27-2.35-3.16-2.35-7.11v-3.94zm41.92 12.21c-.16 0-.54 0-1.05-.08-.68-.11-1.84-.4-3.29-1.95-1.57-1.67-3.4-4.08-5.62-6.92 2.43-2.24 3.27-4.24 3.27-6.24 0-1.87-1.19-3.19-1.86-3.67-1.43-1.03-3.24-1.19-4.94-1.19-.84 0-2.89.08-3.19.08-.13 0-1.84-.08-3.05-.08-.3 0-.43.05-.43.22 0 .11.11.16.22.16.24 0 .7.03.92.08.89.19 1.11.62 1.16 1.54.05.87.05 1.62.05 5.84v4.75c0 2.59 0 4.73-.13 5.86-.11.78-.24 1.38-.78 1.49-.24.05-.57.11-.81.11-.16 0-.22.08-.22.16 0 .16.14.22.43.22.81 0 2.51-.08 2.54-.08.14 0 1.84.08 3.32.08.3 0 .43-.08.43-.22 0-.08-.05-.16-.22-.16-.24 0-.84-.05-1.21-.11-.81-.11-.97-.7-1.05-1.49-.13-1.13-.13-3.27-.13-5.86v-11.24c0-.16.08-.27.22-.32.27-.08 1-.16 1.81-.16 2.89 0 4.67 2.03 4.67 5.4 0 2.05-.7 3.51-1.65 4.16-.62.43-1.62.66-2.28.74-.21.03-.56.03-.74.02.7.14 1.25.12 1.84.75.54.7 1.81 2.51 2.94 4 1.54 2.02 2.48 3.35 3.65 3.97.7.38 1.38.51 2.89.51h1.92c.49 0 .65-.05.65-.22 0-.08-.11-.16-.24-.16zm25.35-3.08c.11.97.3 2.49 1.46 2.87.78.24 1.49.24 1.76.24.14 0 .22.03.22.14 0 .16-.24.24-.57.24-.6 0-3.51-.03-4.51-.11-.62-.06-.76-.14-.76-.27 0-.11.05-.16.19-.19s.16-.49.11-.97l-1.3-14.02h-.08l-6.62 14.04c-.57 1.19-.65 1.43-.89 1.43-.19 0-.32-.27-.84-1.24-.7-1.32-3.02-6-3.16-6.27-.24-.48-3.27-6.97-3.56-7.7h-.11l-1.08 12.53c-.03.43-.03.92-.03 1.38 0 .41.29.76.7.84.46.11.86.13 1.03.13.11 0 .22.05.22.14 0 .19-.16.24-.49.24-1 0-2.3-.08-2.51-.08-.24 0-1.54.08-2.27.08-.27 0-.46-.05-.46-.24 0-.08.14-.14.27-.14.22 0 .41 0 .81-.08.89-.16.97-1.22 1.08-2.24l1.94-17.61c.03-.3.14-.49.3-.49s.27.11.41.41l8.26 16.99 7.94-16.96c.11-.24.22-.43.4-.43s.27.22.32.73l1.81 16.61zm63.49 3.08c-.27 0-.68-.03-1.08-.16-.57-.16-1.35-.59-2.32-3-1.65-4.11-5.89-15.26-6.29-16.29-.32-.84-.43-.97-.6-.97s-.27.16-.59 1.05l-6.13 16.77c-.49 1.35-1.03 2.38-2.27 2.54-.22.03-.59.05-.78.05-.14 0-.24.05-.24.16 0 .16.16.22.51.22 1.27 0 2.76-.08 3.05-.08s1.46.08 2.11.08c.24 0 .4-.05.4-.22 0-.11-.08-.16-.27-.16h-.27c-.46 0-1.03-.24-1.03-.78 0-.49.14-1.13.38-1.81l2.11-6.16 2.38-7.29c.13-.41.27-.41.4 0l2.57 7.29 3 7.97c.16.43 0 .68-.16.73-.11.03-.19.08-.19.19 0 .16.3.16.81.19 1.86.05 3.83.05 4.24.05.3 0 .54-.05.54-.22 0-.14-.11-.16-.27-.16zm-30.46-7.4c0 3.97.11 5.7.6 6.19.43.43 1.13.62 3.24.62 1.43 0 2.62-.03 3.27-.81.35-.43.62-1.11.7-1.62.03-.21.08-.35.24-.35.13 0 .16.11.16.4s-.19 1.92-.41 2.7c-.19.62-.27.73-1.7.73-1.94 0-3.35-.06-4.48-.08-1.14-.05-1.97-.08-2.76-.08-.11 0-.57.03-1.11.03-.54.03-1.13.05-1.54.05-.3 0-.43-.05-.43-.22 0-.08.05-.16.22-.16.24 0 .57-.05.81-.11.54-.11.68-.7.79-1.49.13-1.13.13-3.27.13-5.86v-4.75c0-4.22 0-4.97-.05-5.84-.06-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.21 0 2.92.08 3.05.08s2.11-.08 2.92-.08c.29 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.57.03-.89.08-.78.13-1 .59-1.05 1.54-.05.87-.05 1.62-.05 5.84v4.81zm-159.79 4.56c1.58-3.66 5.23-13.18 5.83-15.15.14-.41.24-.79.24-1.04 0-.22-.08-.49-.35-.63-.33-.11-.74-.11-1.03-.11-.16 0-.3-.03-.3-.16 0-.17.16-.22.6-.22 1.09 0 2.35.08 2.67.08.16 0 1.34-.08 2.13-.08.3 0 .46.06.46.19s-.11.19-.33.19c-.19 0-.79 0-1.31.33-.35.24-.76.71-1.5 2.56-.3.77-1.66 4.04-3.05 7.4-1.66 3.99-2.89 6.93-3.52 8.27-.76 1.64-.87 2.08-1.14 2.08-.33 0-.46-.38-.98-1.69l-6.68-16.73c-.6-1.53-1.01-1.83-1.96-2.1-.41-.11-.87-.11-1.04-.11s-.22-.08-.22-.19c0-.16.27-.19.71-.19 1.31 0 2.86.08 3.19.08.27 0 1.5-.08 2.54-.08.49 0 .74.06.74.19s-.08.19-.27.19c-.3 0-.79.03-1.04.14-.3.14-.35.35-.35.55 0 .35.33 1.2.74 2.26l5.24 13.97zm16.02-4.58c0 2.62 0 4.78.14 5.92.08.79.25 1.39 1.06 1.5.38.06.98.11 1.23.11.16 0 .22.08.22.17 0 .14-.14.22-.44.22-1.5 0-3.22-.08-3.35-.08s-1.85.08-2.67.08c-.3 0-.44-.05-.44-.22 0-.08.06-.17.22-.17.24 0 .57-.05.82-.11.55-.11.68-.71.79-1.5.14-1.15.14-3.3.14-5.92v-4.8c0-4.26 0-5.02-.06-5.9-.05-.93-.33-1.39-.93-1.53-.3-.08-.65-.11-.84-.11-.11 0-.22-.05-.22-.16 0-.17.14-.22.44-.22.9 0 2.62.08 2.75.08s1.85-.08 2.67-.08c.3 0 .44.06.44.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.74.14-.96.6-1.01 1.56-.06.87-.06 1.64-.06 5.9v4.8zm24.3 7.53c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.34-3.03-1.66-4.15-5.95-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.16.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.24 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zm112.07 0c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.35-3.03-1.66-4.15-5.94-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.17.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.25 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zM101.82 82.72c-20.82 0-37.76-16.94-37.76-37.76S81 7.19 101.82 7.19s37.77 16.94 37.77 37.77-16.94 37.76-37.77 37.76zm0-74.53c-20.27 0-36.76 16.49-36.76 36.77s16.49 36.76 36.76 36.76 36.77-16.49 36.77-36.76S122.1 8.19 101.82 8.19zm16.1 15.84v.49s-4.94-.3-6.32 1.71c-.29.41-.42 1.24-.48 2.06v2.93l-7.96 3.7v-6.64c-.06-.82-.19-1.65-.47-2.06-1.38-2.01-6.31-1.71-6.31-1.71v-.49h21.54zm-14.76 28.91v10.19c0 3.62-.36 4.75-1.41 5.74-1.73 1.64-2.62 1.95-3.74 2.02 2.21-.1 4.75-.7 6.24-1.44 1.63-.8 3.41-2.12 4.4-3.52 1-1.41 1.63-3.02 2.06-4.89.43-1.87.42-4.43.42-6.56v-5.25l-7.96 3.7zm7.96-11.56l-7.96-3.7v1.84l7.96 3.69v-1.83zm0-8.81l-7.96 3.71v.02l7.96 3.69v-7.43zm0 12.18l-7.96-3.69v1.71l7.96 3.7v-1.72zm0 3.09l-7.96-3.72v7.44l7.96-3.69v-.03zM93.23 68.87c-.55-.6-.84-1.45-.58-1.96s.69-.65 1.13-.91c1.54-.93 2.57-2.61 2.57-4.54s-.96-3.49-2.41-4.44c-.49-.37-1.1-.62-1.82-.75-.1-.02-.2-.03-.3-.05-.25-.04-.5-.06-.77-.06h-.13c-1.68 0-2.85.6-3.71 1.56-.4.45-.74.98-.99 1.57-.3.66-.47 1.4-.47 2.17v.13c0 1.3.52 2.81 1.11 3.84.58 1.04 1.48 2.18 2.5 2.93 1.01.75 2.09 1.45 3.46 1.84 1.23.35 2.42.63 3.87.69-1.07-.1-2.12-.6-3.45-2.02zm6.73-63.85c.77.19 1.43.18 2.29-.07.6-.18 1.19-.54 1.99-1.22l.06-.05c.9-.74 1.68-1.37 2.5-1.53.94-.21 1.89-.01 3.02.61.12.06.2.17.23.29.03.13.01.26-.06.38-.14.23-.47.32-.7.19-.9-.5-1.53-.64-2.21-.49-.32.07-.64.21-1.03.44-.38.25-.8.6-1.2.93-.92.77-1.61 1.2-2.31 1.41-.43.11-.99.23-1.61.23-.4 0-.78-.05-1.17-.15-.25-.06-.41-.33-.36-.59.04-.22.23-.39.46-.39.03 0 .07 0 .1.01zm5.6.13c.73.3 1.39.38 2.27.25.62-.09 1.26-.37 2.14-.93l.06-.04c1-.6 1.85-1.12 2.69-1.17.96-.08 1.88.25 2.9 1.02.11.08.17.19.19.32.02.13-.02.26-.11.36-.17.21-.51.25-.72.09-.82-.62-1.43-.85-2.12-.8-.32.03-.67.12-1.08.29-.42.2-.88.48-1.31.75-1.01.64-1.76.96-2.48 1.08-.44.05-1.01.09-1.62 0-.39-.06-.77-.16-1.14-.31-.24-.09-.36-.38-.27-.64a.47.47 0 01.51-.32c.03 0 .07.01.1.02zm5.25.85c.69.39 1.33.56 2.22.55.62 0 1.29-.2 2.25-.63l.07-.03c1.07-.47 1.99-.87 2.82-.8.96.05 1.83.5 2.74 1.4.09.09.15.21.14.34 0 .13-.06.25-.16.35-.2.18-.54.18-.72 0-.73-.73-1.3-1.03-1.99-1.07-.32-.02-.67.03-1.11.14-.44.14-.93.36-1.4.57-1.09.5-1.87.72-2.61.74-.44-.01-1.02-.05-1.61-.21a4.95 4.95 0 01-1.09-.46c-.23-.12-.31-.43-.19-.67.1-.2.33-.31.54-.25.03 0 .06.02.09.04zm5.36 1.64c.62.48 1.24.74 2.12.86.62.08 1.31-.02 2.31-.31l.07-.02c1.12-.31 2.09-.58 2.91-.4.94.18 1.74.75 2.52 1.77.08.1.11.23.09.36a.46.46 0 01-.21.32c-.22.15-.56.11-.72-.11-.62-.82-1.15-1.2-1.82-1.34-.32-.06-.67-.07-1.12-.01-.45.08-.97.22-1.47.37-1.15.34-1.95.45-2.68.37-.43-.07-1-.19-1.56-.43-.36-.16-.69-.36-1.01-.61a.5.5 0 01-.09-.69c.13-.19.37-.26.57-.17.03.01.06.03.09.05zm4.82 2.23c.56.56 1.13.9 1.99 1.13.6.16 1.3.16 2.33 0h.07c1.15-.17 2.15-.31 2.94-.02.91.31 1.62.97 2.26 2.09.07.11.08.25.05.37a.48.48 0 01-.25.29c-.24.12-.57.03-.7-.2-.5-.9-.98-1.34-1.63-1.57-.31-.1-.66-.16-1.11-.16-.46.02-.99.09-1.5.17-1.18.18-2 .19-2.71 0-.42-.13-.97-.32-1.49-.64-.34-.21-.64-.45-.92-.74-.18-.18-.18-.49 0-.7a.46.46 0 01.67-.03zm4.72 3.02c.47.63 1 1.04 1.81 1.4.57.24 1.27.34 2.31.32h.07c1.16 0 2.17 0 2.91.4.86.43 1.47 1.19 1.95 2.38.05.12.05.25 0 .37a.48.48 0 01-.29.25.537.537 0 01-.66-.3c-.37-.96-.78-1.47-1.4-1.78-.29-.15-.63-.25-1.08-.32-.46-.05-1-.05-1.51-.04-1.2.02-2-.09-2.68-.37-.4-.19-.91-.45-1.39-.84-.31-.25-.57-.53-.81-.86-.16-.2-.11-.51.1-.69.17-.15.43-.15.6 0 .03.02.05.05.07.07zm4.04 3.45c.38.69.85 1.17 1.61 1.63.54.31 1.21.5 2.25.63h.07c1.15.16 2.15.3 2.83.79.79.54 1.3 1.38 1.61 2.62.03.13.01.26-.05.37a.45.45 0 01-.32.21.547.547 0 01-.62-.38c-.24-1-.58-1.56-1.15-1.95-.27-.18-.59-.33-1.02-.46-.45-.11-.98-.18-1.49-.24-1.19-.14-1.97-.36-2.61-.72-.37-.24-.85-.57-1.26-1.02-.27-.29-.5-.6-.69-.96-.13-.22-.04-.52.19-.67a.47.47 0 01.59.07c.02.02.04.05.06.08zm3.73 4.18c.28.74.68 1.27 1.37 1.84.49.39 1.13.67 2.14.93l.07.02c1.12.32 2.09.59 2.69 1.17.71.65 1.1 1.54 1.23 2.82.02.13-.02.26-.1.35-.09.1-.21.16-.34.17-.27.01-.53-.2-.56-.46-.1-1.02-.35-1.62-.86-2.09-.24-.22-.54-.41-.95-.59-.43-.17-.95-.32-1.45-.45-1.16-.31-1.9-.63-2.48-1.08-.33-.29-.76-.68-1.11-1.18a4.57 4.57 0 01-.55-1.05c-.1-.24.03-.52.28-.64.21-.09.45-.03.58.15.02.03.04.06.05.09zm2.96 4.41c.18.77.5 1.35 1.11 2 .43.45 1.03.81 2 1.21l.07.03c1.07.46 1.99.86 2.51 1.52.62.74.88 1.67.85 2.96 0 .13-.06.25-.15.34a.48.48 0 01-.36.12c-.27-.02-.5-.27-.49-.53.03-1.03-.14-1.66-.58-2.19-.21-.25-.48-.47-.86-.71-.4-.23-.9-.44-1.37-.64-1.11-.46-1.8-.88-2.32-1.4-.29-.33-.66-.77-.94-1.32-.18-.35-.32-.72-.4-1.11-.06-.25.1-.52.36-.59.22-.06.45.03.55.23.02.03.03.06.04.09zm2.46 5.03c.07.79.31 1.41.82 2.14.37.5.91.95 1.81 1.48l.06.04c.99.61 1.85 1.13 2.27 1.85.51.82.64 1.78.43 3.05a.44.44 0 01-.2.31c-.11.07-.24.1-.38.07-.26-.06-.46-.33-.41-.6.18-1.01.1-1.66-.27-2.25-.17-.28-.41-.54-.76-.83-.37-.28-.83-.56-1.27-.82-1.03-.61-1.66-1.12-2.1-1.71-.24-.37-.54-.86-.75-1.44-.13-.38-.21-.75-.24-1.16-.03-.26.17-.5.44-.54.22-.03.44.09.51.3.01.03.02.06.02.1zm1.66 5.05c-.03.79.12 1.44.53 2.23.29.55.77 1.06 1.59 1.7l.06.05c.9.73 1.68 1.36 2.01 2.14.39.88.4 1.85.02 3.08-.04.13-.12.23-.24.28-.12.06-.25.07-.38.02a.547.547 0 01-.33-.65c.31-.98.32-1.63.03-2.26-.13-.29-.33-.59-.64-.92-.32-.33-.75-.67-1.15-.98-.94-.74-1.5-1.33-1.85-1.97-.19-.39-.43-.92-.55-1.52a4.63 4.63 0 01-.09-1.18c0-.26.24-.47.51-.47.23 0 .43.15.47.37 0 .03.01.07 0 .1zm1.01 5.51c-.14.78-.08 1.44.21 2.28.22.58.62 1.16 1.34 1.91l.05.05c.79.85 1.48 1.59 1.69 2.4.27.92.14 1.89-.41 3.05-.05.12-.15.21-.27.25-.13.04-.26.03-.38-.04-.24-.13-.35-.45-.23-.68.44-.93.54-1.57.35-2.24-.09-.31-.25-.63-.5-1-.28-.37-.65-.76-1-1.13-.83-.86-1.3-1.53-1.56-2.21-.13-.42-.29-.97-.33-1.59-.03-.4 0-.78.08-1.18.04-.25.3-.43.57-.4.23.03.4.21.41.43v.1zm.24 5.31c-.24.75-.27 1.42-.09 2.29.14.61.46 1.23 1.08 2.07l.04.06c.67.95 1.25 1.77 1.36 2.6.14.95-.12 1.89-.82 2.97-.07.11-.18.18-.3.21-.13.02-.26 0-.37-.09-.22-.16-.29-.49-.14-.71.56-.86.75-1.49.64-2.17-.05-.32-.16-.66-.37-1.06-.22-.4-.54-.84-.84-1.26-.71-.97-1.08-1.69-1.25-2.4-.08-.43-.16-1-.12-1.62.03-.4.1-.78.23-1.16.08-.25.35-.39.62-.32.22.06.37.26.35.48 0 .03 0 .07-.02.1zm-.51 5.58c-.35.71-.47 1.36-.41 2.25.05.62.28 1.28.78 2.2l.03.06c.53 1.04.99 1.93.98 2.77.01.96-.38 1.86-1.22 2.83-.09.1-.2.16-.33.16s-.26-.04-.36-.14a.527.527 0 01-.04-.72c.68-.77.95-1.37.94-2.06 0-.32-.07-.67-.21-1.1-.17-.43-.41-.91-.66-1.36-.57-1.06-.84-1.82-.9-2.55-.02-.44-.02-1.02.11-1.62.08-.39.21-.75.39-1.12.11-.23.4-.34.66-.23.21.09.33.31.28.53 0 .03-.02.06-.03.09zm-1.2 5.17c-.44.66-.65 1.29-.71 2.18-.03.62.11 1.3.48 2.28l.02.07c.39 1.09.73 2.04.61 2.87-.12.95-.62 1.79-1.59 2.64-.1.09-.22.13-.35.12a.52.52 0 01-.34-.18c-.17-.21-.15-.55.06-.72.77-.68 1.12-1.23 1.2-1.92.04-.32.02-.68-.07-1.12-.11-.45-.29-.96-.47-1.44-.42-1.12-.59-1.92-.56-2.65.04-.44.11-1.01.32-1.59.13-.38.31-.72.54-1.05.14-.22.45-.28.68-.14.2.12.28.35.21.56-.01.03-.03.06-.04.09zm-2 5.23c-.52.59-.82 1.19-1 2.06-.12.61-.07 1.31.15 2.33l.02.07c.23 1.14.44 2.12.2 2.93-.25.93-.87 1.68-1.94 2.39-.11.07-.24.1-.36.07a.48.48 0 01-.31-.23.537.537 0 01.16-.71c.86-.56 1.28-1.06 1.46-1.73.08-.31.11-.67.09-1.12-.05-.46-.15-.99-.27-1.49-.26-1.17-.31-1.98-.18-2.7.1-.43.26-.98.54-1.53.18-.35.4-.67.68-.97.17-.19.48-.21.69-.04.18.14.23.38.13.58-.01.03-.03.06-.06.08zm-2.56 4.66c-.6.52-.97 1.07-1.27 1.91-.2.59-.24 1.29-.16 2.33v.07c.09 1.16.16 2.16-.19 2.93-.37.89-1.08 1.55-2.24 2.11-.12.06-.25.07-.37.02a.478.478 0 01-.27-.27c-.1-.25 0-.57.25-.68.93-.44 1.41-.88 1.68-1.52.12-.3.2-.65.24-1.1.02-.46-.02-1-.07-1.51-.1-1.19-.05-2 .18-2.7.16-.41.38-.94.74-1.44.23-.32.49-.61.8-.87.19-.17.51-.15.7.05.16.16.18.41.05.6-.02.03-.04.05-.06.07zm-3.34 4.5c-.66.42-1.11.92-1.52 1.71-.28.55-.42 1.24-.48 2.28v.07c-.09 1.16-.16 2.16-.6 2.87-.49.83-1.29 1.39-2.51 1.78-.12.04-.26.03-.37-.03a.44.44 0 01-.23-.3c-.07-.26.09-.56.34-.64.98-.31 1.52-.68 1.87-1.27.17-.28.29-.61.39-1.05.08-.45.12-.99.15-1.51.06-1.2.23-1.99.55-2.65.21-.38.51-.88.93-1.33.27-.29.57-.54.91-.75.21-.14.52-.08.68.15.13.18.12.43-.03.6-.02.03-.05.04-.08.07zm-3.72 3.79c-.71.34-1.22.77-1.74 1.5-.35.51-.58 1.17-.78 2.2l-.02.07c-.23 1.14-.44 2.12-.97 2.77-.6.75-1.46 1.2-2.73 1.43a.42.42 0 01-.36-.08.436.436 0 01-.19-.33c-.03-.27.16-.54.42-.59 1.01-.18 1.59-.47 2.02-1.01.2-.25.37-.57.52-.99.14-.44.25-.97.34-1.47.22-1.18.49-1.94.9-2.56.26-.35.62-.8 1.1-1.19.31-.25.64-.45 1-.62.23-.11.53 0 .66.23.11.2.06.45-.11.59-.02.02-.05.04-.08.05zm-4.43 3.43c-.75.23-1.32.59-1.93 1.24-.42.46-.74 1.08-1.08 2.07l-.02.07c-.39 1.1-.73 2.04-1.35 2.6-.69.66-1.61.99-2.9 1.04-.13 0-.25-.04-.35-.13a.427.427 0 01-.14-.35c0-.27.23-.52.5-.52 1.03-.03 1.64-.24 2.14-.72.24-.22.44-.51.66-.91.2-.41.38-.92.55-1.41.39-1.13.76-1.85 1.25-2.4.31-.31.73-.71 1.26-1.03.34-.21.69-.36 1.08-.47.24-.08.52.07.61.32.08.21 0 .45-.19.57-.03.02-.06.03-.09.04zm-4.6 2.65c-.78.13-1.38.41-2.07.97-.48.4-.88.97-1.34 1.91l-.04.06c-.53 1.03-.99 1.93-1.68 2.4-.78.56-1.73.76-3.01.64a.466.466 0 01-.43-.54c.04-.27.3-.48.57-.45 1.02.1 1.66-.02 2.22-.43.26-.19.51-.45.77-.81.25-.38.5-.87.73-1.33.53-1.08 1-1.74 1.56-2.22.35-.27.82-.61 1.38-.85.36-.16.73-.26 1.13-.33.25-.05.51.14.57.4.05.22-.06.45-.27.54l-.09.03zm-5.19 2.11c-.79.02-1.43.21-2.19.67-.53.33-1.01.84-1.6 1.7l-.04.06c-.67.95-1.25 1.77-2.01 2.14-.85.45-1.82.52-3.07.21a.48.48 0 01-.3-.22.457.457 0 01-.04-.38c.08-.26.37-.43.62-.37 1 .25 1.65.21 2.26-.11.29-.15.57-.37.88-.7.3-.35.62-.79.91-1.21.68-.99 1.23-1.58 1.85-1.98.38-.22.9-.48 1.49-.65.38-.11.76-.16 1.17-.16.26 0 .48.2.5.48.02.23-.12.43-.34.49-.03 0-.06.01-.1.02zm-5.15 1.31c-.79-.08-1.44.02-2.26.38-.57.26-1.11.7-1.81 1.47l-.05.05c-.79.85-1.48 1.59-2.27 1.86-.9.33-1.87.27-3.07-.2a.51.51 0 01-.27-.25.5.5 0 010-.38c.11-.25.42-.38.67-.28.96.38 1.61.43 2.25.19.3-.11.61-.29.96-.57.35-.3.72-.7 1.06-1.08.8-.89 1.43-1.41 2.1-1.72.41-.16.95-.36 1.56-.45.39-.05.78-.06 1.18 0 .26.02.45.27.44.54a.46.46 0 01-.4.44h-.1zm-5.57.63c-.76-.19-1.43-.18-2.29.06-.6.18-1.19.54-2 1.21l-.06.05c-.91.73-1.68 1.36-2.51 1.52-.94.21-1.89 0-3.02-.62a.476.476 0 01-.23-.29.51.51 0 01.06-.38c.14-.23.47-.32.7-.19.89.51 1.53.65 2.2.5.32-.07.65-.21 1.03-.43.38-.25.81-.59 1.2-.92.92-.77 1.61-1.19 2.32-1.4.43-.1.99-.22 1.61-.22.4 0 .78.05 1.17.16.25.06.41.33.36.6-.04.22-.23.38-.46.38-.03 0-.07 0-.1-.01zm-5.31-.13c-.73-.29-1.4-.37-2.28-.25-.61.09-1.25.37-2.14.93l-.06.04c-.99.61-1.85 1.13-2.69 1.18-.96.08-1.88-.25-2.91-1.02a.468.468 0 01-.19-.32c-.02-.13.02-.26.11-.37.17-.21.51-.25.72-.09.82.62 1.43.84 2.12.79.32-.03.67-.12 1.08-.29.42-.2.88-.48 1.31-.75 1.01-.64 1.76-.97 2.48-1.09.44-.05 1.01-.09 1.62 0 .39.06.77.16 1.14.31.24.09.36.38.28.64a.47.47 0 01-.51.32c-.03 0-.07-.01-.09-.02zm-5.53-.9c-.68-.39-1.33-.56-2.22-.56-.62 0-1.3.19-2.25.63l-.07.03c-1.07.46-1.99.86-2.83.79-.96-.05-1.83-.51-2.74-1.41a.476.476 0 01-.14-.34c0-.13.06-.25.16-.35.2-.18.54-.18.72 0 .72.73 1.3 1.04 1.99 1.08.33.02.68-.02 1.11-.14.44-.14.94-.35 1.4-.56 1.09-.49 1.87-.71 2.61-.73.44.01 1.02.05 1.61.22.38.11.74.26 1.09.47.22.13.31.43.18.67-.1.2-.33.31-.54.25-.03 0-.06-.02-.09-.04zm-5.08-1.55c-.63-.48-1.24-.73-2.13-.85-.62-.08-1.31.02-2.31.32l-.07.02c-1.12.32-2.09.59-2.91.41-.94-.18-1.74-.75-2.53-1.76a.46.46 0 01-.09-.36.46.46 0 01.2-.32c.22-.15.56-.11.71.11.62.82 1.15 1.2 1.83 1.33.32.06.67.07 1.12.01.45-.08.98-.23 1.47-.37 1.15-.34 1.95-.46 2.68-.38.43.07 1 .18 1.56.43.36.16.7.36 1.01.61a.5.5 0 01.09.69c-.13.19-.37.26-.57.17a.218.218 0 01-.08-.05zm-5.08-2.36c-.55-.56-1.13-.9-1.98-1.14-.6-.16-1.3-.16-2.33 0h-.07c-1.15.17-2.15.3-2.93 0-.91-.31-1.62-.98-2.25-2.1a.439.439 0 01-.04-.37.48.48 0 01.25-.29c.24-.12.57-.03.69.2.5.9.97 1.35 1.62 1.58.31.11.66.16 1.11.17.46-.02 1-.09 1.5-.16 1.19-.18 2-.18 2.71 0 .42.13.96.32 1.49.64.34.21.64.45.92.74.18.18.18.49 0 .69a.46.46 0 01-.59.09c-.03-.02-.05-.04-.08-.06zm-4.47-2.87c-.47-.63-1-1.04-1.82-1.39-.57-.24-1.27-.33-2.31-.31h-.07c-1.16 0-2.17 0-2.91-.39-.86-.43-1.47-1.19-1.96-2.38a.475.475 0 010-.37.51.51 0 01.28-.26c.26-.09.56.05.66.29.38.96.79 1.47 1.4 1.78.29.15.63.24 1.08.31.46.05 1 .04 1.51.04 1.2-.02 2 .09 2.69.36.4.19.91.45 1.39.84.31.25.57.53.81.86.16.21.11.51-.09.69-.18.15-.43.15-.6 0l-.07-.07zm-4.26-3.64c-.38-.69-.84-1.17-1.6-1.63-.54-.32-1.21-.51-2.25-.63h-.07c-1.15-.17-2.15-.31-2.83-.81-.79-.54-1.3-1.38-1.6-2.63a.448.448 0 01.06-.36.45.45 0 01.32-.21c.27-.05.55.12.61.38.24 1 .57 1.56 1.14 1.96.27.19.59.33 1.02.46.45.11.98.18 1.49.25 1.19.15 1.97.37 2.61.73.37.24.84.57 1.26 1.02.27.29.5.61.69.96.12.22.04.52-.19.67a.47.47 0 01-.59-.07c-.02-.02-.04-.05-.06-.08zm-3.53-3.97c-.29-.74-.68-1.27-1.37-1.83-.49-.38-1.13-.66-2.14-.93l-.07-.02c-1.12-.31-2.09-.58-2.7-1.16-.71-.65-1.1-1.54-1.24-2.82-.02-.13.02-.26.1-.35.09-.1.21-.16.34-.17.27-.01.53.2.56.46.11 1.02.36 1.62.87 2.09.24.22.54.4.95.59.43.17.95.31 1.45.44 1.16.3 1.91.63 2.49 1.07.33.29.76.68 1.11 1.18.23.33.41.67.55 1.04.1.24-.03.53-.28.64a.478.478 0 01-.63-.23zm-3.12-4.65c-.18-.77-.5-1.35-1.1-2.01-.43-.45-1.03-.81-1.99-1.21l-.07-.03c-1.07-.47-1.98-.87-2.51-1.53-.61-.74-.88-1.68-.83-2.96 0-.13.06-.25.15-.34.1-.09.23-.13.36-.12.27.02.5.27.49.54-.04 1.03.13 1.66.57 2.19.21.25.48.48.86.72.4.22.9.44 1.37.64 1.11.46 1.8.88 2.31 1.41.29.33.66.78.94 1.32.18.35.31.72.4 1.11.06.25-.1.51-.37.59a.456.456 0 01-.55-.23.161.161 0 01-.03-.09zm-2.33-4.77c-.08-.79-.31-1.41-.83-2.14-.37-.5-.91-.94-1.81-1.47l-.06-.04c-1-.6-1.85-1.12-2.28-1.84-.51-.82-.64-1.78-.43-3.05a.44.44 0 01.2-.31c.11-.08.24-.1.38-.07.26.06.46.33.41.6-.17 1.01-.09 1.66.28 2.25.17.27.41.54.76.83.37.28.83.56 1.27.82 1.04.61 1.67 1.12 2.11 1.7.24.37.55.86.75 1.44.13.38.21.75.25 1.15.03.26-.17.5-.44.54a.467.467 0 01-.52-.3c0-.03-.02-.07-.02-.09zm-1.75-5.32c.03-.79-.12-1.44-.52-2.23-.29-.55-.77-1.06-1.59-1.71l-.06-.05c-.9-.74-1.68-1.37-2-2.15-.39-.88-.39-1.85 0-3.08.04-.13.12-.23.24-.28a.5.5 0 01.38-.02c.25.09.41.39.33.65-.32.98-.32 1.63-.04 2.26.13.3.33.59.64.92.33.32.74.67 1.15.99.94.74 1.49 1.34 1.85 1.98.19.4.42.93.55 1.53.08.39.11.78.08 1.18 0 .25-.24.47-.51.47-.23 0-.42-.15-.47-.37v-.1zm-.96-5.22c.14-.78.08-1.44-.22-2.28-.22-.58-.62-1.15-1.35-1.9l-.05-.06c-.8-.85-1.48-1.58-1.7-2.39-.27-.92-.14-1.89.41-3.05.05-.12.15-.21.27-.25a.5.5 0 01.38.03c.24.13.35.44.23.68-.44.93-.54 1.57-.34 2.24.09.31.25.63.51 1 .28.37.65.76 1.01 1.13.83.86 1.3 1.52 1.57 2.21.13.42.3.98.34 1.59.02.4 0 .78-.07 1.18-.04.26-.3.43-.57.4a.479.479 0 01-.42-.43v-.1zm-.25-5.6c.25-.75.28-1.41.1-2.29-.13-.61-.45-1.23-1.07-2.07l-.04-.06c-.67-.95-1.24-1.77-1.35-2.61-.14-.95.13-1.89.83-2.97a.456.456 0 01.67-.12c.22.16.29.49.14.71-.57.86-.75 1.48-.65 2.17.05.32.16.66.36 1.06.23.4.54.84.84 1.26.7.97 1.08 1.69 1.24 2.41.07.43.16 1 .11 1.62-.03.4-.1.78-.24 1.16a.5.5 0 01-.62.31.462.462 0 01-.35-.48c0-.03 0-.07.02-.1zm.49-5.29c.34-.71.47-1.37.4-2.25-.05-.62-.29-1.28-.78-2.2l-.03-.07c-.54-1.03-1-1.92-.99-2.76-.01-.96.38-1.86 1.21-2.83.08-.1.2-.16.33-.16s.26.04.36.13c.19.19.22.52.04.72-.67.77-.94 1.37-.93 2.06 0 .32.07.67.22 1.1.17.43.42.91.66 1.36.57 1.06.84 1.82.92 2.55.02.44.02 1.02-.1 1.62-.08.39-.21.75-.39 1.12-.11.23-.4.34-.66.23a.467.467 0 01-.28-.53c0-.03.02-.07.03-.09zm1.27-5.46c.44-.66.65-1.29.71-2.18.03-.62-.11-1.31-.47-2.29l-.02-.07c-.39-1.1-.72-2.04-.59-2.87.12-.95.63-1.79 1.6-2.63.1-.09.22-.13.35-.12.13.01.25.08.33.18.17.21.14.55-.06.72-.78.67-1.12 1.23-1.21 1.91-.04.32-.02.67.06 1.12.11.45.29.96.47 1.44.42 1.12.58 1.92.55 2.65-.05.44-.12 1.01-.33 1.59-.13.37-.31.72-.54 1.05-.14.21-.44.28-.68.13a.457.457 0 01-.21-.56c.01-.03.03-.06.04-.09zm1.9-4.96c.52-.59.82-1.19 1-2.06.12-.61.07-1.31-.16-2.33v-.07c-.25-1.14-.46-2.12-.22-2.93.25-.93.86-1.68 1.93-2.4.11-.07.24-.1.36-.07.13.03.24.11.31.23.14.23.07.56-.16.71-.86.56-1.27 1.07-1.45 1.73-.08.31-.11.67-.09 1.12.05.46.16.99.27 1.49.26 1.17.32 1.98.19 2.7-.1.43-.25.99-.54 1.53-.19.35-.4.67-.67.97-.17.2-.48.21-.69.05a.468.468 0 01-.13-.58c.01-.03.03-.06.05-.08zm2.7-4.91c.6-.51.97-1.07 1.27-1.9.2-.59.25-1.29.16-2.33v-.07c-.08-1.16-.15-2.16.2-2.93.37-.88 1.09-1.55 2.25-2.11.12-.06.25-.06.37-.02.12.05.22.14.27.27.1.25 0 .57-.25.68-.93.44-1.41.88-1.68 1.51-.13.3-.2.64-.24 1.09-.02.46.02 1 .06 1.51.1 1.19.04 2-.19 2.7-.16.41-.39.94-.74 1.44-.23.32-.49.61-.8.87-.19.17-.5.15-.69-.05a.457.457 0 01-.05-.59c.02-.03.04-.05.07-.07zm3.17-4.27c.66-.43 1.11-.93 1.52-1.72.28-.56.42-1.24.47-2.28v-.07c.08-1.16.15-2.16.59-2.88.49-.83 1.28-1.39 2.51-1.79a.476.476 0 01.61.33c.07.26-.08.56-.34.64-.98.31-1.52.68-1.87 1.28-.16.28-.29.61-.39 1.05-.08.45-.11 1-.14 1.51-.06 1.2-.22 1.99-.54 2.65-.21.38-.51.88-.93 1.33-.27.29-.57.54-.91.75-.22.14-.52.08-.68-.14a.468.468 0 01.03-.6c.02-.02.05-.05.07-.06zm3.92-4c.72-.33 1.22-.76 1.74-1.49.35-.51.59-1.17.78-2.2l.02-.07c.24-1.14.45-2.12.99-2.76.6-.75 1.47-1.2 2.73-1.42.13-.02.26 0 .36.08.11.08.17.2.19.33.03.27-.16.54-.42.59-1.01.17-1.6.46-2.03 1-.2.25-.37.57-.53.99-.14.44-.25.97-.35 1.47-.23 1.18-.5 1.94-.91 2.55-.27.35-.63.8-1.1 1.19-.31.25-.64.45-1.01.62-.23.11-.52 0-.65-.24-.11-.2-.06-.45.11-.59.03-.02.05-.04.08-.05zm4.2-3.25c.75-.24 1.32-.59 1.92-1.25.42-.46.74-1.08 1.07-2.07l.03-.07c.39-1.1.72-2.04 1.34-2.61.69-.66 1.61-.99 2.9-1.04.13 0 .26.04.34.13.1.09.15.22.15.35 0 .27-.23.51-.5.52-1.03.04-1.64.25-2.14.73-.23.22-.44.51-.65.91-.2.42-.38.93-.54 1.41-.38 1.14-.75 1.86-1.24 2.41-.31.31-.73.71-1.25 1.03-.34.2-.69.36-1.08.48-.25.08-.52-.07-.62-.32-.08-.21 0-.45.19-.57.03-.02.06-.03.09-.04zm4.86-2.79c.78-.13 1.38-.41 2.08-.96.48-.4.88-.97 1.35-1.9l.03-.06c.54-1.03 1-1.92 1.7-2.39.78-.56 1.74-.76 3.01-.63.13.01.25.08.32.17.08.11.11.24.09.37-.04.27-.3.48-.57.45-1.02-.11-1.66.02-2.22.42-.26.19-.51.45-.77.81-.25.38-.5.86-.73 1.32-.54 1.07-1 1.73-1.57 2.21-.35.26-.82.6-1.38.84-.36.16-.74.26-1.14.32-.25.04-.5-.13-.56-.41-.05-.22.06-.45.27-.53.03-.02.06-.02.09-.03zm4.92-2c.79-.02 1.43-.21 2.19-.68.53-.33 1-.84 1.59-1.71l.04-.06c.67-.95 1.25-1.78 2-2.15.85-.45 1.82-.52 3.07-.22.13.03.24.11.3.22.07.12.08.25.05.38-.08.26-.36.43-.62.37-1-.24-1.65-.2-2.26.12-.29.15-.56.37-.88.7-.3.35-.61.79-.9 1.22-.67.99-1.23 1.59-1.84 1.99-.38.22-.89.49-1.49.65-.38.1-.76.16-1.17.17-.26 0-.48-.21-.51-.48-.02-.23.12-.43.34-.5.03 0 .07-.01.1-.02zm5.43-1.38c.78.09 1.44-.02 2.26-.37.57-.25 1.11-.69 1.81-1.47l.05-.05c.8-.85 1.48-1.58 2.28-1.85.9-.33 1.88-.26 3.07.21.12.05.22.14.27.25.05.12.05.26-.01.38-.11.25-.42.38-.67.28-.96-.38-1.61-.43-2.25-.2-.3.11-.61.29-.96.57-.35.3-.72.7-1.06 1.08-.81.89-1.43 1.4-2.1 1.71-.41.16-.95.36-1.56.44-.39.05-.78.06-1.18 0a.508.508 0 01-.43-.54c0-.23.18-.41.4-.44h.1z"
                                                fill="#9e1c2b"
                                            />
                                        </G>
                                    </G>
                                </Svg>
                            </View>
                            <View style={styles.stepOne_inputs_wrapper}>


                                <View style={styles.inputWrapper}>

                                    {this.state.password_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={() => this.clearPasswordInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                                  fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.password_field_valid &&

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
                                        value={this.state.password_field}
                                        onChangeText={(password_field) => this.changeRegisterPassword(password_field)}
                                        style={[

                                            styles.input,
                                            this.state.password_field_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.password_field_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }

                                        ]}
                                        underlineColorAndroid='transparent'
                                        label={
                                            <Text
                                                style={[
                                                    {color: !this.state.password_field_error ? '#55545F' : '#A4223C'},
                                                    {color: this.state.password_field_valid ? '#337363' : '#55545F'},
                                                    {fontWeight: "normal", fontSize: 12}
                                                ]
                                                }>
                                                {i18n.t('password')}
                                            </Text>
                                        }
                                        error={false}
                                        onBlur={() => this.onBlurRegisterPassword()}
                                        theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                        underlineColor='transparent'
                                        selectionColor='#d9d9d9'
                                        activeOutlineColor='transparent'
                                        placeholderTextColor="#c9a477"
                                        secureTextEntry={true}

                                    />
                                    {this.state.password_field_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.password_field_error_text}
                                    </Text>

                                    }


                                </View>

                                <View style={styles.inputWrapper}>

                                    {this.state.repeat_password_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={() => this.clearRepeatPasswordInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                                  fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.repeat_password_field_valid &&


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
                                        value={this.state.repeat_password_field}
                                        onChangeText={(language_field) => this.changeRegisterRepeatPassword(language_field)}
                                        style={[

                                            styles.input,
                                            this.state.repeat_password_field_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.repeat_password_field_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }
                                        ]}
                                        underlineColorAndroid='transparent'
                                        label={
                                            <Text
                                                style={[
                                                    {color: !this.state.repeat_password_field_error ? '#55545F' : '#A4223C'},
                                                    {color: this.state.repeat_password_field_valid ? '#337363' : '#55545F'},
                                                    {fontWeight: "normal", fontSize: 12}
                                                ]
                                                }>
                                                {i18n.t('repeat_password')}
                                            </Text>
                                        }
                                        error={false}
                                        onBlur={() => this.onBlurRegisterRepeatPassword()}
                                        theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                        underlineColor='transparent'
                                        selectionColor='#d9d9d9'
                                        activeOutlineColor='transparent'
                                        placeholderTextColor="#c9a477"
                                        secureTextEntry={true}

                                    />
                                    {this.state.repeat_password_field_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.repeat_password_field_error_text}
                                    </Text>

                                    }


                                </View>


                            </View>

                            <TouchableOpacity style={styles.sign_up_main_btn} onPress={() => this.registerHandler()}>
                                <Text style={styles.sign_up_main_btn_text}>

                                    {i18n.t('sign_up')}
                                </Text>
                            </TouchableOpacity>



                        </KeyboardAwareScrollView>

                        :
                        <ScrollView style={styles.logo_inputs_wrapper}>

                            <View style={styles.step_logo}>
                                <Svg
                                    width={200}
                                    height={142}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 202 157.49">

                                    <G id="b">
                                        <G id="c">
                                            <Path
                                                d="M146.78 44.96c0 24.83-20.13 44.95-44.96 44.95S56.87 69.78 56.87 44.96 77 0 101.82 0s44.96 20.13 44.96 44.96z"
                                                fill="#fff"
                                            />
                                            <Path
                                                d="M46.76 148.12c2.6 0 4.68 2.09 4.68 4.69s-2.08 4.67-4.68 4.67-4.67-2.07-4.67-4.67 2.07-4.69 4.67-4.69zm0 8.06c1.86 0 3.38-1.51 3.38-3.37s-1.52-3.39-3.38-3.39-3.37 1.55-3.37 3.39 1.52 3.37 3.37 3.37zm7.46-7.68c0-.13.12-.25.25-.25h.87c.14 0 .25.12.25.25v5.37c0 1.3.83 2.31 2.16 2.31s2.18-1 2.18-2.29v-5.4c0-.13.1-.25.25-.25h.87c.13 0 .25.12.25.25v5.46c0 1.98-1.5 3.52-3.55 3.52s-3.52-1.55-3.52-3.52v-5.46zm11.79.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm6.12-.98c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61zm10.18.98h-2.12c-.14 0-.25-.12-.25-.25v-.73c0-.13.1-.25.25-.25h5.59c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-2.12v7.63c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-7.63zm9.01-.88c-.08-.17.03-.34.22-.34h.92c.1 0 .2.08.22.14l2.86 6.43h.08l2.86-6.43c.03-.07.1-.14.22-.14h.92c.19 0 .3.17.22.34l-3.99 8.75c-.04.08-.12.14-.22.14H103c-.09 0-.18-.06-.22-.14l-3.96-8.75zm10.9-.09c0-.13.12-.25.25-.25h.86c.13 0 .25.12.25.25v8.61c0 .13-.12.25-.25.25h-.86c-.13 0-.25-.12-.25-.25v-8.61zm4.84 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm7.5 0c0-.13.1-.25.25-.25h.86c.13 0 .25.12.25.25v7.64h3.52c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-4.63c-.14 0-.25-.12-.25-.25v-8.61zm6.91 8.52l3.99-8.75c.04-.08.16-.14.22-.14h.13c.06 0 .18.07.22.14l3.97 8.75c.08.17-.03.34-.22.34h-.82c-.16 0-.25-.08-.3-.2l-.81-1.78h-4.25c-.26.6-.53 1.18-.79 1.78a.33.33 0 01-.3.2h-.82c-.2 0-.3-.17-.22-.34zm5.89-2.76l-1.6-3.56h-.06l-1.59 3.56h3.25zm8.68-6.14c1.25 0 2.27.46 3.16 1.21.1.1.12.26.01.36-.19.21-.39.4-.58.61-.1.12-.21.1-.34-.01-.61-.53-1.42-.88-2.21-.88-1.85 0-3.26 1.56-3.26 3.38s1.42 3.37 3.26 3.37c1.08 0 1.82-.39 1.95-.44v-1.46h-1.27c-.14 0-.25-.1-.25-.23v-.75c0-.14.1-.25.25-.25h2.37c.13 0 .23.12.23.25 0 1.04.01 2.11.01 3.15 0 .07-.05.17-.1.21 0 0-1.34.86-3.22.86-2.59 0-4.68-2.07-4.68-4.67s2.09-4.69 4.68-4.69zm6.49.38c0-.13.1-.25.25-.25h5.2c.14 0 .25.12.25.25v.73c0 .13-.1.25-.25.25h-4.11v2.65h3.47c.13 0 .25.12.25.25v.73c0 .14-.12.25-.25.25h-3.47v2.79h4.11c.14 0 .25.12.25.25v.71c0 .13-.1.25-.25.25h-5.2c-.14 0-.25-.12-.25-.25v-8.61z"
                                                fill="#4c575d"
                                            />
                                            <Path
                                                d="M62.69 126.98c0 4.38 0 6.05-.81 7.97-.57 1.35-1.75 2.62-3.94 4.13-.35.24-.78.54-1.05.67-.05.03-.11.05-.19.05s-.19-.05-.19-.16c0-.16.14-.24.38-.4.32-.19.7-.51.95-.76 1.76-1.78 2.59-3.21 2.59-10.18v-7.81c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.92.08 3.05.08s1.84-.08 2.65-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.13-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v6.48zm8.28-6.48c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.21-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.14-.22.43-.22 1.21 0 2.86.08 3.1.08s1.86-.08 2.67-.08c.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.73.11-.95.59-1 1.54-.06.87-.06 1.62-.06 5.84v3.78c0 3.89.86 5.57 2.03 6.67 1.32 1.24 2.54 1.48 4.08 1.48 1.65 0 3.27-.78 4.24-1.94 1.24-1.54 1.57-3.83 1.57-6.62v-3.38c0-4.22 0-4.97-.05-5.84-.05-.92-.27-1.35-1.16-1.54-.22-.05-.67-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.22 0 2.7.08 2.86.08.19 0 1.46-.08 2.27-.08.3 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.35.03-.67.08-.73.16-.95.59-1 1.54-.05.87-.05 1.62-.05 5.84v2.89c0 2.92-.32 6.16-2.48 8.08-1.95 1.73-3.97 2-5.57 2-.92 0-3.65-.11-5.56-1.92-1.32-1.27-2.35-3.16-2.35-7.11v-3.94zm41.92 12.21c-.16 0-.54 0-1.05-.08-.68-.11-1.84-.4-3.29-1.95-1.57-1.67-3.4-4.08-5.62-6.92 2.43-2.24 3.27-4.24 3.27-6.24 0-1.87-1.19-3.19-1.86-3.67-1.43-1.03-3.24-1.19-4.94-1.19-.84 0-2.89.08-3.19.08-.13 0-1.84-.08-3.05-.08-.3 0-.43.05-.43.22 0 .11.11.16.22.16.24 0 .7.03.92.08.89.19 1.11.62 1.16 1.54.05.87.05 1.62.05 5.84v4.75c0 2.59 0 4.73-.13 5.86-.11.78-.24 1.38-.78 1.49-.24.05-.57.11-.81.11-.16 0-.22.08-.22.16 0 .16.14.22.43.22.81 0 2.51-.08 2.54-.08.14 0 1.84.08 3.32.08.3 0 .43-.08.43-.22 0-.08-.05-.16-.22-.16-.24 0-.84-.05-1.21-.11-.81-.11-.97-.7-1.05-1.49-.13-1.13-.13-3.27-.13-5.86v-11.24c0-.16.08-.27.22-.32.27-.08 1-.16 1.81-.16 2.89 0 4.67 2.03 4.67 5.4 0 2.05-.7 3.51-1.65 4.16-.62.43-1.62.66-2.28.74-.21.03-.56.03-.74.02.7.14 1.25.12 1.84.75.54.7 1.81 2.51 2.94 4 1.54 2.02 2.48 3.35 3.65 3.97.7.38 1.38.51 2.89.51h1.92c.49 0 .65-.05.65-.22 0-.08-.11-.16-.24-.16zm25.35-3.08c.11.97.3 2.49 1.46 2.87.78.24 1.49.24 1.76.24.14 0 .22.03.22.14 0 .16-.24.24-.57.24-.6 0-3.51-.03-4.51-.11-.62-.06-.76-.14-.76-.27 0-.11.05-.16.19-.19s.16-.49.11-.97l-1.3-14.02h-.08l-6.62 14.04c-.57 1.19-.65 1.43-.89 1.43-.19 0-.32-.27-.84-1.24-.7-1.32-3.02-6-3.16-6.27-.24-.48-3.27-6.97-3.56-7.7h-.11l-1.08 12.53c-.03.43-.03.92-.03 1.38 0 .41.29.76.7.84.46.11.86.13 1.03.13.11 0 .22.05.22.14 0 .19-.16.24-.49.24-1 0-2.3-.08-2.51-.08-.24 0-1.54.08-2.27.08-.27 0-.46-.05-.46-.24 0-.08.14-.14.27-.14.22 0 .41 0 .81-.08.89-.16.97-1.22 1.08-2.24l1.94-17.61c.03-.3.14-.49.3-.49s.27.11.41.41l8.26 16.99 7.94-16.96c.11-.24.22-.43.4-.43s.27.22.32.73l1.81 16.61zm63.49 3.08c-.27 0-.68-.03-1.08-.16-.57-.16-1.35-.59-2.32-3-1.65-4.11-5.89-15.26-6.29-16.29-.32-.84-.43-.97-.6-.97s-.27.16-.59 1.05l-6.13 16.77c-.49 1.35-1.03 2.38-2.27 2.54-.22.03-.59.05-.78.05-.14 0-.24.05-.24.16 0 .16.16.22.51.22 1.27 0 2.76-.08 3.05-.08s1.46.08 2.11.08c.24 0 .4-.05.4-.22 0-.11-.08-.16-.27-.16h-.27c-.46 0-1.03-.24-1.03-.78 0-.49.14-1.13.38-1.81l2.11-6.16 2.38-7.29c.13-.41.27-.41.4 0l2.57 7.29 3 7.97c.16.43 0 .68-.16.73-.11.03-.19.08-.19.19 0 .16.3.16.81.19 1.86.05 3.83.05 4.24.05.3 0 .54-.05.54-.22 0-.14-.11-.16-.27-.16zm-30.46-7.4c0 3.97.11 5.7.6 6.19.43.43 1.13.62 3.24.62 1.43 0 2.62-.03 3.27-.81.35-.43.62-1.11.7-1.62.03-.21.08-.35.24-.35.13 0 .16.11.16.4s-.19 1.92-.41 2.7c-.19.62-.27.73-1.7.73-1.94 0-3.35-.06-4.48-.08-1.14-.05-1.97-.08-2.76-.08-.11 0-.57.03-1.11.03-.54.03-1.13.05-1.54.05-.3 0-.43-.05-.43-.22 0-.08.05-.16.22-.16.24 0 .57-.05.81-.11.54-.11.68-.7.79-1.49.13-1.13.13-3.27.13-5.86v-4.75c0-4.22 0-4.97-.05-5.84-.06-.92-.27-1.35-1.16-1.54-.22-.05-.68-.08-.92-.08-.11 0-.22-.05-.22-.16 0-.16.13-.22.43-.22 1.21 0 2.92.08 3.05.08s2.11-.08 2.92-.08c.29 0 .43.05.43.22 0 .11-.11.16-.22.16-.19 0-.57.03-.89.08-.78.13-1 .59-1.05 1.54-.05.87-.05 1.62-.05 5.84v4.81zm-159.79 4.56c1.58-3.66 5.23-13.18 5.83-15.15.14-.41.24-.79.24-1.04 0-.22-.08-.49-.35-.63-.33-.11-.74-.11-1.03-.11-.16 0-.3-.03-.3-.16 0-.17.16-.22.6-.22 1.09 0 2.35.08 2.67.08.16 0 1.34-.08 2.13-.08.3 0 .46.06.46.19s-.11.19-.33.19c-.19 0-.79 0-1.31.33-.35.24-.76.71-1.5 2.56-.3.77-1.66 4.04-3.05 7.4-1.66 3.99-2.89 6.93-3.52 8.27-.76 1.64-.87 2.08-1.14 2.08-.33 0-.46-.38-.98-1.69l-6.68-16.73c-.6-1.53-1.01-1.83-1.96-2.1-.41-.11-.87-.11-1.04-.11s-.22-.08-.22-.19c0-.16.27-.19.71-.19 1.31 0 2.86.08 3.19.08.27 0 1.5-.08 2.54-.08.49 0 .74.06.74.19s-.08.19-.27.19c-.3 0-.79.03-1.04.14-.3.14-.35.35-.35.55 0 .35.33 1.2.74 2.26l5.24 13.97zm16.02-4.58c0 2.62 0 4.78.14 5.92.08.79.25 1.39 1.06 1.5.38.06.98.11 1.23.11.16 0 .22.08.22.17 0 .14-.14.22-.44.22-1.5 0-3.22-.08-3.35-.08s-1.85.08-2.67.08c-.3 0-.44-.05-.44-.22 0-.08.06-.17.22-.17.24 0 .57-.05.82-.11.55-.11.68-.71.79-1.5.14-1.15.14-3.3.14-5.92v-4.8c0-4.26 0-5.02-.06-5.9-.05-.93-.33-1.39-.93-1.53-.3-.08-.65-.11-.84-.11-.11 0-.22-.05-.22-.16 0-.17.14-.22.44-.22.9 0 2.62.08 2.75.08s1.85-.08 2.67-.08c.3 0 .44.06.44.22 0 .11-.11.16-.22.16-.19 0-.35.03-.68.08-.74.14-.96.6-1.01 1.56-.06.87-.06 1.64-.06 5.9v4.8zm24.3 7.53c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.34-3.03-1.66-4.15-5.95-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.16.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.24 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zm112.07 0c-.27 0-.68-.03-1.09-.16-.57-.16-1.36-.6-2.35-3.03-1.66-4.15-5.94-15.42-6.35-16.45-.33-.85-.44-.98-.6-.98s-.27.16-.6 1.07l-6.19 16.95c-.49 1.36-1.04 2.4-2.29 2.57-.22.02-.6.05-.79.05-.14 0-.25.05-.25.17 0 .16.17.22.52.22 1.28 0 2.78-.08 3.08-.08s1.47.08 2.13.08c.25 0 .41-.05.41-.22 0-.11-.08-.17-.27-.17h-.27c-.47 0-1.04-.24-1.04-.79 0-.49.14-1.15.38-1.83l1.64-4.83 2.89-8.76c.14-.41.27-.41.41 0l3.08 8.71 2.54 6.71c.16.44 0 .68-.16.74-.11.02-.19.08-.19.19 0 .16.3.16.82.19 1.88.05 3.87.05 4.28.05.3 0 .55-.05.55-.22 0-.14-.11-.17-.27-.17zM101.82 82.72c-20.82 0-37.76-16.94-37.76-37.76S81 7.19 101.82 7.19s37.77 16.94 37.77 37.77-16.94 37.76-37.77 37.76zm0-74.53c-20.27 0-36.76 16.49-36.76 36.77s16.49 36.76 36.76 36.76 36.77-16.49 36.77-36.76S122.1 8.19 101.82 8.19zm16.1 15.84v.49s-4.94-.3-6.32 1.71c-.29.41-.42 1.24-.48 2.06v2.93l-7.96 3.7v-6.64c-.06-.82-.19-1.65-.47-2.06-1.38-2.01-6.31-1.71-6.31-1.71v-.49h21.54zm-14.76 28.91v10.19c0 3.62-.36 4.75-1.41 5.74-1.73 1.64-2.62 1.95-3.74 2.02 2.21-.1 4.75-.7 6.24-1.44 1.63-.8 3.41-2.12 4.4-3.52 1-1.41 1.63-3.02 2.06-4.89.43-1.87.42-4.43.42-6.56v-5.25l-7.96 3.7zm7.96-11.56l-7.96-3.7v1.84l7.96 3.69v-1.83zm0-8.81l-7.96 3.71v.02l7.96 3.69v-7.43zm0 12.18l-7.96-3.69v1.71l7.96 3.7v-1.72zm0 3.09l-7.96-3.72v7.44l7.96-3.69v-.03zM93.23 68.87c-.55-.6-.84-1.45-.58-1.96s.69-.65 1.13-.91c1.54-.93 2.57-2.61 2.57-4.54s-.96-3.49-2.41-4.44c-.49-.37-1.1-.62-1.82-.75-.1-.02-.2-.03-.3-.05-.25-.04-.5-.06-.77-.06h-.13c-1.68 0-2.85.6-3.71 1.56-.4.45-.74.98-.99 1.57-.3.66-.47 1.4-.47 2.17v.13c0 1.3.52 2.81 1.11 3.84.58 1.04 1.48 2.18 2.5 2.93 1.01.75 2.09 1.45 3.46 1.84 1.23.35 2.42.63 3.87.69-1.07-.1-2.12-.6-3.45-2.02zm6.73-63.85c.77.19 1.43.18 2.29-.07.6-.18 1.19-.54 1.99-1.22l.06-.05c.9-.74 1.68-1.37 2.5-1.53.94-.21 1.89-.01 3.02.61.12.06.2.17.23.29.03.13.01.26-.06.38-.14.23-.47.32-.7.19-.9-.5-1.53-.64-2.21-.49-.32.07-.64.21-1.03.44-.38.25-.8.6-1.2.93-.92.77-1.61 1.2-2.31 1.41-.43.11-.99.23-1.61.23-.4 0-.78-.05-1.17-.15-.25-.06-.41-.33-.36-.59.04-.22.23-.39.46-.39.03 0 .07 0 .1.01zm5.6.13c.73.3 1.39.38 2.27.25.62-.09 1.26-.37 2.14-.93l.06-.04c1-.6 1.85-1.12 2.69-1.17.96-.08 1.88.25 2.9 1.02.11.08.17.19.19.32.02.13-.02.26-.11.36-.17.21-.51.25-.72.09-.82-.62-1.43-.85-2.12-.8-.32.03-.67.12-1.08.29-.42.2-.88.48-1.31.75-1.01.64-1.76.96-2.48 1.08-.44.05-1.01.09-1.62 0-.39-.06-.77-.16-1.14-.31-.24-.09-.36-.38-.27-.64a.47.47 0 01.51-.32c.03 0 .07.01.1.02zm5.25.85c.69.39 1.33.56 2.22.55.62 0 1.29-.2 2.25-.63l.07-.03c1.07-.47 1.99-.87 2.82-.8.96.05 1.83.5 2.74 1.4.09.09.15.21.14.34 0 .13-.06.25-.16.35-.2.18-.54.18-.72 0-.73-.73-1.3-1.03-1.99-1.07-.32-.02-.67.03-1.11.14-.44.14-.93.36-1.4.57-1.09.5-1.87.72-2.61.74-.44-.01-1.02-.05-1.61-.21a4.95 4.95 0 01-1.09-.46c-.23-.12-.31-.43-.19-.67.1-.2.33-.31.54-.25.03 0 .06.02.09.04zm5.36 1.64c.62.48 1.24.74 2.12.86.62.08 1.31-.02 2.31-.31l.07-.02c1.12-.31 2.09-.58 2.91-.4.94.18 1.74.75 2.52 1.77.08.1.11.23.09.36a.46.46 0 01-.21.32c-.22.15-.56.11-.72-.11-.62-.82-1.15-1.2-1.82-1.34-.32-.06-.67-.07-1.12-.01-.45.08-.97.22-1.47.37-1.15.34-1.95.45-2.68.37-.43-.07-1-.19-1.56-.43-.36-.16-.69-.36-1.01-.61a.5.5 0 01-.09-.69c.13-.19.37-.26.57-.17.03.01.06.03.09.05zm4.82 2.23c.56.56 1.13.9 1.99 1.13.6.16 1.3.16 2.33 0h.07c1.15-.17 2.15-.31 2.94-.02.91.31 1.62.97 2.26 2.09.07.11.08.25.05.37a.48.48 0 01-.25.29c-.24.12-.57.03-.7-.2-.5-.9-.98-1.34-1.63-1.57-.31-.1-.66-.16-1.11-.16-.46.02-.99.09-1.5.17-1.18.18-2 .19-2.71 0-.42-.13-.97-.32-1.49-.64-.34-.21-.64-.45-.92-.74-.18-.18-.18-.49 0-.7a.46.46 0 01.67-.03zm4.72 3.02c.47.63 1 1.04 1.81 1.4.57.24 1.27.34 2.31.32h.07c1.16 0 2.17 0 2.91.4.86.43 1.47 1.19 1.95 2.38.05.12.05.25 0 .37a.48.48 0 01-.29.25.537.537 0 01-.66-.3c-.37-.96-.78-1.47-1.4-1.78-.29-.15-.63-.25-1.08-.32-.46-.05-1-.05-1.51-.04-1.2.02-2-.09-2.68-.37-.4-.19-.91-.45-1.39-.84-.31-.25-.57-.53-.81-.86-.16-.2-.11-.51.1-.69.17-.15.43-.15.6 0 .03.02.05.05.07.07zm4.04 3.45c.38.69.85 1.17 1.61 1.63.54.31 1.21.5 2.25.63h.07c1.15.16 2.15.3 2.83.79.79.54 1.3 1.38 1.61 2.62.03.13.01.26-.05.37a.45.45 0 01-.32.21.547.547 0 01-.62-.38c-.24-1-.58-1.56-1.15-1.95-.27-.18-.59-.33-1.02-.46-.45-.11-.98-.18-1.49-.24-1.19-.14-1.97-.36-2.61-.72-.37-.24-.85-.57-1.26-1.02-.27-.29-.5-.6-.69-.96-.13-.22-.04-.52.19-.67a.47.47 0 01.59.07c.02.02.04.05.06.08zm3.73 4.18c.28.74.68 1.27 1.37 1.84.49.39 1.13.67 2.14.93l.07.02c1.12.32 2.09.59 2.69 1.17.71.65 1.1 1.54 1.23 2.82.02.13-.02.26-.1.35-.09.1-.21.16-.34.17-.27.01-.53-.2-.56-.46-.1-1.02-.35-1.62-.86-2.09-.24-.22-.54-.41-.95-.59-.43-.17-.95-.32-1.45-.45-1.16-.31-1.9-.63-2.48-1.08-.33-.29-.76-.68-1.11-1.18a4.57 4.57 0 01-.55-1.05c-.1-.24.03-.52.28-.64.21-.09.45-.03.58.15.02.03.04.06.05.09zm2.96 4.41c.18.77.5 1.35 1.11 2 .43.45 1.03.81 2 1.21l.07.03c1.07.46 1.99.86 2.51 1.52.62.74.88 1.67.85 2.96 0 .13-.06.25-.15.34a.48.48 0 01-.36.12c-.27-.02-.5-.27-.49-.53.03-1.03-.14-1.66-.58-2.19-.21-.25-.48-.47-.86-.71-.4-.23-.9-.44-1.37-.64-1.11-.46-1.8-.88-2.32-1.4-.29-.33-.66-.77-.94-1.32-.18-.35-.32-.72-.4-1.11-.06-.25.1-.52.36-.59.22-.06.45.03.55.23.02.03.03.06.04.09zm2.46 5.03c.07.79.31 1.41.82 2.14.37.5.91.95 1.81 1.48l.06.04c.99.61 1.85 1.13 2.27 1.85.51.82.64 1.78.43 3.05a.44.44 0 01-.2.31c-.11.07-.24.1-.38.07-.26-.06-.46-.33-.41-.6.18-1.01.1-1.66-.27-2.25-.17-.28-.41-.54-.76-.83-.37-.28-.83-.56-1.27-.82-1.03-.61-1.66-1.12-2.1-1.71-.24-.37-.54-.86-.75-1.44-.13-.38-.21-.75-.24-1.16-.03-.26.17-.5.44-.54.22-.03.44.09.51.3.01.03.02.06.02.1zm1.66 5.05c-.03.79.12 1.44.53 2.23.29.55.77 1.06 1.59 1.7l.06.05c.9.73 1.68 1.36 2.01 2.14.39.88.4 1.85.02 3.08-.04.13-.12.23-.24.28-.12.06-.25.07-.38.02a.547.547 0 01-.33-.65c.31-.98.32-1.63.03-2.26-.13-.29-.33-.59-.64-.92-.32-.33-.75-.67-1.15-.98-.94-.74-1.5-1.33-1.85-1.97-.19-.39-.43-.92-.55-1.52a4.63 4.63 0 01-.09-1.18c0-.26.24-.47.51-.47.23 0 .43.15.47.37 0 .03.01.07 0 .1zm1.01 5.51c-.14.78-.08 1.44.21 2.28.22.58.62 1.16 1.34 1.91l.05.05c.79.85 1.48 1.59 1.69 2.4.27.92.14 1.89-.41 3.05-.05.12-.15.21-.27.25-.13.04-.26.03-.38-.04-.24-.13-.35-.45-.23-.68.44-.93.54-1.57.35-2.24-.09-.31-.25-.63-.5-1-.28-.37-.65-.76-1-1.13-.83-.86-1.3-1.53-1.56-2.21-.13-.42-.29-.97-.33-1.59-.03-.4 0-.78.08-1.18.04-.25.3-.43.57-.4.23.03.4.21.41.43v.1zm.24 5.31c-.24.75-.27 1.42-.09 2.29.14.61.46 1.23 1.08 2.07l.04.06c.67.95 1.25 1.77 1.36 2.6.14.95-.12 1.89-.82 2.97-.07.11-.18.18-.3.21-.13.02-.26 0-.37-.09-.22-.16-.29-.49-.14-.71.56-.86.75-1.49.64-2.17-.05-.32-.16-.66-.37-1.06-.22-.4-.54-.84-.84-1.26-.71-.97-1.08-1.69-1.25-2.4-.08-.43-.16-1-.12-1.62.03-.4.1-.78.23-1.16.08-.25.35-.39.62-.32.22.06.37.26.35.48 0 .03 0 .07-.02.1zm-.51 5.58c-.35.71-.47 1.36-.41 2.25.05.62.28 1.28.78 2.2l.03.06c.53 1.04.99 1.93.98 2.77.01.96-.38 1.86-1.22 2.83-.09.1-.2.16-.33.16s-.26-.04-.36-.14a.527.527 0 01-.04-.72c.68-.77.95-1.37.94-2.06 0-.32-.07-.67-.21-1.1-.17-.43-.41-.91-.66-1.36-.57-1.06-.84-1.82-.9-2.55-.02-.44-.02-1.02.11-1.62.08-.39.21-.75.39-1.12.11-.23.4-.34.66-.23.21.09.33.31.28.53 0 .03-.02.06-.03.09zm-1.2 5.17c-.44.66-.65 1.29-.71 2.18-.03.62.11 1.3.48 2.28l.02.07c.39 1.09.73 2.04.61 2.87-.12.95-.62 1.79-1.59 2.64-.1.09-.22.13-.35.12a.52.52 0 01-.34-.18c-.17-.21-.15-.55.06-.72.77-.68 1.12-1.23 1.2-1.92.04-.32.02-.68-.07-1.12-.11-.45-.29-.96-.47-1.44-.42-1.12-.59-1.92-.56-2.65.04-.44.11-1.01.32-1.59.13-.38.31-.72.54-1.05.14-.22.45-.28.68-.14.2.12.28.35.21.56-.01.03-.03.06-.04.09zm-2 5.23c-.52.59-.82 1.19-1 2.06-.12.61-.07 1.31.15 2.33l.02.07c.23 1.14.44 2.12.2 2.93-.25.93-.87 1.68-1.94 2.39-.11.07-.24.1-.36.07a.48.48 0 01-.31-.23.537.537 0 01.16-.71c.86-.56 1.28-1.06 1.46-1.73.08-.31.11-.67.09-1.12-.05-.46-.15-.99-.27-1.49-.26-1.17-.31-1.98-.18-2.7.1-.43.26-.98.54-1.53.18-.35.4-.67.68-.97.17-.19.48-.21.69-.04.18.14.23.38.13.58-.01.03-.03.06-.06.08zm-2.56 4.66c-.6.52-.97 1.07-1.27 1.91-.2.59-.24 1.29-.16 2.33v.07c.09 1.16.16 2.16-.19 2.93-.37.89-1.08 1.55-2.24 2.11-.12.06-.25.07-.37.02a.478.478 0 01-.27-.27c-.1-.25 0-.57.25-.68.93-.44 1.41-.88 1.68-1.52.12-.3.2-.65.24-1.1.02-.46-.02-1-.07-1.51-.1-1.19-.05-2 .18-2.7.16-.41.38-.94.74-1.44.23-.32.49-.61.8-.87.19-.17.51-.15.7.05.16.16.18.41.05.6-.02.03-.04.05-.06.07zm-3.34 4.5c-.66.42-1.11.92-1.52 1.71-.28.55-.42 1.24-.48 2.28v.07c-.09 1.16-.16 2.16-.6 2.87-.49.83-1.29 1.39-2.51 1.78-.12.04-.26.03-.37-.03a.44.44 0 01-.23-.3c-.07-.26.09-.56.34-.64.98-.31 1.52-.68 1.87-1.27.17-.28.29-.61.39-1.05.08-.45.12-.99.15-1.51.06-1.2.23-1.99.55-2.65.21-.38.51-.88.93-1.33.27-.29.57-.54.91-.75.21-.14.52-.08.68.15.13.18.12.43-.03.6-.02.03-.05.04-.08.07zm-3.72 3.79c-.71.34-1.22.77-1.74 1.5-.35.51-.58 1.17-.78 2.2l-.02.07c-.23 1.14-.44 2.12-.97 2.77-.6.75-1.46 1.2-2.73 1.43a.42.42 0 01-.36-.08.436.436 0 01-.19-.33c-.03-.27.16-.54.42-.59 1.01-.18 1.59-.47 2.02-1.01.2-.25.37-.57.52-.99.14-.44.25-.97.34-1.47.22-1.18.49-1.94.9-2.56.26-.35.62-.8 1.1-1.19.31-.25.64-.45 1-.62.23-.11.53 0 .66.23.11.2.06.45-.11.59-.02.02-.05.04-.08.05zm-4.43 3.43c-.75.23-1.32.59-1.93 1.24-.42.46-.74 1.08-1.08 2.07l-.02.07c-.39 1.1-.73 2.04-1.35 2.6-.69.66-1.61.99-2.9 1.04-.13 0-.25-.04-.35-.13a.427.427 0 01-.14-.35c0-.27.23-.52.5-.52 1.03-.03 1.64-.24 2.14-.72.24-.22.44-.51.66-.91.2-.41.38-.92.55-1.41.39-1.13.76-1.85 1.25-2.4.31-.31.73-.71 1.26-1.03.34-.21.69-.36 1.08-.47.24-.08.52.07.61.32.08.21 0 .45-.19.57-.03.02-.06.03-.09.04zm-4.6 2.65c-.78.13-1.38.41-2.07.97-.48.4-.88.97-1.34 1.91l-.04.06c-.53 1.03-.99 1.93-1.68 2.4-.78.56-1.73.76-3.01.64a.466.466 0 01-.43-.54c.04-.27.3-.48.57-.45 1.02.1 1.66-.02 2.22-.43.26-.19.51-.45.77-.81.25-.38.5-.87.73-1.33.53-1.08 1-1.74 1.56-2.22.35-.27.82-.61 1.38-.85.36-.16.73-.26 1.13-.33.25-.05.51.14.57.4.05.22-.06.45-.27.54l-.09.03zm-5.19 2.11c-.79.02-1.43.21-2.19.67-.53.33-1.01.84-1.6 1.7l-.04.06c-.67.95-1.25 1.77-2.01 2.14-.85.45-1.82.52-3.07.21a.48.48 0 01-.3-.22.457.457 0 01-.04-.38c.08-.26.37-.43.62-.37 1 .25 1.65.21 2.26-.11.29-.15.57-.37.88-.7.3-.35.62-.79.91-1.21.68-.99 1.23-1.58 1.85-1.98.38-.22.9-.48 1.49-.65.38-.11.76-.16 1.17-.16.26 0 .48.2.5.48.02.23-.12.43-.34.49-.03 0-.06.01-.1.02zm-5.15 1.31c-.79-.08-1.44.02-2.26.38-.57.26-1.11.7-1.81 1.47l-.05.05c-.79.85-1.48 1.59-2.27 1.86-.9.33-1.87.27-3.07-.2a.51.51 0 01-.27-.25.5.5 0 010-.38c.11-.25.42-.38.67-.28.96.38 1.61.43 2.25.19.3-.11.61-.29.96-.57.35-.3.72-.7 1.06-1.08.8-.89 1.43-1.41 2.1-1.72.41-.16.95-.36 1.56-.45.39-.05.78-.06 1.18 0 .26.02.45.27.44.54a.46.46 0 01-.4.44h-.1zm-5.57.63c-.76-.19-1.43-.18-2.29.06-.6.18-1.19.54-2 1.21l-.06.05c-.91.73-1.68 1.36-2.51 1.52-.94.21-1.89 0-3.02-.62a.476.476 0 01-.23-.29.51.51 0 01.06-.38c.14-.23.47-.32.7-.19.89.51 1.53.65 2.2.5.32-.07.65-.21 1.03-.43.38-.25.81-.59 1.2-.92.92-.77 1.61-1.19 2.32-1.4.43-.1.99-.22 1.61-.22.4 0 .78.05 1.17.16.25.06.41.33.36.6-.04.22-.23.38-.46.38-.03 0-.07 0-.1-.01zm-5.31-.13c-.73-.29-1.4-.37-2.28-.25-.61.09-1.25.37-2.14.93l-.06.04c-.99.61-1.85 1.13-2.69 1.18-.96.08-1.88-.25-2.91-1.02a.468.468 0 01-.19-.32c-.02-.13.02-.26.11-.37.17-.21.51-.25.72-.09.82.62 1.43.84 2.12.79.32-.03.67-.12 1.08-.29.42-.2.88-.48 1.31-.75 1.01-.64 1.76-.97 2.48-1.09.44-.05 1.01-.09 1.62 0 .39.06.77.16 1.14.31.24.09.36.38.28.64a.47.47 0 01-.51.32c-.03 0-.07-.01-.09-.02zm-5.53-.9c-.68-.39-1.33-.56-2.22-.56-.62 0-1.3.19-2.25.63l-.07.03c-1.07.46-1.99.86-2.83.79-.96-.05-1.83-.51-2.74-1.41a.476.476 0 01-.14-.34c0-.13.06-.25.16-.35.2-.18.54-.18.72 0 .72.73 1.3 1.04 1.99 1.08.33.02.68-.02 1.11-.14.44-.14.94-.35 1.4-.56 1.09-.49 1.87-.71 2.61-.73.44.01 1.02.05 1.61.22.38.11.74.26 1.09.47.22.13.31.43.18.67-.1.2-.33.31-.54.25-.03 0-.06-.02-.09-.04zm-5.08-1.55c-.63-.48-1.24-.73-2.13-.85-.62-.08-1.31.02-2.31.32l-.07.02c-1.12.32-2.09.59-2.91.41-.94-.18-1.74-.75-2.53-1.76a.46.46 0 01-.09-.36.46.46 0 01.2-.32c.22-.15.56-.11.71.11.62.82 1.15 1.2 1.83 1.33.32.06.67.07 1.12.01.45-.08.98-.23 1.47-.37 1.15-.34 1.95-.46 2.68-.38.43.07 1 .18 1.56.43.36.16.7.36 1.01.61a.5.5 0 01.09.69c-.13.19-.37.26-.57.17a.218.218 0 01-.08-.05zm-5.08-2.36c-.55-.56-1.13-.9-1.98-1.14-.6-.16-1.3-.16-2.33 0h-.07c-1.15.17-2.15.3-2.93 0-.91-.31-1.62-.98-2.25-2.1a.439.439 0 01-.04-.37.48.48 0 01.25-.29c.24-.12.57-.03.69.2.5.9.97 1.35 1.62 1.58.31.11.66.16 1.11.17.46-.02 1-.09 1.5-.16 1.19-.18 2-.18 2.71 0 .42.13.96.32 1.49.64.34.21.64.45.92.74.18.18.18.49 0 .69a.46.46 0 01-.59.09c-.03-.02-.05-.04-.08-.06zm-4.47-2.87c-.47-.63-1-1.04-1.82-1.39-.57-.24-1.27-.33-2.31-.31h-.07c-1.16 0-2.17 0-2.91-.39-.86-.43-1.47-1.19-1.96-2.38a.475.475 0 010-.37.51.51 0 01.28-.26c.26-.09.56.05.66.29.38.96.79 1.47 1.4 1.78.29.15.63.24 1.08.31.46.05 1 .04 1.51.04 1.2-.02 2 .09 2.69.36.4.19.91.45 1.39.84.31.25.57.53.81.86.16.21.11.51-.09.69-.18.15-.43.15-.6 0l-.07-.07zm-4.26-3.64c-.38-.69-.84-1.17-1.6-1.63-.54-.32-1.21-.51-2.25-.63h-.07c-1.15-.17-2.15-.31-2.83-.81-.79-.54-1.3-1.38-1.6-2.63a.448.448 0 01.06-.36.45.45 0 01.32-.21c.27-.05.55.12.61.38.24 1 .57 1.56 1.14 1.96.27.19.59.33 1.02.46.45.11.98.18 1.49.25 1.19.15 1.97.37 2.61.73.37.24.84.57 1.26 1.02.27.29.5.61.69.96.12.22.04.52-.19.67a.47.47 0 01-.59-.07c-.02-.02-.04-.05-.06-.08zm-3.53-3.97c-.29-.74-.68-1.27-1.37-1.83-.49-.38-1.13-.66-2.14-.93l-.07-.02c-1.12-.31-2.09-.58-2.7-1.16-.71-.65-1.1-1.54-1.24-2.82-.02-.13.02-.26.1-.35.09-.1.21-.16.34-.17.27-.01.53.2.56.46.11 1.02.36 1.62.87 2.09.24.22.54.4.95.59.43.17.95.31 1.45.44 1.16.3 1.91.63 2.49 1.07.33.29.76.68 1.11 1.18.23.33.41.67.55 1.04.1.24-.03.53-.28.64a.478.478 0 01-.63-.23zm-3.12-4.65c-.18-.77-.5-1.35-1.1-2.01-.43-.45-1.03-.81-1.99-1.21l-.07-.03c-1.07-.47-1.98-.87-2.51-1.53-.61-.74-.88-1.68-.83-2.96 0-.13.06-.25.15-.34.1-.09.23-.13.36-.12.27.02.5.27.49.54-.04 1.03.13 1.66.57 2.19.21.25.48.48.86.72.4.22.9.44 1.37.64 1.11.46 1.8.88 2.31 1.41.29.33.66.78.94 1.32.18.35.31.72.4 1.11.06.25-.1.51-.37.59a.456.456 0 01-.55-.23.161.161 0 01-.03-.09zm-2.33-4.77c-.08-.79-.31-1.41-.83-2.14-.37-.5-.91-.94-1.81-1.47l-.06-.04c-1-.6-1.85-1.12-2.28-1.84-.51-.82-.64-1.78-.43-3.05a.44.44 0 01.2-.31c.11-.08.24-.1.38-.07.26.06.46.33.41.6-.17 1.01-.09 1.66.28 2.25.17.27.41.54.76.83.37.28.83.56 1.27.82 1.04.61 1.67 1.12 2.11 1.7.24.37.55.86.75 1.44.13.38.21.75.25 1.15.03.26-.17.5-.44.54a.467.467 0 01-.52-.3c0-.03-.02-.07-.02-.09zm-1.75-5.32c.03-.79-.12-1.44-.52-2.23-.29-.55-.77-1.06-1.59-1.71l-.06-.05c-.9-.74-1.68-1.37-2-2.15-.39-.88-.39-1.85 0-3.08.04-.13.12-.23.24-.28a.5.5 0 01.38-.02c.25.09.41.39.33.65-.32.98-.32 1.63-.04 2.26.13.3.33.59.64.92.33.32.74.67 1.15.99.94.74 1.49 1.34 1.85 1.98.19.4.42.93.55 1.53.08.39.11.78.08 1.18 0 .25-.24.47-.51.47-.23 0-.42-.15-.47-.37v-.1zm-.96-5.22c.14-.78.08-1.44-.22-2.28-.22-.58-.62-1.15-1.35-1.9l-.05-.06c-.8-.85-1.48-1.58-1.7-2.39-.27-.92-.14-1.89.41-3.05.05-.12.15-.21.27-.25a.5.5 0 01.38.03c.24.13.35.44.23.68-.44.93-.54 1.57-.34 2.24.09.31.25.63.51 1 .28.37.65.76 1.01 1.13.83.86 1.3 1.52 1.57 2.21.13.42.3.98.34 1.59.02.4 0 .78-.07 1.18-.04.26-.3.43-.57.4a.479.479 0 01-.42-.43v-.1zm-.25-5.6c.25-.75.28-1.41.1-2.29-.13-.61-.45-1.23-1.07-2.07l-.04-.06c-.67-.95-1.24-1.77-1.35-2.61-.14-.95.13-1.89.83-2.97a.456.456 0 01.67-.12c.22.16.29.49.14.71-.57.86-.75 1.48-.65 2.17.05.32.16.66.36 1.06.23.4.54.84.84 1.26.7.97 1.08 1.69 1.24 2.41.07.43.16 1 .11 1.62-.03.4-.1.78-.24 1.16a.5.5 0 01-.62.31.462.462 0 01-.35-.48c0-.03 0-.07.02-.1zm.49-5.29c.34-.71.47-1.37.4-2.25-.05-.62-.29-1.28-.78-2.2l-.03-.07c-.54-1.03-1-1.92-.99-2.76-.01-.96.38-1.86 1.21-2.83.08-.1.2-.16.33-.16s.26.04.36.13c.19.19.22.52.04.72-.67.77-.94 1.37-.93 2.06 0 .32.07.67.22 1.1.17.43.42.91.66 1.36.57 1.06.84 1.82.92 2.55.02.44.02 1.02-.1 1.62-.08.39-.21.75-.39 1.12-.11.23-.4.34-.66.23a.467.467 0 01-.28-.53c0-.03.02-.07.03-.09zm1.27-5.46c.44-.66.65-1.29.71-2.18.03-.62-.11-1.31-.47-2.29l-.02-.07c-.39-1.1-.72-2.04-.59-2.87.12-.95.63-1.79 1.6-2.63.1-.09.22-.13.35-.12.13.01.25.08.33.18.17.21.14.55-.06.72-.78.67-1.12 1.23-1.21 1.91-.04.32-.02.67.06 1.12.11.45.29.96.47 1.44.42 1.12.58 1.92.55 2.65-.05.44-.12 1.01-.33 1.59-.13.37-.31.72-.54 1.05-.14.21-.44.28-.68.13a.457.457 0 01-.21-.56c.01-.03.03-.06.04-.09zm1.9-4.96c.52-.59.82-1.19 1-2.06.12-.61.07-1.31-.16-2.33v-.07c-.25-1.14-.46-2.12-.22-2.93.25-.93.86-1.68 1.93-2.4.11-.07.24-.1.36-.07.13.03.24.11.31.23.14.23.07.56-.16.71-.86.56-1.27 1.07-1.45 1.73-.08.31-.11.67-.09 1.12.05.46.16.99.27 1.49.26 1.17.32 1.98.19 2.7-.1.43-.25.99-.54 1.53-.19.35-.4.67-.67.97-.17.2-.48.21-.69.05a.468.468 0 01-.13-.58c.01-.03.03-.06.05-.08zm2.7-4.91c.6-.51.97-1.07 1.27-1.9.2-.59.25-1.29.16-2.33v-.07c-.08-1.16-.15-2.16.2-2.93.37-.88 1.09-1.55 2.25-2.11.12-.06.25-.06.37-.02.12.05.22.14.27.27.1.25 0 .57-.25.68-.93.44-1.41.88-1.68 1.51-.13.3-.2.64-.24 1.09-.02.46.02 1 .06 1.51.1 1.19.04 2-.19 2.7-.16.41-.39.94-.74 1.44-.23.32-.49.61-.8.87-.19.17-.5.15-.69-.05a.457.457 0 01-.05-.59c.02-.03.04-.05.07-.07zm3.17-4.27c.66-.43 1.11-.93 1.52-1.72.28-.56.42-1.24.47-2.28v-.07c.08-1.16.15-2.16.59-2.88.49-.83 1.28-1.39 2.51-1.79a.476.476 0 01.61.33c.07.26-.08.56-.34.64-.98.31-1.52.68-1.87 1.28-.16.28-.29.61-.39 1.05-.08.45-.11 1-.14 1.51-.06 1.2-.22 1.99-.54 2.65-.21.38-.51.88-.93 1.33-.27.29-.57.54-.91.75-.22.14-.52.08-.68-.14a.468.468 0 01.03-.6c.02-.02.05-.05.07-.06zm3.92-4c.72-.33 1.22-.76 1.74-1.49.35-.51.59-1.17.78-2.2l.02-.07c.24-1.14.45-2.12.99-2.76.6-.75 1.47-1.2 2.73-1.42.13-.02.26 0 .36.08.11.08.17.2.19.33.03.27-.16.54-.42.59-1.01.17-1.6.46-2.03 1-.2.25-.37.57-.53.99-.14.44-.25.97-.35 1.47-.23 1.18-.5 1.94-.91 2.55-.27.35-.63.8-1.1 1.19-.31.25-.64.45-1.01.62-.23.11-.52 0-.65-.24-.11-.2-.06-.45.11-.59.03-.02.05-.04.08-.05zm4.2-3.25c.75-.24 1.32-.59 1.92-1.25.42-.46.74-1.08 1.07-2.07l.03-.07c.39-1.1.72-2.04 1.34-2.61.69-.66 1.61-.99 2.9-1.04.13 0 .26.04.34.13.1.09.15.22.15.35 0 .27-.23.51-.5.52-1.03.04-1.64.25-2.14.73-.23.22-.44.51-.65.91-.2.42-.38.93-.54 1.41-.38 1.14-.75 1.86-1.24 2.41-.31.31-.73.71-1.25 1.03-.34.2-.69.36-1.08.48-.25.08-.52-.07-.62-.32-.08-.21 0-.45.19-.57.03-.02.06-.03.09-.04zm4.86-2.79c.78-.13 1.38-.41 2.08-.96.48-.4.88-.97 1.35-1.9l.03-.06c.54-1.03 1-1.92 1.7-2.39.78-.56 1.74-.76 3.01-.63.13.01.25.08.32.17.08.11.11.24.09.37-.04.27-.3.48-.57.45-1.02-.11-1.66.02-2.22.42-.26.19-.51.45-.77.81-.25.38-.5.86-.73 1.32-.54 1.07-1 1.73-1.57 2.21-.35.26-.82.6-1.38.84-.36.16-.74.26-1.14.32-.25.04-.5-.13-.56-.41-.05-.22.06-.45.27-.53.03-.02.06-.02.09-.03zm4.92-2c.79-.02 1.43-.21 2.19-.68.53-.33 1-.84 1.59-1.71l.04-.06c.67-.95 1.25-1.78 2-2.15.85-.45 1.82-.52 3.07-.22.13.03.24.11.3.22.07.12.08.25.05.38-.08.26-.36.43-.62.37-1-.24-1.65-.2-2.26.12-.29.15-.56.37-.88.7-.3.35-.61.79-.9 1.22-.67.99-1.23 1.59-1.84 1.99-.38.22-.89.49-1.49.65-.38.1-.76.16-1.17.17-.26 0-.48-.21-.51-.48-.02-.23.12-.43.34-.5.03 0 .07-.01.1-.02zm5.43-1.38c.78.09 1.44-.02 2.26-.37.57-.25 1.11-.69 1.81-1.47l.05-.05c.8-.85 1.48-1.58 2.28-1.85.9-.33 1.88-.26 3.07.21.12.05.22.14.27.25.05.12.05.26-.01.38-.11.25-.42.38-.67.28-.96-.38-1.61-.43-2.25-.2-.3.11-.61.29-.96.57-.35.3-.72.7-1.06 1.08-.81.89-1.43 1.4-2.1 1.71-.41.16-.95.36-1.56.44-.39.05-.78.06-1.18 0a.508.508 0 01-.43-.54c0-.23.18-.41.4-.44h.1z"
                                                fill="#9e1c2b"
                                            />
                                        </G>
                                    </G>
                                </Svg>
                            </View>
                            <View style={styles.stepOne_inputs_wrapper}>


                                <View style={styles.inputWrapper}>

                                    {this.state.password_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={() => this.clearPasswordInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                                  fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.password_field_valid &&

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
                                        value={this.state.password_field}
                                        onChangeText={(password_field) => this.changeRegisterPassword(password_field)}
                                        style={[

                                            styles.input,
                                            this.state.password_field_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.password_field_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }

                                        ]}
                                        underlineColorAndroid='transparent'
                                        label={
                                            <Text
                                                style={[
                                                    {color: !this.state.password_field_error ? '#55545F' : '#A4223C'},
                                                    {color: this.state.password_field_valid ? '#337363' : '#55545F'},
                                                    {fontWeight: "normal", fontSize: 12}
                                                ]
                                                }>
                                                {i18n.t('password')}
                                            </Text>
                                        }
                                        error={false}
                                        onBlur={() => this.onBlurRegisterPassword()}
                                        theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                        underlineColor='transparent'
                                        selectionColor='transparent'
                                        activeOutlineColor='transparent'
                                        placeholderTextColor="#c9a477"
                                        secureTextEntry={true}

                                    />
                                    {this.state.password_field_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.password_field_error_text}
                                    </Text>

                                    }


                                </View>

                                <View style={styles.inputWrapper}>

                                    {this.state.repeat_password_field_error &&

                                    <TouchableOpacity style={styles.emptyInput}
                                                      onPress={() => this.clearRepeatPasswordInput()}
                                    >
                                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm1 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM9.354 8.646a.5.5 0 10-.708.708L11.293 12l-2.647 2.646a.5.5 0 00.708.708L12 12.707l2.646 2.647a.5.5 0 00.708-.708L12.707 12l2.647-2.646a.5.5 0 00-.708-.708L12 11.293 9.354 8.646z"
                                                  fill="#A4223C"/>
                                        </Svg>
                                    </TouchableOpacity>

                                    }

                                    {this.state.repeat_password_field_valid &&


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
                                        value={this.state.repeat_password_field}
                                        onChangeText={(language_field) => this.changeRegisterRepeatPassword(language_field)}
                                        style={[

                                            styles.input,
                                            this.state.repeat_password_field_error && {
                                                borderWidth: 1, borderColor: '#A4223C'
                                            },
                                            this.state.repeat_password_field_valid && {
                                                borderWidth: 1, borderColor: '#337363'
                                            }
                                        ]}
                                        underlineColorAndroid='transparent'
                                        label={
                                            <Text
                                                style={[
                                                    {color: !this.state.repeat_password_field_error ? '#55545F' : '#A4223C'},
                                                    {color: this.state.repeat_password_field_valid ? '#337363' : '#55545F'},
                                                    {fontWeight: "normal", fontSize: 12}
                                                ]
                                                }>
                                                {i18n.t('repeat_password')}
                                            </Text>
                                        }
                                        error={false}
                                        onBlur={() => this.onBlurRegisterRepeatPassword()}
                                        theme={{colors: {text: '#55545F', primary: 'transparent'}}}
                                        underlineColor='transparent'
                                        selectionColor='transparent'
                                        activeOutlineColor='transparent'
                                        placeholderTextColor="#c9a477"
                                        secureTextEntry={true}

                                    />
                                    {this.state.repeat_password_field_error &&

                                    <Text style={styles.error_text}>
                                        {this.state.repeat_password_field_error_text}
                                    </Text>

                                    }


                                </View>


                            </View>

                            <TouchableOpacity style={styles.sign_up_main_btn} onPress={() => this.registerHandler()}>
                                <Text style={styles.sign_up_main_btn_text}>

                                    {i18n.t('sign_up')}
                                </Text>
                            </TouchableOpacity>



                        </ScrollView>

                       }

                        <View style={styles.step_rounds_wrapper}>
                            <View style={styles.step_round}></View>
                            <View style={styles.step_round}></View>
                            <View style={styles.step_round_active}></View>
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
        justifyContent: "space-between",
        backgroundColor: '#ffffff',
        paddingTop: 40,
        // paddingBottom: 150,
        width: "100%",
        height:"100%",




    },
    sign_up_page_main_wrapper: {
        width: "100%",
        height:"100%",

    },
    back_to_dashboard_btn_text: {
      fontSize: 12,
      color: "#000000",
        fontWeight: 'bold',
    },

    back_to_dashboard_btn: {
      paddingVertical: 10,
    },
    back_to_btn_step_numbers_wrapper: {
       flexDirection: "row",
        alignItems: 'center',
        // marginBottom: 57,
        paddingHorizontal: 20,
    },
    step_numbers_wrapper: {
      paddingLeft: 140,
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 10,
    },
    step_number: {
        fontSize: 15,
        color: "#000000",
        fontWeight: 'bold',

    },
    step_number_text: {
        fontSize: 15,
        color: "#000000",
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    step_logo: {
        alignItems: 'center',
        marginBottom: 43,
        justifyContent: 'center',
    },
    input: {
        width:'100%',
        height: 50,
        backgroundColor: '#ffffff',
        fontSize:15,
        color:'#000000',
        borderRadius:4,
        paddingHorizontal:14,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        fontWeight: "bold",

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

    turn_to_step2_btn: {
        width: "100%",
        borderColor: "#af2a38",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
        paddingVertical: 14,
    },

    turn_to_step2_btn_text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#af2a38",
    },

    step_rounds_wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        height:70,
    },
    step_round_active: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: "#af2a38",
        marginRight: 10,
    },
    step_round: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: "#d9d9d9",
        marginRight: 10,
    },
    sign_up_main_btn: {
        backgroundColor: "#af2a38",
        paddingVertical: 14,
        marginBottom: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",

    },
    sign_up_main_btn_text: {
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "bold",

    },
    phones_inputs_wrapper: {
        flexDirection: "row",
    },
    country_dropdown_menu: {
        width:'100%',
        height: 50,
        marginBottom: 20,
        backgroundColor: '#ffffff',
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
        backgroundColor: '#ffffff',

    },
    country_dropdown_wrapper: {
        width: "100%",
        marginBottom:20,
        position: 'relative',
        zIndex: 99,

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
        backgroundColor: '#ffffff',

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
        backgroundColor: '#ffffff',

    },
    gender_dropdown_wrapper: {
        width: "100%",
        marginBottom:20,
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
        backgroundColor: '#ffffff',

    },
    error_text: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 4,
    },
    logo_inputs_wrapper: {
      paddingHorizontal: 20,
        paddingTop: 57,
        paddingBottom:60,



    },
    stepOne_wrapper: {
        width:'100%',
        height:'100%',

      },

    // phone_code_dropdown_wrapper: {
    //     zIndex: 15
    // }



});