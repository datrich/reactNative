import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';
import Cart from './screens/cart';
import Qr from './screens/qr';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = require('./assets/home.png');
            } else if (route.name === 'Qr') {
              iconSource = require('./assets/scan.png');
            } else if (route.name === 'Cart') {
              iconSource = require('./assets/cart.png');
            }

            return (<Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'blue',
          tabBarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: 118,
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowRadius: 50,
            elevation: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Qr" component={Qr} options={{tabBarStyle: { display: 'none' }}}/>
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}