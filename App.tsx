import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './src/Routes';
import store from './src/store';



const App = () => { 
  
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

  return (
    <Provider store={store}>
          <NavigationContainer theme={MyTheme}>
                <Routes/>
          </NavigationContainer>
    </Provider>

  );
}

export default App;
