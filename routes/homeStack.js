import { createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import MemoDetails from '../screens/memoDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title='Memos'/>,
            }
        }
    },
    MemoDetails: {
        screen: MemoDetails,
        navigationOptions:{
            title:'',
            headerTintColor: '#333',
            headerStyle: {backgroundColor: '#efefef', height:85}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#efefef',
        headerTitleStyle: {
            fontSize: 22,
            letterSpacing: 0.5,
          },
        headerStyle: {backgroundColor: 'maroon', height:97}
    }
});

export default HomeStack;
