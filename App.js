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
import RootNavigator from './src/navigation/RootNavigator';
import HowItWorks3 from './src/screens/Onboarding/HowItWorks3'

function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    
    <RootNavigator />
    
    
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,

  }
});

export default App;
