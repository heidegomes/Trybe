// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from './redux/actions/actions';

class App extends React.Component {
  render() {
    const { isLoading, src, dispatch } = this.props;

    if (isLoading) return <p>Loading</p>;

    return (
      <div>
        <form>
          <label htmlFor="Character">
            <input
              data-testid="search-character-input"
              type="text"
              name="nameCharacter"
              placeholder="Name Character"
              value={ nameCharacter }
              onChange={this.onInputChange}
            />
          </label>
          <button
            style={{ display: 'block' }}
            onClick={() => dispatch(fetchCharacter())}
            type="button"
          >
            SEARCH
          </button>
          {src && <img style={{ maxWidth: '80%' }} src={src} alt="dog" />}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.image,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(App);

