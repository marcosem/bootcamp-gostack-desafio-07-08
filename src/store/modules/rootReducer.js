// This module is used if you want to have more than one reducer
import { combineReducers } from 'redux';

import cartReducer from './cart/reducer';

export default combineReducers({
  cartReducer,
});
