import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        }

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBbtd8680M10gTSbvKckLqaPqtsREhw5YE';
        if (!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBbtd8680M10gTSbvKckLqaPqtsREhw5YE';
        }


        dispatch(authStart())
        axios.post(url, authData)
            .then((response) => {
                console.log(response);
                dispatch(authSuccess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })

    }
}