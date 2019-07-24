import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import colors from './styles/colors';

// createAppContainer it is like browser router
// createStackNavigator it is a configuration type for routes - a header at top of application
const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerMode: 'float', // This make the header fixed at top, with no transition between views
      // initialRouteName: 'Cart',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
      /*
      defaultNavigationOptions: {
        header: Header,
      },
      */

      /*
      header: Header,
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerTintColor: '#FFF',
      },
      */
    }
  )
);

export default Routes;
