import {all, call} from "redux-saga/effects";
import {saga as appSaga} from './app/saga'
import {saga as photosSaga} from './photos/saga'
import {saga as searchSaga} from './search/saga'

function* saga(){
    all([
        call(appSaga),
        call(photosSaga),
        call(searchSaga)
    ])
}



export default saga;