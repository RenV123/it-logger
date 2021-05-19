import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';
import axios from 'axios';

/**
 * Search Logs
 * @returns a async function
 */
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const response = await axios.get(`/logs?q=${text}`);
    dispatch({
      type: SEARCH_LOGS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error?.response.statusText });
  }
};

/**
 * Get Logs from the server
 * @returns a async function
 */
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const response = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error?.response.statusText });
  }
};

/**
 * Add a log
 * @returns a async function (to dispatch)
 */
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const response = await axios.post('/logs', {
      ...log,
    });
    dispatch({
      type: ADD_LOG,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

/**
 * Update a log
 * @returns a async function (to dispatch)
 */
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const response = await axios.put(`/logs/${log.id}`, {
      ...log,
    });
    dispatch({
      type: UPDATE_LOG,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

/**
 * Delete a log
 * @returns a async function (to dispatch)
 */
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

/**
 * Set Current Log
 */
export const setCurrentLog = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

/**
 * Set Current Log
 */
export const clearCurrentLog = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

/**
 * Set loading true
 */
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
