import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";
import More from "../screens/More";

const BottomTab = createBottomTabNavigator();

 const BottomTabNavigator = ()=> {
  return (
    
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'ellipsis-horizontal-circle' : 'ellipsis-horizontal-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}        
      >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="More" component={More} />
      </BottomTab.Navigator>
    
  );
}

export default BottomTabNavigator 