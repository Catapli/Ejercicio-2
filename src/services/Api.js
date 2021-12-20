import axios from 'axios';

const url = 'http://localhost:3000';


const products = {
    getAll: async () => await axios.get(`${url}/products`),
    getOne: async (id) => await axios.get(`${url}/products/${id}`),
    create: (item) => axios.post(`${url}/products`, item),
    modify: (item) => axios.put(`${url}/products/${item.id}`, item),
    delete: (id) => axios.delete(`${url}/products/${id}`),
    toogleDone: (item) => axios.put(`${url}/categories/${item.id}`, {
        id: item.id,
        title: item.title, 
        done: !item.done
      }),
};

export default{
    products
}