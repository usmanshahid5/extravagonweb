import React from 'react';
import {
  Route,
  Switch
}            from 'react-router-dom';
import {
  Home,
  Search,
  CarDetails,
  About,
  ListCar,
  TermOfService,
  PrivacyAndPolicies,
  HowToRent,
  HowToList
}            from '../Pages';

class Main extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/search/:location' component={ Search }/>
        <Route exact path='/search' component={ Search }/>
        <Route exact path='/carDetails/:id' component={ CarDetails }/>
        <Route exact path='/about' component={ About }/>
        <Route exact path='/listCar' component={ ListCar }/>
        <Route exact path='/termOfService' component={ TermOfService }/>
        <Route exact path='/privacyAndPolicies' component={ PrivacyAndPolicies }/>
        <Route exact path='/howToRent' component={ HowToRent }/>
        <Route exact path='/howToList' component={ HowToList }/>
      </Switch>
    );
  }
}

export default Main
