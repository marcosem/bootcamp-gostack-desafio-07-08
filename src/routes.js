import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import colors from './styles/colors';
// import logo from './assets/logo.svg';

// createAppContainer it is like browser router
// createStackNavigator it is a configuration type for routes - a header at top of application

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      // initialRouteName: 'Cart',
      /*
      defaultNavigationOptions: () => ({
        header: Header, // <Header {...navigation} />,
      }),
      */
      defaultNavigationOptions: {
        header: Header,
      },

      cardStyle: {
        backgroundColor: colors.dark,
      },
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
