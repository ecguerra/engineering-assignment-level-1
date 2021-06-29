import axios from 'axios'

export const getProducts = () => {
    return axios.get('http://localhost:5000/api/v1/products')
}