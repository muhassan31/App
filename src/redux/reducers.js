//const initialState  = {email: '', password: '', error: '', loading: false, user: null, token: null};
import {
  LOGIN,
  LOGOUT,
  OPEN_CREATE_POST_NAV,
  CLOSE_CREATE_POST_NAV,
} from './actionTypes';

const authInitialState = {
  userId: undefined,
};
export function AuthReducer(state = authInitialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload.id,
      };
    case LOGOUT:
      return {
        ...state,
        userId: null,
      };

    default:
      return state;
  }
}

const navInitilaState = {
  create: false,
};

export function NavReducer(state = navInitilaState, action) {
  switch (action.type) {
    case OPEN_CREATE_POST_NAV:
      return {
        ...state,
        create: action.payload.create,
      };
    case CLOSE_CREATE_POST_NAV:
      return {
        ...state,
        create: action.payload.create,
      };
    default:
      return state;
  }
}
