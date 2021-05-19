import axios from 'axios';
import {
  GET_TECHNICIANS,
  ADD_TECHNICIAN,
  DELETE_TECHNICIAN,
  SET_LOADING,
  TECHNICIANS_ERROR,
} from './types';

/**
 * Get Techs from Server
 */
export const getTechnicians = () => async (dispatch) => {
  try {
    setLoading();
    const response = await axios.get('/technicians');
    dispatch({
      type: GET_TECHNICIANS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: TECHNICIANS_ERROR, payload: error?.response.statusText });
  }
};
/**
 * Add technician
 */
export const addTechnician = (technician) => async (dispatch) => {
  try {
    setLoading();
    const response = await axios.post('/technicians', {
      ...technician,
    });
    dispatch({
      type: ADD_TECHNICIAN,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: TECHNICIANS_ERROR, payload: error.response.statusText });
  }
};

/**
 * Delete Technician
 */
export const deleteTechnician = (id) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(`/technicians/${id}`);
    dispatch({
      type: DELETE_TECHNICIAN,
      payload: id,
    });
  } catch (error) {
    dispatch({ type: TECHNICIANS_ERROR, payload: error.response.statusText });
  }
};

/**
 * Set loading true
 */
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
