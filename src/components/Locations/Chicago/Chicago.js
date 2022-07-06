import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Chicago extends React.Component {
  render() {
    const data = [
      {
        "id": 1,
        "image": require("../../../files/car_images/8550/Nissan.jpg"),
        "name": "2020 Nissan",
        "deliveredFrom": "Granville, OH ",
        "price": "$60",
        "period": "per day"
      },
      {
        "id": 2,
        "image": require("../../../files/car_images/8550/sportage.jpg"),
        "name": "Sportage",
        "deliveredFrom": "Atlanta, GA",
        "price": "$130",
        "period": "per day"
      },
      {
        "id": 3,
        "image": require("../../../files/car_images/8500/Sportage2.jpg"),
        "name": "Sportage New",
        "deliveredFrom": "Rocklin, CA",
        "price": "$395",
        "period": "per day"
      }
      ,
      {
        "id": 4,
        "image": require("../../../files/car_images/8550/sportage.jpg"),
        "name": "Sportage New",
        "deliveredFrom": "Atlanta, GA",
        "price": "$130",
        "period": "per day"
      },
      {
        "id": 5,
        "image": require("../../../files/car_images/8550/sportage.jpg"),
        "name": "Sportage New",
        "deliveredFrom": "Atlanta, GA",
        "price": "$130",
        "period": "per day"
      },
      {
        "id": 6,
        "image": require("../../../files/car_images/8550/sportage.jpg"),
        "name": "Sportage New",
        "deliveredFrom": "Atlanta, GA",
        "price": "$130",
        "period": "per day"
      }
    ];

    return (
      (!!data && data.length > 0) ? (
        <section className="cards-preset t-sml t-s-ml">
          <h2 className="cards-preset__title title-h-2">We have these cars at Chicago</h2>
          <div id="djs-home-recently-list" className="cards-preset__set">
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
                      <div data-id="8502" className="card__icon-favorite js-icon-favorite-btn">
                        <svg className="icon icon--20">
                          {/*<use xlink:href="site/images/svg-sprite.svg#icon-favorite"></use>*/ }
                        </svg>
                      </div>
                      <div className="card__badge">Featured</div>
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
                          <div className="card__data-events-icon ">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="site/images/svg-sprite.svg#icon-driving-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon active">
                            <svg className="icon icon--24">
                              {/*<use xlink:href="site/images/svg-sprite.svg#icon-event-rental"></use>*/ }
                            </svg>
                          </div>
                          <div className="card__data-events-icon ">
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

export default Chicago;
