import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen/index';
import Personal from './../screens/Personal/index';
import Settings from './../screens/Settings/index';
import {
  HOME_NAVIGATOR,
  SETTINGS,
  PERSONAL,
  CART,
} from './../constants/routeNames';
import Cart from './../screens/Cart/index';
import TabBarIcon from './../components/common/TabBarIcon/index';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_NAVIGATOR}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{
          // tabBarLabel: () => {
          //   return null;
          // },
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={CART}
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="ios-cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="settings-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={PERSONAL}
        component={Personal}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="person-outline" color={color} size={size} />
          ),
        }}
        tabBarOptions={{showLabel: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
