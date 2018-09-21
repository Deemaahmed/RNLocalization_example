import {
    IS_RTL
} from './types'


export const changeRTL = (isRtl) => {

    // console.log(JSON.stringify(isRtl) + " Inside Redux")

    return {
        type: IS_RTL,
        payload: isRtl
    }
}