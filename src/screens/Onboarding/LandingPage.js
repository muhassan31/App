import {View, Pressable, Text, StyleSheet} from 'react-native';
import NormalButton from '../../components/Buttons';
import {Dimensions} from 'react-native';
import Center from '../../components/Utility/Center';
import HeadingStyle from '../../components/Utility/Styles/TextStyles';
import {
  useFonts,
  Poppins_700Normal,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
export default function LandingPage({navigation}) {
  const windowWidth = Dimensions.get('window').width;


  let [fontsLoaded] = useFonts({
    'Poppins_700Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });
  console.log(fontsLoaded , "fonts loaded");
  if (!fontsLoaded) {
    
    return (
      <View><Text> Loading fonts...</Text></View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Center />
          <Text
            style={{
              ...HeadingStyle,
              fontFamily: 'Poppins_700Bold',
              fontWeight: '700',
              
              
            }}>
            Approachable
          </Text>
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
            <NormalButton
              text="Get Started"
              hollow
              onPress={() => navigation.navigate('HowItWorks')}
            />
          </View>
          <View style={{width: windowWidth * 0.9, marginVertical: 8}}>
            <NormalButton
              text="Sign in with exsisting account"
              hollow={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
