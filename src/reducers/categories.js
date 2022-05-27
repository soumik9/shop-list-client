/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (categories = [], action) => {

    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return categories;
        default:
            return categories;
    }

} 