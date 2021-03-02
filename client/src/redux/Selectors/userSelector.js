
export const isAuth = (state) => {
    return state.userReducer.isAuth
}

export const getErrorMessage = (state) => {
    return state.userReducer.userErrorMessage
}