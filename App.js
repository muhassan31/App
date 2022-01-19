import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import GettingStarted from './src/screens/Onboarding/GettingStarted';
import HowItWorks1 from './src/screens/Onboarding/HowItWorks1';
import HowItWorks2 from './src/screens/Onboarding/HowItWorks2';
import HowItWorks3 from './src/screens/Onboarding/HowItWorks3'
function App() {
  return (
    <View style={styles.container}>
    <GettingStarted/>
    {/* <HowItWorks1/> */}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,

  }
});

export default App;
