import 'react-native-gesture-handler';
import React from 'react';
import AppStack from './src/navigation/app.stack';

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <AppStack />
    )
  }
}