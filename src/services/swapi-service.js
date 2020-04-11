import axios from 'axios';

export default class SwapiService {

  getData = async () => {
    let res = await axios.get("http://localhost:3000/users");
    return await res.data;
  }

  deleteItem = async (id) => {
    let res = await axios.delete(`http://localhost:3000/users/${id}`)
    return await res.data;
  }

  checkedItem = async (id, checked) => {
    let res = await axios.patch(`http://localhost:3000/users/${id}`, {checked});
    return await res.data;
  }

  editItem = async (id, name) => {
    let res = await axios.patch(`http://localhost:3000/users/${id}`, {name});
    return await res.data;
  }

  addItem = async (payload) => {
    return await axios.post(`http://localhost:3000/users/`, payload);
  }
}
