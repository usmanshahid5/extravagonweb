import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="center col-12 footer__center">
          <div className="footer__top">
            <div className="footer__col">
              <div className="footer__col-title">Renters</div>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <NavLink
                    className="footer__list-link"
                    to={ { pathname: '/search/all' } }
                    exact
                  >
                    Find a Car
                  </NavLink>
                </li>
                <li className="footer__list-item">
                  <a href="faq-renter/index.html" className="footer__list-link">Renter FAQ</a>
                </li>
                <li className="footer__list-item">
                  <NavLink
                    className="footer__list-link"
                    to={ { pathname: '/howToRent' } }
                    exact
                  >
                    How to Rent
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <div className="footer__col-title">Owners</div>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <NavLink
                    className="footer__list-link"
                    to={ { pathname: '/listCar' } }
                    exact
                  >
                    List a Car
                  </NavLink>
                </li>
                <li className="footer__list-item">
                  <a href="faq-owner/index.html" className="footer__list-link">Owner FAQ</a>
                </li>
                <li className="footer__list-item">
                  <NavLink
                    className="footer__list-link"
                    to={ { pathname: '/howToList' } }
                    exact
                  >
                    How to List
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <div className="footer__col-title">Account</div>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <button type="button" className="footer__list-link" data-open="mdl-signin">Log In</button>
                </li>
              </ul>
            </div>
          </div>

          <ul className="footer__list-bottom">
            <li className="footer__list-bottom-item">
              <NavLink
                className="footer__list-bottom-link"
                to={ { pathname: '/termOfService' } }
                exact
              >
                Terms of Service
              </NavLink>
            </li>
            <li className="footer__list-bottom-item">
              <NavLink
                className="footer__list-bottom-link"
                to={ { pathname: '/privacyAndPolicies' } }
                exact
              >
                Privacy & Policies
              </NavLink>
            </li>

            <li className="footer__list-bottom-item">
              <NavLink
                className="footer__list-bottom-link"
                to={ { pathname: '/about' } }
                exact
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;