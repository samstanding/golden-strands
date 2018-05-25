import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import blogSaga from './blogSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    blogSaga(),
  ]);
}