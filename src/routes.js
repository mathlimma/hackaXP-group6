import { createSwitchNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

const appNavigator = createBottomTabNavigator(
{
    Main :
    {
        name: 'Inicio',
        screen: Main,
        navigationOptions: 
        {
            title: 'Inicio',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color="#13223E" />
        }
    },
    Trilhas:
    {
        name: 'Trilhas',
        screen: Main,
        navigationOptions: 
        {
            title: 'Trilhas',
            tabBarIcon: ({ tintColor }) => <Icon name="list-ul" size={20} color="#13223E" />
        }
    },
    Investir:
    {
        name: 'Investir',
        screen: Main,
        navigationOptions: 
        {
            title: 'Investir',
            tabBarIcon: ({ tintColor }) => <Icon name="md-analytics" size={20} color="#13223E" />
        }
    },
    Analise:
    {
        name: 'Análise',
        screen: Main,
        navigationOptions:
        {
            title: 'Análise',
            tabBarIcon: ({ tintColor }) => <Icon name="exit-to-app" size={20} color="#13223E" />
        }
    }
},
{

    initialRouteName: 'Main',
    activeColor: '#f0edf6',
    inactiveColor: '#f0edf6',
    tabBarOptions:
    {
        activeTintColor: "#13223E",
        inactiveTintColor: "#FFF",
        activeBackgroundColor: "#13223E",
        inactiveBackgroundColor: '#f0edf6'
    }
})

const authNavigator = createSwitchNavigator(
{
    Login,
    Register,
    appNavigator
},{initialRouteName: 'Login'})    

export default createAppContainer(authNavigator)