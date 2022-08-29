import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './components/DetailsScreen';
import Try from './components/Try';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Try}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;