import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import RecentlyAddedSection    from '../../RecentlyAddedSection';

class AllCarsSections extends React.Component {
  render() {
    const data = [
      {
        "id": 1,
        "image": require("../../../files/car_images/8500/Tesla.jpg"),
        "name": "2022 TESLA",
        "deliveredFrom": "Hopkinton Township, MA",
        "price": "$295",
        "period": "per day"
      },
      {
        "id": 2,
        "image": require("../../../files/car_images/8500/bmw.jpg"),
        "name": "2015 BMW",
        "deliveredFrom": "Revere, MA ",
        "price": "$599",
        "period": "per day"
      },
      {
        "id": 3,
        "image": require("../../../files/car_images/8500/mercedes.jpg"),
        "name": "2016 MERCEDES",
        "deliveredFrom": "Revere, MA",
        "price": "$399",
        "period": "per day"
      }
    ];

    return (
      (!!data && data.length > 0) ? (
        <section className="cards-preset t-sml t-s-ml">
          <h2 className="cards-preset__title title-h-2">Featured cars</h2>


          <div id="djs-home-featured-list" className="cards-preset__set">
            {
              data.map((car, idx) => {
                return (
                  <NavLink
                    to={ { pathname: `/carDetails/${ car.id }` } }
                    className="cards-preset__set__item card animation-element active"
                    key={ idx }
                    exact
                  >
                    <div className="card__img">
                      <div data-id="8495" className="card__icon-favorite js-icon-favorite-btn">
                        <svg className="icon icon--20">
                          {/*<use xlink:href="site/images/svg-sprite.svg#icon-favorite"></use>*/ }
                        </svg>
                      </div>
                      <div className="card__badge active">Featured</div>
                      <img
                        src={ car.image }
                        alt={ car.name }/>
                    </div>
                    <div className="card__name">{ car.name }</div>
                    <div className="card__data">
                      <div className="card__data-location-large">
                        <div className="card__data-location">
                          <div className="card__data-location-icon">
                            <svg className="icon icon--16 icon--current-color">
                              {/*<use xlink:href="site/images/svg-sprite.svg#icon-location"></use>*/ }
                            </svg>
                          </div>
                          <span>
                                                    <span className="fw-400">Delivered from</span>
                            { car.deliveredFrom }                    </span>
                        </div>
                        <div className="card__data-events-type">
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--chauffeured-rental">
                              {/*<use xlink:href="site/images/svg-sprite.svg#icon-chauffeured-rental"></use>*/ }
                            </svg>
                          </div>
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
          <RecentlyAddedSection/>
          <RecentlyAddedSection/>
        </section>
      ) : null
    )
  }
}

export default withRouter(AllCarsSections);
