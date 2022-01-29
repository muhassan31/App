import React from 'react';

import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import GettingStarted from '../../src/screens/Onboarding/GettingStarted';
import HowItWorks1 from '../screens/Onboarding/HowItWorks1';
import HowItWorks2 from '../screens/Onboarding/HowItWorks2';
import HowItWorks3 from '../screens/Onboarding/HowItWorks3';
import HowItWorks4 from '../screens/Onboarding/HowItWorks4';

const Onboarding = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Onboarding.Navigator>
      <Onboarding.Screen
        name="GettingStarted"
        component={GettingStarted}
        options={{
          headerShown: false,
        }}
      />

      <Onboarding.Screen
        name="HowItWorks1"
        component={HowItWorks1}
        options={{
          headerShown: false,
        }}
      />

      <Onboarding.Screen
        name="HowItWorks2"
        component={HowItWorks2}
        options={{
          headerShown: false,
        }}
      />

      <Onboarding.Screen
        name="HowItWorks3"
        component={HowItWorks3}
        options={{
          headerShown: false,
        }}
      />

      <Onboarding.Screen
        name="HowItWorks4"
        component={HowItWorks4}
        options={{
          headerShown: false,
        }}
      />
    </Onboarding.Navigator>
  );
}
