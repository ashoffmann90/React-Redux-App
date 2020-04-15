const initialState = {
    name: [],
    isFetching: false,
    error: ''
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                isFetching: false,
                name: action.payload,
                error: ''
            }
        default:
            return state
    }
}