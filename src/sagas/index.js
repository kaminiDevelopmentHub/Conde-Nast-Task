import { all } from 'redux-saga/effects';
import { 
    watchFetchList , 
    watchUpdateSearchText , 
    watchSubmitSearchText
} from './homeSaga.js'
export default function* rootSaga() {
    yield all([watchFetchList(), watchUpdateSearchText()
        , watchSubmitSearchText()
    ]);
}


