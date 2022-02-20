import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const EmekaButton = props => {
  return (
    <TouchableOpacity style={{...styles.buttonContainer, ...props.styles}}>
      <Text style={styles.buttonStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#34deeb',
    borderRadius: 150,
    alignSelf: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#34deeb',
  },
});

export default EmekaButton;
