import axios from 'axios';
import * as config from '../system/config';
export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";

export function GetDummyProductData() {
    return function(dispatch) {
      axios({
        method: 'get',
        url: config.API_GET_PRODUCTS,
      })
      .then(response => {
        console.log('-----------response',response);
        dispatch( { type: GET_PRODUCT_DATA, payload: response.data} );
      })
      .catch(response => {
        console.log("catch getdummyData errors>>>>>>>>>>>>", response);
      });
    }
  }