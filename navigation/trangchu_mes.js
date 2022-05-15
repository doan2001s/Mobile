
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import trangchu from '../trangchu';
import mess from '../mess';


const Stack = createNativeStackNavigator();

function homeNavigation() {
  return (
    <NavigationContainer >
    
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="trangchu"
        component={trangchu}
      />
      
      <Stack.Screen
        name="mess"
        component={mess}
        
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default homeNavigation;