import axios from 'axios';

const url = `http://localhost:5000/services`;
const categoriesUrl = `http://localhost:5000/categories`;

export const fetchShops = () => axios.get(url);
export const fetchCategories = () => axios.get(categoriesUrl);