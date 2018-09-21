import { combineReducers } from 'redux'
import LocalizationReducer from './LocalizationReducer'

/*
You could also use persistent state to save the state when the user closes the app
*/
export default combineReducers({
    localizationState: LocalizationReducer
})