import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './views/GetStarted';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Login from './views/Login';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='GetStarted'
          component={GetStarted}
          headerShown={false}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          headerShown={false}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          headerShown={false}
        />
         <Stack.Screen
          name='Home'
          component={Home}
          headerShown={false}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

