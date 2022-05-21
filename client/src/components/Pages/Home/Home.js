import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import RecentlyAddedSection    from '../../RecentlyAddedSection';
import FeaturedCarSection      from '../../FeaturedCarSection';
import SearchField             from '../../SearchField';

class Home extends React.Component {
  render() {
    return (
      <main className="center col-12 t-l">
        <section className="hero mb-l"
                 style={ { backgroundImage: `url(${ require('../../../files/home_page/1637148830.8175_d39b5bc1.jpg') })` } }>
          <h2 className="hero__title title-d-1 c-white">Dream drives for rent</h2>
          <p className="hero__txt c-white">Book a car from a real person</p>
          <div className="hero__btn-group btn-group btn-group--space-m">
            <div className="btn-group__item">
              <NavLink
                id="djs-home-heroshot-ntn-1"
                className="btn btn-primary btn-primary--medium"
                to={ { pathname: '/search/all' } }
                exact
              >
                Browse vehicles
              </NavLink>
            </div>
          </div>
        </section>
        <form id="main-search-form" className="search-filter search-filter--home js-search-filter"
              action="https://ExtraVagant.com/search" method="post">
          <SearchField/>
        </form>
        <ul id="djs-home-location-list" className="presets presets--home">
          <li className="presets__item">
            <a href="LosAngelescarrentals.html" className="presets__item__link">
              <div className="presets__img-wrap">
                <img src={ require('../../../files/home_page_presets/1643912812.9197_1ojefbhl.png') } alt="Los Angeles"
                     className="presets__img"/>
              </div>
              <div className="presets__label">Los Angeles</div>
            </a>
          </li>
          <li className="presets__item">
            <a href="Miamicarrentals.html" className="presets__item__link">
              <div className="presets__img-wrap">
                <img src={ require('../../../files/home_page_presets/1643912839.9809_1ojefbhl.jpg') } alt="Miami"
                     className="presets__img"/>
              </div>
              <div className="presets__label">Miami</div>
            </a>
          </li>
          <li className="presets__item">
            <a href="Phoenixcarrentals.html" className="presets__item__link">
              <div className="presets__img-wrap">
                <img src={ require('../../../files/home_page_presets/1643912866.1685_1ojefbhl.png') } alt="Phoenix"
                     className="presets__img"/>
              </div>
              <div className="presets__label">Phoenix</div>
            </a>
          </li>
          <li className="presets__item">
            <a href="Austinrentalcars.html" className="presets__item__link">
              <div className="presets__img-wrap">
                <img src={ require('../../../files/home_page_presets/1643912897.2069_1ojefbhl.png') } alt="Austin"
                     className="presets__img"/>
              </div>
              <div className="presets__label">Austin</div>
            </a>
          </li>
          <li className="presets__item">
            <a href="Chicagorentalcars.html" className="presets__item__link">
              <div className="presets__img-wrap">
                <img src={ require('../../../files/home_page_presets/1643913232.691_1ojefbhl.png') } alt="Chicago"
                     className="presets__img"/>
              </div>
              <div className="presets__label">Chicago</div>
            </a>
          </li>
          <li className="presets__item">
            <a href="Atlantarentalcars.html" className="presets__item__link">
              <div className="presets__img-wrap">
                <img src={ require('../../../files/home_page_presets/1643912938.1381_1ojefbhl.png') } alt="Atlanta"
                     className="presets__img"/>
              </div>
              <div className="presets__label">Atlanta</div>
            </a>
          </li>
        </ul>

        <FeaturedCarSection/>

        <section className="cta mt-xl">
          <div className="cta__inner">
            <div className="cta__left">
              <div className="cta__label"><p>Hagerty ExtraVagant&trade;</p>
              </div>
              <h2 className="cta__title">List your vehicle</h2>
              <a id="djs-home-listing-btn" href="lp/list-a-car/index.html"
                 className="cta__btn btn btn-primary btn-primary--large btn-primary--s-medium">
                Learn more </a>
            </div>
            <div className="cta__right">
              <div className="cta__info">
                <div className="cta__icon">
                  <svg className="cta__icon__dollar" aria-hidden="true" fill="none">
                    {/*<use*/ }
                    {/*  xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                    {/*  xlink:href="site/images/svg-sprite.svg#icon-dollar"*/ }
                    {/*></use>*/ }
                  </svg>
                  <svg className="cta__icon__dollar" aria-hidden="true" fill="none">
                    {/*<use*/ }
                    {/*  xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                    {/*  xlink:href="site/images/svg-sprite.svg#icon-dollar"*/ }
                    {/*></use>*/ }
                  </svg>
                </div>
                <h3 className="cta__info__title title-h-3">Earn money</h3>
                <div className="cta__info__txt txt-2"><p>Listing a car with ExtraVagant is an opportunity to make
                  money
                  for your next car adventure, whether it&rsquo;s road trip, restoration or another dream car. It
                  also
                  opens doors &mdash; to great experiences, car appreciation and automotive history.</p>
                </div>
              </div>
              <div className="cta__info">
                <svg className="cta__icon" aria-hidden="true" fill="none">
                  {/*<use*/ }
                  {/*  xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                  {/*  xlink:href="site/images/svg-sprite.svg#icon-driveable"*/ }
                  {/*></use>*/ }
                </svg>
                <h3 className="cta__info__title title-h-3">List your ride worry-free</h3>
                <div className="cta__info__txt txt-2"><p>As the owner, you determine the rental price, who gets
                  behind
                  the wheel and whether your vehicle will be used as a driving, chauffeured or event rental. And
                  rest
                  easy knowing that each renter is vetted by ExtraVagant. Plus, you&rsquo;ll have insurance
                  coverage for
                  the entire rental period.</p>
                </div>
              </div>
              <p className="cta__info-line txt-2"></p>
            </div>
          </div>
        </section>
        <section className="t-l t-s-l">
          <ul id="djs-home-category-list" className="presets presets--home">
            <li className="presets__item">
              <a href="rentaclassiccar.html" className="presets__item__link">
                <div className="presets__img-wrap">
                  <img src={ require('../../../files/home_page_presets/1643912979.5439_1ojefbhl.png') }
                       alt="Driving Rentals"
                       className="presets__img"/>
                </div>
                <div className="presets__label">Driving Rentals</div>
              </a>
            </li>
            <li className="presets__item">
              <a href="rentachauffeuredcar.html" className="presets__item__link">
                <div className="presets__img-wrap">
                  <img src={ require('../../../files/home_page_presets/1643912996.6956_1ojefbhl.png') }
                       alt="Chauffeured Rentals"
                       className="presets__img"/>
                </div>
                <div className="presets__label">Chauffeured Rentals</div>
              </a>
            </li>
            <li className="presets__item">
              <a href="Filmandphotoshootcarrentals.html" className="presets__item__link">
                <div className="presets__img-wrap">
                  <img src={ require('../../../files/home_page_presets/1643913017.1115_1ojefbhl.png') }
                       alt="Rent for Film, TV, Photo Shoots"
                       className="presets__img"/>
                </div>
                <div className="presets__label">Rent for Film, TV, Photo Shoots</div>
              </a>
            </li>
            <li className="presets__item">
              <a href="Fordmustangcarrental.html" className="presets__item__link">
                <div className="presets__img-wrap">
                  <img src={ require('../../../files/home_page_presets/1643913032.7096_1ojefbhl.png') } alt="Mustang"
                       className="presets__img"/>
                </div>
                <div className="presets__label">Mustang</div>
              </a>
            </li>
            <li className="presets__item">
              <a href="Chevroletcorvetterentals.html" className="presets__item__link">
                <div className="presets__img-wrap">
                  <img src={ require('../../../files/home_page_presets/1643913046.8314_1ojefbhl.png') } alt="Corvette"
                       className="presets__img"/>
                </div>
                <div className="presets__label">Corvette</div>
              </a>
            </li>
            <li className="presets__item">
              <a href="Porschecarrental.html" className="presets__item__link">
                <div className="presets__img-wrap">
                  <img src={ require('../../../files/home_page_presets/1643913065.5934_1ojefbhl.png') } alt="Porsche"
                       className="presets__img"/>
                </div>
                <div className="presets__label">Porsche</div>
              </a>
            </li>
          </ul>
        </section>

        <RecentlyAddedSection/>
      </main>
    )
  }
}

export default withRouter(Home);
