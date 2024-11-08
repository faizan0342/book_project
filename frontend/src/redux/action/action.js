import {FETCH_PRODUCT_REQUIST , FETCH_PRODUCT_SUCESSS , FETCH_PRODUCT_ERROR , FETCH_SINGLE_REQUIST , FETCH_SINGLE_SUCESSS ,FETCH_SINGLE_ERROR} from "../type"
import axios from "axios"

export const fetchData = () => async(dispatch) => {
    dispatch({type: FETCH_PRODUCT_REQUIST})
    try{
        const {data} = await axios.get("/api/products")
        dispatch({type: FETCH_PRODUCT_SUCESSS , payload: data})
    }catch(err){
        console.log("fetching data error" , err)
        dispatch({type: FETCH_PRODUCT_ERROR , payload: err})
    }
}

export const productDetails = (productID) => async(dispatch) => {
    console.log("productID action======>", productID);
    dispatch({type: FETCH_SINGLE_REQUIST});
    
    try {
        const { data } = await axios.get("/api/products/" + productID);
        console.log("action_data ======>", data);
        console.log("productID ======>", productID);
        
        const productData = {
            id: data._id,
            brand: data.brand,
            discount: data.discount,
            image: data.image,
            listprice: data.listprice,
            name: data.name,
            ourPrice: data.ourPrice,
            stock: data.stock
        };

        // Save product data to localStorage
        localStorage.setItem('productDetails', JSON.stringify(productData));

        dispatch({type: FETCH_SINGLE_SUCESSS, payload: productData});
    } catch (err) {
        console.log("fetching data errors", err);
        dispatch({type: FETCH_SINGLE_ERROR, payload: err});
    }
}



export const productCardDetails = (productID) => async(dispatch) => {
    console.log("productID action======>" , productID)
    dispatch({type : FETCH_SINGLE_REQUIST})
    try{
        const {data} = await axios.get("/api/products/order-cart/" + productID)
        console.log("action_data ======>" , data)
        console.log("productID ======>" , productID)
        dispatch({type: FETCH_SINGLE_SUCESSS , payload: {
            id : data._id,
            brand : data.brand,
            discount : data.discount,
            image : data.image ,
            listprice : data.listprice,
            name: data.name,
            ourPrice : data.ourPrice,
            stock : data.stock
        }})
    }catch(err){
        console.log("fetching data errors" , err)
        dispatch({type: FETCH_SINGLE_ERROR , payload: err})
    }
}