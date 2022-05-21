import React                   from 'react';
import SearchField             from '../../SearchField';
import { NavLink, withRouter } from 'react-router-dom';

class Search extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    console.log(pathname.split("/").pop(), 111111111111111111);
    /* In future call api here */
  }

  render() {
    const data = [
      {
        "id": 1,
        "image": "https://driveShare.com/files/car_images/4900/1589995515_phpcnubet.jpg.small.jpg?t=1589996971",
        "name": "1969 Plymouth Roadrunner",
        "deliveredFrom": "Joplin, MO",
        "price": "$300",
        "period": "per day"
      },
      {
        "id": 2,
        "image": "https://driveShare.com/files/car_images/2500/1568212980_phpmhyVVx.jpg.small.jpg?t=1568213774",
        "name": "1997 Dodge Viper",
        "deliveredFrom": "Plano, TX",
        "price": "$399",
        "period": "per day"
      },
      {
        "id": 3,
        "image": "https://driveShare.com/files/car_images/7450/1629820246_php0jMRGO.jpg.small.jpg?t=1629820383",
        "name": "2017 Mercedes-Benz AMG GT",
        "deliveredFrom": "Houston, TX",
        "price": "$360",
        "period": "per day"
      },
      {
        "id": 3,
        "image": "https://driveShare.com/files/car_images/7950/1642785193_phpbPN6rk.jpg.small.jpg?t=1642785379",
        "name": "2012 Ferrari FF",
        "deliveredFrom": "Scottsdale, AZ",
        "price": "$899",
        "period": "per day"
      }
    ];

    return (
      <React.Fragment>
        <main className="center col-12 search-page js-search-page search-page--list">
          <div id="search-page-list" className="search-page__list js-search-page-list">
            <form className="search-filter js-search-filter" action="https://ExtraVagant.com/search">
              <SearchField/>
              <div className="search-filter__filters">
                <div className="filter-select">
                  <div id="js-filters-wrap-desktop" className="filter-select__items-wrap js-zindex-parent">
                    <div className="filter-select__item js-filter-item js-filter-make js-zindex js-filter-search"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile djs-makes-clear js-field-btn-clear js-field-btn-clear-total js-filter-section-mobile-clear-btn"
                              data-clear="js-make-list-wrap">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="filter-make-dropdown"
                           data-drop-position data-name="make">
                                <span className="filter-select__value__label">
                                    <span id="make-value"
                                          className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                          data-default-value="Make">Make</span>
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-expand">Make</span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="filter-make-dropdown"
                           className="js-dropdown dropdown dropdown--filter js-filter-drop-body">
                        <div className="form-item-wrap form-item-wrap--search-filter stppg">
                          <input id="make-search-field" type="text"
                                 className="form-item stppg js-livesearch-input js-field-with-btn-clear js-livesearch-split-on-mobile"
                                 placeholder="Search" autoComplete="off" data-livesearch-state="js-make-list-wrap"/>
                          <div className="form-item-wrap__icon-search js-field-btn-search active">
                            <svg className="icon" aria-hidden="true">
                              {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                              {/*     xlink:href="site/images/svg-sprite.svg#icon-search"></use>*/ }
                            </svg>
                          </div>
                          <button type="button" className="form-item-wrap__btn-clear js-field-btn-clear">
                            <svg className="icon icon--16" aria-hidden="true">
                              {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                              {/*     xlink:href="site/images/svg-sprite.svg#icon-close-16"></use>*/ }
                            </svg>
                          </button>
                        </div>
                        <div id="js-make-list-wrap"
                             className="dropdown__check-list-wrap dropdown__check-list-wrap--mobile-absolute">
                          <div id="make-list" className="dropdown__check-list js-tab-parent">
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value=" AM General"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt"> AM General</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Acura"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Acura</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Alfa Romeo"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Alfa Romeo</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Alvis"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Alvis</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="AM General"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">AM General</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="AMC"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">AMC</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="American General"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">American General</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Aston Martin"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Aston Martin</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Auburn"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Auburn</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Audi"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Audi</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Austin"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Austin</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Austin Healey"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Austin Healey</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Austin-Healey"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Austin-Healey</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Bentley"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Bentley</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="BMW"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">BMW</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="BMW Coupe"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">BMW Coupe</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Bricklin"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Bricklin</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Buick"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Buick</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Cadillac"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Cadillac</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Chevrolet"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Chevrolet</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Chrysler"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Chrysler</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Citroen "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Citroen </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Cord"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Cord</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Crosley"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Crosley</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Crown"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Crown</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Datsun "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Datsun </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Delorean"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Delorean</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="DeSoto"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">DeSoto</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="DKW"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">DKW</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Dodge"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Dodge</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Dodge Brothers"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Dodge Brothers</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Dual Ghia"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Dual Ghia</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Durant"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Durant</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Edsel"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Edsel</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Factory Five"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Factory Five</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Ferrari"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Ferrari</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Fiat"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Fiat</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Fisker"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Fisker</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Ford"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Ford</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="GMC"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">GMC</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Harsco"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Harsco</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Hispano Suiza"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Hispano Suiza</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Honda"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Honda</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Hudson"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Hudson</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Hummer"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Hummer</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Hyundai"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Hyundai</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Imperial"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Imperial</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Infiniti"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Infiniti</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Intermeccanica"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Intermeccanica</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field"
                                     value="International (IHC)" data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">International (IHC)</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Isuzu"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Isuzu</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Jaguar"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Jaguar</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Jeep"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Jeep</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Jensen"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Jensen</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Kaiser"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Kaiser</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="KME"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">KME</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Lamborghini"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Lamborghini</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Land Cruiser "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Land Cruiser </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Land Rover"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Land Rover</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Lexus"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Lexus</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Lincoln"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Lincoln</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="London"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">London</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Lotus"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Lotus</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Maserati"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Maserati</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Mazda"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Mazda</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="McLaren"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">McLaren</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Mercedes-Benz"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Mercedes-Benz</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Mercury"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Mercury</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Meyers Manx "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Meyers Manx </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="MG"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">MG</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Mini"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Mini</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Mitsubishi"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Mitsubishi</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Morgan"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Morgan</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Morris"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Morris</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Morris Minor "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Morris Minor </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Nash"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Nash</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Nash-Healey"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Nash-Healey</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Nissan"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Nissan</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field"
                                     value="Ohio State Highway Patrol" data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Ohio State Highway Patrol</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Oldsmobile"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Oldsmobile</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Opel"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Opel</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Oreion "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Oreion </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Overland"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Overland</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Packard"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Packard</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Pierce-Arrow"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Pierce-Arrow</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Pininfarina "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Pininfarina </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="pinzgauer"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">pinzgauer</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Plymouth"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Plymouth</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Pontiac"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Pontiac</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Porsche"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Porsche</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field"
                                     value="Porsche Intermeccanica" data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Porsche Intermeccanica</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field"
                                     value="Porsche Speedster Reproduction " data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Porsche Speedster Reproduction </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Qvale"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Qvale</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Rambler"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Rambler</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Range Rover"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Range Rover</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Reliant"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Reliant</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Rolls-Royce"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Rolls-Royce</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Rover"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Rover</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Ruf Porsche "
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Ruf Porsche </span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Saab"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Saab</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Saleen"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Saleen</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Saleen Mustang"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Saleen Mustang</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Samco Cord"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Samco Cord</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Saturn"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Saturn</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Scion"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Scion</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Shay"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Shay</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Shelby"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Shelby</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Steyr Puch"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Steyr Puch</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Studebaker"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Studebaker</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="STUDEBAKER R2"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">STUDEBAKER R2</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Subaru"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Subaru</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Sunbeam"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Sunbeam</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Tesla"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Tesla</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Tiffany"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Tiffany</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Toyota"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Toyota</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Tritan"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Tritan</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Triumph"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Triumph</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Volkswagen"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Volkswagen</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Volvo"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Volvo</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Willys"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Willys</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Willys-Jeep"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Willys-Jeep</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Willys-Overland"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Willys-Overland</span>
                            </label>
                            <label
                              className="js-livesearch-item radio radio--dropdown-check-list hidden-block active js-tab js-livesearch-item-make">
                              <input type="radio" name="make" className="js-filter-radio-field" value="Zimmer"
                                     data-saved-value autoComplete="off"/>
                              <span className="radio__pseudo-check"></span>
                              <span className="radio__txt js-livesearch-txt">Zimmer</span>
                            </label>
                          </div>
                          <div className="dropdown__check-list-empty">No results found.</div>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-field-btn-clear js-field-btn-clear-total js-filter-section-clear-btn djs-makes-clear"
                                  data-clear="js-make-list-wrap">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark dn js-filter-radio-btn-save js-filter-section-save-btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="filter-select__item js-filter-item js-filter-model js-zindex js-filter-search"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile js-field-btn-clear js-field-btn-clear-total js-filter-section-mobile-clear-btn djs-models-clear"
                              data-clear="js-model-list-wrap">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="filter-model-dropdown"
                           data-drop-position data-name="model">
                                <span className="filter-select__value__label">
                                    <span id="model-value"
                                          className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                          data-default-value="Model">Model</span>
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-expand">Model</span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="filter-model-dropdown"
                           className="js-dropdown dropdown dropdown--filter js-filter-drop-body">
                        <div className="form-item-wrap form-item-wrap--search-filter stppg">
                          <input id="model-search-field" type="text"
                                 className="form-item stppg js-livesearch-input js-field-with-btn-clear js-livesearch-split-on-mobile"
                                 placeholder="Search" autoComplete="off" data-livesearch-state="js-model-list-wrap"/>
                          <div className="form-item-wrap__icon-search js-field-btn-search active">
                            <svg className="icon" aria-hidden="true">
                              {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                              {/*     xlink:href="site/images/svg-sprite.svg#icon-search"></use>*/ }
                            </svg>
                          </div>
                          <button type="button" className="form-item-wrap__btn-clear js-field-btn-clear">
                            <svg className="icon icon--16" aria-hidden="true">
                              {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                              {/*     xlink:href="site/images/svg-sprite.svg#icon-close-16"></use>*/ }
                            </svg>
                          </button>
                        </div>
                        <div id="js-model-list-wrap"
                             className="dropdown__check-list-wrap dropdown__check-list-wrap--mobile-absolute">
                          <div id="model-list" className="dropdown__check-list js-tab-parent"
                               data-display-checked-value="model-value"></div>
                          <div className="dropdown__check-list-empty">No results found.</div>
                          <div className="dropdown__check-list-make-empty">Please, choose the Make of vehicle first.
                          </div>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-field-btn-clear js-field-btn-clear-total js-filter-section-clear-btn djs-models-clear"
                                  data-clear="js-model-list-wrap">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark dn js-filter-radio-btn-save js-filter-section-save-btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="filter-select__item js-filter-item js-filter-year js-filter-slider js-zindex"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile js-filter-slider-btn-clear js-filter-section-mobile-clear-btn"
                              data-clear="js-year-wrap">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="filter-year-dropdown"
                           data-drop-position data-name="year">
                                <span className="filter-select__value__label">
                                    <span id="year-value"
                                          className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                          data-default-value="Year" data-unit="">Year</span>
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-expand">Year</span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="filter-year-dropdown"
                           className="js-dropdown dropdown dropdown--filter dropdown--filter--slider js-filter-drop-body">
                        <div id="js-year-wrap" className="dropdown__filter-form">
                          <div className="form-row fbe">
                            <input type="hidden" id="filter-year-extreme-values"
                                   className="js-filter-slider-extreme-values" data-min="" data-max=""
                                   autoComplete="off"/>
                            <div className="form-cell form-cell--filter-price-min">
                              <label htmlFor="filter-year-min" className="form-label">From</label>
                              <div className="form-item-wrap form-item-wrap--filter-price-min">
                                <input id="filter-year-min" type="text"
                                       className="form-item js-num js-filter-slider-field js-filter-slider-field-min"
                                       placeholder="e.g. 10" maxLength="4" data-saved-min="" autoComplete="off"/>
                              </div>
                            </div>
                            <span className="form-cell__dash"></span>
                            <div className="form-cell form-cell--filter-price-max">
                              <label htmlFor="filter-year-max" className="form-label">To</label>
                              <div className="form-item-wrap form-item-wrap--filter-price-min">
                                <input id="filter-year-max" type="text"
                                       className="form-item js-num js-filter-slider-field js-filter-slider-field-max"
                                       placeholder="e.g. 10" maxLength="4" data-saved-max="" autoComplete="off"/>
                              </div>
                            </div>
                          </div>
                          <div id="filter-year-slider"
                               className="slider-line slider-line--range slider-line--range--double slider-line--filter"></div>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-filter-slider-btn-clear js-filter-section-clear-btn"
                                  data-filter-slider-value="year-value">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark js-filter-slider-btn-save js-filter-section-save-btn"
                                  data-filter-slider-value="year-value">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="filter-select__item js-filter-item js-filter-price js-filter-slider js-zindex"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile js-filter-slider-btn-clear js-filter-section-mobile-clear-btn"
                              data-clear="js-price-wrap">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="filter-price-dropdown"
                           data-drop-position data-name="price">
                                <span className="filter-select__value__label">
                                    <span id="price-value"
                                          className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                          data-default-value="Price per day" data-unit="$">Price per day</span>
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-expand">Price per day</span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="filter-price-dropdown"
                           className="js-dropdown dropdown dropdown--filter dropdown--filter--slider js-filter-drop-body">
                        <div id="js-price-wrap" className="dropdown__filter-form">
                          <div className="form-row fbe">
                            <input type="hidden" id="filter-price-extreme-values"
                                   className="js-filter-slider-extreme-values" data-min="" data-max=""
                                   autoComplete="off"/>
                            <div className="form-cell form-cell--filter-price-min">
                              <label htmlFor="filter-price-min" className="form-label">Min price</label>
                              <div className="form-item-wrap form-item-wrap--filter-price-min">
                                <div className="form-item-unit">$</div>
                                <input id="filter-price-min" type="text"
                                       className="form-item js-num-dot js-filter-slider-field js-filter-slider-field-min"
                                       placeholder="e.g. 10" maxLength="5" data-saved-min="" autoComplete="off"/>
                              </div>
                            </div>
                            <span className="form-cell__dash"></span>
                            <div className="form-cell form-cell--filter-price-max">
                              <label htmlFor="filter-price-max" className="form-label">Max price</label>
                              <div className="form-item-wrap form-item-wrap--filter-price-max">
                                <div className="form-item-unit">$</div>
                                <input id="filter-price-max" type="text"
                                       className="form-item js-num-dot js-filter-slider-field js-filter-slider-field-max"
                                       placeholder="e.g. 10" maxLength="5" data-saved-max="" autoComplete="off"/>
                              </div>
                            </div>
                          </div>
                          <div id="filter-price-slider"
                               className="slider-line slider-line--range slider-line--range--double slider-line--filter"></div>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-filter-slider-btn-clear js-filter-section-clear-btn">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark  js-filter-slider-btn-save js-filter-section-save-btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="filter-select__item js-filter-item js-filter-switch js-zindex"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile js-filter-section-mobile-clear-btn js-filter-section-mobile-checkboxes-clear-btn">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="search-filter-transmission"
                           data-drop-position data-name="transmission">
                                <span className="filter-select__value__label ">
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                      data-default-value="Transmission"
                                      data-all-value="Any transmission">Transmission</span>
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-expand">Transmission</span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="search-filter-transmission"
                           className="js-dropdown dropdown dropdown--filter js-filter-drop-body">
                        <div className="dropdown__switch-wrap">
                          <label className="switch-wrap switch-wrap--switch-right switch-wrap--filters">
                            <div className="switch-wrap__txt">Automatic</div>
                            <input id="transmission-automatic" type="checkbox" className="js-filter-switch-field"
                                   value="Automatic" data-saved-value autoComplete="off"/>
                            <label htmlFor="transmission-automatic" className="switch switch--right"></label>
                          </label> <label className="switch-wrap switch-wrap--switch-right switch-wrap--filters">
                          <div className="switch-wrap__txt">Manual</div>
                          <input id="transmission-manual" type="checkbox" className="js-filter-switch-field"
                                 value="Manual" data-saved-value autoComplete="off"/>
                          <div htmlFor="transmission-manual" className="switch switch--right"></div>
                        </label>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-filter-section-clear-btn">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark ml-a js-filter-switch-save-btn js-filter-section-save-btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="filter-select__item js-filter-item js-zindex js-filter-clubs"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile js-filter-section-mobile-clear-btn  js-filter-section-mobile-checkboxes-clear-btn">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="filter-clubs-dropdown"
                           data-drop-position data-name="clubs">
                                <span className="filter-select__value__label">
                                  <span
                                    className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                    data-default-value="Clubs">Clubs</span>
                                  <span
                                    className="filter-select__value__txt filter-select__value__txt--mobile-expand">Clubs</span>
                                  <span className="filter-select__value__num js-filter-clubs-num"></span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="filter-clubs-dropdown"
                           className="js-dropdown dropdown dropdown--filter js-filter-drop-body">
                        <div id="js-clubs-list-wrap"
                             className="dropdown__check-list-wrap dropdown__check-list-wrap--mobile-static">
                          <div id="event-type-list" className="dropdown__check-list">
                            <div>
                              <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                                <input type="checkbox" className="js-filter-clubs-field" value="No club affiliation"
                                       data-id="0" data-saved-value autoComplete="off"/>
                                <span className="checkbox__pseudo-check"></span>
                                <span className="checkbox__txt">No club affiliation</span>
                              </label>
                              <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                                <input type="checkbox" className="js-filter-clubs-field" value="Hagerty Drivers Club"
                                       data-id="1" data-saved-value autoComplete="off"/>
                                <span className="checkbox__pseudo-check"></span>
                                <img className="checkbox__img checkbox__img--dropdown"
                                     src="files/clubs/1556182358.3503_od2modp2.png" alt="Hagerty Drivers Club"/>
                                <span className="checkbox__txt">Hagerty Drivers Club</span>
                              </label>
                              <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                                <input type="checkbox" className="js-filter-clubs-field" value="Porsche Club of America"
                                       data-id="2" data-saved-value autoComplete="off"/>
                                <span className="checkbox__pseudo-check"></span>
                                <img className="checkbox__img checkbox__img--dropdown"
                                     src="files/clubs/1584989503.5924_b1li8giv.png" alt="Porsche Club of America"/>
                                <span className="checkbox__txt">Porsche Club of America</span>
                              </label>
                              <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                                <input type="checkbox" className="js-filter-clubs-field" value="Rolls Royce Owners Club"
                                       data-id="3" data-saved-value autoComplete="off"/>
                                <span className="checkbox__pseudo-check"></span>
                                <img className="checkbox__img checkbox__img--dropdown"
                                     src="files/clubs/1644949279.9207_flg0uhr6.png" alt="Rolls Royce Owners Club"/>
                                <span className="checkbox__txt">Rolls Royce Owners Club</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-filter-clubs-clear-btn js-filter-section-clear-btn">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark js-filter-section-save-btn js-filter-clubs-save-btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="filter-select__item js-filter-item js-zindex js-filter-rental"
                         data-transfer="js-filters-wrap-desktop append js-filters-wrap-mobile append 768">
                      <button type="button"
                              className="btn-txt btn-txt--filter-dropdown btn-txt--filter-clear-mobile js-filter-section-mobile-clear-btn js-filter-section-mobile-checkboxes-clear-btn">
                        Clear
                      </button>
                      <div className="filter-select__value js-filter-btn-toggle" data-drop="filter-rental-type-dropdown"
                           data-drop-position data-name="rental_type">
                                <span className="filter-select__value__label">
                                    <span id="filter-rental-types-value"
                                          className="filter-select__value__txt filter-select__value__txt--mobile-collapsed js-filter-select-value-txt"
                                          data-default-value="Rental type"
                                          data-all-value="All rental types">Rental type</span>
                                    <span
                                      className="filter-select__value__txt filter-select__value__txt--mobile-expand">Rental type</span>
                                </span>
                        <button type="button" className="filter-select__item__btn-accord-arrow">
                          <svg className="icon" aria-hidden="true" fill="none">
                            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                            {/*     xlink:href="site/images/svg-sprite.svg#arrow-accordion"></use>*/ }
                          </svg>
                        </button>
                      </div>
                      <div id="filter-rental-type-dropdown"
                           className="js-dropdown dropdown dropdown--filter js-filter-drop-body">
                        <div id="js-filter-rental-types-wrap"
                             className="dropdown__check-list-wrap dropdown__check-list-wrap--mobile-static">
                          <div id="filter-rental-types" className="dropdown__check-list">
                            <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                              <input type="checkbox" className="js-filter-rental-field" value="Driving" data-saved-value
                                     autoComplete="off"/>
                              <span className="checkbox__pseudo-check"></span>
                              <div className="checkbox__img checkbox__img--dropdown checkbox__img--svg dn df-s">
                                <svg className="icon icon--24" aria-hidden="true" fill="none">
                                  {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                                  {/*     xlink:href="site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                                </svg>
                              </div>
                              <span className="checkbox__txt">Driving</span>
                            </label>
                            <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                              <input type="checkbox" className="js-filter-rental-field" value="Event" data-saved-value
                                     autoComplete="off"/>
                              <span className="checkbox__pseudo-check"></span>
                              <div className="checkbox__img checkbox__img--dropdown checkbox__img--svg dn df-s">
                                <svg className="icon icon--24" aria-hidden="true" fill="none">
                                  {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                                  {/*     xlink:href="site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                                </svg>
                              </div>
                              <span className="checkbox__txt">Event</span>
                            </label>
                            <label className="checkbox checkbox--dropdown-check-list hidden-flex active">
                              <input type="checkbox" className="js-filter-rental-field" value="Chauffeured"
                                     data-saved-value autoComplete="off"/>
                              <span className="checkbox__pseudo-check"></span>
                              <div className="checkbox__img checkbox__img--dropdown checkbox__img--svg dn df-s">
                                <svg className="icon icon--chauffeured-rental" aria-hidden="true" fill="none">
                                  {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                                  {/*     xlink:href="site/images/svg-sprite.svg#icon-chauffeured-rental"></use>*/ }
                                </svg>
                              </div>
                              <span className="checkbox__txt">Chauffeured</span>
                            </label>
                          </div>
                        </div>
                        <div className="dropdown__controls">
                          <button type="button"
                                  className="btn-txt btn-txt--filter-dropdown js-filter-section-clear-btn">
                            Clear
                          </button>
                          <button type="button"
                                  className="btn btn-primary btn-primary--small btn-primary--dark ml-a js-filter-rental-save-btn js-filter-section-save-btn">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="search-results js-search-results">
              <div className="search-results__found js-search-results-found">
                <div className="search-results__top">
                  <div className="search-results__top__txt">
                    <span className="djs-search-results">{ data.length }</span> <span
                    className="dn di-m"> results</span> <span
                    className="dn-m"> cars found</span>
                  </div>

                  <SortBy/>
                </div>

                {
                  (!!data && data.length > 0) ? (
                    <div id="js-search-results-cards"
                         className="search-results__cards cards gutter-m gutter-s-0 js-search-results-cards">
                      {
                        data.map((car, idx) => {
                          return (
                            <NavLink
                              to={ { pathname: `/carDetails/${ car.id }`, } }
                              className="card mt-xl active card-tmpl card--small"
                              key={ idx }
                              target="_blank"
                              exact
                            >
                              <div className="card__img">
                                <div className="card__icon-favorite js-icon-favorite-btn">
                                  <svg className="icon icon--20">
                                    {/*<use xlink:href="https://ExtraVagant.com/site/images/svg-sprite.svg#icon-favorite"></use>*/ }
                                  </svg>
                                </div>
                                <div className="card__badge active djs-featured">Featured</div>

                                <img className="djs-card-img"
                                     src={ car.image }
                                     alt={ car.name }
                                />
                              </div>
                              <div className="card__name">{ car.name }</div>
                              <div className="card__data">
                                <div className="card__data-location-large">
                                  <div className="card__data-location">
                                    <div className="card__data-location-icon">
                                      <svg className="icon icon--16 icon--current-color">
                                        {/*<use xlink:href="https://ExtraVagant.com/site/images/svg-sprite.svg#icon-location"></use>*/ }
                                      </svg>
                                    </div>
                                    <span>
                        <span className="fw-400">Delivered from</span>
                        <span className="fw-500">{ car.deliveredFrom }</span>
                    </span>
                                  </div>
                                </div>
                                <div className="card__data-rating">
                                  <div className="rating">
                                    <div className="rating__item rating__item--empty"></div>
                                    <div className="rating__item rating__item--empty"></div>
                                    <div className="rating__item rating__item--empty"></div>
                                    <div className="rating__item rating__item--empty"></div>
                                    <div className="rating__item rating__item--empty"></div>
                                  </div>
                                  <div className="card__data-rating-votes">0</div>
                                </div>
                                <div className="card__data-events">
                                  <div className="card__data-events-type">
                                    <div className="card__data-events-icon djs-card-rental-driving active">
                                      <svg className="icon icon--24">
                                        {/*<use*/ }
                                        {/*  xlink:href="https://ExtraVagant.com/site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                                      </svg>
                                    </div>
                                    <div className="card__data-events-icon djs-card-rental-event active">
                                      <svg className="icon icon--24">
                                        {/*<use*/ }
                                        {/*  xlink:href="https://ExtraVagant.com/site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                                      </svg>
                                    </div>
                                    <div className="card__data-events-icon djs-card-rental-chauffeured active">
                                      <svg className="icon icon--chauffeured-rental">
                                        {/*<use*/ }
                                        {/*  xlink:href="https://ExtraVagant.com/site/images/svg-sprite.svg#icon-chauffeured-rental"></use>*/ }
                                      </svg>
                                    </div>
                                  </div>

                                  <div className="card__data-price">
                                    <div className="card__data-price-numb">{ car.price }</div>
                                    <div className="card__data-price-period">{ car.period }</div>
                                  </div>
                                </div>
                              </div>
                            </NavLink>
                          )
                        })
                      }
                    </div>
                  ) : null
                }
              </div>

              {
                (!!data && data.length === 0) ? (
                  <NoResultFound/>
                ) : null
              }
            </div>
          </div>
        </main>

        <div id="mdl-search-filters" className="mdl-wrap mdl-wrap--full-screen mdl-wrap--filters mdl-wrap--dn-more-s">
          <div className="mdl mdl--full-screen mdl--filters">
            <div className="mdl__fs-header">
              <h2 className="mdl__fs-header-title title-h-5">Filters</h2>
              <button className="mdl__cross js-mdl-close"></button>
            </div>
            <div className="mdl__fs-body">
              <div className="center col-12">
                <div className="mdl__fs-content mdl__fs-content--filters">
                  <div className="mdl__search-filters-results"><span className="djs-search-results">0</span> results
                  </div>
                  <div id="js-filters-wrap-mobile"
                       className="filter-list-wrap-modal js-accord-wrap js-zindex-parent"></div>
                  <div className="mdl__bottom-line">
                    <div className="btn-group btn-group--space-m t-xs b-xs">
                      <div className="btn-group__item">
                        <button type="button"
                                className="btn btn-primary btn-primary--neutral js-filter-mobile-clear-all-btn">Clear
                          all
                        </button>
                      </div>
                      <div className="btn-group__item">
                        <button type="button"
                                className="mdl__form-confirm-action btn btn-primary djs-filter-mobile-save-all js-filter-mobile-save-all-btn">Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class NoResultFound
  extends React
    .Component {
  render() {
    return (
      <div className="results-empty search-results__empty js-search-results-empty">
        <img className="results-empty results-empty__img" src="site/images/img-no-vehicles-found-1x.png"
             srcSet="https://ExtraVagant.com/site/images/img-no-vehicles-found-1x.png 1x, site/images/img-no-vehicles-found-2x.png 2x"
             alt=""/>
        <div className="title-h-3 t-sm">No vehicles found.</div>
        <div className="txt-lead-2 t-m">Try changing your search parameters</div>
        <button
          className="btn btn-primary btn-primary--medium btn-primary--m-default mt-l djs-clear-all-filters js-clear-all-filters">
          <span>Clear all filters</span>
          <svg className="icon" aria-hidden="true" fill="none">
            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
            {/*     xlink:href="site/images/svg-sprite.svg#icon-map-close"></use>*/ }
          </svg>
        </button>
      </div>
    )
  }
}

class SortBy extends React.Component {
  render() {
    return (
      <div className="search-results__top__controls search-sort">
        <div className="search-sort__label">
          <div className="search-sort__label__txt">Sort by:</div>
          <button type="button" className="search-sort__label__btn js-search-sort-label-btn"
                  data-drop="search-results-sort-dropdown" data-drop-position>
            <span className="js-search-sort-label-btn-txt" data-value="distance">Distance</span>
            <svg className="search-sort__label__btn__icon icon" aria-hidden="true" fill="none">
              {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
              {/*     xlink:href="site/images/svg-sprite.svg#icon-triangle-down"></use>*/ }
            </svg>
          </button>
        </div>
        <ul id="search-results-sort-dropdown"
            className="search-sort__dropdown dropdown dropdown-tick js-dropdown js-tab-parent js-search-sort-dropdown">
          <li className="dropdown-tick__item js-tab" data-type="recommended">
            <div className="dropdown-tick__link">Recommended</div>
          </li>
          <li className="dropdown-tick__item js-tab active" data-type="distance">
            <div className="dropdown-tick__link">Distance</div>
          </li>
          <li className="dropdown-tick__item js-tab" data-type="price">
            <div className="dropdown-tick__link">Price: High to Low</div>
          </li>
          <li className="dropdown-tick__item js-tab" data-type="price_desc">
            <div className="dropdown-tick__link">Price: Low to High</div>
          </li>
          <li className="dropdown-tick__item js-tab" data-type="year">
            <div className="dropdown-tick__link">Year</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Search);
