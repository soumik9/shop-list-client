import * as api from '../api'

export const getShops = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShops();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
