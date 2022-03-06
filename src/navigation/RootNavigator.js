import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './OnboardingNavigator';
import {useState, useContext} from 'react';
import {UserContext, UserProvider} from '../context/UserContext';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeStack from './WelcomeNavigator';
export default function RootNavigator() {
  const [user, setUser] = useContext(UserContext);

  const [appReady, setAppReady] = useState(false);

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

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkUserCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      {user === null ? <OnboardingStack /> : <WelcomeStack />}
    </NavigationContainer>
  );
}
