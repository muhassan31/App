import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';

export function RegularTextField({placeholder, screenWidth, moreStyles}) {
  return (
    <View style={{width: screenWidth, ...moreStyles}}>
      <TextInput style={{...styles.input}} placeholder={placeholder} />
    </View>
  );
}

export function TextFieldWithIcon({
  placeholder,
  screenWidth,
  moreStyles,
  leftIcon,
  hasLeftIcon,
  hasRightIcon,
  rightIcon,
  textFieldHeight,
}) {
  console.log('here');
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#DDDDDD',

        width: '100%',
        marginTop: 10,
        height: 44,
        justifyContent: 'center',
      }}>
      <View style={{width: screenWidth, ...moreStyles}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 12,
          }}>
          {hasLeftIcon && (
            <View style={{width: 30, height: 30, backgroundColor: '#C4C4C4'}}>
              {leftIcon}
            </View>
          )}
          <TextInput
            style={{...styles.inputWithIcon, flex: 1, justifyContent: 'center'}}
            placeholder={placeholder}
          />
          {hasRightIcon && (
            <View style={{width: 40, height: 44, backgroundColor: '#C4C4C4'}}>
              {leftIcon}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 44,
  },
  inputWithIcon: {
    height: 30,
    padding: 10,
  },
});
