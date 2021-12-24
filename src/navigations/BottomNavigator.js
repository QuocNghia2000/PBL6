import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Personal from './../screens/Personal/index';
import History from './../screens/History/index';
import {
  HOME_NAVIGATOR,
  HISTORY,
  PERSONAL,
  CART,
} from './../constants/routeNames';
import Cart from './../screens/Cart/index';
import TabBarIcon from './../components/common/TabBarIcon/index';
import HomeNavigator from './HomeNavigator';

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
        name={HISTORY}
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="history" color={color} size={size} type />
          ),
        }}
        onPress={() => {
          console.log('okáds');
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
