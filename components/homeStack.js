import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

import LandingPage from './LandingPage';
import Camera from './Camera';

const screens ={
    Home: {screen:LandingPage},
    Snap: {screen:Camera}
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);