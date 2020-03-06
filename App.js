import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';

import Reducers from './src/store/Reducers';

let store = createStore(Reducers);

const Navigator = createStackNavigator({
  Home:{
    screen:Home
  },
  Login:{
    screen:Login
  },
  Cadastro:{
    screen:Cadastro
  }
});

let Navegador = createAppContainer(Navigator);

export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Navegador />
      </Provider>
    );
  }
}