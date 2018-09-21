import {
    IS_RTL
} from '../actions/types'

const INITIAL_STATE = {
    is_rtl: false
}


//،،،state -> Make new object of the state

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case IS_RTL:
            return { ...state, is_rtl: action.payload }

        default:
            return state;
    }
}