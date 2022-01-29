import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {HeadingText} from '../../components/Texts';

import {FilledButton, HollowButton} from '../../components/Buttons';

const windowWidth = Dimensions.get('window').width;

export default function GettingStarted({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <HeadingText title="Approachable" />
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 36,
        }}>
        <FilledButton title="Get Started" windowWidth={windowWidth} onPress={() => {navigation.push("HowItWorks1")}} />
        <HollowButton
          title="Sign in with existing account"
          windowWidth={windowWidth}
          onPress={() => {navigation.push("HowItWorks1")}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
