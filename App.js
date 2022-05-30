import { StatusBar } from 'expo-status-bar';

import * as React from 'react';

import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { AuthContext } from './components/AuthContext/context';
import AsyncStorage from '@react-native-async-storage/async-storage'


import DashboardComponent from './components/auth/dashboard';
import SignUpComponent from './components/sign_up/sign_up';
import SignInComponent from './components/sign_in/sign_in';
import StoreListComponent from './components/store_list/store_list';
import ProfileComponent from './components/profile/profile';
import EditComponent from './components/edit/edit';
import QrScannerComponent from './components/qr_scanner/qr_scanner';
import PasswordRecoveryPhoneComponent from './components/password_recovery_phone/password_recovery_phone';
import PasswordRecoveryCodeComponent from './components/password_recovery_code/password_recovery_code';
import PasswordRecoveryNewPassword from './components/password_recovery_new_password/password_recovery_new_password';
import PasswordRecoverySuccess from './components/password_recovery_success/password_recovery_success';



function DashboardScreen({ navigation }) {
  return (
      <DashboardComponent navigation={navigation}  />
  );
}

function SignUpScreen({ navigation }) {
    return (
        <SignUpComponent navigation={navigation}  />
    );
}


function SignInScreen({ navigation }) {
    return (
        <SignInComponent navigation={navigation}  />
    );

}


function StoreListScreen({  navigation }) {
    return (
        <StoreListComponent  navigation={navigation}  />
    );
}


function ProfileScreen({ navigation }) {
    return (
        <ProfileComponent navigation={navigation}  />
    );
}


function EditScreen({ navigation }) {
    return (
        <EditComponent navigation={navigation}  />
    );
}

function QrScannerScreen({  navigation }) {
    return (
        <QrScannerComponent  navigation={navigation}  />
    );
}


function PasswordRecoveryPhoneScreen({  navigation }) {
    return (
        <PasswordRecoveryPhoneComponent  navigation={navigation}  />
    );
}

function PasswordRecoveryCodeScreen({route, navigation }) {
    const {params} = route.params;
    return (
        <PasswordRecoveryCodeComponent  reset_password_data={params} navigation={navigation}  />
    );
}


function PasswordRecoveryNewPasswordScreen({ route, navigation }) {
    const {params} = route.params;
    return (
        <PasswordRecoveryNewPassword  user_email_and_id={params} navigation={navigation}  />
    );
}



function PasswordRecoverySuccessScreen({  navigation }) {
    return (
        <PasswordRecoverySuccess  navigation={navigation}  />
    );
}

export default function App() {

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
        isLoading: true,
        userEmail: null,
        userToken: null,
        userData: null,
    };

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    userData: action.userData,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken: null,
                    userData: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: async(foundUser, callback) => {
            // setIsLoading(true);
            const userToken = String(foundUser.token);
            const userData = foundUser.user_data;
            // const userEmail = foundUser.email;
            // const language = foundUser.language;
            // setUserToken(userToken);

            try {
                await AsyncStorage.setItem('userToken', userToken);
                await AsyncStorage.setItem('userData', JSON.stringify(userData));

                // await AsyncStorage.setItem('language', language);
                // await AsyncStorage.setItem('email', userEmail);
                // console.log('userEmail', userEmail)
            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN',  token: userToken, userData: userData });
            callback();
        },
        signOut: async(callback) => {
            try {
                await AsyncStorage.removeItem('userToken');
                await AsyncStorage.removeItem('userData');
                // await AsyncStorage.removeItem('language');

                setIsLoading(false);

            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
            callback();
        },
        signUp: () => {
            // setIsLoading(false);
        }
    }), []);


    // Проверка при входе в приложение.

    React.useEffect(() => {
        setTimeout(async() => {

            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
                // console.log(userToken, 'userToken');
                setIsLoading(  false);

            } catch(e) {
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);


    if( isLoading ) {
        return(
            <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center', backgroundColor: 'white'}}>
                <ActivityIndicator size="large" color="0078D2"/>
            </View>
        );
    }


    return (
        <AuthContext.Provider  value={authContext}>
            <NavigationContainer>

                {loginState.userToken !== null ?
                    (

                        <Stack.Navigator
                            initialRouteName='StoreList'
                            screenOptions={{
                                headerShown: false
                            }}
                        >

                            <Stack.Screen name="StoreList" component={StoreListScreen}
                                  options={({route}) => ({
                                      tabBarButton: () => null,
                                      tabBarStyle: {display: 'none'},
                                  })}
                            />

                            <Stack.Screen name="Profile" component={ProfileScreen}
                                  options={({route}) => ({
                                      tabBarButton: () => null,
                                      tabBarStyle: {display: 'none'},
                                  })}
                            />


                            <Stack.Screen name="Edit" component={EditScreen}
                                  options={({route}) => ({
                                      tabBarButton: () => null,
                                      tabBarStyle: {display: 'none'},
                                  })}
                            />


                            <Stack.Screen name="QrScanner" component={QrScannerScreen}
                                  options={({route}) => ({
                                      tabBarButton: () => null,
                                      tabBarStyle: {display: 'none'},
                                  })}
                            />


                        </Stack.Navigator>

                    )

                    :


                    <Stack.Navigator
                        initialRouteName='Dashboard'
                        screenOptions={{
                            headerShown: false
                        }}
                    >

                        <Stack.Screen name="Dashboard" component={DashboardScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />

                        <Stack.Screen name="SignUp" component={SignUpScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />

                        <Stack.Screen name="SignIn" component={SignInScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />





                        <Stack.Screen name="PasswordRecoveryPhone" component={PasswordRecoveryPhoneScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />

                        <Stack.Screen name="PasswordRecoveryCode" component={PasswordRecoveryCodeScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />

                        <Stack.Screen name="PasswordRecoveryNewPassword" component={PasswordRecoveryNewPasswordScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />

                        <Stack.Screen name="PasswordRecoverySuccess" component={PasswordRecoverySuccessScreen}
                                      options={({route}) => ({
                                          tabBarButton: () => null,
                                          tabBarStyle: {display: 'none'},
                                      })}
                        />


                    </Stack.Navigator>


                }

            </NavigationContainer>
        </AuthContext.Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



});