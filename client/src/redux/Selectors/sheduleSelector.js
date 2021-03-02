
export const getColors = (state) => {
    return state.sheduleReducer.colors
}

export const getIcons = (state) => {
    return state.sheduleReducer.icons
}

export const getdayOfWeek = (state) => {
    return state.sheduleReducer.dayOfWeek
}

export const gettimeStamps = (state) => {
    return state.sheduleReducer.timeStamps
}

export const getInitialValues = (state) => {
    return state.sheduleReducer.initialValues
}

export const getInfoMessage = (state) => {
    return state.sheduleReducer.sheduleInfoMessage
}

export const getErrorMessage = (state) => {
    return state.sheduleReducer.sheduleErrorMessage
}