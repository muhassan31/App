import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Regular,
  Poppins_700Bold,
  Poppins_700Normal,
  P

} from '@expo-google-fonts/poppins';


export default function NormalButton({text, hollow , moreStyles ,onPress }) {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Regular,
    Poppins_700Normal,
    
    
  });
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: hollow ? '#44BFBA' : 'white',
        borderColor: hollow ? 'white' : '#44BFBA',
        
      }}
      onPress={onPress}>
      
      <Text style={{...styles.text, color: hollow ? 'white' : '#44BFBA' , fontFamily:"Poppins_500Regular" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44BFBA',
    height: 50,
    
    
    borderRadius: 12,
    width: '100%',
    borderWidth: 1,
  },
  text: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_500Regular',
  },
});
