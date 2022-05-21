import React from 'react';

class ListCar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="custom-hero-shot  custom-hero-shot--adaptiv-height"
                 style={ { backgroundImage: `url(${ require('../../../files/lp/1642414542_phpZs2glV.png') })` } }>
          <div className="custom-hero-shot__content-wrapper col-12 center">
            <div
              className="custom-hero-shot__content-wrapper__content col-r-7-12 col-l-r-6-10 col-m-r-5-6 col-s-fw t-xl b-xl">
              <h1 className="custom-hero-shot__content-wrapper__content__title title-d-1 t-l b-s mb-l">
                Share your vehicle </h1>
              <div className="custom-hero-shot__content-wrapper__content__text txt-lead-1 t-s b-s mb-l t-s-s b-s-s">
                Share your cool vehicle with a community of car lovers
              </div>
              <div className="custom-hero-shot__content-wrapper__content__btn t-l b-l">
                <a href="list-a-car.html" title="List a car" className="btn btn-primary btn-primary--medium">
                  List a car </a>
              </div>
            </div>
          </div>
        </section>
        <div id="mdl-search-mobile-search" className="mdl-wrap mdl-wrap--full-screen mdl-wrap--dn-more-s">
          <div className="mdl">
            <div className="mdl__fs-header">
              <div className="mdl__fs-header-title title-h-5">Location</div>
              <button type="button"
                      className="btn btn-primary btn-primary--s-small js-main-search-mobile-btn js-mdl-close">Done
              </button>
              <button className="mdl__cross js-mdl-close js-mdl-close-main-search-mobile"
                      aria-label="close popup"></button>
            </div>
            <div className="mdl__fs-body">
              <div className="center col-12">
                <div className="center col-10 col-m-fw mdl__fs-content t-0">
                  <div id="main-search-mobile-wrap-39"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="custom-text-with-img center col-12 t-xl b-xl custom-text-with-img--reverse">
          <div className="custom-text-with-img__wrapper center col-m-r-4-6 col-s-fw t-xl b-xl t-l-0 b-l-0">
            <div className="custom-text-with-img__wrapper__content">
              <div className="custom-text-with-img__wrapper__content__img mt-m mb-m col-r-6-12 col-l-r-5-10 col-m-fw">
                <img src={ require('../../../files/lp/1643097043_phpdIMoP7.png') } alt=""/>
              </div>
              <div className="custom-text-with-img__wrapper__content__content col-r-5-12 col-l-r-4-10 col-m-fw">
                <div
                  className="custom-text-with-img__wrapper__content__content__title title-h-3 t-l b-s mt-m-l mt-s-m">You&#039;re
                  in control
                </div>
                <div className="custom-text-with-img__wrapper__content__content__text txt-1 t-s b-s  t-s-s b-s-s">
                  You know your baby better than anyone else, so you set the price, mileage and deposit on your car. You
                  determine if your vehicle will be used as a driving, chauffeured or display-only rental. And you can
                  rest easy knowing only highly-qualified, pre-screened drivers that you approve will get a turn behind
                  the wheel.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-text-with-img center col-12 t-xl b-xl">
          <div className="custom-text-with-img__wrapper center col-m-r-4-6 col-s-fw t-xl b-xl t-l-0 b-l-0">
            <div className="custom-text-with-img__wrapper__content">
              <div className="custom-text-with-img__wrapper__content__img mt-m mb-m col-r-6-12 col-l-r-5-10 col-m-fw">
                <img src={ require('../../../files/lp/1643119841_phpqOqdkQ.png') } alt=""/>
              </div>
              <div className="custom-text-with-img__wrapper__content__content col-r-5-12 col-l-r-4-10 col-m-fw">
                <div
                  className="custom-text-with-img__wrapper__content__content__title title-h-3 t-l b-s mt-m-l mt-s-m">Qualified
                  renters
                </div>
                <div className="custom-text-with-img__wrapper__content__content__text txt-1 t-s b-s  t-s-s b-s-s">
                  Anyone looking to book a car on ExtraVagant must go through an extensive vetting process with strict
                  eligibility requirements before they can get behind the wheel. Your car will be in good hands.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-text-with-img center col-12 t-xl b-xl custom-text-with-img--reverse">
          <div className="custom-text-with-img__wrapper center col-m-r-4-6 col-s-fw t-xl b-xl t-l-0 b-l-0">
            <div className="custom-text-with-img__wrapper__content">
              <div className="custom-text-with-img__wrapper__content__img mt-m mb-m col-r-6-12 col-l-r-5-10 col-m-fw">
                <img src={ require('../../../files/lp/1643119870_phpTevBi2.jpg') } alt=""/>
              </div>
              <div className="custom-text-with-img__wrapper__content__content col-r-5-12 col-l-r-4-10 col-m-fw">
                <div
                  className="custom-text-with-img__wrapper__content__content__title title-h-3 t-l b-s mt-m-l mt-s-m">We’ve
                  got you covered
                </div>
                <div className="custom-text-with-img__wrapper__content__content__text txt-1 t-s b-s  t-s-s b-s-s">
                  Every ExtraVagant rental provides insurance that includes liability coverage for both bodily injury and
                  property damage for the entire rental period. Read more about coverage details.
                </div>
                <div className="custom-text-with-img__wrapper__content__content__btn t-l b-l">
                  <a href="../faq-insurance/index.html" className="btn btn-primary btn-primary--medium"
                     title="Insurance FAQ">
                    Insurance FAQ </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="col-12 center custom-pages-selling-points t-xl b-xl b-m-l custom-pages-selling-points--col-4">
          <div className="custom-pages-selling-points__wrapper t-xl t-l-0">
            <div className="custom-pages-selling-points__wrapper__title title-d-2 t-l b-s mb-xl">How it works</div>
            <div className="custom-pages-selling-points__wrapper__row js-eq-height-items-wrap">
              <div
                className="custom-pages-selling-points__wrapper__row__item js-item-to-wrap t-s b-s b-s-s t-s-s mb-l mb-s-ml">
                <div className="custom-pages-selling-points__wrapper__row__item__img">
                  <img src={ require('../../../files/lp/1642407915_phpZ9fn7E.png') }/>
                </div>
                <div
                  className="custom-pages-selling-points__wrapper__row__item__title js-eq-height title-h-3 t-m b-s t-s-m b-s-s">List
                  your car
                </div>
                <div className="custom-pages-selling-points__wrapper__row__item__text txt-2 t-s b-s t-s-s b-s-s">
                  Once you have a ExtraVagant account, simply answer a few questions and upload some photos. Our team
                  will review the information to confirm everything is accurate. After that, your listing will go live.
                </div>
              </div>
              <div
                className="custom-pages-selling-points__wrapper__row__item js-item-to-wrap t-s b-s b-s-s t-s-s mb-l mb-s-ml">
                <div className="custom-pages-selling-points__wrapper__row__item__img">
                  <img src={ require('../../../files/lp/1642407930_phpLVFtQw.png') }/>
                </div>
                <div
                  className="custom-pages-selling-points__wrapper__row__item__title js-eq-height title-h-3 t-m b-s t-s-m b-s-s">Review
                  requests
                </div>
                <div className="custom-pages-selling-points__wrapper__row__item__text txt-2 t-s b-s t-s-s b-s-s">
                  Potential renters send their booking requests and any questions to you through ExtraVagant’s messaging
                  system. After answering questions and checking potential renter qualifications, you’ll decide who gets
                  the keys.
                </div>
              </div>
              <div
                className="custom-pages-selling-points__wrapper__row__item js-item-to-wrap t-s b-s b-s-s t-s-s mb-l mb-s-ml">
                <div className="custom-pages-selling-points__wrapper__row__item__img">
                  <img src={ require('../../../files/lp/1642407983_phplo218P.png') }/>
                </div>
                <div
                  className="custom-pages-selling-points__wrapper__row__item__title js-eq-height title-h-3 t-m b-s t-s-m b-s-s">Connect
                  directly
                </div>
                <div className="custom-pages-selling-points__wrapper__row__item__text txt-2 t-s b-s t-s-s b-s-s">
                  You’ll communicate directly with the renter to arrange a pick-up time and location. Simplify the
                  check-in and check-out process using the ExtraVagant app.
                </div>
              </div>
              <div
                className="custom-pages-selling-points__wrapper__row__item js-item-to-wrap t-s b-s b-s-s t-s-s mb-l mb-s-ml">
                <div className="custom-pages-selling-points__wrapper__row__item__img">
                  <img src={ require('../../../files/lp/1642408002_phplcA8oK.png') }/>
                </div>
                <div
                  className="custom-pages-selling-points__wrapper__row__item__title js-eq-height title-h-3 t-m b-s t-s-m b-s-s">Collect
                  payment
                </div>
                <div className="custom-pages-selling-points__wrapper__row__item__text txt-2 t-s b-s t-s-s b-s-s">
                  Once a rental period comes to an end, simply log in to your account to view balances. Your balance
                  will automatically transfer to your bank account in 72 hours, or you can choose to apply your balance
                  toward a ExtraVagant rental of your own.
                </div>
              </div>
            </div>
            <div className="custom-pages-selling-points__wrapper__btn t-l b-l t-s-m b-s-m">
              <a href="../faq-owner/index.html"
                 className="btn btn-primary btn-primary--dark btn-primary--dark--gray btn-primary--medium"
                 title="Owner FAQ">
                Owner FAQ </a>
            </div>
          </div>
        </section>
        <section className="custom-hero-shot  custom-hero-shot--adaptiv-height"
                 style={ { backgroundImage: `url(${ require('../../../files/lp/1642414427_phpjN5OIo.png') })` } }
        >
          <div className="custom-hero-shot__content-wrapper col-12 center">
            <div
              className="custom-hero-shot__content-wrapper__content col-r-7-12 col-l-r-6-10 col-m-r-5-6 col-s-fw t-xl b-xl">
              <h1 className="custom-hero-shot__content-wrapper__content__title title-d-1 t-l b-s mb-l">
                Let’s build your Garage </h1>
              <div className="custom-hero-shot__content-wrapper__content__btn t-l b-l">
                <a href="list-a-car.html" title="Get started" className="btn btn-primary btn-primary--medium">
                  Get started </a>
              </div>
            </div>
          </div>
        </section>
        <div id="mdl-search-mobile-search" className="mdl-wrap mdl-wrap--full-screen mdl-wrap--dn-more-s">
          <div className="mdl">
            <div className="mdl__fs-header">
              <div className="mdl__fs-header-title title-h-5">Location</div>
              <button type="button"
                      className="btn btn-primary btn-primary--s-small js-main-search-mobile-btn js-mdl-close">Done
              </button>
              <button className="mdl__cross js-mdl-close js-mdl-close-main-search-mobile"
                      aria-label="close popup"></button>
            </div>
            <div className="mdl__fs-body">
              <div className="center col-12">
                <div className="center col-10 col-m-fw mdl__fs-content t-0">
                  <div id="main-search-mobile-wrap-46"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ListCar;
