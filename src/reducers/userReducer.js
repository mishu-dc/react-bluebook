import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_LOGOUT } from '../actions/action-types';
import { setCookie, getCookie, removeCookies } from '../helpers/cookieManager';
import { USER_NAME, ACCESS_TOKEN, TOKEN_TYPE, EXPIRES_IN, RECEIVED_AT} from '../helpers/cookieTypes';

let initialState={
    isAuthenticated:false,
    message:'',
    user:
    {
        userName:'',
        accessToken:'',
        tokenExpireIn:'',
        tokenType:'',
        receivedAt:''
    }
}

function userReducer(state=initialState, action){
    switch(action.type){
        case USER_LOGIN:
            return Object.assign({},
                state,
                {
                    isAuthenticated:false,
                    user:
                    {
                        userName:action.payload.userName
                    } 
                }   
            );

        case USER_LOGOUT:
            removeCookies([USER_NAME, ACCESS_TOKEN, TOKEN_TYPE, EXPIRES_IN, RECEIVED_AT]);
            return Object.assign({},
                state,
                {
                    isAuthenticated:false,
                    message:'',
                    user:
                    {
                        userName:'',
                        accessToken:'',
                        tokenExpireIn:'',
                        tokenType:'',
                        receivedAt:''
                    }
                });

        case USER_LOGIN_ERROR:
            return Object.assign({},
                state,
                {
                    isAuthenticated:false,
                    message:action.payload.error_description,
                    user:
                    {
                        userName:'',
                        accessToken:'',
                        tokenExpireIn:'',
                        tokenType:'',
                        receivedAt:''
                    }
                });

        case USER_LOGIN_SUCCESS:
            const receivedAt = Date.now();

            setCookie(USER_NAME, action.payload.userName , '/', action.payload.expires_in - 10);   
            setCookie(ACCESS_TOKEN, action.payload.access_token , '/', action.payload.expires_in - 10);   
            setCookie(TOKEN_TYPE, action.payload.token_type , '/', action.payload.expires_in - 10);   
            setCookie(EXPIRES_IN, action.payload.expires_in , '/', action.payload.expires_in - 10);   
            setCookie(RECEIVED_AT, receivedAt , '/', action.payload.expires_in - 10);   
            
            return Object.assign({},
                state,
                {
                    isAuthenticated:true,
                    message:'',
                    user:
                    {
                        userName: action.payload.userName,
                        accessToken:action.payload.access_token,
                        tokenExpireIn:action.payload.expires_in,
                        tokenType:action.payload.token_type,
                        receivedAt:receivedAt
                    }
                });
                
        default:
            if(getCookie(USER_NAME)!==undefined){
                return Object.assign({},
                    state,
                    {
                        isAuthenticated:true,
                        message:'success',
                        user:
                        {
                            userName: getCookie(USER_NAME),
                            accessToken:getCookie(ACCESS_TOKEN),
                            tokenExpireIn:getCookie(EXPIRES_IN),
                            tokenType:getCookie(TOKEN_TYPE),
                            receivedAt:getCookie(RECEIVED_AT)
                        }
                    });
            }
            else{
                return initialState;
            }
    }
}

export default userReducer;