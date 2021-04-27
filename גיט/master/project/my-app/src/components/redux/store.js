import { createStore ,combineReducers} from 'redux';
import userReducer from './reducers/user'

const reducer = combineReducers({userReducer });

const store = createStore(reducer);
window.store = store;
export default store;
