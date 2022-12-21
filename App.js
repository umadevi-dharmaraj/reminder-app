import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/homeScreen'
import Milestones from './screens/milestones';
import Incomplete from './screens/incompletedTasks';
import Complete from './screens/completedTasks';
import CreateTimetable from './screens/createTimetable';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Milestones" component={Milestones} />
        <Stack.Screen name="Complete" component={Complete} />
        <Stack.Screen name="Incomplete" component={Incomplete} />
          <Stack.Screen name="CreateTimetable" component={CreateTimetable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
