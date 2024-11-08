import {USER_DETAIL_INFO_REQUIST , USER_DETAIL_INFO_SUCESSS , USER_DETAIL_INFO_ERROR} from "../type"

export const productReducer = (state = {userDeatilInfo : []} , action ) => {


    switch(action.type){
        case USER_DETAIL_INFO_REQUIST : 
        return {
            loading : true
        }
        case USER_DETAIL_INFO_SUCESSS : 
        return {
            loading : false,
            userDeatilInfo : action.payload
        }
        case USER_DETAIL_INFO_ERROR : 
        return {
            loading : true,
            error : action.payload
        }
        default :
        return state
    }

}



// export const userRegisterReducer = (state = {userInfo : []} , action) => {
//     // console.log("reducer ==>" , action.payload)
//     switch(action.type){
//         case USER_DETAIL_INFO_REQUIST :
//             return{
//                 loading : true
//             }
//             case USER_REGISTER_SUCCESS :
//                 return{
//                     loading : false,
//                     product : action.payload
//                 }
//                 case USER_REGISTER_FAIL :
//                     return{
//                         loading : false,
//                         product : action.payload
//                     }
//             default :
//             return state
//     }
// } 