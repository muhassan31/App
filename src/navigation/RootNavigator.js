import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './OnboardingNavigator';
import {useState, useContext, useEffect} from 'react';
import {UserContext, UserProvider} from '../context/UserContext';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeStack from './WelcomeNavigator';
import CreateNavigator from './CreateNavigator';
import {Provider, useSelector} from 'react-redux';
import {store} from '../redux/index';
import {useDispatch} from 'react-redux';
import {Init, login} from '../redux/actions';
import CreateStack from './CreateNavigator';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
// import { createAppContainer, createSwitchNavigator } from '@react-navigation';

function OnboardingNavigator({userToken}) {
  console.log('userToken in onboarding', userToken);
  
  if (userToken === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}

function AppNavigator() {
  var create = useSelector(state => state.NavReducer.create);

  return (
    <NavigationContainer>
      {create === true ? <CreateStack /> : <WelcomeStack />}
    </NavigationContainer>
  );
}
export default function RootNavigator() {
  const [user, setUser] = useContext(UserContext);
  //const [userToken , setUserToken] = useState(null);
  const [appReady, setAppReady] = useState(false);

  // const userToken = useSelector(state => {
  //   console.log(state);
  //   // setUserToken(state.AuthReducer.userToken);
  //   return state.AuthReducer.userToken;
  //AuthReducer.userToken

  // });

  // var userToken = useSelector(state => state.AuthReducer.userToken);

  var userToken = useSelector(state => state.AuthReducer.userId);

  console.log('user', userToken);

  const dispatch = useDispatch();

  const checkForUserThroughredux = () => {
    dispatch(Init());
  };

  useEffect(() => {
    checkForUserThroughredux();
  });

  const checkUserCredentials = async () => {
    console.log('Checkig for user using async ');
    try {
      AsyncStorage.getItem('user').then(userValue => {
        console.log('user found', userValue);
        var userValueJSON = JSON.parse(userValue);
        setUser(userValueJSON);
      });
    } catch (err) {
      console.error(err);
    }
  };

  // if (!appReady) {
  //   return (
  //     <AppLoading
  //       startAsync={checkUserCredentials}
  //       onFinish={() => setAppReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  if (userToken === null || userToken === undefined) {
    return <OnboardingNavigator userToken={userToken} />;
  } else {
    return <AppNavigator />;
  }
}

