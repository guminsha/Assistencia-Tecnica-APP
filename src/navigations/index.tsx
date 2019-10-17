import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/login';
import drawerMenu from './drawer-menu';

const navigation = createStackNavigator({
	login: {
	  screen: LoginScreen,
	  navigationOptions: { title: 'Login', header:null }
	},
	home: {
	  screen: drawerMenu,
	  navigationOptions: { title: 'Home', header:null }
	}
  }, { initialRouteName: 'login' });
  
 

export default createAppContainer(navigation);
