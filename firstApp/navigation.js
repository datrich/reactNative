// App.js hoặc Navigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Cart from './screens/cart';
import Qr from './screens/qr';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cart" component={Cart} options={{ animation: 'none' }}/>
        <Stack.Screen name="Home" component={Home} options={{ animation: 'none' }}/>
        <Stack.Screen name="Qr" component={Qr} options={{ animation: 'none' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}