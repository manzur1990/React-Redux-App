import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchQuote} from '../actions/quoteActions';

const Quotes = props => {
    useEffect(() => {
        fetchQuote()
    }, [props]);

    return (
        <div>
            <h1>Actual Facts:</h1>
            {props.quote && <h3>"{props.quote}"</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.fetchQuote}>more facts</button>
        </div>
    )
};
const mapStateToProps = state => {
    console.log(state)
    return {
        quote: state.quotesReducer.quote,
        isFetching: state.quotesReducer.isFetching,
        error: state.quotesReducer.error,
    }
}
export default connect(
    mapStateToProps, 
    {fetchQuote}
    )
    (Quotes);

