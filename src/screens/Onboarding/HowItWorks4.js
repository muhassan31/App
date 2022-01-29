import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import {HeadingText, SubheadingText} from '../../components/Texts';
import {FakeIcon} from '../../components/FakeIcon';
import {FilledButton, HollowButton} from '../../components/Buttons';
import {TextFieldWithIcon} from '../../components/TextFields';
import Category from '../../components/Category.js';
import {BottomFakeIcon} from './HowItWorks2';
import {RegularText} from '../../components/Texts';
const windowWidth = Dimensions.get('window').width;

export default function HowItWorks4({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 16, marginTop: 36}}>
        <FakeIcon />
      </View>

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 15,
        }}>
        <SubheadingText
          title="Turn on location!"
          moreStyles={{textAlign: 'left'}}
        />

        <RegularText
          content="Approachable uses your location to show 
you what’s happening nearby, and requires 
your location to function properly"
          moreStyles={{}}
        />
      </View>

      <FilledButton
        title="Use my location"
        windowWidth={windowWidth}
        onPress={() => {
          null;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  center: {
    flex: 1,
  },

  genericView: {
    flex: 1,
  },
});
