import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const App = () => { 
  return (
    <NavigationContainer theme={MyTheme}>
        <Routes/>
   </NavigationContainer>

  );
}

export default App;
