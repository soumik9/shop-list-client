/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (shops = [], action) => {

    switch(action.type){
        case 'DELETE':
            return shops.filter(shop => shop._id !== action.payload);
        case 'UPDATE':
            return shops.map(shop => shop._id === action.payload._id ? action.payload : shop);
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_SINGLE':
            return action.payload;
        case 'CREATE':
            return [...shops, action.payload];
        default:
            return shops;
    }

} 