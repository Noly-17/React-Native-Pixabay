import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ImageResults from './screens/ImageResults';
import {Provider} from 'react-redux';
import store from './store';
import Details from './screens/Details';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={ImageResults} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const Stack = createStackNavigator();

export default App;
