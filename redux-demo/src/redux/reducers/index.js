import { combineReducers } from "redux";
import  {productsReducer, productReducer}  from './productReducer'

const reducers = combineReducers({
    allProducts: productsReducer  ,
    product: productReducer
  });

  export default reducers;