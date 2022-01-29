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
import {HeadingText, SubheadingText} from '../../components/Texts';
import {FakeIcon} from '../../components/FakeIcon';
import {FilledButton, HollowButton} from '../../components/Buttons';

const windowWidth = Dimensions.get('window').width;

export default function HowItWorks1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{...styles.genericView}}>
        <View style={{marginHorizontal: 16, marginTop: 36}}>
          <FakeIcon />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <View style={{alignSelf: 'flex-start'}}>
          <SubheadingText title="Here’s how it works" />
        </View>

        <View
          style={{
            marginTop: 5,
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt{' '}
          </Text>
        </View>

        <FilledButton title="Start" windowWidth={windowWidth} onPress={() => {navigation.push("HowItWorks2")}} />
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
  },

  genericView: {
    flex: 1,
  },
});
