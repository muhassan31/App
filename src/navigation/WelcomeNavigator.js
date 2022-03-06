import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sucess from '../screens/Onboarding/Sucess';

const Welcome = createNativeStackNavigator();

export default function WelcomeStack() {
  return (
    <Welcome.Navigator initialRouteName="Sucess">
      <Welcome.Screen
        name="Sucess"
        component={Sucess}
        options={{
          headerShown: false,
        }}
      />
    </Welcome.Navigator>
  );
}
