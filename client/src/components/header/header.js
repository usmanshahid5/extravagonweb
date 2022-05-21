import React                             from 'react';
import { NavLink, withRouter }           from 'react-router-dom';
import { ReactComponent as Close }       from '../../assets/images/close-52-48.svg';
import { ReactComponent as UserNoPhoto } from '../../assets/images/user-no-photo-template.svg';
import SignIn                            from '../SignIn';
import logo                              from '../../assets/images/logo.png'

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="main-header" data-country-code="US">
          <div className="main-header__sticky-wrapper is-sticky display-block is-active">
            <div id="mh-border" className="main-header__sticky-border">
              <div className="center col-12 main-header__center">
                <button type="button" className="mh-navbar__toggler" data-open="header-navbar">
                  <svg className="icon icon--font-size">
                    {/*<use xlink:href="site/images/svg-sprite.svg#sandwich"></use>*/ }
                  </svg>
                </button>

                <NavLink to='/' className="main-header__logo">

                  <img src={ logo } alt="" style={ { width: '40px', marginTop: '5px' } }/>
                  <small style={ {
                    position: 'absolute',
                    marginTop: '17px',
                    marginLeft: '5px',
                    fontWeight: '600',
                    display: 'inline-flex',
                    color: '#fff'
                  } }>
                    <p style={ { color: '#cda659', marginRight: '5px' } }>EXTRAVAGANT</p> FOREIGNS
                  </small>


                </NavLink>

                <div id="header-navbar" className="mh-navbar">
                  <div className="mh-navbar__logo-wrap">
                    <button type="button" className="mh-navbar__close-button" data-close="header-navbar"
                            data-open="navbar-logo">
                      <Close className="mh-navbar__close-button-icon"/>
                    </button>
                    <a id="navbar-logo" href="index.html" className="mh-navbar__logo">
                      <img src={ logo } alt="" style={ { width: '40px', marginTop: '5px' } }/>
                    </a>
                  </div>
                  <div className="mh-nav">
                    <NavLink
                      className="mh-nav__item"
                      to={ { pathname: '/search/all' } }
                      exact
                    >
                      <span className="mh-nav__item__inner">Rent a car</span>
                    </NavLink>

                    <NavLink
                      className="mh-nav__item"
                      to={ { pathname: '/listCar' } }
                      exact
                    >
                      <span className="mh-nav__item__inner">List a car</span>
                    </NavLink>

                    <NavLink
                      className="mh-nav__item"
                      to={ { pathname: '/about' } }
                      exact
                    >
                      <span className="mh-nav__item__inner">About Us</span>
                    </NavLink>
                  </div>
                </div>

                <div id="main-header__controls" className="main-header__controls">
                  <div className="main-header__controls-item dn-xxs">
                    <button type="button"
                            className="btn btn--main-header-search-toggle-btn btn-no-bg btn-no-bg--head js-main-header-search-toggle-btn"
                            data-toggle="main-header-search">
                      <svg className="icon icon--m-r-0">
                        {/*<use xlink:href="site/images/svg-sprite.svg#icon-search"></use>*/ }
                      </svg>
                      <span className="dn-m">Search cars</span>
                    </button>
                  </div>
                  <div id="auth_signup" className="main-header__controls-item dn-s">
                    <a href="sign-up/index.html" className="btn btn-no-bg btn-no-bg--head">
                      <span>Sign up</span> </a>
                  </div>
                  <div id="auth_login" className="main-header__controls-item dn-s">
                    <button type="button" className="btn btn-no-bg btn-no-bg--head" data-open="mdl-signin">
                      <span>Log in</span>
                    </button>
                  </div>
                  <div id="auth_mobile" className="main-header__controls-item dn df-s">
                    <button type="button" className="btn btn-no-bg btn-no-bg--head" data-drop="top-nav-menu">
                      <UserNoPhoto className="icon icon--24 main-header__avatar"/>
                    </button>
                    <ul id="top-nav-menu"
                        className="dropdown dropdown-1 dropdown-1--head dropdown-1--head--menu js-dropdown">
                      <li className="dropdown-1__item">
                        <a href="sign-up/index.html" className="dropdown-1__link">
                          <span>Sign up</span> </a>
                      </li>
                      <li className="dropdown-1__item">
                        <button type="button" className="dropdown-1__link" data-open="mdl-signin">
                          <span>Log in</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="main-header-search" className="main-header__search">
              <div className="center col-12 main-header__search-center">
                <div className="form-item-wrap form-item-wrap--no-border form-item-wrap--main-header-search">
                  <input id="main-header-search-field" type="text"
                         className="form-item form-item--main-header-search js-google-places-autocomplete"
                         data-fill-enable="btn-clear-main-header-search" role="presentation" autoComplete="off"
                         placeholder="Enter address or city"
                         onChange={ (e) => console.log(e) }
                  />
                </div>
                <button id="btn-clear-main-header-search" type="button"
                        className="btn-txt btn-txt--main-header-search-clear hidden-i-flex js-self-close"
                        data-clear-field="main-header-search-field">Clear
                </button>
                <button id="djs-header-search-btn"
                        className="btn btn-primary btn-primary--s-small btn--main-header-search">
                  Search
                </button>
                <button className="main-header__search-close" data-close="main-header-search mh-border">
                  <svg className="icon icon--14">
                    {/*<use xlink:href="site/images/svg-sprite.svg#icon-close"></use>*/ }
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <SignIn/>
      </React.Fragment>
    )
  }
}

export default withRouter(Header)