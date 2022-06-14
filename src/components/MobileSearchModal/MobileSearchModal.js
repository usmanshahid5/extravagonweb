import React from 'react';

class MobileSearchModal extends React.Component {
  render() {
    return (
      <div id="mdl-search-mobile-search" className="mdl-wrap mdl-wrap--full-screen mdl-wrap--dn-more-s">
        <div className="mdl">
          <div className="mdl__fs-header">
            <div className="mdl__fs-header-title title-h-5">Location</div>
            <button type="button"
                    className="btn btn-primary btn-primary--s-small js-main-search-mobile-btn js-mdl-close">Done
            </button>
            <button className="mdl__cross js-mdl-close" aria-label="close popup"></button>
          </div>
          <div className="mdl__fs-body">
            <div className="center col-12">
              <div className="center col-10 col-m-fw mdl__fs-content t-0">
                <div id="main-search-mobile-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileSearchModal;