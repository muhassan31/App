import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import LandingPage from './src/screens/Onboarding/LandingPage';
import NormalButton from './src/components/Buttons';
import Name from './src/screens/Onboarding/Name';
import RootNavigator from './src/navigation/RootNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Interests from './src/screens/Onboarding/Interests';
import {CategoryProvider} from './src/context/CategorieContext';

export default function App() {
  return (
    <CategoryProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* <View style={{...styles.container}}>
            <RootNavigator />
          </View> */}
          <Interests />
        </SafeAreaView>
      </SafeAreaProvider>
    </CategoryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
