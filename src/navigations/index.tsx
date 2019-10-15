import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';

const navigation = createStackNavigator({
	login: {
	  screen: LoginScreen,
	  navigationOptions: { title: 'Login', header:null }
	},
	home: {
	  screen: HomeScreen,
	  navigationOptions: { title: 'Home' }
	}
  }, { initialRouteName: 'login' });
  
 

export default createAppContainer(navigation);
