import { createStore } from 'redux';

// This is the "reducer", it is what you want to store as redux
// import cartReducer from './modules/cart/reducer';
// const store = createStore(cartReducer);

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
