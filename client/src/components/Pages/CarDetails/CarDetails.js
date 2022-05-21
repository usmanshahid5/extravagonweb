import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class CarDetails extends React.Component {
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
        "image": "https://ExtraVagant.com/files/car_images/4900/1589995515_phpcnubet.jpg.small.jpg?t=1589996971",
        "name": "1969 Plymouth Roadrunner",
        "deliveredFrom": "Joplin, MO",
        "price": "$300",
        "period": "per day"
      },
      {
        "id": 2,
        "image": "https://ExtraVagant.com/files/car_images/2500/1568212980_phpmhyVVx.jpg.small.jpg?t=1568213774",
        "name": "1997 Dodge Viper",
        "deliveredFrom": "Plano, TX",
        "price": "$399",
        "period": "per day"
      },
      {
        "id": 3,
        "image": "https://ExtraVagant.com/files/car_images/7450/1629820246_php0jMRGO.jpg.small.jpg?t=1629820383",
        "name": "2017 Mercedes-Benz AMG GT",
        "deliveredFrom": "Houston, TX",
        "price": "$360",
        "period": "per day"
      },
      {
        "id": 3,
        "image": "https://ExtraVagant.com/files/car_images/7950/1642785193_phpbPN6rk.jpg.small.jpg?t=1642785379",
        "name": "2012 Ferrari FF",
        "deliveredFrom": "Scottsdale, AZ",
        "price": "$899",
        "period": "per day"
      }
    ];

    return (
      <React.Fragment>
        <main className="center col-12 edit-car t-xl b-xxl">
          <div className="center col-10 col-m-fw grid grid-between b-xl b-l-0">
            <div className="col-r-7-10 col-m-fw js-fixed-column-sibling">
              <h1 className="title-d-1">2022 Ford Bronco</h1>
              <div className="public-vehicle-rating">
                <div className="rating" data-rating="0">
                  <div className="rating__item rating__item--empty"></div>
                  <div className="rating__item rating__item--empty"></div>
                  <div className="rating__item rating__item--empty"></div>
                  <div className="rating__item rating__item--empty"></div>
                  <div className="rating__item rating__item--empty"></div>
                </div>
                <span className="public-vehicle-rating__rating-count">0</span>
              </div>


              <div className="public-vehicle-images t-sl t-s-l js-trigger-by-class-parent">
                <div className="public-vehicle-images__img-big" data-trigger-by-class="js-open-gallery">
                  <img
                    src={ require('../../../files/car_images/8500/1651509288_php627008282f07e.jpg.full0e90.jpg?t=1651509291') }
                    alt="2022 Ford Bronco"/>

                  <div className="public-vehicle-images__img-big-mobile-over">
                                                                            <span
                                                                              className="public-vehicle-images__img-big-numb">
                                          1&nbsp;&nbsp;of&nbsp;&nbsp;
                                                                              <span
                                                                                className="js-public-vehicle-owners-photos-number-mobile"></span>
                                        </span>
                  </div>
                </div>
                <input type="hidden" className="js-init-slider js-open-gallery js-owners-additional-photos-list"
                       data-gallery-src='{"path": "/files/car_images/8500/","images": [{"preview":"1651509288_php627008282f07e.jpg.small.jpg?t=1651509291","fullSize":"1651509288_php627008282f07e.jpg.full.jpg?t=1651509291"},{"preview":"1651509291_php6270082b7b4f0.jpg.small.jpg?t=1651509294","fullSize":"1651509291_php6270082b7b4f0.jpg.full.jpg?t=1651509294"},{"preview":"1651509294_php6270082e9b15d.jpg.small.jpg?t=1651509297","fullSize":"1651509294_php6270082e9b15d.jpg.full.jpg?t=1651509297"},{"preview":"1651509297_php62700831b259f.jpg.small.jpg?t=1651509300","fullSize":"1651509297_php62700831b259f.jpg.full.jpg?t=1651509300"},{"preview":"1651509300_php62700834b4e67.jpg.small.jpg?t=1651509303","fullSize":"1651509300_php62700834b4e67.jpg.full.jpg?t=1651509303"},{"preview":"1651509303_php62700837c0376.jpg.small.jpg?t=1651509306","fullSize":"1651509303_php62700837c0376.jpg.full.jpg?t=1651509306"},{"preview":"1651509306_php6270083ab3bed.jpg.small.jpg?t=1651509309","fullSize":"1651509306_php6270083ab3bed.jpg.full.jpg?t=1651509309"}]}'
                       onChange={ (e) => console.log(e) }
                />
                <div className="public-vehicle-images__img-small-wrap grid grid-wrap gutter-sxs">
                  <div className="public-vehicle-images__img-small" data-trigger-by-class="js-open-gallery">
                    <img
                      src={ require('../../../files/car_images/8500/1651509291_php6270082b7b4f0.jpg.small361a.jpg?t=1651509294') }
                      alt=""/>
                  </div>
                  <div className="public-vehicle-images__img-small" data-trigger-by-class="js-open-gallery">
                    <img
                      src={ require('../../../files/car_images/8500/1651509294_php6270082e9b15d.jpg.smallfd4f.jpg?t=1651509297') }
                      alt=""/>
                  </div>
                  <div className="public-vehicle-images__img-small" data-trigger-by-class="js-open-gallery">
                    <img
                      src={ require('../../../files/car_images/8500/1651509297_php62700831b259f.jpg.smalle5ec.jpg?t=1651509300') }
                      alt=""/>
                  </div>
                  <div className="public-vehicle-images__img-small" data-trigger-by-class="js-open-gallery">
                    <img
                      src={ require('../../../files/car_images/8500/1651509300_php62700834b4e67.jpg.small16d9.jpg?t=1651509303') }
                      alt=""/>
                  </div>
                  <div className="public-vehicle-images__img-small" data-trigger-by-class="js-open-gallery">
                    <img
                      src={ require('../../../files/car_images/8500/1651509303_php62700837c0376.jpg.smalla646.jpg?t=1651509306') }
                      alt=""/>
                  </div>
                  <div className="public-vehicle-images__img-small" data-trigger-by-class="js-open-gallery">
                    <div className="additional-photos-numbs additional-photos-numbs--over">
                      +<span className="js-public-vehicle-owners-photos-number-desktop"></span>
                    </div>
                    <img
                      src={ require('../../../files/car_images/8500/1651509306_php6270083ab3bed.jpg.small8923.jpg?t=1651509309') }
                      alt=""/>
                  </div>
                </div>
              </div>
              <div id="sidebar-mobile-wrap"></div>
              <div
                className="public-vehicle-data-table public-vehicle-data-table--public public-vehicle-section js-public-mobile-accordion js-toggle-closest-parent">
                <div className="public-vehicle-data-table__row">
                  <div className="public-vehicle-data-table__cell public-vehicle-data-table__cell--user-info">
                    <div className="public-vehicle-data-table__label public-vehicle-data-table__label--owner">
                      Owner
                    </div>
                    <div className="public-vehicle-data-table__data public-vehicle-data-table__data--owner">
                      <a href="../collection/51503.html">
                        <img className="public-vehicle-data-table__user-photo"
                             src={ require('../../../files/users/52000/1647986830_php623a488e201e2.png.smalldfcc.jpg?t=1651758082') }
                             alt="Admin Admin"/>
                        Admin Admin </a>
                    </div>
                    <button id="jds-try-send-message" type="button"
                            className="btn btn-primary btn-primary--neutral btn--s-icon-message btn--public-vehicle-message ml-a"
                            data-open="mdl-signin" data-id="51503">
                      Message
                    </button>
                  </div>
                </div>
                <div className="public-vehicle-data-table__row">
                  <div className="public-vehicle-data-table__cell">
                    <div className="public-vehicle-data-table__label">Mileage</div>
                    <div className="public-vehicle-data-table__data">1800 mi</div>
                  </div>
                  <div className="public-vehicle-data-table__cell">
                    <div className="public-vehicle-data-table__label">Engine</div>
                    <div className="public-vehicle-data-table__data">6 Cylinder</div>
                  </div>
                </div>
                <div className="public-vehicle-data-table__row">
                  <div className="public-vehicle-data-table__cell">
                    <div className="public-vehicle-data-table__label">Transmission</div>
                    <div className="public-vehicle-data-table__data">Automatic</div>
                  </div>
                  <div className="public-vehicle-data-table__cell">
                    <div className="public-vehicle-data-table__label">Body Style</div>
                    <div className="public-vehicle-data-table__data">2 Door</div>
                  </div>
                </div>
                <div className="public-vehicle-section__controls">
                  <button type="button"
                          className="public-vehicle-section__btn js-public-mobile-accordion-btn js-toggle-closest-btn">
                    <span className="public-vehicle-section__btn__more">Show more</span>
                    <span className="public-vehicle-section__btn__less">Show less</span>
                    <svg className="icon icon--16">
                      {/*<use xlink:href="../site/images/svg-sprite.svg#icon-arrow-expand-16"></use>*/ }
                    </svg>
                  </button>
                </div>
              </div>
              <div className="t-xl public-vehicle-section js-public-mobile-accordion js-toggle-closest-parent">
                <h3 className="title-h-3 t-m b-s">Vehicle story</h3>
                <div className="txt-lead-1 t-m b-m cke-default">
                  <p>BIGFOOT SPOTTED<br/>
                    <br/>
                    Yep, this is the Sasquatch. It says so right on the paperwork. The 2022 ford bronco is better off
                    road than a Jeep Wrangler, a Range Rover Defender, and pretty much anything else you can think of.
                    But it&#039;s not just it&#039;s off-road prowess that makes it such a fun ride, it&#039;s also
                    everything else about it! The roof comes off, doors come off, the rest of the hard top comes off,
                    essentially the only thing that doesn&#039;t come off is the fun factor. This thing is PERFECT for
                    a summer day cruising down to the beach, cruising downtown, going camping or fishing, going up to
                    the mountains to go skiing, hiking, or otherwise adventuring. This is the perfect
                    adventure-mobile, and we&#039;ve decided to rent it out. <br/>
                    <br/>
                    We believe in No Boring Cars, and this 2022 Ford Bronco Sasquatch is one of the most un-boring
                    cars you can drive.</p>
                </div>
                <div className="t-sl">
                  <h3 className="title-h-3 t-m b-s">Transmission</h3>
                  <div className="txt-lead-2 cke-default t-s b-s">
                    <p>10-Speed Automatic</p>
                  </div>
                </div>
                <div className="public-vehicle-section__controls">
                  <button type="button"
                          className="public-vehicle-section__btn js-public-mobile-accordion-btn js-toggle-closest-btn">
                    <span className="public-vehicle-section__btn__more">Show more</span>
                    <span className="public-vehicle-section__btn__less">Show less</span>
                    <svg className="icon icon--16">
                      {/*<use xlink:href="../site/images/svg-sprite.svg#icon-arrow-expand-16"></use>*/ }
                    </svg>
                  </button>
                </div>
              </div>
              <div className="t-lxl public-vehicle-section js-public-mobile-accordion js-toggle-closest-parent">
                <h2 className="title-h-1 b-s">Policies</h2>
                <div className="public-vehicle-data-table t-l">
                  <div className="public-vehicle-data-table__row">
                    <div className="public-vehicle-data-table__cell">
                      <div className="public-vehicle-data-table__label">Fuel Policy</div>
                      <div className="public-vehicle-data-table__data">Return with the same amount</div>
                    </div>
                    <div className="public-vehicle-data-table__cell">
                      <div className="public-vehicle-data-table__label">Mileage Limit</div>
                      <div className="public-vehicle-data-table__data">200 miles per day</div>
                    </div>
                  </div>
                  <div className="public-vehicle-data-table__row">
                    <div className="public-vehicle-data-table__cell">
                      <div className="public-vehicle-data-table__label">Weather</div>
                      <div className="public-vehicle-data-table__data">Owner&#039;s Discretion</div>
                    </div>
                    <div className="public-vehicle-data-table__cell">
                      <div className="public-vehicle-data-table__label">Overage Rate/Mile</div>
                      <div className="public-vehicle-data-table__data">1.00</div>
                    </div>
                  </div>
                </div>
                <div className="public-vehicle-section__controls">
                  <button type="button"
                          className="public-vehicle-section__btn js-public-mobile-accordion-btn js-toggle-closest-btn">
                    <span className="public-vehicle-section__btn__more">Show more</span>
                    <span className="public-vehicle-section__btn__less">Show less</span>
                    <svg className="icon icon--16">
                      {/*<use xlink:href="../site/images/svg-sprite.svg#icon-arrow-expand-16"></use>*/ }
                    </svg>
                  </button>
                </div>
              </div>

              <div className="t-lxl">
                <h2 className="title-h-1 b-s">
                  <a className="title-h-1 b-s dib c-dark-1" href="../collection/51503.html">
                    Admin's Collection
                  </a>
                </h2>
                <div className="cards gutter-m cards--public-vehicle-collection gutter-s-0">
                  <div className="cards__item card col-ws-m-3 col-full-hd-ws-m-2 col-s-fw mt-l card--small">
                    <input className="car_id" type="hidden" value="8330" onChange={ (e) => console.log(e) }/>
                    <div className="card__img">
                      <div className="card__icon-favorite">
                        <svg className="icon icon--20">
                          {/*<use xlink:href="../site/images/svg-sprite.svg#icon-favorite"></use>*/ }
                        </svg>
                      </div>

                      <NavLink
                        to={ { pathname: `/carDetails/1`, } }
                        target="_blank"
                        exact
                      >
                        <img
                          src={ require('../../../files/car_images/8350/1647991428_php623a5a846466b.jpg.small198c.jpg?t=1647991431') }
                          alt="2018 Porsche Boxster"/>
                      </NavLink>
                    </div>
                    <div className="card__name">2018 Porsche Boxster</div>
                    <div className="card__data">
                      <div className="card__data-location-large">
                        <div className="card__data-location">
                          <div className="card__data-location-icon">
                            <svg className="icon icon--16 icon--current-color">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-location"></use>*/ }
                            </svg>
                          </div>
                          <span>Revere, MA</span>
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
                      </div>
                      <div className="card__data-events">
                        <div className="card__data-events-type">
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--chauffeured-rental">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-chauffeured-rental"></use>*/ }
                            </svg>
                          </div>
                        </div>

                        <div className="card__data-price">
                          <div className="card__data-price-numb">
                            $399
                          </div>
                          <div className="card__data-price-period">per day</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cards__item card col-ws-m-3 col-full-hd-ws-m-2 col-s-fw mt-l card--small">
                    <input className="car_id" type="hidden" value="8331" onChange={ (e) => console.log(e) }/>
                    <div className="card__img">
                      <div className="card__icon-favorite">
                        <svg className="icon icon--20">
                          {/*<use xlink:href="../site/images/svg-sprite.svg#icon-favorite"></use>*/ }
                        </svg>
                      </div>
                      <NavLink
                        to={ { pathname: `/carDetails/2`, } }
                        target="_blank"
                        exact
                      >
                        <img
                          src={ require('../../../files/car_images/8350/1647992473_php623a5e996b5e7.jpg.small4564.jpg?t=1647992476') }
                          alt="2022 Toyota GR86"/>

                      </NavLink>
                    </div>
                    <div className="card__name">2022 Toyota GR86</div>
                    <div className="card__data">
                      <div className="card__data-location-large">
                        <div className="card__data-location">
                          <div className="card__data-location-icon">
                            <svg className="icon icon--16 icon--current-color">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-location"></use>*/ }
                            </svg>
                          </div>
                          <span>Revere, MA</span>
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
                      </div>
                      <div className="card__data-events">
                        <div className="card__data-events-type">
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--chauffeured-rental">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-chauffeured-rental"></use>*/ }
                            </svg>
                          </div>
                        </div>

                        <div className="card__data-price">
                          <div className="card__data-price-numb">
                            $299
                          </div>
                          <div className="card__data-price-period">per day</div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="cards__item card col-ws-m-3 col-full-hd-ws-m-2 col-s-fw mt-l card--small">
                    <input className="car_id" type="hidden" value="8332" onChange={ (e) => console.log(e) }/>
                    <div className="card__img">
                      <div className="card__icon-favorite">
                        <svg className="icon icon--20">
                          {/*<use xlink:href="../site/images/svg-sprite.svg#icon-favorite"></use>*/ }
                        </svg>
                      </div>
                      <NavLink
                        to={ { pathname: `/carDetails/3`, } }
                        target="_blank"
                        exact
                      >
                        <img
                          src={ require('../../../files/car_images/8350/1647993357_php623a620d9e55f.jpg.smalla323.jpg?t=1647993358') }
                          alt="2016 Jaguar F-Type"/>
                      </NavLink>
                    </div>
                    <div className="card__name">2016 Jaguar F-Type</div>
                    <div className="card__data">
                      <div className="card__data-location-large">
                        <div className="card__data-location">
                          <div className="card__data-location-icon">
                            <svg className="icon icon--16 icon--current-color">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-location"></use>*/ }
                            </svg>
                          </div>
                          <span>Revere, MA</span>
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
                      </div>
                      <div className="card__data-events">
                        <div className="card__data-events-type">
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--chauffeured-rental">
                              {/*<use xlink:href="../site/images/svg-sprite.svg#icon-chauffeured-rental"></use>*/ }
                            </svg>
                          </div>
                        </div>

                        <div className="card__data-price">
                          <div className="card__data-price-numb">
                            $399
                          </div>
                          <div className="card__data-price-period">per day</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div id="sidebar-desktop-wrap" className="public-vehicle-right-column col-r-3-10 js-fixed-column-wrap">
              <div id="viewing-a-public-listing" className="public-vehicle-options active js-fixed-column"
                   data-transfer="sidebar-desktop-wrap append sidebar-mobile-wrap append 1200">
                <div className="public-vehicle-options__inner">
                  <div className="tabs-wrap tabs-wrap--public-viewing js-tab-parent">
                    <div id="driving-rental-type-btn"
                         className="tab tab--public-viewing js-tab djs-rental-type-block active" data-id="driving"
                         data-trigger="check-availability-radio-btn-driving">
                    <span className="tab__label">
                      Driving
                    </span>
                      <span className="tab__numb">$295</span>
                      <div className="tab__sign">full day</div>
                    </div>
                    <div id="event-rental-type-btn" className="tab tab--public-viewing js-tab djs-rental-type-block "
                         data-id="event" data-trigger="check-availability-radio-btn-event">
                    <span className="tab__label">
                      Event
                    </span>
                      <span className="tab__numb">$295</span>
                      <div className="tab__sign">full day</div>
                    </div>
                    <div id="chauffeured-rental-type-btn"
                         className="tab tab--public-viewing js-tab djs-rental-type-block " data-id="chauffeured"
                         data-trigger="check-availability-radio-btn-chauffeured">
                    <span className="tab__label">
                      Chauffeured
                    </span>
                      <span className="tab__numb">$295</span>
                      <div className="tab__sign">full day</div>
                    </div>
                    <button type="button" className="btn-icon btn-icon--rental-types"
                            data-open="mdl-rental-types-info">
                      <svg className="icon icon--help-rental-types">
                        {/*<use xlink:href="../site/images/svg-sprite.svg#icon-help"></use>*/ }
                      </svg>
                    </button>
                  </div>
                  <div id="djs-availability-picker"
                       className="public-controls public-controls--availability mt-m mt-m-0 ml-s-a"
                       data-car-id="8495"
                       data-rental-type=""
                       data-pick-up-date=""
                       data-pick-up-time=""
                       data-drop-off-date=""
                       data-drop-off-time="">

                    <div className="public-controls__left dn-m">
                      <div className="public-controls__label">Pick-up:</div>
                      <div className="public-controls__label">Drop off:</div>
                    </div>
                    <button type="button"
                            className="btn btn-primary btn-primary--medium btn-primary--neutral btn--check-availability active ml-a djs-car-availability-btn"
                            data-open-availability="mdl-check-availability" data-state="djs-availability-picker">
                      Check availability
                    </button>
                  </div>
                  <div className="public-controls public-controls--edit mt-m dn-m">
                    <div className="public-controls__left">
                      <div className="public-controls__label">
                        Pick-up/Return location
                      </div>
                      <div className="public-controls__location">
                        Car location:
                        Hopkinton Township, MA
                      </div>
                    </div>
                    <button id="djs-pickup-return-location" type="button" className="public-controls__btn-edit"
                            data-open-location="mdl-pickup-return-location"
                            data-bar="1"
                            data-car-id="8495"
                            data-delivery-id="current"
                            data-delivery-location=""
                            data-delivery-fee="0.00"
                    >
                      <svg className="public-controls__btn-edit-icon icon icon--current-color-stroke">
                        {/*<use xlink:href="../site/images/svg-sprite.svg#icon-edit"></use>*/ }
                      </svg>
                    </button>
                  </div>
                  <div className="rental-price-table rental-price-table--public-listing">
                    <div className="rental-price-table__row">
                      <div className="rental-price-table__cell">Rental Fee</div>
                      <div className="rental-price-table__cell">
                        —
                      </div>
                    </div>
                    <div className="rental-price-table__row">
                      <div className="rental-price-table__cell">Service Fee</div>
                      <div className="rental-price-table__cell">
                        —
                      </div>
                    </div>
                    <div className="rental-price-table__row">
                      <div className="rental-price-table__cell">Delivery Fee</div>
                      <div className="rental-price-table__cell">
                        —
                      </div>
                    </div>
                    <div className="rental-price-table__row">
                      <div className="rental-price-table__cell">Taxes/Fees</div>
                      <div className="rental-price-table__cell">
                        —
                      </div>
                    </div>
                    <div className="rental-price-table__row">
                      <div className="rental-price-table__cell rental-price-table__cell--total">
                        Total
                      </div>
                      <div id="djs-price-total" className="rental-price-table__cell rental-price-table__cell--total"
                           data-value="0">
                        —
                      </div>
                    </div>
                    <div className="devider devider--rental-price-table"></div>
                    <div className="rental-price-table__row">
                      <div className="rental-price-table__cell">Security deposit</div>
                      <div className="rental-price-table__cell">$350</div>
                    </div>
                  </div>
                  <div className="public-vehicle-options__info fw txt-3 cke-default">
                    Every booking
                    <a target="_blank" href="../faq-insurance/index.html">includes insurance and roadside
                      assistance</a> at no extra cost.
                  </div>
                  <div className="txt-3 t-m cke-default dn-m">
                    Learn more about <span className="link-txt" data-open="mdl-rental-types-info">rental types</span>
                  </div>
                </div>
                <div className="public-vehicle-options__btn-bottom-wrap">
                  <button type="button"
                          className="public-vehicle-options__btn-bottom btn btn-primary btn-primary--medium djs-car-reserve-btn">
                    Reserve a car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="public-vehicle-btn js-fixed-bottom-bar">
          <div className="public-vehicle-btn__outer center col-10 col-m-fw">
            <div className="public-vehicle-btn__inner col-r-3-10 col-m-fw">
              <div id="total-price-bottom" className="public-vehicle-btn__data"></div>
              <div className="public-vehicle-btn__btn-wrap">
                <button type="button"
                        className="start-booking-car public-vehicle-btn__btn btn btn-primary btn-primary--medium djs-car-reserve-btn">
                  Reserve a car
                </button>
              </div>
            </div>
          </div>
        </div>
        <RentalTypesInfo/>
        <CheckAvailability/>
        <PickUpReturnLocation/>
      </React.Fragment>
    )
  }
}

