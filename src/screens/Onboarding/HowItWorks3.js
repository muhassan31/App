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
import {FilledButton,} from '../../components/Buttons';
import {TextFieldWithIcon} from '../../components/TextFields';
import Category from '../../components/Category.js';
import {BottomFakeIcon} from './HowItWorks2';
import {RegularText} from '../../components/Texts';
const windowWidth = Dimensions.get('window').width;

export default function HowItWorks3({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{...styles.genericView}}>
        <View style={{marginHorizontal: 16, marginTop: 36}}>
          <FakeIcon />
        </View>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 15,
          }}>
          <SubheadingText
            title="What do you like?"
            moreStyles={{textAlign: 'left'}}
          />
          <RegularText
            content="select from the interests below to help 
            us find the people and hangouts for you"
            moreStyles={{}}
          />

        
          <TextFieldWithIcon
            placeholder="Search"
            hasLeftIcon={true}
            leftIcon={
              <View
                style={{
                  width: 30,
                  height: 30,
                }}></View>
            }
          />
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <Category content="music" />
            <Category content="football" />
            <Category content="comedy" />
            <Category content="movie" />
            <Category content="pizza" />
            <Category content="listen to music" />
            <Category content="dance" />
            <Category content="games" />
            <Category content="soccer" />
            <Category content="girls" />
            <Category content="boys" />
            <Category content="soccer" />
            <Category content="skate" />
            <Category content="food" />
          </View>
        </View>

        <View style={{flex: 1}}></View>

        <BottomFakeIcon
          onPress={() => {
            navigation.push('HowItWorks4');
          }}
        />
      </View>
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
