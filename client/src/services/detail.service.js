import axios from 'axios'

export const getProductDetails = id => {
    return axios.get(`http://localhost:5000/api/v1/product/${id}`)
}