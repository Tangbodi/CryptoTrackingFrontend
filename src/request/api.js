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