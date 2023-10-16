import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/Register";

import DrawerNavigator from "./Navigation/DrawerNavigator" 

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from "./config";

let firebaseApp;
let firebaseAuth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebaseApp = getApp();
  firebaseAuth = getAuth();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Dashboard"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
   
    <Stack.Screen name="Dashboard" component={DrawerNavigator} />
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}

export { firebaseApp, firebaseAuth };

