import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from './entry.stack';
import Group from './group.stack';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const AppStack = (props) => {
    return (
      <NavigationContainer>
        <Navigator {...props} headerMode='none' initialRouteName="Entry">
          <Screen name="Entry" component={ Entry }/>
          <Screen name="Group" component={ Group }/>
        </Navigator>
      </NavigationContainer>
    );
  }
export default AppStack;  