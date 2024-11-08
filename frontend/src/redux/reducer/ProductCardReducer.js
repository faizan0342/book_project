import { FETCH_CARD_PRODUCT_REQUIST , FETCH_CARD_PRODUCT_SUCESSS , FETCH_CARD_PRODUCT_ERROR} from "../type"

export const ProductCardReducer = (state = {product : []} , action ) => {
    switch(action.type){
        case FETCH_CARD_PRODUCT_REQUIST : 
        return {
            loading : true
        }
        case FETCH_CARD_PRODUCT_SUCESSS : 
        return {
            loading : false,
            product : action.payload
        }
        case FETCH_CARD_PRODUCT_ERROR : 
        return {
            loading : true,
            error : action.payload
        }
        default :
        return state
    }

}