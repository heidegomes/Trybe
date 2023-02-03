import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionCreator} from './redux/actions';

function App(props) {
  const { countState, dispatch } = props;

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{ countState }</h2>
      <button onClick={() => dispatch(actionCreator(1))}>Incrementar 1</button>
      <button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCount: state.clicks,
});

export default connect(mapStateToProps)(App);
