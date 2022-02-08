export const initState = {
  datas: [],
  isLoading: false,
  error: null,

  userId: null,
  load: false,
};

export const types = {
  GET_IMAGES_REQUEST: 'GET_IMAGES_REQUEST',
  GET_IMAGES_SUCCESS: 'GET_IMAGES_SUCCESS',
  GET_IMAGE_FAILED: 'GET_IMAGE_FAILED',
  GET_ID: 'GET_ID',
};
