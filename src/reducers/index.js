import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux'; //整合 Reducers

//allReducers自己取名
const allReducer = combineReducers({
    counter: counterReducer,  //counter自己取，但大部分人不再取名直接 counterReducer(counterReducer:counterReducer縮寫)
    islogged: loggedReducer
})

export default allReducer;