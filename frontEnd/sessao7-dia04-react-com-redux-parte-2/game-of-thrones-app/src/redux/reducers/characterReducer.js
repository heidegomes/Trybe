import { REQUEST_CHARACTER, RESPONSE_CHARACTER_SUCCESS, RESPONSE_CHARACTER_ERROR } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  image: '',
  name: '',
  error: '',
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return {
        ...state,
        isLoading: true,
      };
    case RESPONSE_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        image: action.image,
        name: action.name,
      };
    case RESPONSE_CHARACTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default characterReducer;