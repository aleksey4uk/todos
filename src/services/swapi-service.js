import axios from 'axios';

export default class SwapiService {
  getData = async () => {
    const res = await axios.get('http://localhost:3000/users');
    return res.data;
  }

  deleteItem = async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    return res.data;
  }

  checkedItem = async (id, checked) => {
    const res = await axios.patch(`http://localhost:3000/users/${id}`, { checked });
    return res.data;
  }

  editItem = async (id, name) => {
    const res = await axios.patch(`http://localhost:3000/users/${id}`, { name });
    return res.data;
  }

  addItem = async (payload) => axios.post('http://localhost:3000/users/', payload)
}
