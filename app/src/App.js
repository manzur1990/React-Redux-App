import React, { useEffect } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { fetchQuotes } from './actions/quotesAction';
import Spinner from './Spinner';


function App(props) {
  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div className="App">
   <h1>Actual Facts:</h1>
  {props.quote && <h3>"{props.quote}"</h3>}
  {props.error && <p>"{props.error}"</p>}
  {props.isLoading && <Spinner />}
<button onClick={props.fetchQuotes}>More Facts</button>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
      quote: state.quote,
      isLoading: state.isLoading,
      error: state.error
  }
}

export default connect(
  mapStateToProps, 
  {fetchQuotes}
  )
  (App);
