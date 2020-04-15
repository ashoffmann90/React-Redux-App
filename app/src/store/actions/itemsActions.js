import axios from "axios";

export const fetchItem = () => {
    return dispatch => {
        dispatch({ type: "FETCH_START" })
        axios.get('https://xivapi.com/item')
        .then(res => {
            console.log(res.data.Results)
            dispatch({ type: "FETCH_SUCCESS", payload: res.data.Results })
        })
        .catch(err => {
            console.log('oops', err)
        })
    }
}