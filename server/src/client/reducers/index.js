import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import homeLinksReducer from './homeLinksReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  homeLinks: homeLinksReducer
});
