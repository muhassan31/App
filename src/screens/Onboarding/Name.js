import React from 'react';
import {View, Text ,StyleSheet} from 'react-native';

export default function Name({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Name </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});