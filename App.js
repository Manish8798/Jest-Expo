import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SecondScreen from "./screens/SecondScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Second Screen"
        component={SecondScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
