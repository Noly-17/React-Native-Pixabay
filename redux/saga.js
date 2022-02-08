import axios from 'axios';
import {takeEvery, call, put, all, fork} from 'redux-saga/effects';
import {types} from './types';

// GET DATAS
function* GetUsers(action) {
  // Put here your API KEY
  const apiKey = '';
  try {
    const searchName = yield action.payload;
    if (searchName != undefined) {
      const req = yield call(() =>
        axios.get(
          `https://pixabay.com/api/?key=${apiKey}&q=${searchName}&image_type=photo&per_page=30&safesearch=true`,
        ),
      );

      yield put({type: types.GET_IMAGES_SUCCESS, datas: req.data});
    } else {
      const req = yield call(() =>
        axios.get(
          `https://pixabay.com/api/?key=${apiKey}&q=all&image_type=photo&per_page=30&safesearch=true`,
        ),
      );
      yield put({type: types.GET_IMAGES_SUCCESS, datas: req.data});
    }
  } catch (err) {
    yield put({type: types.GET_IMAGE_FAILED, error: err.message});
  }
}

function* datasSaga() {
  yield takeEvery(types.GET_IMAGES_REQUEST, GetUsers);
}

export default datasSaga;

// GET ID
// function* GetId(action) {
//   console.log(action.payload);
//   try {
//     const searchId = yield action.payload;
//     // const qwe = yield call(() =>
//     //   axios.get(
//     //     `https://pixabay.com/api/?key=25605386-1803633252b7e07ac29ee39a7&id=${searchId}&image_type=photo&per_page=5&safesearch=true`,
//     //   ),
//     // );

//     // console.log(qwe.data);
//     yield put({type: types.GET_ID_SUCCES, userId: searchId});
//   } catch (err) {
//     yield put({type: types.GET_ID_FAILED, error: err.message});
//   }
// }

// function* idSaga() {
//   yield takeEvery(types.GET_ID, GetId);
// }

// function* rootSaga() {
//   yield all([fork(datasSaga), fork(idSaga)]);
// }
