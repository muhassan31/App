import React from 'react';
import {Dimensions} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-elements';
import {HeadingText, SubheadingText} from '../../components/Texts';
import {FakeIcon} from '../../components/FakeIcon';
import {FilledButton, HollowButton} from '../../components/Buttons';

const windowWidth = Dimensions.get('window').width;

export default function HowItWorks2() {
  return (
    <View style={styles.center}>
      <View style={{...styles.genericView}}>
        <View style={{marginHorizontal: 16, marginTop: 36}}>
          <FakeIcon />
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 15,
            flex: 1,
            alignSelf: 'flex-start',
          }}>
          <SubheadingText title="What's your first name?" />
        </View>
        <BottomFakeIcon/>
      </View>
    </View>
  );
}


export function BottomFakeIcon({onPress}){


  return (
    <Pressable>
    <View
      style={{
        marginHorizontal: 16,
        marginBottom: 16,
        alignItems: 'flex-end',
      }}>
      <FakeIcon />
    </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
  },

  genericView: {
    flex: 1,
  },
});
