import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import { setUser } from './store/user';

import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Tasks from './screens/app/Tasks';
import Home from './screens/app/Home';
import AddTask from './screens/app/AddTask';
import DrawerContent from './components/DrawerContent/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.data)
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(setUser(user));
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  const Tabs = () => (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false,headerShown:false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('./assets/active-home.png')
                  : require('./assets/inactive-home.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                 ? require('./assets/calendar-inactive.png')
                 : require('./assets/calendar-active.png')
              }
            />
          ),
        }}
      />

    </Tab.Navigator>
  );

  if (user) {
    return (
      <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {width: 25, height: 25},
});

export default React.memo(Routes);
