import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

const App = () => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
