import { Route }  from 'react-router-dom';
import Home       from './pages/Home';
import Login      from './pages/Login';
import Register   from './pages/Register';
import BookingCar from './pages/BookingCar';
import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={ Home }/>
      <Route path="/login" exact component={ Login }/>
      <Route path="/register" exact component={ Register }/>
      <Route path="/bookingcar" exact component={ BookingCar }/>
    </div>
  );
}

export default App;
