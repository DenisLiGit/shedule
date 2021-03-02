import userApi from "../Api/userApi";

const USER_LOG_IN = 'USER-LOG-IN'
const USER_LOG_OUT = 'USER-LOG-OUT'
const AUTH_ERROR_MESSAGE = 'AUTH-ERROR-MESSAGE'

const initialState = {
    userId: null,
    isAuth: false,
    token: null,
    userErrorMessage: ''
}

const userReducer = (store = initialState, action) => {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                ...store,
                userId: action.payload.userId,
                token: action.payload.token,
                isAuth: !!action.payload.token
            }
        case USER_LOG_OUT:
            return {
                ...store,
                userId: null,
                token: null,
                isAuth: false,
            }
        case AUTH_ERROR_MESSAGE:
            return {
                ...store,
                userErrorMessage: action.payload
            }
        default:
            return store
    }
}

export const userLogIn = (userInfo) => ({
    type: USER_LOG_IN, payload: userInfo
})

export const userLogOut = () => ({
    type: USER_LOG_OUT
})

export const authErrorMessage = (message) => ({
    type: AUTH_ERROR_MESSAGE, payload: message
})

export const userLogOutThunk = () => (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    dispatch(userLogOut())
}


export const loginThunk = (userInfo) => async (dispatch) => {
    try {
        const res = await userApi.login(userInfo)
        if (res.token) {
            localStorage.setItem('token', res.token)
            localStorage.setItem('userId', res.userId)
            dispatch(authErrorMessage(''))
            dispatch(userLogIn(res))
        } else {
            dispatch(authErrorMessage(res.data.message))
        }
    } catch (e) {
        dispatch(authErrorMessage(e))
    }
}

export const registerThunk = (userInfo) => async (dispatch) => {
    try {
        const res = await userApi.register(userInfo)
        if (res.status === 201) {
            dispatch(loginThunk(userInfo))
        } else {
            dispatch(authErrorMessage(res.data.message))
        }
    } catch (error) {
        console.log('error', error)
        dispatch(authErrorMessage(error))
    }
}

export default userReducer