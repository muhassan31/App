import {View, Image, StyleSheet} from 'react-native';

export function GoogleIcon() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '24',
        height: '24',
      }}>
      <Image
        source={require('../../assets/images/assets/google.png')}
        style={{width: 24, height: 24}}
      />
    </View>
  );
}

export function AppleIcon() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
      }}>
      <Image
        source={require('../../assets/images/assets/apple.png')}
        style={{width: 24, height: 24}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// function GenericIcon({imageURL, width, height}) {
//   return (
//     <View
//       style={{
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '24',
//         height: '24',
//       }}>
//       <Image source={require('')} style={{width: width, height: height}} />
//     </View>
//   );
// }
