import React from 'react';
import { StatusBar } from 'react-native';
// import { StatusBar, Text } from 'react-native';
// { View } View is like div

// import { Platform, StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';
import colors from './styles/colors';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      {/* <Text>Hello World!</Text> */}
      <Routes />
    </>
  );
}
