import axios from 'axios'

export const FETCH_QUOTES_START = "FETCH_QUOTES_START"
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS"
export const FETCH_ERROR_MESSAGE = "FETCH_ERROR_MESSAGE"

export const fetchQuotes = () => {
    return dispatch => {
        dispatch({ type: FETCH_QUOTES_START})
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res=>{
            console.log(res.data)
            dispatch({type: FETCH_QUOTES_SUCCESS, payload: res.data.value})
        })
        .catch(err=>{
            dispatch({ type: FETCH_ERROR_MESSAGE, payload: err.response.status})
        })
    }
}