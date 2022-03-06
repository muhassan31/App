import {View, Text, StyleSheet} from 'react-native';
function HeaderText({content, moreStyles}) {
  return (
    <View>
      <Text style={{...styles.heading, ...moreStyles}}>{content}</Text>
    </View>
  );
}

function RegularText({content, moreStyles}) {
  return (
    <View>
      <Text style={{...styles.regular, ...moreStyles}}>{content}</Text>
    </View>
  );
}

function SmallerText({content, moreStyles}) {
  return (
    <View>
      <Text style={{...styles.small, ...moreStyles}}>{content}</Text>
    </View>
  );
}

export {RegularText, HeaderText , SmallerText};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 36,
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
    textAlign: 'left',
    marginVertical: 5,
  },

  regular: {
    color: '#696969',
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 32,
    marginVertical:4,
  },

  small: {

    color: '#696969',
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 32,
    marginVertical:4,


  },
});
