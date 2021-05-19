import {
  GET_TECHNICIANS,
  ADD_TECHNICIAN,
  DELETE_TECHNICIAN,
  SET_LOADING,
  TECHNICIANS_ERROR,
} from '../actions/types';

const initialState = {
  technicians: null,
  loading: false,
  error: null,
};

const technicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNICIANS:
      return {
        ...state,
        technicians: action.payload,
        loading: false,
      };
    case ADD_TECHNICIAN:
      return {
        ...state,
        technicians: [...state.technicians, action.payload],
        loading: false,
      };
    case DELETE_TECHNICIAN:
      return {
        ...state,
        technicians: state.technicians.filter(
          (technician) => technician.id !== action.payload
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHNICIANS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default technicianReducer;
