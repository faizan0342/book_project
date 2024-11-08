import {USER_DETAIL_INFO_REQUIST , USER_DETAIL_INFO_SUCESSS , USER_DETAIL_INFO_ERROR} from "../type"
  import axios from "axios";
  
  export const userInfo = (name, last, city, username, state, zip) => async (dispatch) => {
    dispatch({
      type: USER_DETAIL_INFO_REQUIST,
      payload: { name, last, city, username, state, zip }
    });
  
    try {
      const { data } = await axios.post('/api/userdetail', { name, last, city, username, state, zip });
      
      console.log("Response Data:", data);
  
      dispatch({
        type: USER_DETAIL_INFO_SUCESSS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: USER_DETAIL_INFO_ERROR,
        payload: error?.response?.data?.message || error.message
      });
    }
  };
  