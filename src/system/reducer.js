import { combineReducers } from 'redux'; // manage application state
import ProductReducer from '../product/product_reducer';

export default combineReducers({
    product:ProductReducer,
    });