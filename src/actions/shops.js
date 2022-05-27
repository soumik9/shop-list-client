import * as api from '../api'

export const getShops = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShops();
        dispatch({type: 'FETCH_ALL', payload: data});
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
