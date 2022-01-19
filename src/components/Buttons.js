import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Button} from 'react-native-elements';

export function FilledButton({onPress, title, windowWidth , loading}) {
  return (
    <View style={{width: windowWidth, }}>
      <Button
        title={title}
        loading={loading}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.filledTitleStyle}
        containerStyle={{...styles.containerStyle, width: windowWidth * 0.9}}
        onPress={() => console.log('aye')}
      />
    </View>
  );
}

export function HollowButton({onPress, title, windowWidth , loading}) {
  return (
    <View style={{width: windowWidth}}>
      <Button
        title={title}
        loading={loading}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={styles.hollowButtonStyle}
        titleStyle={styles.hollowTitleStyle}
        containerStyle={{...styles.containerStyle, width: windowWidth * 0.9}}
        onPress={() => console.log('aye')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 48,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
  },

  buttonStyle: {
    backgroundColor: '#000000',
    alignItems: 'center',
  },

  filledTitleStyle: {
    fontWeight: 'normal',
    fontSize: 16,
    lineheight: 16,
    color: 'white',
    fontWeight: '500',
  },

  hollowTitleStyle:{
    fontWeight: 'normal',
    fontSize: 16,
    lineheight: 16,
    color: '#000000',
    fontWeight: '500',
  },
  hollowButtonStyle:{
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
  }
});
