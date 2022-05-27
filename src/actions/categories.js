import * as api from '../api'

export const getCategories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategories();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
