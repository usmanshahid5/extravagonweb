import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class FeaturedCarSection extends React.Component {
  render() {
    const data = [
      {
        "id": 1,
        "image": require("../../files/car_images/8500/1651509288_php627008282f07e.jpg.small0e90.jpg?t=1651509291"),
        "name": "2022 Ford Bronco",
        "deliveredFrom": "Hopkinton Township, MA",
        "price": "$295",
        "period": "per day"
      },
      {
        "id": 2,
        "image": require("../../files/car_images/8350/1647994040_php623a64b8d57b8.jpg.smalld6fd.jpg?t=1647994043"),
        "name": "2015 Chevrolet Corvette",
        "deliveredFrom": "Revere, MA ",
        "price": "$599",
        "period": "per day"
      },
      {
        "id": 3,
        "image": require("../../files/car_images/8350/1647993357_php623a620d9e55f.jpg.smalla323.jpg?t=1647993358"),
        "name": "2016 Jaguar F-Type",
        "deliveredFrom": "Revere, MA",
        "price": "$399",
        "period": "per day"
      }
    ];

    return (
      (!!data && data.length > 0) ? (
        <section className="cards-preset t-sml t-s-ml">
          <h2 className="cards-preset__title title-h-2">Featured cars</h2>

          <NavLink
            to={ { pathname: '/search/all' } }
            className="cards-preset__btn btn btn-primary btn-primary--small btn-primary--neutral"
            exact
          >
            <span>Browse<span className="dn-s"> all</span></span>
            <svg className="icon icon--16 icon--current-color dn-s">
              {/*<use xlink:href="site/images/svg-sprite.svg#icon-arrow"></use>*/ }
            </svg>
          </NavLink>

          <div id="djs-home-featured-list" className="cards-preset__set">
            {
              data.map((car, idx) => {
                return (
                  <NavLink
                    to={ { pathname: `/carDetails/${ car.id }` } }
                    className="cards-preset__set__item card active"
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
        </section>
      ) : null
    )
  }
}

export default withRouter(FeaturedCarSection);
