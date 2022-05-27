import * as api from '../api'

export const getShops = (category, area, status) => async (dispatch) => {
    try {
        const { data } = await api.fetchShops(category, area, status);
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getShop = (shopId) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleShops(shopId);
        dispatch({type: 'FETCH_SINGLE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createShop = (shopData) => async (dispatch) => {
    try {
        const { data } = await api.createShop(shopData);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateShop = (shopId, shopData) => async (dispatch) => {
    try {
        const { data } = await api.updateShop(shopId, shopData);
        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteShop = (shopId) => async (dispatch) => {
    try {
        await api.deleteShop(shopId);
        dispatch({type: 'DELETE', payload: shopId});
    } catch (error) {
        console.log(error.message);
    }
}
