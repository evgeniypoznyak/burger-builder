import {put} from 'redux-saga/effects'
import * as actions from '../actions'
import axios from "../../axios-orders";

export function* fetchOrdersSaga(action) {
    yield put(actions.fetchOrdersStart());
    try {
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        const response = yield axios.get('/orders.json' + queryParams)
        const fetchedOrders = [];
        for (let key in response.data) {
            fetchedOrders.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrders))
    }
    catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}