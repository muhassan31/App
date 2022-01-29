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
import {RegularTextField} from '../../components/TextFields';

const windowWidth = Dimensions.get('window').width;

export default function HowItWorks2({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{...styles.genericView}}>
        <View style={{marginHorizontal: 16, marginTop: 36}}>
          <FakeIcon />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 15,
          }}>
          <SubheadingText
            title="What's your first name?"
            moreStyles={{textAlign: 'left',}}
          />
          <RegularTextField
            screenWidth={'100%'}

            
           
            moreStyles={{marginTop: 10 ,}}

            placeholder="add first name"
          />
        </View>

        <View style={{flex: 1}}></View>

        <BottomFakeIcon
          onPress={() => {
            navigation.push('HowItWorks3');
          }}
        />
      </View>
    </View>
  );
}

export function BottomFakeIcon({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          marginHorizontal: 16,
          marginBottom: 16,
          alignItems: 'flex-end',
        }}>
        <FakeIcon />
      </View>
    </Pressable>
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
