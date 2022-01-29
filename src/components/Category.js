import React, {useState} from 'react';

import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function Category({content}) {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setSelected(!selected);
      }}>
      <View
        style={{
          ...styles.container,
          backgroundColor: selected ? '#000000' : 'white',
        }}>
        <Text style={{...styles.text, color: selected ? '#FFFFFF' : '#616161'}}>
          {content}
        </Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    margin: 5,
  },

  text: {
    fontFamily: 'System',
    fontSize: '14',
    fontWeight: 'normal',
    lineheight: 24,
  },
});
