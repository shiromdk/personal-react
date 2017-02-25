import React, { Component } from 'react';
import Header from './header';
import MainNavigation from './main_nav';
export default class Main extends Component{

  render(){
    return(
      <div className="container">
        <Header />
        <MainNavigation />
      <div>About Test</div>
    </div>
    );
  }
}
