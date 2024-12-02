import FETCH_HOME_LINKS from '../actions/index';
export default (state = [], action) => {
  console.log('1', state)
    switch (action.type) {
      case 'fetch_home_links':
        return action.payload.data;
      default:
        return state;
    }
  };
  