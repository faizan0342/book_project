import { FETCH_SINGLE_REQUIST , FETCH_SINGLE_SUCESSS ,FETCH_SINGLE_ERROR} from "../type"

export const productDetailReducer = (state = {product : []} , action ) => {
    switch(action.type){
        case FETCH_SINGLE_REQUIST : 
        return {
            loading : true
        }
        case FETCH_SINGLE_SUCESSS : 
        return {
            loading : false,
            product : action.payload
        }
        case FETCH_SINGLE_ERROR : 
        return {
            loading : true,
            error : action.payload
        }
        default :
        return state
    }

}