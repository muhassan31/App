import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {NormalButton} from '../../components/Buttons';
import Center from '../../components/Utility/Center';
import {HeaderText, RegularText, SmallerText} from '../../components/Texts';
import LandingPage from '../Onboarding/LandingPage';
import HowItWorks from './HowItWorks';
import Animated, {set} from 'react-native-reanimated';
import {useState, useEffect, useContext} from 'react';
import CategoryItem from '../../components/CategoryItem';
import {CategorieContext} from '../..//context/CategorieContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext, UserProvider} from '../../context/UserContext';

export default function Interests({navigation, route}) {
  var [user, setUser] = useContext(UserContext);
  let {result} = route.params;

  const handleSavingUser = async () => {
    console.log('saving user...');
    
    AsyncStorage.setItem('user', JSON.stringify(result.user))
      .then(() => {
        console.log('user saved');
        setUser(result.user);
      })
      .catch(err => {
        //handle error with UI error
        console.log('error saving user', err);
        setUser(null);
      });
  };
  const CategorieArr = [
    'Self development',
    'Creativity',
    'Music',
    'Sports',
    ' Games',
    'Food',
    'Photography',
    'Dancing',
    'Lofi Music',
    'Pizza',
    'Coding',
    'Coffee',
  ];
  const [categories, setCategories] = useContext(CategorieContext);

  const handlePressCategories = newVal => {
    console.log(newVal);
    console.log(categories);

    setCategories([...categories, newVal]);
  };

  const ref = React.useRef();

  const [buttonActive, setButtonActive] = useState(false);

  const handleNextButton = () => {
    if (categories.length > 0) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  };
  useEffect(() => {
    handleNextButton();
  }, [categories]);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 16,
          marginVertical: 10,
          flex: 0.2,
        }}>
        <HeaderText content="What do you like?" />
        <SmallerText content="Select below to help us find the people and hangouts for you" />
      </View>

      <View
        ref={ref}
        style={{
          flex: 1,
          alignItems: 'left',
          marginHorizontal: 16,
          flexGrow: 1,
          marginBottom: 50,
          justifyContent: 'flex-end',
        }}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <ScrollView>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              {CategorieArr.map((person, index) => (
                <CategoryItem
                  content={person}
                  // onPress={() => handlePressCategories(person)}
                />
              ))}
            </View>
          </ScrollView>

          <NormalButton
            text="Next"
            onPress={
              () => (buttonActive ? handleSavingUser() : null) //navigation.navigate('Sucess')
            }
            inActive={buttonActive}
            moreStyles={{marginTop: 40}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

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
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 32,
    marginVertical: 4,
  },
});
