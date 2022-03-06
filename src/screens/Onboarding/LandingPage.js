import {View, Pressable, Text, StyleSheet} from 'react-native';
import {
  NormalButton,
  GoogleButtonWithIcon,
  AppleButtonWithIcon,
} from '../../components/Buttons';
import {Dimensions} from 'react-native';
import {useState, useEffect} from 'react';
import Center from '../../components/Utility/Center';
import HeadingStyle from '../../components/Utility/Styles/TextStyles';
import {Platform} from 'react-native';

import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import {HeaderText} from '../../components/Texts';
export default function LandingPage({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  // let [fontsLoaded, error] = useFonts({
  //   Poppins_700Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
  // });
  // console.log(fontsLoaded, 'fonts loaded');
  // if (!fontsLoaded) {
  //   return (
  //     <View>
  //       <Text> Loading fonts...</Text>
  //     </View>
  //   );
  // } else {
  const AndriodClientID =
    '724006010963-9p0s32i5i7httcsnqfdls7ffnc6vkkvl.apps.googleusercontent.com';
  const IOSClientID =
    '724006010963-pbh207t1saug4n1cuscoufiodd73pjf6.apps.googleusercontent.com';
  const initAsync = () => {
    try {
      GoogleSignIn.initAsync({
        clientId: Platform.OS === 'ios' ? IOSClientID : AndriodClientID,
      });
    } catch (e) {}
  };

  const handleGoogleSignIn = () => {
    setGoogleSubmitting(true);
    console.log('test sign in');

    const config = {
      iosClientId:
        '724006010963-pbh207t1saug4n1cuscoufiodd73pjf6.apps.googleusercontent.com',
      androidClientId:
        '724006010963-9p0s32i5i7httcsnqfdls7ffnc6vkkvl.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    };

    Google.logInAsync(config)
      .then(result => {
        const {type, user} = result;
        if (type === 'success') {
          console.log('result', result);
          const {familyName, givenName} = user;
          setTimeout(() =>
            navigation.navigate('Name', {familyName, givenName}),
          );

          return result.accessToken;
        } else {
          return {cancelled: true};
        }
      })
      .catch(error => {
        console.log('Hi i got an error trying to sign in');
        console.log(error);
        setGoogleSubmitting(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Center />

        <HeaderText content="Approachable" />
      </View>
      <View
        style={{
          ...styles.container,
          marginHorizontal: 16,

          width: windowWidth * 0.9,
          alignItems: 'center',
          justifyContent: 'flex-end',
          // marginLeft: 30,
          marginBottom: 20,
        }}>
        <View style={{width: windowWidth * 0.9, marginVertical: 8}}>
          <GoogleButtonWithIcon
            onPress={() => handleGoogleSignIn(navigation)}
          />
        </View>
        <View style={{width: windowWidth * 0.9, marginVertical: 8}}>
          <AppleButtonWithIcon
            onPress={() => navigation.navigate('HowItWorks')}
          />
        </View>
      </View>
    </View>
  );
  //}
}

//keytool -keystore path-to-debug-or-production-keystore -list -v

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
