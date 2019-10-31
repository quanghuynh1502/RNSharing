import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import LeftMenu from '../components/LeftMenu'
import { createDrawerNavigator } from 'react-navigation-drawer'



const HomeStackNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
}, {
  initialRouteName: 'About',
})

const MenuDrawerNavigator = createDrawerNavigator({
  HomeStack: HomeStackNavigator
}, {
  initialRouteName: 'HomeStack',
  contentComponent: LeftMenu
})

const AuthTabsNavigator = createBottomTabNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
})

const AuthSwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  HomeDrawer: MenuDrawerNavigator,
  AuthTabs: AuthTabsNavigator
}, {
  initialRouteName: 'AuthLoading'
})

export default createAppContainer(AuthSwitchNavigator);