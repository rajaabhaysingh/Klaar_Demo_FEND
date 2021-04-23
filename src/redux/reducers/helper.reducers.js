import { helperConstants } from "../actions/constants";

const initialState = {
  themeName: "light",
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case helperConstants.THEME_CHANGE_REQUEST:
      state = {
        ...state,
        themeName: action.payload.themeName,
      };
      break;

    default:
      break;
  }

  return state;
};
