import { FETCH_QUOTES_START, FETCH_QUOTES_SUCCESS, FETCH_ERROR_MESSAGE } from "../actions/quotesAction";

const initialState = {
    quote: '',
    isLoading: false,
    error: ''
};

export const quotesReducer = (state = initialState, action) => {
switch(action.type){
   case FETCH_QUOTES_START:
       return{
           ...state,
           isLoading: true
       }
   case FETCH_QUOTES_SUCCESS:
       return {
            ...state,
            isLoading: false,
            quote: action.payload,
            error: ""
       }
       case FETCH_ERROR_MESSAGE:
           return {
               ...state,
            isLoading: false,
            error: action.payload
           }

    default:
        return state;
}


}