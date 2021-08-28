import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../scenes/entry/Home';
import Messages from '../scenes/entry/Messages';
import Chat from '../scenes/entry/Chat';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const EntryStack = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="Home" component={ Home }/>
          <Screen name="Messages" component={ Messages }/>
          <Screen name="Chat" component={ Chat }/>
        </Navigator>
    );
}
export default EntryStack;  