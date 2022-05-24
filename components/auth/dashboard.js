import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';


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
    TextInput,
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

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: null,
            password: null,
            language:'en'
        };

    }

    // checkLanguage = async () => {
    //     i18n.locale = this.state.language;
    //     console.log('change language', i18n)
    //
    // }
    //
    // componentDidMount() {
    //     const { navigation } = this.props;
    //
    //     this.checkLanguage();
    //
    //     this.focusListener = navigation.addListener("focus", () => {
    //         this.checkLanguage();
    //     });
    // }
    // componentWillUnmount() {
    //     // Remove the event listener
    //
    //
    //
    //     if (this.focusListener) {
    //         this.focusListener();
    //         // console.log('Bum END')
    //     }
    //
    // }
    redirectToSignUp= () => {
        this.props.navigation.navigate("SignUp");

    }


    redirectToSignIn= () => {
        this.props.navigation.navigate("SignIn");

    }

    render() {

        return (
            <SafeAreaView style={styles.container} >

                <ImageBackground source={require('../../assets/images/background_main_dashboard_img.png')} resizeMode="cover" style={styles.dashboard_image}>

                              <View style={styles.dashboard_logo_svg_buttons_wrapper}>
                                  <View style={styles.dashboard_logo_svg}>
                                      <Svg
                                          width={185}
                                          height={142}
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 184 141.93"
                                      >
                                          <Defs>
                                              <ClipPath id="d">
                                                  <Path d="M0 0H184V141.93H0z" fill="none" />
                                              </ClipPath>
                                          </Defs>
                                          <G id="b">
                                              <G id="c" clipPath="url(#d)">
                                                  <G id="e">
                                                      <Path
                                                          id="f"
                                                          d="M42.59 133.4c2.35 0 4.27 1.9 4.27 4.25s-1.9 4.27-4.25 4.27-4.27-1.9-4.27-4.25a4.253 4.253 0 014.23-4.27h.02m0 7.34c1.7 0 3.08-1.37 3.09-3.07 0-1.7-1.37-3.08-3.07-3.09-1.7 0-3.08 1.37-3.09 3.07v.02c0 1.69 1.38 3.06 3.07 3.07m6.8-7c0-.12.1-.22.22-.23h.79c.12 0 .22.1.22.23v4.89c-.07 1.09.76 2.03 1.85 2.11s2.03-.76 2.11-1.85V133.75c0-.12.1-.23.22-.23h.79c.12 0 .22.1.22.23v4.97c0 1.78-1.44 3.22-3.22 3.22s-3.22-1.44-3.22-3.22v-4.97zm10.74.89H58.2c-.12 0-.22-.1-.22-.23v-.66c0-.12.1-.23.22-.23h5.09c.12 0 .22.1.22.23v.66c0 .12-.1.22-.22.23h-1.93v6.95c0 .12-.1.22-.22.23h-.78c-.12 0-.22-.1-.22-.23v-6.95zm5.57-.89c0-.12.1-.23.22-.23h.78c.12 0 .22.1.22.23v6.96h3.21c.12 0 .22.1.22.23v.65c0 .12-.1.23-.22.23h-4.21c-.12 0-.22-.1-.22-.23v-7.84zm6.83 0c0-.12.1-.22.22-.23h4.74c.12 0 .23.1.23.22v.66c0 .12-.1.23-.22.23h-3.74v2.42h3.16c.12 0 .22.1.22.23v.66c0 .12-.1.23-.22.23h-3.16v2.55h3.74c.12 0 .23.1.23.22v.65c0 .12-.1.23-.22.23h-4.74c-.12 0-.22-.1-.22-.23v-7.84zm9.27.89h-1.93c-.12 0-.22-.1-.22-.23v-.66c0-.12.1-.23.22-.23h5.09c.12 0 .22.1.22.23v.66c0 .12-.1.23-.22.23h-1.93v6.95c0 .12-.1.22-.22.23h-.78c-.12 0-.22-.1-.22-.23v-6.95zm8.21-.8a.2.2 0 01.08-.28c.04-.02.08-.03.12-.02h.84c.09 0 .16.05.2.13l2.61 5.86h.07l2.61-5.86c.03-.08.11-.13.2-.13h.84c.12 0 .22.08.22.19 0 .04 0 .08-.02.12l-3.64 7.97c-.04.08-.11.13-.2.13h-.12a.23.23 0 01-.2-.13l-3.61-7.97zm9.93-.08c0-.12.1-.22.22-.23h.78c.12 0 .22.1.22.23v7.84c0 .12-.1.22-.22.23h-.78c-.12 0-.22-.1-.22-.23v-7.84zm4.41 0c0-.12.1-.23.22-.23h.78c.12 0 .22.1.22.23v6.96h3.21c.12 0 .22.1.22.23v.65c0 .12-.1.23-.22.23h-4.22c-.12 0-.22-.1-.22-.23v-7.84zm6.83 0c0-.12.1-.23.22-.23h.78c.12 0 .22.1.22.23v6.96h3.21c.12 0 .22.1.22.23v.65c0 .12-.1.23-.22.23h-4.22c-.12 0-.22-.1-.22-.23v-7.84zm6.29 7.76l3.64-7.97c.04-.07.12-.12.2-.13h.12c.08.01.16.06.2.13l3.61 7.97a.2.2 0 01-.08.28c-.04.02-.08.03-.12.02h-.74c-.12 0-.23-.07-.27-.18l-.73-1.62h-3.87c-.24.54-.49 1.08-.72 1.62-.05.11-.15.18-.27.18h-.75c-.12 0-.22-.08-.22-.19 0-.04 0-.08.02-.12m5.36-2.51l-1.46-3.24h-.06l-1.44 3.24h2.96zm7.9-5.59c1.06 0 2.09.39 2.88 1.1.09.08.1.23.02.32-.18.2-.35.38-.53.57-.1.11-.19.1-.31-.01-.55-.5-1.27-.78-2.01-.8a3.072 3.072 0 000 6.14c.61 0 1.22-.14 1.78-.4v-1.33h-1.16c-.12 0-.22-.09-.22-.2v-.7c0-.12.09-.22.21-.23H133.57c.12 0 .21.1.21.23 0 .95.01 1.92.01 2.87 0 .07-.04.14-.1.19-.89.51-1.91.78-2.94.78-2.35 0-4.26-1.91-4.26-4.26s1.91-4.26 4.26-4.26m5.91.34c0-.12.1-.23.22-.23h4.74c.12 0 .22.1.22.23v.66c0 .12-.1.22-.22.23h-3.74v2.42h3.16c.12 0 .22.1.23.23v.66c0 .12-.1.23-.22.23h-3.16v2.55h3.74c.12 0 .22.1.22.23v.65c0 .12-.1.22-.22.23h-4.74c-.12 0-.23-.1-.23-.22v-7.84zm-79.55-19.6c0 3.99 0 5.51-.74 7.26-.52 1.23-1.6 2.39-3.59 3.76-.31.22-.63.43-.96.61-.05.03-.11.04-.17.05-.09 0-.17-.06-.17-.15 0-.15.12-.22.34-.37.31-.2.6-.43.86-.69 1.6-1.62 2.36-2.93 2.36-9.28v-7.11c0-3.84 0-4.53-.05-5.32-.05-.83-.25-1.23-1.06-1.4-.28-.05-.56-.08-.84-.07-.1 0-.2-.05-.2-.15 0-.15.12-.2.39-.2 1.11 0 2.66.08 2.78.08s1.67-.08 2.41-.08c.27 0 .4.05.4.2 0 .1-.1.15-.2.15-.21 0-.41.03-.62.07-.67.12-.86.54-.91 1.4-.05.79-.05 1.48-.05 5.32v5.9zm7.54-5.9c0-3.84 0-4.53-.05-5.32-.05-.83-.25-1.23-1.06-1.4-.28-.05-.56-.08-.84-.07-.1 0-.2-.05-.2-.15 0-.15.12-.2.4-.2 1.11 0 2.61.08 2.83.08s1.7-.08 2.44-.08c.27 0 .39.05.39.2 0 .1-.1.15-.2.15-.21 0-.41.03-.62.07-.66.1-.86.54-.91 1.4-.05.79-.05 1.48-.05 5.32v3.44c0 3.54.79 5.07 1.85 6.08.99.96 2.34 1.45 3.71 1.35 1.48 0 2.89-.65 3.86-1.77 1.13-1.4 1.43-3.49 1.43-6.03v-3.07c0-3.84 0-4.53-.05-5.32-.05-.83-.25-1.23-1.06-1.4-.28-.05-.56-.08-.84-.07-.1 0-.2-.05-.2-.15 0-.15.12-.2.39-.2 1.11 0 2.46.08 2.61.08.17 0 1.33-.08 2.07-.08.27 0 .39.05.39.2 0 .1-.1.15-.2.15-.21 0-.41.03-.61.07-.67.15-.86.54-.91 1.4-.05.79-.05 1.48-.05 5.32v2.63c0 2.66-.3 5.61-2.26 7.36a7.21 7.21 0 01-5.07 1.82c-1.85.06-3.65-.56-5.07-1.75-1.21-1.16-2.14-2.88-2.14-6.47v-3.59zm38.2 11.12c-.32 0-.64-.02-.96-.07a5.107 5.107 0 01-3-1.77c-1.43-1.53-3.1-3.71-5.12-6.3 2.21-2.04 2.98-3.86 2.98-5.68a4.293 4.293 0 00-1.7-3.35 7.558 7.558 0 00-4.5-1.08c-.76 0-2.63.08-2.9.08-.12 0-1.67-.08-2.78-.08-.27 0-.39.05-.39.2 0 .1.1.15.2.15.28 0 .56.03.84.07.81.17 1.01.57 1.06 1.4.05.79.05 1.48.05 5.32v4.33c0 2.36 0 4.3-.12 5.34-.1.71-.22 1.26-.71 1.35-.24.06-.49.09-.74.1-.15 0-.2.07-.2.15 0 .15.12.2.39.2.74 0 2.29-.07 2.31-.07.12 0 1.67.07 3.03.07.27 0 .39-.07.39-.2 0-.07-.05-.15-.2-.15a10.4 10.4 0 01-1.11-.1c-.74-.1-.89-.64-.96-1.35-.12-1.03-.12-2.98-.12-5.34v-10.24c0-.13.08-.25.2-.29.54-.11 1.1-.16 1.65-.15 2.63 0 4.26 1.85 4.26 4.92.13 1.43-.42 2.84-1.5 3.79-.64.37-1.35.6-2.08.67-.22.02-.45.03-.68.02.63 0 1.22.25 1.68.69.49.64 1.65 2.29 2.68 3.64 1.4 1.85 2.26 3.05 3.32 3.62.82.39 1.73.55 2.63.47h1.75c.44 0 .59-.05.59-.2 0-.07-.1-.15-.22-.15m23.09-2.81c.1.89.27 2.26 1.33 2.61.52.15 1.06.23 1.6.22.12 0 .2.03.2.12 0 .15-.22.22-.52.22-.54 0-3.2-.02-4.11-.1-.57-.05-.69-.12-.69-.25 0-.1.05-.15.17-.17s.15-.44.1-.89l-1.18-12.77h-.07l-6.03 12.79c-.52 1.08-.59 1.3-.81 1.3-.17 0-.3-.25-.76-1.13-.64-1.21-2.75-5.46-2.88-5.71-.22-.44-2.98-6.35-3.25-7.01h-.1l-.99 11.42c-.02.39-.02.84-.02 1.25 0 .37.27.69.64.76.31.07.62.11.93.12.1 0 .2.05.2.12 0 .17-.15.22-.44.22-.91 0-2.09-.07-2.29-.07-.22 0-1.4.07-2.07.07-.25 0-.42-.05-.42-.22 0-.07.12-.12.25-.12.25 0 .5-.02.74-.07.81-.15.88-1.11.99-2.04l1.77-16.04c.03-.27.12-.44.27-.44s.25.1.37.37l7.53 15.47 7.23-15.45c.1-.22.2-.39.37-.39s.25.2.3.66l1.64 15.14zm57.83 2.81c-.33 0-.66-.05-.98-.15-.52-.15-1.23-.54-2.12-2.73-1.5-3.74-5.36-13.9-5.73-14.83-.29-.76-.39-.89-.54-.89s-.24.15-.54.96l-5.59 15.28c-.44 1.23-.93 2.17-2.07 2.31-.2.02-.54.05-.71.05-.12 0-.22.05-.22.15 0 .15.15.2.47.2 1.16 0 2.51-.07 2.78-.07s1.33.07 1.92.07c.22 0 .37-.05.37-.2 0-.1-.07-.15-.25-.15h-.24c-.42 0-.93-.22-.93-.71.02-.56.14-1.12.34-1.65l1.92-5.61 2.16-6.64c.12-.37.24-.37.37 0l2.34 6.64 2.73 7.26c.15.39 0 .62-.15.66-.1.02-.17.07-.17.17 0 .15.27.15.74.17 1.7.05 3.49.05 3.86.05.27 0 .49-.05.49-.2 0-.12-.1-.15-.24-.15m-27.75-6.74c0 3.62.1 5.19.54 5.64.39.39 1.03.57 2.95.57 1.3 0 2.39-.03 2.98-.74.33-.43.55-.94.64-1.48.02-.19.07-.32.22-.32.12 0 .15.1.15.37-.06.83-.18 1.65-.37 2.46-.17.57-.25.67-1.55.67-1.77 0-3.05-.05-4.08-.07-1.04-.05-1.8-.07-2.51-.07-.1 0-.52.02-1.01.02-.49.03-1.03.05-1.4.05-.27 0-.39-.05-.39-.2 0-.07.05-.15.2-.15.25 0 .5-.04.74-.1.49-.1.62-.64.71-1.35.12-1.03.12-2.98.12-5.34v-4.33c0-3.84 0-4.53-.05-5.32-.05-.83-.25-1.23-1.06-1.4-.28-.05-.56-.08-.84-.07-.1 0-.2-.05-.2-.15 0-.15.12-.2.39-.2 1.11 0 2.66.08 2.78.08s1.92-.08 2.66-.08c.27 0 .39.05.39.2 0 .1-.1.15-.2.15-.27 0-.54.03-.81.07-.71.12-.91.54-.96 1.4-.05.79-.05 1.48-.05 5.32v4.38zm-145.59 4.14c1.44-3.33 4.77-12 5.32-13.8.12-.3.19-.62.22-.94a.605.605 0 00-.32-.57c-.31-.08-.63-.11-.94-.1-.15 0-.27-.03-.27-.15 0-.15.15-.2.55-.2.99 0 2.14.07 2.43.07.15 0 1.22-.07 1.94-.07.27 0 .42.05.42.18s-.1.17-.3.17c-.42-.01-.83.09-1.19.3-.32.22-.69.64-1.36 2.33-.27.7-1.52 3.68-2.78 6.74-1.52 3.63-2.63 6.31-3.2 7.53-.69 1.49-.79 1.89-1.04 1.89-.3 0-.42-.35-.9-1.54l-6.09-15.24c-.55-1.39-.92-1.67-1.79-1.91a3.76 3.76 0 00-.94-.1c-.15 0-.2-.08-.2-.17 0-.15.25-.18.65-.18 1.19 0 2.61.07 2.91.07.25 0 1.37-.07 2.31-.07.45 0 .67.05.67.18s-.07.17-.25.17c-.32-.01-.64.03-.94.12-.21.08-.34.28-.32.5.14.71.37 1.4.67 2.06l4.77 12.72zm14.59-4.18c0 2.39 0 4.35.12 5.39.08.72.23 1.27.97 1.37.37.05.74.09 1.12.1.15 0 .2.07.2.15 0 .12-.12.2-.4.2-1.37 0-2.93-.07-3.06-.07s-1.69.07-2.43.07c-.27 0-.4-.05-.4-.2 0-.08.05-.15.2-.15.25 0 .5-.04.74-.1.5-.1.62-.65.72-1.37.12-1.04.12-3.01.12-5.39v-4.37c0-3.88 0-4.57-.05-5.37-.05-.85-.3-1.27-.84-1.39-.25-.06-.51-.1-.77-.1-.1 0-.2-.05-.2-.15 0-.15.12-.2.4-.2.82 0 2.38.07 2.51.07s1.69-.07 2.43-.07c.27 0 .4.05.4.2 0 .1-.1.15-.2.15-.21 0-.42.03-.62.07-.67.13-.87.55-.92 1.42-.05.8-.05 1.49-.05 5.37v4.38zm22.13 6.86a3.3 3.3 0 01-.99-.15c-.52-.15-1.24-.55-2.13-2.76-1.52-3.78-5.42-14.04-5.79-14.99-.3-.77-.4-.89-.55-.89s-.25.15-.55.97l-5.64 15.44c-.45 1.24-.94 2.19-2.09 2.34-.2.02-.55.05-.72.05-.12 0-.22.05-.22.15 0 .15.15.2.47.2 1.17 0 2.53-.07 2.81-.07s1.34.07 1.94.07c.22 0 .37-.05.37-.2 0-.1-.07-.15-.25-.15h-.25c-.42 0-.94-.22-.94-.72.02-.57.14-1.13.35-1.66l1.49-4.4 2.63-7.98c.12-.37.25-.37.37 0l2.81 7.93 2.31 6.12c.15.4 0 .62-.15.67-.1.02-.17.07-.17.17 0 .15.27.15.74.17 1.71.05 3.53.05 3.9.05.27 0 .5-.05.5-.2 0-.12-.1-.15-.25-.15m102.08 0a3.3 3.3 0 01-.99-.15c-.52-.15-1.24-.55-2.14-2.76-1.51-3.78-5.41-14.04-5.79-14.99-.3-.77-.4-.89-.55-.89s-.25.15-.55.97l-5.64 15.44c-.45 1.24-.94 2.19-2.09 2.34-.2.02-.55.05-.72.05-.12 0-.22.05-.22.15 0 .15.15.2.47.2 1.17 0 2.54-.07 2.81-.07s1.34.07 1.94.07c.22 0 .37-.05.37-.2 0-.1-.08-.15-.25-.15h-.25c-.42 0-.94-.22-.94-.72.02-.57.14-1.13.35-1.67l1.49-4.4 2.63-7.98c.12-.37.25-.37.37 0l2.81 7.93 2.31 6.12c.15.4 0 .62-.15.67-.1.02-.17.07-.17.17 0 .15.27.15.75.17 1.71.05 3.53.05 3.9.05.27 0 .5-.05.5-.2 0-.12-.1-.15-.25-.15m-61.47-99.1v.44s4.5-.27 5.75 1.56c.28.58.43 1.22.43 1.87v6.05l7.25-3.37v-2.67c0-.65.15-1.29.43-1.88 1.25-1.83 5.75-1.56 5.75-1.56v-.44H87.78zm6.18 26.34v9.28c0 3.3-.33 4.33-1.28 5.23-1.58 1.5-2.39 1.78-3.4 1.83 1.96-.08 3.89-.53 5.68-1.31 1.56-.75 2.93-1.84 4-3.21a12.51 12.51 0 001.88-4.45c.33-1.97.46-3.97.38-5.97v-4.78l-7.26 3.37zm7.25-10.53l-7.25-3.37v1.68l7.25 3.36v-1.66zm0-8.02l-7.25 3.38v.02l7.25 3.37v-6.77zm0 11.09l-7.25-3.36v1.56l7.25 3.37v-1.56zm0 2.81l-7.25-3.39v6.77l7.25-3.36v-.03zM84.92 61.2c-.49-.45-.7-1.14-.53-1.79.23-.46.62-.59 1.03-.83 2.28-1.37 3.03-4.33 1.66-6.61-.38-.63-.9-1.17-1.51-1.57-.49-.36-1.06-.59-1.65-.68-.09-.01-.18-.03-.27-.04-.23-.04-.47-.05-.7-.06h-.12c-1.28-.06-2.52.47-3.38 1.42-.38.42-.68.91-.9 1.43-.28.62-.43 1.3-.43 1.98v.12c.05 1.23.4 2.43 1.01 3.5a8.967 8.967 0 002.27 2.67c.94.75 2.01 1.31 3.15 1.68 1.14.35 2.33.56 3.52.62a4.849 4.849 0 01-3.14-1.84m6.03-58.16c-.2 0-.38.15-.42.35-.05.24.09.48.33.54.35.09.71.14 1.07.14.49 0 .99-.08 1.46-.21.78-.28 1.49-.72 2.1-1.29.35-.3.71-.58 1.09-.85.29-.18.61-.32.94-.4.7-.12 1.43.04 2.01.45.23.11.5.04.64-.17.07-.1.09-.23.06-.34a.421.421 0 00-.21-.26c-.81-.53-1.79-.73-2.75-.55-.86.28-1.64.76-2.28 1.4l-.05.04c-.52.49-1.14.87-1.81 1.11-.68.22-1.4.24-2.08.06h-.09m5.1.11c-.2-.03-.4.1-.46.29-.08.23.03.49.25.58.33.14.68.24 1.04.29.49.06.99.06 1.48 0 .81-.17 1.58-.5 2.26-.98.39-.25.79-.48 1.2-.68.31-.14.65-.23.99-.26.71-.02 1.41.24 1.93.73.21.14.49.11.65-.08.08-.09.11-.21.1-.33a.417.417 0 00-.17-.29c-.73-.64-1.68-.97-2.64-.93-.89.16-1.73.52-2.45 1.06l-.06.03c-.58.41-1.25.7-1.95.84-.7.12-1.42.04-2.07-.23a.292.292 0 00-.09-.02m4.78.76a.42.42 0 00-.5.23c-.11.22-.04.48.17.61.31.18.64.32.99.42.48.12.97.19 1.46.19.83-.06 1.64-.29 2.37-.67.42-.2.84-.37 1.28-.52.33-.1.67-.14 1.01-.13.71.07 1.36.42 1.82.98.19.17.47.17.66 0 .09-.08.14-.2.15-.32 0-.12-.05-.23-.13-.31a3.83 3.83 0 00-2.5-1.28c-.9.04-1.78.29-2.57.73l-.06.02c-.63.33-1.33.53-2.04.58-.71.03-1.41-.15-2.02-.5-.03-.01-.05-.03-.08-.03m4.88 1.48a.414.414 0 00-.52.16c-.14.2-.11.47.08.63.28.22.59.41.92.56.46.19.93.33 1.42.4.83.06 1.66-.06 2.44-.33.44-.14.89-.25 1.34-.34.34-.05.68-.05 1.02.01.69.17 1.29.61 1.66 1.22.16.2.44.24.65.1.1-.07.17-.17.19-.29a.402.402 0 00-.09-.33 3.77 3.77 0 00-2.29-1.61c-.9-.09-1.81.04-2.65.36l-.06.02c-.67.24-1.39.34-2.11.28-.71-.07-1.37-.34-1.93-.78-.02-.02-.05-.03-.08-.05m4.4 2.02a.427.427 0 00-.54.08c-.17.18-.17.46 0 .63.25.26.53.49.84.67.43.25.88.44 1.36.58.81.16 1.65.16 2.47 0 .45-.08.91-.13 1.37-.15.34 0 .68.05 1.01.15.66.26 1.2.77 1.49 1.43.13.22.41.29.63.18a.4.4 0 00.22-.27c.03-.11.02-.23-.04-.33a3.832 3.832 0 00-2.06-1.9c-.88-.2-1.79-.2-2.67 0h-.07c-.7.16-1.42.16-2.12 0-.69-.17-1.32-.53-1.82-1.05a.304.304 0 00-.07-.05m4.3 2.74a.436.436 0 00-.54 0c-.19.15-.23.43-.09.63.21.29.46.56.74.78.39.31.81.56 1.26.77.78.28 1.61.39 2.44.34.46-.01.92 0 1.38.04.34.04.67.14.98.29.62.35 1.08.93 1.27 1.62.1.23.36.35.6.27.12-.04.21-.12.26-.23.05-.11.05-.23 0-.34a3.79 3.79 0 00-1.78-2.17c-.84-.33-1.75-.45-2.65-.37h-.07c-.71.05-1.43-.05-2.11-.29a3.76 3.76 0 01-1.65-1.27c-.02-.02-.04-.05-.06-.06m3.69 3.14a.427.427 0 00-.54-.07c-.21.13-.28.39-.17.61.17.32.38.61.63.87.34.36.73.67 1.15.93.74.38 1.55.6 2.38.66.46.05.91.12 1.36.22.33.09.65.23.93.41.57.43.94 1.07 1.04 1.78a.5.5 0 00.56.35c.12-.02.22-.09.29-.19.06-.1.08-.22.05-.33-.17-.95-.69-1.81-1.47-2.39-.79-.43-1.67-.68-2.58-.71h-.07c-.71-.05-1.41-.25-2.05-.58-.62-.35-1.13-.86-1.47-1.48-.01-.03-.03-.05-.05-.07m3.4 3.8a.435.435 0 00-.53-.14.46.46 0 00-.26.58c.12.34.29.66.5.95.29.4.63.76 1.01 1.08.68.48 1.45.81 2.26.98.45.11.89.25 1.32.41.32.13.61.32.87.54.5.51.79 1.19.79 1.91.03.25.25.43.51.42.12 0 .23-.06.31-.15.08-.09.11-.21.1-.32-.03-.97-.44-1.89-1.12-2.57-.72-.54-1.56-.91-2.45-1.07l-.07-.02c-.7-.15-1.36-.44-1.95-.85-.56-.43-1-1.01-1.24-1.67-.01-.03-.03-.05-.04-.08m2.71 4.01a.421.421 0 00-.5-.21.46.46 0 00-.33.54c.08.35.2.69.37 1.01.24.43.52.84.86 1.2.61.56 1.33 1 2.11 1.28.43.17.85.36 1.25.58.3.17.56.39.79.65.43.57.62 1.29.53 1.99 0 .25.19.46.45.49.12.01.24-.03.33-.11a.41.41 0 00.14-.31c.1-.97-.18-1.93-.77-2.7-.65-.63-1.43-1.1-2.29-1.38l-.06-.03c-.68-.24-1.29-.61-1.82-1.1-.5-.5-.85-1.13-1.01-1.82 0-.03-.02-.06-.03-.08m2.25 4.58a.438.438 0 00-.47-.28c-.24.03-.42.25-.4.49.03.36.1.71.22 1.05.17.46.4.9.68 1.31.53.64 1.18 1.17 1.91 1.56.4.23.79.48 1.16.75.27.21.5.47.69.75.35.62.43 1.36.24 2.05-.03.25.13.48.37.54.12.03.24 0 .34-.06.1-.07.16-.17.18-.28.23-.94.09-1.93-.39-2.78a5.85 5.85 0 00-2.07-1.69l-.06-.03c-.64-.33-1.2-.79-1.65-1.34-.43-.57-.69-1.24-.75-1.94 0-.03-.01-.06-.02-.09m1.52 4.6a.431.431 0 00-.43-.34.46.46 0 00-.46.43c-.02.36 0 .72.08 1.07.11.48.28.95.5 1.39.43.71 1.01 1.32 1.69 1.8.37.28.72.58 1.05.9.24.25.43.53.58.84.26.66.25 1.4-.03 2.06-.07.24.06.5.3.59.12.04.24.03.35-.03.1-.05.18-.15.21-.26.35-.9.35-1.91-.01-2.81a5.886 5.886 0 00-1.83-1.95l-.05-.04c-.59-.41-1.08-.94-1.46-1.55-.35-.62-.51-1.32-.48-2.03v-.09m.93 5.02a.418.418 0 00-.38-.39.457.457 0 00-.52.36c-.07.35-.09.72-.07 1.08.04.49.14.98.3 1.45.33.76.81 1.45 1.42 2.02.32.33.63.67.91 1.03.2.28.36.59.46.91.17.69.05 1.43-.32 2.04-.1.23 0 .5.21.62a.428.428 0 00.6-.2c.47-.84.61-1.84.38-2.78-.34-.84-.86-1.59-1.54-2.19l-.05-.05c-.52-.49-.94-1.08-1.22-1.74-.26-.66-.33-1.38-.19-2.08v-.09m.23 4.84a.43.43 0 00-.32-.44.454.454 0 00-.56.29c-.12.34-.19.7-.21 1.06-.02.49.01.99.11 1.47.23.8.61 1.54 1.14 2.19.28.37.53.75.77 1.15.16.3.28.63.33.97.07.71-.14 1.42-.59 1.98-.13.22-.07.5.13.65.1.07.22.1.34.08.11-.02.21-.09.28-.19.58-.78.85-1.74.74-2.71-.22-.87-.65-1.69-1.24-2.37l-.04-.06a5.21 5.21 0 01-.98-1.88c-.17-.69-.14-1.41.08-2.08 0-.03.01-.06.01-.09m-.46 5.08c.04-.2-.07-.4-.26-.48a.462.462 0 00-.6.21c-.16.32-.28.66-.36 1.02-.09.49-.13.98-.1 1.47.11.82.39 1.61.82 2.33.22.4.42.82.6 1.24.12.32.19.66.2 1-.03.71-.33 1.39-.85 1.88-.16.2-.14.48.04.66.09.08.2.13.32.12.12 0 .23-.06.3-.15.68-.69 1.08-1.61 1.11-2.57-.1-.9-.4-1.76-.89-2.52l-.03-.06c-.37-.61-.61-1.29-.71-2-.07-.7.06-1.42.37-2.05l.03-.09m-1.09 4.72a.421.421 0 00-.19-.51.46.46 0 00-.62.13c-.2.3-.37.62-.49.96-.16.47-.26.95-.29 1.45 0 .83.18 1.65.51 2.42.17.43.31.86.43 1.31.07.33.1.68.06 1.02a2.7 2.7 0 01-1.1 1.74c-.18.17-.21.46-.05.66.07.1.19.16.31.17.12.01.23-.03.32-.11a3.83 3.83 0 001.45-2.41c.02-.9-.17-1.8-.55-2.61l-.02-.06c-.29-.66-.44-1.36-.43-2.08.02-.71.25-1.4.64-1.99.02-.02.03-.05.04-.08m-1.81 4.77c.09-.18.04-.41-.12-.53a.454.454 0 00-.63.04c-.24.27-.45.56-.62.88-.22.44-.39.91-.49 1.39-.11.82-.06 1.66.17 2.46.11.45.19.9.24 1.36.03.34 0 .68-.08 1.02-.22.68-.7 1.24-1.33 1.57-.21.15-.27.42-.14.64a.427.427 0 00.61.15c.84-.48 1.48-1.26 1.77-2.18.15-.89.09-1.8-.18-2.67v-.07c-.19-.69-.23-1.41-.13-2.12.12-.7.44-1.35.91-1.88.02-.02.04-.05.05-.08M123.5 59c.12-.17.1-.4-.05-.54a.454.454 0 00-.63-.04c-.28.23-.52.5-.73.79-.28.41-.5.85-.67 1.31-.22.8-.28 1.64-.16 2.46.05.46.07.92.06 1.38-.02.34-.09.68-.22 1a2.73 2.73 0 01-1.53 1.38.5.5 0 00-.23.62.42.42 0 00.58.22c.9-.36 1.63-1.05 2.04-1.93.26-.86.32-1.78.17-2.67v-.07c-.1-.71-.05-1.43.14-2.12.21-.68.61-1.28 1.15-1.74.02-.02.04-.04.06-.07m-3.03 4.11c.14-.15.15-.38.03-.54a.46.46 0 00-.62-.13c-.31.19-.59.42-.83.68-.93.97-1.42 2.28-1.35 3.62-.02.46-.06.92-.13 1.37-.07.34-.18.66-.35.96-.39.6-1.01 1.01-1.71 1.16-.24.09-.37.34-.31.58.03.12.11.22.21.28.1.06.22.07.33.03.94-.23 1.76-.81 2.29-1.62.38-.82.57-1.71.55-2.62v-.07c0-.72.15-1.42.44-2.08.31-.64.79-1.18 1.39-1.56.02-.02.05-.04.07-.06m-3.38 3.47c.16-.13.2-.36.1-.54a.462.462 0 00-.6-.21c-.33.15-.64.34-.92.57-.38.32-.71.68-1 1.09-.43.71-.71 1.5-.82 2.33-.08.45-.18.9-.31 1.34-.11.32-.27.63-.48.9-.47.54-1.13.87-1.84.92-.25.05-.41.28-.39.54.01.12.08.23.18.3.09.07.21.1.33.07.96-.1 1.85-.57 2.49-1.3.49-.76.79-1.62.89-2.52v-.07c.11-.71.35-1.39.72-2 .39-.59.94-1.07 1.58-1.36.03-.01.05-.03.07-.05m-4.03 3.14c.17-.11.25-.32.18-.51a.468.468 0 00-.56-.3c-.35.1-.68.25-.99.43a4.869 4.869 0 00-2.28 3.12c-.14.44-.31.87-.5 1.29-.15.31-.36.59-.6.83-.54.47-1.24.7-1.95.65-.25.02-.45.22-.46.48 0 .12.04.24.13.32.08.08.2.12.31.12.97.03 1.91-.3 2.64-.94.59-.68 1.01-1.5 1.23-2.37l.02-.06c.19-.69.53-1.33.98-1.89.47-.53 1.07-.92 1.75-1.13.03 0 .06-.02.08-.04m-4.19 2.43a.42.42 0 00.24-.49.457.457 0 00-.52-.36c-.36.05-.7.16-1.03.3-.45.21-.87.47-1.26.77a6.07 6.07 0 00-1.42 2.02c-.2.42-.42.82-.66 1.21-.19.28-.43.53-.7.74-.6.39-1.32.53-2.02.39a.491.491 0 00-.52.41c-.02.12.01.24.09.34.07.09.18.15.3.16.96.16 1.94-.05 2.74-.58.67-.6 1.2-1.35 1.53-2.19l.03-.06c.28-.66.7-1.25 1.22-1.74.53-.47 1.19-.77 1.89-.89.03 0 .06-.01.09-.03m-4.72 1.93c.2-.06.33-.24.31-.45a.46.46 0 00-.46-.43c-.36 0-.72.05-1.07.15a4.9 4.9 0 00-3.04 2.39c-.25.38-.53.75-.83 1.1-.23.25-.5.47-.8.64-.65.3-1.39.34-2.06.1a.493.493 0 00-.57.33.43.43 0 00.31.55c.92.29 1.93.22 2.8-.2.75-.5 1.38-1.17 1.83-1.95l.04-.05c.37-.61.87-1.14 1.45-1.55.59-.39 1.28-.6 1.99-.61.03 0 .06 0 .09-.01m-4.69 1.21c.2-.03.36-.2.36-.4a.462.462 0 00-.4-.49c-.36-.04-.72-.04-1.08 0-.49.08-.96.21-1.42.41-.74.39-1.39.92-1.91 1.56-.3.35-.62.67-.96.98-.26.22-.56.4-.88.52-.68.22-1.42.16-2.05-.17-.24-.08-.5.03-.61.25-.05.11-.05.24 0 .35.04.11.13.19.24.23.88.41 1.88.48 2.8.18.81-.4 1.52-.98 2.07-1.7l.05-.05c.45-.56 1.01-1.01 1.64-1.34.64-.31 1.35-.42 2.06-.34h.09m-5.07.59c.2 0 .38-.15.42-.35a.457.457 0 00-.32-.54c-.35-.09-.71-.14-1.07-.14-1.34-.02-2.64.52-3.57 1.48-.35.3-.71.58-1.09.84-.29.18-.61.32-.94.4-.7.12-1.42-.05-2.01-.46a.494.494 0 00-.64.17c-.07.1-.09.23-.06.34.03.11.11.21.21.26.81.53 1.79.73 2.75.57.86-.28 1.64-.76 2.29-1.4l.05-.04c.52-.49 1.14-.86 1.82-1.1.68-.21 1.4-.23 2.08-.05.03 0 .06.01.09.01m-4.84-.1c.2.03.4-.1.46-.29a.468.468 0 00-.25-.58 4.1 4.1 0 00-1.04-.28c-.49-.06-.99-.06-1.48 0a6.1 6.1 0 00-2.26.99c-.39.25-.79.48-1.2.69a3.3 3.3 0 01-.99.27c-.71.02-1.4-.24-1.93-.72a.491.491 0 00-.65.08c-.08.09-.11.21-.1.33.01.12.08.22.17.29.73.63 1.68.96 2.65.93.89-.16 1.73-.53 2.45-1.08l.06-.03c.58-.42 1.25-.7 1.95-.85.7-.12 1.42-.04 2.07.22.03.01.06.02.09.02m-5.04-.8c.2.06.41-.04.5-.22.11-.22.04-.48-.17-.61-.31-.19-.64-.33-.99-.43a4.91 4.91 0 00-3.84.46c-.42.19-.84.37-1.28.51-.33.1-.67.14-1.01.13a2.73 2.73 0 01-1.81-.98.48.48 0 00-.81.32c0 .12.04.23.13.31.64.73 1.53 1.19 2.49 1.29.9-.04 1.78-.28 2.57-.72l.06-.03c.64-.33 1.33-.52 2.05-.57.71-.02 1.41.16 2.02.51.03.01.05.03.08.04m-4.63-1.41c.19.08.41.02.52-.16.14-.2.1-.47-.09-.63-.28-.22-.59-.41-.92-.55-.46-.19-.94-.32-1.42-.39-.83-.05-1.66.06-2.45.34-.44.14-.88.25-1.33.34-.34.05-.68.05-1.02 0a2.75 2.75 0 01-1.67-1.22.484.484 0 00-.65-.1c-.1.07-.17.17-.19.29-.02.12.01.23.09.32.54.81 1.36 1.38 2.3 1.61.9.08 1.81-.05 2.65-.38h.07c.67-.26 1.39-.36 2.1-.31.71.07 1.38.34 1.94.78.02.02.05.03.08.04m-4.64-2.13c.18.11.4.07.54-.08.17-.18.17-.45 0-.63-.25-.26-.53-.49-.84-.68a4.888 4.888 0 00-3.82-.59c-.45.08-.91.12-1.37.15-.34 0-.68-.05-1.01-.15-.66-.26-1.19-.78-1.48-1.43a.493.493 0 00-.63-.18c-.11.05-.19.15-.23.26-.03.11-.02.23.04.33a3.78 3.78 0 002.06 1.91c.88.21 1.79.21 2.67 0h.07c.7-.16 1.43-.16 2.13 0 .69.17 1.31.53 1.81 1.04.02.02.05.04.07.06m-4.08-2.6c.16.13.39.12.55 0 .19-.15.23-.43.09-.63-.21-.29-.46-.55-.74-.78-.39-.3-.81-.56-1.27-.76-.78-.27-1.62-.39-2.45-.33-.46.02-.92 0-1.38-.03-.34-.04-.67-.14-.98-.29a2.74 2.74 0 01-1.28-1.61.488.488 0 00-.6-.27c-.12.04-.21.12-.26.23-.05.11-.05.23 0 .33.3.92.93 1.7 1.78 2.17.84.32 1.75.44 2.65.35h.07c.71-.05 1.43.05 2.11.29.66.26 1.23.7 1.65 1.27.02.02.04.05.06.06m-3.89-3.31c.14.15.37.18.54.07.21-.12.29-.39.18-.61-.17-.32-.38-.61-.62-.88-.9-.99-2.18-1.57-3.52-1.6-.46-.05-.91-.13-1.36-.23-.33-.09-.65-.23-.93-.42-.57-.43-.94-1.07-1.04-1.78a.5.5 0 00-.56-.35c-.12.02-.22.09-.29.19-.06.1-.08.22-.05.33.16.95.69 1.81 1.46 2.39.79.44 1.67.68 2.57.72h.07c.71.06 1.41.25 2.05.59.62.35 1.12.87 1.46 1.49.02.03.03.05.05.07m-3.23-3.61c.12.17.34.23.53.14.22-.1.33-.35.25-.58a4.1 4.1 0 00-.5-.95c-.29-.4-.63-.76-1.01-1.08-.68-.48-1.45-.81-2.27-.98-.45-.11-.89-.24-1.32-.4a3.02 3.02 0 01-.87-.54c-.5-.5-.79-1.19-.79-1.9a.484.484 0 00-.51-.42.42.42 0 00-.31.15c-.08.09-.11.21-.1.32.04.97.44 1.89 1.13 2.57.73.54 1.57.9 2.46 1.06l.06.02c.7.14 1.37.43 1.95.84.56.43 1 1 1.25 1.67.01.03.03.05.04.08m-2.85-4.23c.09.18.3.27.5.21.24-.06.38-.3.33-.54-.08-.35-.2-.69-.36-1.01a6.76 6.76 0 00-.85-1.21c-.61-.57-1.32-1-2.1-1.28-.43-.17-.84-.37-1.25-.58-.29-.17-.56-.4-.78-.65-.43-.57-.61-1.29-.52-1.99 0-.25-.19-.46-.44-.49a.443.443 0 00-.33.11.41.41 0 00-.14.31c-.1.96.17 1.93.76 2.7.64.63 1.42 1.11 2.28 1.39l.06.03c.68.24 1.29.62 1.81 1.11.5.5.84 1.14 1 1.83 0 .03.02.06.03.08m-2.13-4.35c.07.19.27.31.47.28.24-.03.42-.25.4-.49-.03-.36-.1-.71-.22-1.05-.17-.46-.41-.9-.69-1.31a6.135 6.135 0 00-1.92-1.55c-.4-.23-.79-.48-1.16-.74-.27-.21-.5-.47-.69-.75-.35-.62-.44-1.36-.25-2.05a.495.495 0 00-.37-.54c-.12-.03-.24 0-.34.07-.1.07-.16.17-.18.28-.23.94-.08 1.94.39 2.78.55.71 1.27 1.29 2.08 1.68l.06.04c.64.33 1.2.78 1.65 1.34.43.56.69 1.24.75 1.95 0 .03.01.06.02.09m-1.6-4.85c.04.2.22.34.43.34.24 0 .45-.18.47-.43.02-.36 0-.72-.08-1.08a4.892 4.892 0 00-2.18-3.2c-.36-.28-.71-.58-1.05-.9-.24-.25-.43-.53-.58-.84-.26-.66-.25-1.4.03-2.06.07-.24-.06-.5-.3-.59a.471.471 0 00-.35.01c-.1.05-.18.15-.22.26-.36.9-.36 1.9 0 2.8.45.78 1.07 1.45 1.82 1.96l.05.04c.59.41 1.08.94 1.45 1.56.35.62.51 1.32.47 2.03v.09m-.88-4.76c.02.21.17.37.38.39.24.03.47-.13.52-.37.07-.35.09-.71.06-1.07-.04-.49-.15-.98-.31-1.45-.34-.76-.82-1.44-1.43-2.01-.32-.33-.63-.67-.92-1.03-.2-.28-.36-.59-.46-.91-.17-.69-.06-1.43.31-2.04.1-.23 0-.5-.21-.62a.428.428 0 00-.35-.03c-.11.04-.2.12-.25.22-.47.85-.6 1.84-.37 2.78.34.84.87 1.58 1.55 2.18l.04.05c.53.49.94 1.08 1.23 1.73.26.66.33 1.38.2 2.08v.09m-.24-5.1c-.01.2.12.39.32.44.23.07.48-.06.56-.28.12-.34.19-.7.22-1.06.03-.49 0-.99-.1-1.47-.22-.8-.61-1.55-1.13-2.19-.28-.37-.53-.75-.76-1.15-.16-.3-.27-.63-.33-.97-.07-.71.14-1.42.59-1.97.13-.22.08-.5-.13-.65-.1-.07-.22-.1-.34-.08-.11.02-.21.09-.28.19a3.84 3.84 0 00-.75 2.7c.22.88.64 1.69 1.23 2.38l.04.05c.45.55.79 1.2.98 1.89.17.69.13 1.41-.09 2.08 0 .03-.01.06-.02.09m.43-4.82c-.04.2.07.4.26.48.22.1.49 0 .6-.21.16-.32.28-.66.35-1.01.09-.49.12-.98.09-1.48-.12-.82-.4-1.61-.83-2.32-.22-.4-.42-.81-.6-1.24-.12-.32-.19-.66-.2-1a2.7 2.7 0 01.85-1.88c.16-.2.14-.48-.04-.66a.414.414 0 00-.33-.12c-.12 0-.23.06-.3.15-.68.69-1.08 1.61-1.11 2.58.1.9.41 1.76.9 2.52l.03.06c.37.61.62 1.29.71 2 .07.71-.05 1.42-.37 2.05-.01.03-.02.06-.03.08m1.15-4.97c-.07.19.01.41.19.51.21.13.48.08.62-.12.21-.3.37-.62.49-.96.16-.47.26-.95.3-1.45 0-.83-.17-1.65-.5-2.42-.16-.43-.31-.87-.42-1.31-.07-.33-.09-.68-.06-1.02a2.7 2.7 0 011.1-1.74c.18-.17.21-.46.05-.66a.407.407 0 00-.31-.17c-.12 0-.23.03-.32.11-.77.59-1.29 1.44-1.46 2.4-.02.9.16 1.8.54 2.62l.02.06c.29.66.43 1.37.43 2.08-.03.71-.25 1.39-.65 1.98a.3.3 0 00-.04.08m1.72-4.52c-.09.18-.04.41.12.53.19.15.47.14.63-.04.24-.27.45-.56.62-.88.22-.44.38-.91.49-1.4.11-.82.05-1.66-.18-2.46-.11-.45-.19-.9-.25-1.36-.03-.34 0-.68.08-1.02.22-.68.69-1.25 1.32-1.58.21-.15.27-.42.14-.64a.427.427 0 00-.61-.15c-.84.48-1.47 1.26-1.76 2.18-.14.89-.08 1.81.19 2.67v.07c.21.69.26 1.41.16 2.12-.12.7-.43 1.35-.91 1.88-.02.02-.04.05-.05.07m2.45-4.48c-.12.17-.1.39.04.54.16.18.44.2.63.05.28-.23.52-.49.73-.79.28-.41.51-.85.68-1.31.23-.8.28-1.64.17-2.46-.04-.46-.06-.92-.06-1.38.02-.34.09-.68.22-1 .31-.64.86-1.14 1.53-1.38a.5.5 0 00.23-.62.42.42 0 00-.58-.22c-.9.36-1.63 1.04-2.05 1.92-.27.86-.33 1.78-.19 2.67v.07c.1.71.05 1.43-.15 2.12-.22.67-.62 1.28-1.16 1.73-.02.02-.04.04-.06.07m2.88-3.9c-.14.15-.15.38-.03.55.14.2.41.26.62.13.3-.19.58-.42.83-.69.33-.37.61-.77.85-1.21.33-.76.5-1.59.5-2.42.02-.46.06-.92.13-1.37.07-.34.19-.66.35-.96.39-.6 1-1.02 1.7-1.16.24-.08.37-.33.31-.58a.461.461 0 00-.21-.28.383.383 0 00-.33-.03c-.94.23-1.76.82-2.28 1.63a5.78 5.78 0 00-.53 2.62v.07c0 .72-.15 1.42-.44 2.08-.3.64-.78 1.18-1.38 1.57-.02.02-.05.04-.07.06m3.56-3.65c-.16.13-.2.35-.1.53.11.22.37.31.59.22.33-.15.64-.33.92-.56.38-.32.72-.68 1.01-1.08.43-.71.71-1.5.83-2.32.08-.45.19-.9.32-1.34.11-.32.27-.63.48-.9a2.7 2.7 0 011.85-.91c.24-.05.41-.28.38-.53a.438.438 0 00-.17-.3.384.384 0 00-.33-.07c-.97.1-1.86.56-2.5 1.29-.49.76-.8 1.62-.9 2.52v.06c-.11.71-.35 1.39-.73 2a3.82 3.82 0 01-1.59 1.36c-.03.01-.05.03-.08.05m3.82-2.97c-.17.11-.25.32-.17.52.08.23.33.36.56.29.34-.1.67-.25.98-.44.42-.26.8-.58 1.14-.94.52-.65.91-1.39 1.14-2.19.14-.44.31-.87.49-1.29.16-.31.36-.58.6-.83.54-.47 1.24-.71 1.95-.66.25-.02.45-.22.46-.47 0-.12-.05-.24-.13-.32a.406.406 0 00-.31-.12 3.82 3.82 0 00-2.64.95c-.59.69-1 1.5-1.22 2.38l-.03.06a5.1 5.1 0 01-.98 1.89c-.47.54-1.07.93-1.75 1.13-.03 0-.06.02-.08.04m4.42-2.55a.42.42 0 00-.24.49c.05.24.27.4.51.37.36-.05.71-.15 1.04-.29.45-.21.87-.46 1.26-.77.61-.57 1.09-1.25 1.43-2.01.2-.41.42-.82.67-1.2.19-.28.43-.53.71-.74.6-.39 1.33-.52 2.03-.38.25.02.47-.16.52-.41a.458.458 0 00-.08-.34.427.427 0 00-.3-.16c-.96-.16-1.94.04-2.75.57-.68.6-1.2 1.34-1.54 2.18l-.03.06c-.28.66-.7 1.25-1.23 1.73-.54.46-1.19.77-1.89.88-.03 0-.06.01-.09.03m4.48-1.83a.43.43 0 00-.31.45c.02.24.22.43.46.43.36 0 .72-.06 1.07-.16.47-.14.93-.34 1.35-.59.68-.48 1.25-1.1 1.68-1.81.25-.38.53-.75.82-1.11.23-.25.5-.47.8-.63.64-.31 1.38-.35 2.06-.11.25.05.49-.1.56-.34a.43.43 0 00-.04-.35.418.418 0 00-.27-.2c-.92-.29-1.93-.22-2.8.2a5.92 5.92 0 00-1.82 1.97l-.04.05c-.37.61-.86 1.14-1.45 1.55-.59.39-1.28.6-1.99.62-.03 0-.06 0-.09.01m4.95-1.27c-.2.03-.36.2-.36.4-.02.24.15.46.39.49.36.05.72.05 1.08 0 .49-.08.97-.21 1.42-.4.74-.38 1.39-.91 1.92-1.55.31-.34.63-.67.97-.98.26-.22.56-.39.88-.52.68-.21 1.42-.15 2.05.18.24.08.5-.03.61-.25.05-.11.06-.24 0-.35a.39.39 0 00-.24-.23c-.88-.42-1.88-.48-2.8-.19-.81.39-1.52.97-2.08 1.68l-.05.05c-.45.56-1.01 1.01-1.65 1.34-.64.3-1.35.42-2.06.34h-.09"
                                                          fill="#fff"
                                                      />
                                                  </G>
                                              </G>
                                          </G>
                                      </Svg>
                                  </View>
                                  <View style={styles.dashboard_sign_up_sign_in_buttons_wrapper}>
                                      <TouchableOpacity style={styles.dashboard_sign_up_btn} onPress={() => {this.redirectToSignUp()}}>
                                          <Text style={styles.dashboard_sign_up_btn_text}>{i18n.t('sign_up')}</Text>
                                      </TouchableOpacity>

                                      <TouchableOpacity style={styles.dashboard_sign_in_btn} onPress={() => {this.redirectToSignIn()}}>
                                          <Text style={styles.dashboard_sign_in_btn_text}>{i18n.t('sign_in')}</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>






                </ImageBackground>




            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            width: "100%",


        },

        dashboard_image: {
            width: "100%",
            height: "100%",
            position: 'relative',
        },

        dashboard_lineardradient: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
        dashboard_logo_svg: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,


        },
        dashboard_logo_svg_buttons_wrapper: {
            paddingHorizontal: 71,
            width: "100%",
            height: "100%",
            justifyContent: 'flex-end',
            paddingBottom: 96,

        },
    dashboard_sign_up_btn: {
       width: "100%",
        paddingVertical: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: "#af2a38",


    },
    dashboard_sign_up_btn_text:{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15,
    },
    dashboard_sign_in_btn: {
        width: "100%",
        paddingVertical: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: "#ffffff",


    },
    dashboard_sign_in_btn_text:{
        color: "#af2a38",
        fontWeight: "bold",
        fontSize: 15,
    },
    dashboard_sign_up_sign_in_buttons_wrapper: {
      width: "100%",
    },
   
    
    });