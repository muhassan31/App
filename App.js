import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import LandingPage from './src/screens/Onboarding/LandingPage';
import NormalButton from './src/components/Buttons';
import Name from './src/screens/Onboarding/Name';
import RootNavigator from './src/navigation/RootNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Sucess from './src/screens/Onboarding/Sucess';
import {CategoryProvider} from './src/context/CategorieContext';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useContext} from 'react';
import {UserContext, UserProvider} from './src/context/UserContext';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/redux/index';
export default function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <CategoryProvider>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <View style={{...styles.container}}>
                <RootNavigator />
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
        </CategoryProvider>
      </UserProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
