import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export function HeadingText({title}) {
  return (
    <View>
      <Text style = {styles.heading}>{title}</Text>
    </View>
  );
}

 export function SubheadingText ({title}) {
     

    return (
        <View>
          <Text style = {styles.subHeading}>{title}</Text>
        </View>
      );
 }

const styles = StyleSheet.create({


    heading:{
        
        fontFamily:"System",
        fontSize:36,
        textAlign: "center",
        fontStyle:"normal",
        fontWeight:"bold",
        lineheight:42,


    },
    subHeading:{
        fontFamily:"System",
        fontSize:24,
        textAlign: "center",
        fontStyle:"normal",
        fontWeight:"bold",
        lineheight:24,
    }
});
