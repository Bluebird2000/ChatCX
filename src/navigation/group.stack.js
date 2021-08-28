import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateGroup from '../scenes/group/CreateGroup';
import GroupDetails from '../scenes/group/GroupDetails';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const GroupStack = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="CreateGroup" component={ CreateGroup }/>
          <Screen name="GroupDetails" component={ GroupDetails }/>
        </Navigator>
    );
}
export default GroupStack;  