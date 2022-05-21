import * as actions from '../actions/carsActions';

const initialData = {
  cars: []
};

export function reducer(state = initialData, action) {
  switch (action.type) {

    case actions.GEL_ALL_CARS_SUCCESS: {
      return {
        ...state,
        cars: action.payload
      }
    }
    default:
      return state
  }
}