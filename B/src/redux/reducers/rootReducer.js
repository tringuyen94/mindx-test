import { combineReducers } from 'redux'
import linkReducer from './link.reducer'

const rootReducer = combineReducers({
   link: linkReducer
})

export default rootReducer