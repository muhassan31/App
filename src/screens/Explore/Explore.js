import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {RegularBoldText} from '../../components/Texts';
import {NormalButton} from '../../components/Buttons';
import EmptyCreatePost from '../../assets/images/assets/EmptyCreatePost.svg';
import {useDispatch} from 'react-redux';
import {NavigateToCreate} from '../../redux/actions';
function Explore() {
  const dispatch = useDispatch();

  const NavigateToCreateInExplore = () => {
    dispatch(NavigateToCreate());
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          //height: 300,
          marginTop: 100,
          marginHorizontal: 16,

          flex: 1,
          alignItems: 'center',
        }}>
        <EmptyCreatePost witdth="100%" />
      </View>
      <View style={{flex: 1}}>
        <RegularBoldText
          content="No hangouts yet? Be the first to post!"
          moreStyles={{textAlign: 'center'}}
        />

        <View style={{flex: 0.3, marginHorizontal: 60, marginTop: -15}}>
          <NormalButton
            hollow={false}
            text="Create Hangout"
            onPress={() => NavigateToCreateInExplore()}
            inActive={true}
          />
        </View>
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
export default Explore;
