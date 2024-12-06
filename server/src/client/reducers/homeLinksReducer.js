import { FETCH_HOME_LINKS } from "../actions/index";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HOME_LINKS:
      return action.payload.data;
    default:
      return state;
  }
};
