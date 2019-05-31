import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export default createStore(
    rootReducer,
    typeof window !== 'undefined' && window.INITIAL_STATE,
    applyMiddleware(reduxThunk),
);
