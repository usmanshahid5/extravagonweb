import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class RecentlyAddedSection extends React.Component {
  render() {
    const data = [
      {
        "id": 1,
        "image": require("../../files/car_images/8550/1651631408_php6271e530db3e6.jpg.small3ec3.jpg?t=1651631430"),
        "name": "1970 Volkswagen Beetle",
        "deliveredFrom": "Granville, OH ",
        "price": "$60",
        "period": "per day"
      },
      {
        "id": 2,
        "image": require("../../files/car_images/8550/1651617687_php6271af97b3d7f.jpg.smallbf56.jpg?t=1651617688"),
        "name": "2022 Dodge Charger SRT Hellcat",
        "deliveredFrom": "Atlanta, GA",
        "price": "$130",
        "period": "per day"
      },
      {
        "id": 3,
        "image": require("../../files/car_images/8500/1651609570_php62718fe208e64.jpg.smalle807.jpg?t=1651760566"),
        "name": "1974 Cadillac Sedan de Ville",
        "deliveredFrom": "Rocklin, CA",
        "price": "$395",
        "period": "per day"
      }
    ];

    return (
      (!!data && data.length > 0) ? (
        <section className="cards-preset t-sml t-s-ml">
          <h2 className="cards-preset__title title-h-2">Recently added</h2>
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

export default RecentlyAddedSection;