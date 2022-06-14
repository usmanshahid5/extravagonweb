import React             from 'react';
import Header            from './components/header';
import Main              from './components/Main';
import MobileSearchModal from './components/MobileSearchModal';
import Footer            from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>

        <Main/>

        <Footer/>

        <MobileSearchModal/>

        <div id="spinner" className="spinner-background">
          <div className="spinner spinner--pos">
            <div></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
