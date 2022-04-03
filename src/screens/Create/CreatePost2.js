import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NormalButton} from '../../components/Buttons';
import {NaviagteOutOfCreate} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {HeaderText, RegularText, RegularBoldText} from '../../components/Texts';
import {NormalTextField} from '../../components/TextField';

export default function CreatePost2({naviagtion}) {
  const dispatch = useDispatch();

  const closeCreateTest = () => {
    dispatch(NaviagteOutOfCreate());
  };
  const postHangout = () => {
    console.log('Posting hangout...');
  };

  //NaviagteOutOfCreate

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 16, flex: 0.5, marginTop: 40}}>
        <HeaderText
          content="Your hangout details"
          moreStyles={{marginBottom: 10}}
        />
        <RegularBoldText content="Describe your hangout" />
        <NormalTextField placeholder="optional" moreStyles={{marginTop: -28}} />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 16,
          justifyContent: 'flex-end',
          marginBottom: 20,
        }}>
        <NormalButton
          text="Post"
          onPress={() => closeCreateTest()}
          inActive={true}
          hollow
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
