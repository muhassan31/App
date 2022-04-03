import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NormalButton} from '../../components/Buttons';
import {NaviagteOutOfCreate} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {HeaderText, RegularText, RegularBoldText} from '../../components/Texts';
import {NormalTextField} from '../../components/TextField';

export default function CreatePost1({navigation}) {
  const dispatch = useDispatch();

  const closeCreateTest = () => {
    dispatch(NaviagteOutOfCreate());
  };
  

  //NaviagteOutOfCreate

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 16, flex: 0.5, marginTop: 40}}>
        <HeaderText content="What do you want to do right now?" />
        <RegularBoldText content="Headline" />
        <NormalTextField
          placeholder="e.g. Visit the Satatue of Liberty"
          moreStyles={{marginTop: -28}}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 16 ,   justifyContent: 'flex-end', marginBottom: 20}}>
        <NormalButton
          text="Next"
          onPress={() => navigation.navigate('CreatePost2')}
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
