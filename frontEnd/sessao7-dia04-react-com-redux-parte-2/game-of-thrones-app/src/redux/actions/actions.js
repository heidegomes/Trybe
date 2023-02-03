// ./src/redux/actions/index.js

import characterReducer from "../reducers/characterReducer";
import getCurrentCharacter from '../../services/iceAndFireApi'

  
const REQUEST_CHARACTER = 'REQUEST_CHARACTER'
const RESPONSE_CHARACTER_SUCCESS = 'RESPONSE_CHARACTER_SUCCESS' 
const RESPONSE_CHARACTER_ERROR = 'RESPONSE_CHARACTER_ERROR'

export const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
});

export const responseCharacterSucces = () => ({
  type: RESPONSE_CHARACTER_SUCCESS,
  name: characterReducer.name,
  image: characterReducer.image,
})

export const responseCharacterError = (error) => ({
    type: RESPONSE_CHARACTER_ERROR,
    error,
})

export function fetchCharacter() {
  return async (dispatch) => {
    dispatch(fetchCharacter());
    try{
      const response = await getCurrentCharacter(NOME DO PERSONAGEM);
      dispatch(responseCharacterSucces(response));
    } catch (error) {
      dispatch(responseCharacterError(error));
    }
  };
}
