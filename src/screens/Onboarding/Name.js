import React, {useState , useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {NormalButton} from '../../components/Buttons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
export default function Name({route ,navigation}) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  let  { familyName , givenName } = route.params

  console.log(familyName , givenName , 'params') // tells me how many renders i am having.. fix this later with useMemo

 

  const [firstname, setFirstName] = useState(givenName);
  const [lastName, setLastName] = useState(familyName);
  const [buttonActive, setButtonActive] = useState(false);
  function checkTextInputs() {
    if (firstname != '' && lastName != '') {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }
  useEffect(() => {
    updateFirstNameandCheckTextInputs(givenName);
    updateLastNameandCheckTextInputs(familyName);
  }, [])
  function updateFirstNameandCheckTextInputs(name) {
    givenName = name;
    setFirstName(name);
    checkTextInputs();
  }
  function updateLastNameandCheckTextInputs(name) {
    familyName = name;
    setLastName( name);
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
          value = {firstname}
          placeholder="Add first Name"
          onChangeText={text => updateFirstNameandCheckTextInputs(text)}
          onDelete={() => console.log("deleting")}
        />
        <NormalTextField
          placeholder="Add last Name"
          value = {lastName}
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

function NormalTextField({placeholder, onChangeText, onDelete , value}) {
  return (
    <View style={styles.textInputView}>
      <TextInput
        value = {value}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        paddingStyle={styles.paddingStyle}
        // onKeyPress={({nativeEvent}) => {
        //   nativeEvent.key === 'Backspace' ?  onDelete : null;
        // }}
      />
    </View>
  );
}
