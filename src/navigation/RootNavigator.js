import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './OnboardingNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}