class RentalTypesInfo extends React.Component {
  render() {
    return (
      <div id="mdl-rental-types-info" className="mdl-wrap mdl-wrap--s-full-screen">
        <div className="mdl-center col-12">
          <div className="mdl col-r-6-12 col-s-fw">
            <div className="mdl__header mdl__header--ta-c">
              Rental types differences
              <div className="mdl__cross mdl__cross--header js-mdl-close js-overlay-end"></div>
            </div>
            <div className="mdl__content mdl__content--rental-types-info">
              <h3 className="title-h-3">Driving</h3>
              <div className="txt-lead-3 t-m">
                Approved drivers will operate the car on public roads.
              </div>
              <h3 className="title-h-3 t-sl">Event</h3>
              <div className="txt-lead-3 t-m">
                This is intended for non-driving uses like photo shoots and static displays.
                The car will need to be delivered by the owner to the renter's location.
              </div>
              <h3 className="title-h-3 t-sl">Chauffeured</h3>
              <div className="txt-lead-3 t-m">
                Owner or their approved agent drives the renter in the car.
                This option is popular for weddings or other special events.
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

class PickUpReturnLocation extends React.Component {
  render() {
    return (
      <div id="mdl-pickup-return-location" className="mdl-wrap mdl-wrap--m-full-screen djs-mdl-location">
        <div className="mdl-center col-12">
          <div className="mdl mdl--col-5-fixed col-m-fw">
            <div className="mdl__cross mdl__cross--header js-mdl-close" data-close="mdl-booking-steps"></div>
            <div className="mdl__header title-h-4 ta-c">
              <span className="dn-m">Pick-up/Return Location</span> <span
              className="txt-3 fw-400 dn di-m">Location</span>
              <button type="button"
                      className="btn btn-primary btn-primary--m-small dn dif-m djs-btn-done djs-location-btn-apply"
                      disabled>
                Done
              </button>
            </div>
            <div className="mdl__content mdl__content--pickup-return-location">
              <h3 className="title-h-2 dn db-m b-m-s">Pick-up/Return Location</h3>
              <div id="djs-location-error" className="banner banner--alert mb-m mb-s-0 mt-m-m txt-16-24">
                <svg className="icon icon--24 icon--c-alert icon--banner">
                  {/*<use xlink:href="../site/images/svg-sprite.svg#icon-state-error"></use>*/ }
                </svg>
                <div className="banner__txt">
                  <span></span>
                </div>
              </div>
              <div className="djs-mdl-location-content"></div>
              <div className="btn-group btn-group--space-m">
                <div className="btn-group__item">
                  <button type="button" className="btn btn-primary btn-primary--medium dn-m djs-location-btn-apply"
                          disabled>
                    Apply
                  </button>
                </div>
              </div>
              <div className="btn-group btn-group--m-popup-bottom-fixed dn t-s t-s-s">
                <button type="button" className="btn-txt btn-txt--m-popup-bottom-fixed dn dib-m js-mdl-close"
                        data-close="mdl-booking-steps">Cancel
                </button>
                <div className="btn-group__item">
                  <button
                    className="btn btn-primary btn-primary--medium btn-primary--s-default djs-location-btn-next">
                    <span>Next</span>
                    <svg className="icon icon--8-16">
                      {/*<use xlink:href="../site/images/svg-sprite.svg#icon-right"></use>*/ }
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class CheckAvailability extends React.Component {
  render() {
    return (
      <div id="mdl-check-availability" className="mdl-wrap mdl-wrap--full-screen js-mdl-check-availability">
        <div className="mdl mdl--full-screen">
          <div className="mdl__fs-header">
            <div className="mdl__fs-header-title title-h-5"></div>
            <button id="djs-availability-rental-type-btn-save" type="button"
                    className="btn btn-primary btn-primary--s-small"
                    data-tab-dependent-trigger="rental-type-availability">
              Done
            </button>
            <button className="mdl__cross js-mdl-close"></button>
          </div>
          <div className="mdl__fs-body">
            <div className="center col-12">
              <div className="mdl__fs-content mdl__fs-content--add-vehicle">
                <div className="edit-date-space col-r-8-12 col-l-r-7-10 col-m-fw">
                  <h2 className="title-h-2">Check Availability</h2>
                  <div id="rental-type-availability"
                       className="radio-tabs radio-tabs--s-column t-sl js-tab-parent"></div>
                  <div id="djs-availability-calendar"
                       className="edit-date-space__event-section mt-m-0 b-m-0 active"></div>
                </div>
                <div className="col-r-3-12 col-m-fw mdl__fs-content__side-column t-m-l">
                  <div className="form grid grid-wrap grid-between js-zindex-parent">
                    <div className="fbs col-m-r-3-6 col-s-fw">
                      <div className="form-cell form-cell--viewing-my-vehicle-date js-zindex">
                        <label htmlFor="pick-up-date-availability" className="form-label form-label--date">Pick
                          up</label>
                        <div
                          className="form-item-wrap form-item-wrap--date form-item-wrap--date--public-vehicle stppg js-datepicker-container">
                          <input id="pick-up-date-availability" type="text"
                                 className="form-item form-item--date form-item--date-ym js-datepicker-ym js-datepicker"
                                 readOnly autoComplete="off" onChange={ (e) => console.log(e) }/>
                          <input id="pick-up-date-availability-alt" className="js-datepicker-alt" type="hidden"
                                 value="" autoComplete="off" onChange={ (e) => console.log(e) }/>
                        </div>
                      </div>
                      <div className="form-cell form-cell--viewing-my-vehicle-time js-zindex">
                        <div className="form-label">&nbsp;</div>

                        <div className="form-item-wrap form-item-wrap--time">
                          <input type="text" id="pick-up-time-availability"
                                 className="form-item js-swiper-timepicker-field" value="" readOnly
                                 data-drop="pickup-time-dropdown" data-hours="8" data-minutes="00" data-period="am"
                                 autoComplete="off" onChange={ (e) => console.log(e) }/>
                          <div id="pickup-time-dropdown"
                               className="timepicker timepicker--public-vehicle stppg dropdown js-dropdown">
                            <div className="timepicker__inner">
                              <div className="picker">
                                <div className="picker__pill picker__pill--hours"></div>
                                <div className="picker__pill picker__pill--minutes"></div>
                                <div className="picker__pill picker__pill--periods"></div>
                                <div className="swiper-container timepicker-hours">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">1</div>
                                    <div className="swiper-slide">2</div>
                                    <div className="swiper-slide">3</div>
                                    <div className="swiper-slide">4</div>
                                    <div className="swiper-slide">5</div>
                                    <div className="swiper-slide">6</div>
                                    <div className="swiper-slide">7</div>
                                    <div className="swiper-slide">8</div>
                                    <div className="swiper-slide">9</div>
                                    <div className="swiper-slide">10</div>
                                    <div className="swiper-slide">11</div>
                                    <div className="swiper-slide">12</div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="swiper-container timepicker-minutes ">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">00</div>
                                    <div className="swiper-slide">05</div>
                                    <div className="swiper-slide">10</div>
                                    <div className="swiper-slide">15</div>
                                    <div className="swiper-slide">20</div>
                                    <div className="swiper-slide">25</div>
                                    <div className="swiper-slide">30</div>
                                    <div className="swiper-slide">35</div>
                                    <div className="swiper-slide">40</div>
                                    <div className="swiper-slide">45</div>
                                    <div className="swiper-slide">50</div>
                                    <div className="swiper-slide">55</div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="swiper-container timepicker-periods ">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">am</div>
                                    <div className="swiper-slide">pm</div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="vizor"></div>
                              </div>
                              <div className="timepicker__footer">
                                <button type="button"
                                        className="btn btn-primary js-pick-time-btn js-pick-time-btn-pickup"
                                        role="button">Pick Time
                                </button>
                              </div>
                              <button type="button" role="button"
                                      className="timepicker__mobile-btn-close js-timepicker-close-btn"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fbs col-m-r-3-6 col-s-fw">
                      <div className="form-cell form-cell--viewing-my-vehicle-date js-zindex">
                        <label htmlFor="drop-off-date-availability" className="form-label form-label--date">Drop
                          off</label>
                        <div
                          className="form-item-wrap form-item-wrap--date form-item-wrap--date--public-vehicle stppg js-datepicker-container">
                          <input id="drop-off-date-availability" type="text"
                                 className="form-item form-item--date form-item--date-ym js-datepicker-ym js-datepicker"
                                 readOnly autoComplete="off" onChange={ (e) => console.log(e) }/>
                          <input id="drop-off-date-availability-alt" className="js-datepicker-alt" type="hidden"
                                 value="" autoComplete="off" onChange={ (e) => console.log(e) }/>
                        </div>
                      </div>
                      <div className="form-cell form-cell--viewing-my-vehicle-time js-zindex">
                        <div className="form-label">&nbsp;</div>

                        <div className="form-item-wrap form-item-wrap--time">
                          <input type="text" id="drop-off-time-availability"
                                 className="form-item js-swiper-timepicker-field" value="" readOnly
                                 data-drop="dropoff-time-dropdown" data-hours="10" data-minutes="00"
                                 data-period="pm" autoComplete="off" onChange={ (e) => console.log(e) }/>
                          <div id="dropoff-time-dropdown"
                               className="timepicker timepicker--public-vehicle stppg dropdown js-dropdown">
                            <div className="timepicker__inner">
                              <div className="picker">
                                <div className="picker__pill picker__pill--hours"></div>
                                <div className="picker__pill picker__pill--minutes"></div>
                                <div className="picker__pill picker__pill--periods"></div>
                                <div className="swiper-container timepicker-hours">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">1</div>
                                    <div className="swiper-slide">2</div>
                                    <div className="swiper-slide">3</div>
                                    <div className="swiper-slide">4</div>
                                    <div className="swiper-slide">5</div>
                                    <div className="swiper-slide">6</div>
                                    <div className="swiper-slide">7</div>
                                    <div className="swiper-slide">8</div>
                                    <div className="swiper-slide">9</div>
                                    <div className="swiper-slide">10</div>
                                    <div className="swiper-slide">11</div>
                                    <div className="swiper-slide">12</div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="swiper-container timepicker-minutes">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">00</div>
                                    <div className="swiper-slide">05</div>
                                    <div className="swiper-slide">10</div>
                                    <div className="swiper-slide">15</div>
                                    <div className="swiper-slide">20</div>
                                    <div className="swiper-slide">25</div>
                                    <div className="swiper-slide">30</div>
                                    <div className="swiper-slide">35</div>
                                    <div className="swiper-slide">40</div>
                                    <div className="swiper-slide">45</div>
                                    <div className="swiper-slide">50</div>
                                    <div className="swiper-slide">55</div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="swiper-container timepicker-periods">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">am</div>
                                    <div className="swiper-slide">pm</div>
                                  </div>
                                  <div className="swiper-button-prev"></div>
                                  <div className="swiper-button-next"></div>
                                </div>
                                <div className="vizor"></div>
                              </div>
                              <div className="timepicker__footer">
                                <button type="button"
                                        className="btn btn-primary js-pick-time-btn js-pick-time-btn-dropoff"
                                        role="button">Pick Time
                                </button>
                              </div>
                              <button type="button" role="button"
                                      className="timepicker__mobile-btn-close js-timepicker-close-btn"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="djs-check-availability-price">
                    <div className="rental-price-table mt-sl mt-s-sl">
                      <div className="rental-price-table__row">
                        <div className="rental-price-table__cell">Rental Fee</div>
                        <div className="rental-price-table__cell djs-amount">
                          —
                        </div>
                      </div>
                      <div className="rental-price-table__row dn df-m">
                        <div className="rental-price-table__cell">Taxes/Fees</div>
                        <div className="rental-price-table__cell">
                          —
                        </div>
                      </div>
                      <div className="rental-price-table__row dn df-m">
                        <div className="rental-price-table__cell">Service Fee</div>
                        <div className="rental-price-table__cell djs-amount">
                          —
                        </div>
                      </div>
                    </div>
                    <div className="txt-4 mt-ml t-m dn df-m">
                      * Fuel cost not included. You will only be charged when request is
                      accepted. The deposit is being held by Hagerty. We will transfer
                      this to your bank within 48 hours as long as drop off inspections
                      is complete.
                    </div>
                  </div>
                </div>
                <div className="btn-group btn-group--m-popup-bottom-fixed dn t-s t-s-s">
                  <button type="button"
                          className="btn-txt btn-txt--m-popup-bottom-fixed dn dib-m js-mdl-close">Cancel
                  </button>
                  <div className="btn-group__item">
                    <button id="djs-availability-rental-type-btn-next"
                            className="btn btn-primary btn-primary--medium btn-primary--s-default ">
                      <span>Next</span>
                      <svg className="icon icon--8-16">
                        {/*<use xlink:href="../site/images/svg-sprite.svg#icon-right"></use>*/ }
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CarDetails);
