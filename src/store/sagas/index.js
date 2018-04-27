import {takeEvery} from 'redux-saga/effects'
import {logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga} from "./auth";
import {initIngredientsSaga} from './burgerBuilder';
import {fetchOrdersSaga} from './order';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
}


export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrder() {
    yield takeEvery(actionTypes.INIT_ORDERS, fetchOrdersSaga)
}


