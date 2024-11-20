import axios from 'axios';
/**
 * registration
 * @param params userId
 * @returns
 */
 export const registrationAPI = (params) => {
    return axios.post('/api/v1/user/registration', params);
};

/**
 * getUserInfo
 * @param params userId
 * @returns
 */
export const getUserInfoAPI = (params) => {
    return  axios.get(`/api/v1/users/info/${params}`);
};

/**
* getCryptoMarket
*/
export const getCryptoMarketAPI = () => {
    return axios.get('/api/v1/home/cryptocurrencies');
  };

/**
* getAssetInfo
*/
export const getAssetInfoAPI =() =>{
    return axios.get('/api/v1/home/asset');
}

/**
* placeOrder
*@param params userId
*@param params cryptoId
*@param params symbol
*@param params quantity
*@param params type
*@param params price
*/
export const placeOrderAPI =(params)=>{
    return axios.post('api/v1/users/place-order',params);
}