import axios from 'axios';

const url = `http://localhost:5000/services`;

export const fetchShops = () => axios.get(url);