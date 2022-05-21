import React                   from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class SearchField extends React.Component {
  state = { value: '' };

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const value = pathname.split("/").pop();

    if (value !== 'all') {
      this.setState({ value })
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div id="main-search-desktop-wrap" className="search-filter__main-search">
        <div className="form-item-wrap form-item-wrap--main-search"
             data-transfer="main-search-desktop-wrap prepend main-search-mobile-wrap append 768">
          <div className="form-item-wrap__icon-main-search">
            <svg className="icon" aria-hidden="true" fill="none">
              {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
              {/*     xlink:href="site/images/svg-sprite.svg#icon-search"></use>*/ }
            </svg>
          </div>
          <input
            id="main-search" type="text" className="form-item js-google-places-autocomplete"
            placeholder="Enter address or city" data-fill-enable="btn-clear-main-search" name="q"
            role="presentation" value={ value } autoComplete="off"
            onChange={ (e) => this.setState({ value: e.target.value }) }
          />
          <div className="form-item-wrap__main-search-controls">
            <button id="btn-clear-main-search" type="button"
                    className="form-item-wrap__main-search-clear-btn js-self-close"
                    data-clear-field="main-search">
              <svg className="icon" aria-hidden="true" fill="none">
                {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
                {/*     xlink:href="site/images/svg-sprite.svg#clear-round-32"></use>*/ }
              </svg>
            </button>

            <NavLink
              to={ { pathname: !!value ? "/search/" + value : '/search/all', } }
              exact
            >
              <button type="button" className="btn-primary btn-primary--small btn-primary--main-search">
                Search
              </button>
            </NavLink>
          </div>
        </div>
        <button type="button" className="search-filter__mobile-btn-search dn df-s"
                data-open="mdl-search-mobile-search">
          <svg className="icon search-filter__mobile-btn-search__icon" aria-hidden="true" fill="none">
            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
            {/*     xlink:href="site/images/svg-sprite.svg#icon-search"></use>*/ }
          </svg>
          <span className="search-filter__mobile-btn-search__text js-search-filter-mobile-btn-text"></span>
        </button>
        <button className="search-filter__open-filters-mobile-btn js-open-filters-mobile-btn" type="button"
                data-open="mdl-search-filters">
          <svg className="icon" aria-hidden="true" fill="none">
            {/*<use xmlns:xlink="http://www.w3.org/1999/xlink"*/ }
            {/*     xlink:href="site/images/svg-sprite.svg#icon-filter"></use>*/ }
          </svg>
        </button>
      </div>
    )
  }
}

export default withRouter(SearchField);
