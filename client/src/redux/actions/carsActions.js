import img1 from '../../assets/1647991428_php623a5a846466b.jpg.full198c.jpg';
import img2 from '../../assets/1647992473_php623a5e996b5e7.jpg.full4564.jpg';
import img3 from '../../assets/1647994040_php623a64b8d57b8.jpg.fulld6fd.jpg';
import img4 from '../../assets/1651617819_php6271b01b53330.jpg.smalleb92.jpg';
import img5 from '../../assets/1651631393_php6271e52164bf8.jpg.small3ec3.jpg';

export const GEL_ALL_CARS_REQUEST = 'GEL_ALL_CARS_REQUEST';
export const GEL_ALL_CARS_SUCCESS = 'GEL_ALL_CARS_SUCCESS';
export const GEL_ALL_CARS_FAILURE = 'GEL_ALL_CARS_FAILURE';

export const getAllCars = () => async dispatch => {
  dispatch({ type: GEL_ALL_CARS_REQUEST });
  dispatch({ type: 'LOADING', payload: true });

  const cars = [
    {
      "_id": "1",
      "name": "Tata Altroz",
      "image": img1,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "2",
      "name": "Tata Altroz",
      "image": img2,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "3",
      "name": "Tata Altroz",
      "image": img3,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "4",
      "name": "Tata Altroz",
      "image": img4,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "5",
      "name": "Tata Altroz",
      "image": img5,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "6",
      "name": "Tata Altroz",
      "image": img1,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "7",
      "name": "Tata Altroz",
      "image": img2,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    },
    {
      "_id": "8",
      "name": "Tata Altroz",
      "image": img3,
      "rentPerHour": 500,
      "fuelType": "petrol",
      "bookedTimeSlots": [],
      "capacity": 5
    }
  ]


  try {
    // const response = await axios.get(`${ window.env.BACKEND_URL }/api/cars/getallcars`)
    // dispatch({ type: 'GEL_ALL_CARS', payload: response.data });
    dispatch({ type: GEL_ALL_CARS_SUCCESS, payload: cars });
    dispatch({ type: 'LOADING', payload: false });
  }
  catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
    dispatch({ type: GEL_ALL_CARS_FAILURE });

  }
}