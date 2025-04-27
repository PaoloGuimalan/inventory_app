/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LandingView from './src/views/LandingView';
import Profile from './src/views/Profile';
import Settings from './src/views/Settings';
import {ProductListing} from './src/views/ProductListing';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import Home from './src/layouts/Home';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      paddingTop: 20,
      flex: 1,
    },
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={LandingView}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Settings"
                component={Settings}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Products"
                component={ProductListing}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Home>
      </View>
    </Provider>
  );
}

export default App;
