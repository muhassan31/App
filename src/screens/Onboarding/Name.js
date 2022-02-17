import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {NormalButton} from '../../components/Buttons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
export default function Name({navigation}) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  function checkTextInputs() {
    console.log('Checking Button activity', buttonActive);
    console.log(firstname, lastName);

    if (firstname != '' && lastName != '') {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }
  function updateFirstNameandCheckTextInputs(name) {
    console.log('Updating First Name', name);
    setFirstName(name);
    checkTextInputs();
  }
  function updateLastNameandCheckTextInputs(name) {
    setLastName(name);
    checkTextInputs();
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text
          style={{
            ...HeadingStyle,
            fontFamily: 'Poppins_700Bold',
            fontWeight: '700',
            textAlign: 'left',
            marginVertical: 24,
          }}>
          What's your name?
        </Text>
        <NormalTextField
          placeholder="Add first Name"
          onChangeText={text => updateFirstNameandCheckTextInputs(text)}
          
        />
        <NormalTextField
          placeholder="Add last Name"
          onChangeText={text => updateLastNameandCheckTextInputs(text)}
        
        />
      </View>

      <View
        style={{
          ...styles.mainView,
          justifyContent: 'flex-end',
          marginVertical: 20,
        }}>
        <NormalButton
          text="Next"
          onPress={() =>  buttonActive ? navigation.navigate('Interests') : null}
          inActive={buttonActive}
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
  textInput: {
    backgroundColor: 'white',
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ECEEF2',
    paddingLeft: 16,
    paddingVertical: 10,
    fontFamily: 'Poppins_400Regular',
  },
  placeholderStyle: {},
  mainView: {
    flex: 1,

    marginHorizontal: 16,
  },
  textInputView: {
    marginVertical: 5,
  },
});

function NormalTextField({placeholder, onChangeText, OnDelete}) {
  return (
    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        paddingStyle={styles.paddingStyle}
        onKeyPress={({nativeEvent}) => {
          nativeEvent.key === 'Backspace' ? onDelete : null;
        }}
      />
    </View>
  );
}
