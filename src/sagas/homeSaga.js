import { takeEvery, call, put } from "redux-saga/effects";
import { getList } from '../services'

//Fetch News List
export function* handleFetchList(params) {
  try {
    
    const res = yield call(getList, {category: params.category});
    const resData = res.data.articles;
    
    yield put({ type: 'FETCH_LIST_SUCCESS', data: resData, subTotalAmount: 0 });
  } catch (error) {
    yield put({ type: 'FETCH_LIST_ERROR', error: error.message });
  }
  return
}

export function* watchFetchList() {
  yield takeEvery('FETCH_LIST', handleFetchList);
}



// Update Search Text 
export function* updateSearchText(params) {

  try {
    console.log("params.searchValue",params.searchValue)
    yield put({ type: 'UPDATE_SEARCH_TEXT_SUCCESS', searchText: params.searchValue});
  } catch (error) {
    yield put({ type: 'UPDATE_SEARCH_TEXT_ERROR', error: error.message });
  }
  return
}

export function* watchUpdateSearchText() {
  yield takeEvery('UPDATE_SEARCH_TEXT', updateSearchText);
}

// Submit Search Text 
export function* submitSearchText(params) {

  try {
    const res = yield call(getList, {category: params.searchValue});
    const resData = res.data.articles;
    yield put({ type: 'SUBMIT_SEARCH_TEXT_SUCCESS', data: resData, searchText: params.searchValue});
  } catch (error) {
    yield put({ type: 'SUBMIT_SEARCH_TEXT_ERROR', error: error.message });
  }
  return
}

export function* watchSubmitSearchText() {
  yield takeEvery('SUBMIT_SEARCH_TEXT', submitSearchText);
}
