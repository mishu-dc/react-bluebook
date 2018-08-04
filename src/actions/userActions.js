import {USER_LOGIN, USER_LOGOUT, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from './action-types';
import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';

import  properties from '../helpers/properties';

export function loginSuccess(response){
    return {
        type: USER_LOGIN_SUCCESS,
        payload: response
    }
}

export function loginFailed(response){
    return {
        type: USER_LOGIN_ERROR,
        payload: response
    }
}

export function userLogin(credentials){
    return {
        type: USER_LOGIN,
        payload: credentials
    }
}

export function userLogout(){
    return {
        type:USER_LOGOUT,
    }
}

export function changePassword(credentials, user){
    return function(dispatch){
        dispatch(networkCallStart())
        let url = properties.domain + "api/Account/ChangePassword";
        const body = {
            "oldPassword":credentials.oldPassword,
            "newPassword":credentials.newPassword,
            "confirmPassword":credentials.confirmPassword
        };

        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.tokenType + " " + user.accessToken
            },
        }).then(function(response){
            return response.json();
        }).then((response) => {
                if(response.message!==undefined){
                    dispatch(networkCallError( {'message': response.message} ))
                }
                else{
                    dispatch(networkCallEnd( {'message':'password changed successfully.'} ))
                }
            },
            (error) => {
                dispatch(networkCallError({'message': error}))
            }
        )
    }
}

export function userRegister(credentials){
    return function(dispatch){
        dispatch(networkCallStart())
        
        let url = properties.domain + "api/Account/Register";
        const body = {
            "email":credentials.email,
            "password":credentials.password,
            "confirmPassword":credentials.confirmPassword
        };

        return fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(function(response){
                return response.json();
            }).then((response) => {
                    if(response.message!==undefined){
                        dispatch(networkCallError( {'message': response.message} ))
                        dispatch(loginFailed(response))
                    }
                    else{
                        dispatch(networkCallEnd( {'message':'User registered successfully.'} ))
                    }
                },
                (error) => {
                    dispatch(networkCallError({'message': error}))
                    loginFailed(error)
                }
            )
    }
}

export function verifyLogin(credentials){
    return function(dispatch){
        dispatch(networkCallStart())
        userLogin(credentials);

        let url = properties.domain + "token";
        const body = 'grant_type=password&username=' + credentials.userName + '&password=' + credentials.password;

        return fetch(url, {
                method: "POST",
                body: body,
                headers: {
                    "Content-Type": "text/plain"
                },
            }).then(function(response){
                return response.json();
            }).then((response) => {
                    if(response.error!==undefined){
                        dispatch(networkCallError( {'message': response.error_description}))
                        dispatch(loginFailed(response))
                    }
                    else{
                        dispatch(networkCallEnd({'message':'user logged in successfully'}))
                        dispatch(loginSuccess(response))
                    }
                },
                (error) => {
                    dispatch(networkCallError({'message': error}))
                    loginFailed(error)
                }
            )
    }
}
