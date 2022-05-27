import { combineReducers } from "redux";
import shops from './shops';
import categories from './categories'

export default combineReducers({
    shops: shops,
    categories: categories,
});