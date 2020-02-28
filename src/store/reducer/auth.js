import * as actionTypes from '../action/actionTypes'

const initialState = {
    isAuthorised: false,
    invalidLogin: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                isAuthorised: true,
                invalidLogin: false

            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                invalidLogin: true
            }
        default:
            return state

    }
}
export default reducer;