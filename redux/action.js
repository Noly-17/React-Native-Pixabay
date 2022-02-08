import {types} from './types';

export const getDataRequest = payload => {
  return {
    type: types.GET_IMAGES_REQUEST,
    payload,
  };
};

export const getDataID = payload => {
  return {
    type: types.GET_ID,
    payload,
  };
};
