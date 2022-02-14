import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginPg from '../pages/LoginPg';
import { createStackNavigator } from '@react-navigation/stack';
import Constante from '../util/Constante';
import CadastroPg from '../pages/CadastroPg';
import PrincipalPg from '../pages/Principal';

export default class Router extends Component {

    render() {
        return (
            <NavigationContainer>
                <StackRouter />
            </NavigationContainer>
        )
    }
}

class StackRouter extends Component {

    constante = new Constante();

    Stack = createStackNavigator();

    render() {
        return (
            <this.Stack.Navigator initialRouteName='Principal'>
                <this.Stack.Screen
                    name='Login'
                    component={LoginPg}
                    options={{ headerShown: false }} />
                    <this.Stack.Screen
                    name='Cadastro'
                    component={CadastroPg}
                    options={{ headerShown: false }} />
                    <this.Stack.Screen
                    name='Principal'
                    component={PrincipalPg}
                    options={{ headerShown: false }} />
                    
            </this.Stack.Navigator>
        )
    }
}