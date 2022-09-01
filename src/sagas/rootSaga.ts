import {all} from 'redux-saga/effects'
import bookInfoSaga from './bookInfoSaga'

import bookSaga from './bookSaga'

function * rootSaga(){
    yield all([
        bookSaga(),
        bookInfoSaga(),
    ])
}

export default rootSaga