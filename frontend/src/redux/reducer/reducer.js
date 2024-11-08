import {FETCH_PRODUCT_REQUIST , FETCH_PRODUCT_SUCESSS , FETCH_PRODUCT_ERROR} from "../type"

export const productReducer = (state = {product : []} , action ) => {
    switch(action.type){
        case FETCH_PRODUCT_REQUIST : 
        return {
            loading : true
        }
        case FETCH_PRODUCT_SUCESSS : 
        return {
            loading : false,
            product : action.payload
        }
        case FETCH_PRODUCT_ERROR : 
        return {
            loading : true,
            error : action.payload
        }
        default :
        return state
    }

}