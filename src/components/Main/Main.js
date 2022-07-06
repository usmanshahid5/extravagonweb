import React           from 'react';
import {
  Route,
  Switch
}                      from 'react-router-dom';
import Atlanta         from '../Locations/Atlanta';
import Austin          from '../Locations/Austin';
import Chicago         from '../Locations/Chicago';
import LosAngeles      from '../Locations/Los Angeles';
import Miami           from '../Locations/miami';
import Phoenix         from '../Locations/Phoenix';
import MySignup        from '../mySignup';
import AllCarsSections from '../Pages/AllCarsSections';
import {
  Home,
  Search,
  CarDetails,
  About,
  ListCar,
  TermOfService,
  PrivacyAndPolicies,
  HowToRent,
  HowToList,
}                         from '../Pages';
import MySignIn           from '../mySignIn';
import ChauffeuredRentals from '../Pages/Chauffeured Rentals';
import Corvette           from '../Pages/Corvette';
import DrivingRentals     from '../Pages/DrivingRentals';
import Mustang            from '../Pages/Mustang';
import Poarshe            from '../Pages/Poarshe';
import RentForShooting    from '../Pages/RentForShooting';
class Main extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path='/search/miami' component={ Miami }/>
        <Route exact path='/drivingRentals' component={ DrivingRentals }/>
        <Route exact path='/Mustang' component={Mustang }/>
        <Route exact path='/Poarshe' component={ Poarshe }/>
        <Route exact path='/RentForShooting' component={ RentForShooting }/>
        <Route exact path='/Corvette' component={ Corvette }/>
        <Route exact path='/ChauffeuredRentals' component={ ChauffeuredRentals }/>
        <Route exact path='/search/Chicago' component={ Chicago }/>
        <Route exact path='/search/Atlanta' component={ Atlanta }/>
        <Route exact path='/search/Phoenix' component={ Phoenix }/>
        <Route exact path='/search/LosAngeles' component={ LosAngeles }/>
        <Route exact path='/search/austin' component={ Austin }/>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/search
        {/*/:location*/}
        ' component={ Search }/>
        <Route exact path='/allCars' component={ AllCarsSections }/>
        <Route exact path='/search' component={ Search }/>
        <Route exact path='/carDetails/:id' component={ CarDetails }/>
        <Route exact path='/about' component={ About }/>
        <Route exact path='/listCar' component={ ListCar }/>
        <Route exact path='/termOfService' component={ TermOfService }/>
        <Route exact path='/privacyAndPolicies' component={ PrivacyAndPolicies }/>
        <Route exact path='/howToRent' component={ HowToRent }/>
        <Route exact path='/howToList' component={ HowToList }/>
        <Route exact path='/SignIn' component={ MySignIn }/>
        <Route exact path='/Signup' component={ MySignup }/>


      </Switch>
    );
  }
}

export default Main
