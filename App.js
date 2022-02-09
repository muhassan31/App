import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import LandingPage from './src/components/Onboarding/LandingPage';
import NormalButton from './src/components/Buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LandingPage />
      
    </View>
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
