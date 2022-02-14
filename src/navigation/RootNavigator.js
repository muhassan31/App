import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './OnboardingNavigator';
import {Text} from 'react-native';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}
