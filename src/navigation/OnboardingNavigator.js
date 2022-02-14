import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../screens/Onboarding/LandingPage';
import HowItWorks from '../screens/Onboarding/HowItWorks';
import Name from '../screens/Onboarding/Name';

const Onboarding = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Onboarding.Navigator initialRouteName="LandingPage">
      <Onboarding.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          headerShown: false,
        }}
      />

      <Onboarding.Screen
        name="HowItWorks"
        component={HowItWorks}
        options={{
          headerShown: false,
        }}
      />

      <Onboarding.Screen
        name="Name"
        component={Name}
        options={{
          headerShown: false,
        }}
      />
    </Onboarding.Navigator>
  );
}
