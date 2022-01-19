import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {Button} from 'react-native-elements';

export function FakeIcon({onPress, title, windowWidth, loading}) {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
      
        
      }}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: '#000000',
          
          alignSelf: 'center',
          marginVertical: 10,
        }}></View>
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

  hollowTitleStyle: {
    fontWeight: 'normal',
    fontSize: 16,
    lineheight: 16,
    color: '#000000',
    fontWeight: '500',
  },
  hollowButtonStyle: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
  },
});
