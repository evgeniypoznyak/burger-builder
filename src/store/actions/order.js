import * as ActionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: ActionTypes.PURCHASE_BURGER_FAIL,
        error: error,
    }
}


export const purchaseBurgerStart = (orderData) => {
    return dispatch => {

        axios.post( '/orders.json', order )
            .then( response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data), orderData)
            } )
            .catch( error => {
                dispatch(purchaseBurgerFail(error));
            } );

    }
}


export const purchaseBurger = () => {
    return dispatch => {

    }
}

