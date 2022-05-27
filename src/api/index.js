import axios from 'axios';

const url = `https://shop-list-9.herokuapp.com/services`;

export const fetchShops = (category, area, status) => axios.get(`${url}?category=${category}&area=${area}&status=${status}`);
export const fetchSingleShops = ( shopId ) => axios.get(`${url}/${shopId}`);
export const createShop = ( shopData ) => axios.post(url, shopData);
export const updateShop = ( shopId, shopData ) => axios.put(`${url}/${shopId}`, shopData);
export const deleteShop = ( shopId ) => axios.delete(`${url}/${shopId}`);
