import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './OnboardingNavigator';


export default function RootNavigator() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}
