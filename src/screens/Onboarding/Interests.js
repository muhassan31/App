import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {NormalButton} from '../../components/Buttons';
import Center from '../../components/Utility/Center';
import {HeaderText, RegularText, SmallerText} from '../../components/Texts';
import LandingPage from '../Onboarding/LandingPage';
import HowItWorks from './HowItWorks';
import Animated from 'react-native-reanimated';
import {useState, useEffect, useContext} from 'react';
import CategoryItem from '../../components/CategoryItem';
import {CategorieContext} from '../..//context/CategorieContext';
export default function Interests({navigation}) {
  const CategorieArr = [
    ' Movie',
    'Art',
    'Travel',
    'Sports',
    ' Games',
    'Love',
    'Cheese',
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
        <Text> {categories}</Text>
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
          {CategorieArr.map((person, index) => (
            <CategoryItem
              content={person}
              // onPress={() => handlePressCategories(person)}
            />
          ))}

          <NormalButton
            text="Next"
            onPress={() =>
              buttonActive ? navigation.navigate('Interests') : null
            }
            inActive={buttonActive}
            moreStyles={{marginTop: 24}}
          />
        </View>
      </View>
    </View>
  );
}
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialLayout={{width: Dimensions.get('window').width}}
        tabBarOptions={{
          activeTintColor: '#44BFBA',
          labelStyle: {
            fontSize: 14,
          },
          inactiveTintColor: 'grey',
          indicatorStyle: {
            backgroundColor: '#44BFBA',
          },
          style: {
            alignSelf: 'center',
            width: '100%',
            borderRadius: 0,
            borderColor: 'blue',
            backgroundColor: 'white',
            fontSize: 300,
          },
          tabStyle: {
            borderRadius: 0,
          },
        }}>
        <Tab.Screen name="LandingPage" component={LandingPage} />
        <Tab.Screen name="HowItWorks" component={HowItWorks} />
      </Tab.Navigator>
    </NavigationContainer>
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
