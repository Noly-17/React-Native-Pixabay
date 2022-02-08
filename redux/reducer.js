import {types, initState} from './types';

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_IMAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_IMAGES_SUCCESS:
      return {
        ...state,
        datas: action.datas,
        isLoading: false,
      };
    case types.GET_IMAGE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    //seperate for id
    case types.GET_ID:
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
