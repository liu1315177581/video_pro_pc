import { combineReducers } from 'redux'
import { testReducer } from './test.js'



const todoApp = combineReducers({
  testReducer
})



export default todoApp