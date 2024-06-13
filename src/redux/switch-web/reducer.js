import { CHOOSE_WEBSITE } from "./actionTypes";

// Define initial state
const initialState = {
  selectedWebsite: null,
};

// Reducer function
export const websiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_WEBSITE:
      return {
        ...state,
        selectedWebsite: action.payload,
      };
    default:
      return state;
  }
};
