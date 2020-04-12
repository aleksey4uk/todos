import axios from 'axios';

export default class SwapiService {
  apiBase = process.env.REACT_APP_URL;

  getData = async () => {
    const res = await axios.get(this.apiBase);
    return res.data;
  }

  deleteItem = async (id) => {
    const res = await axios.delete(`${this.apiBase}${id}`);
    return res.data;
  }

  checkedItem = async (id, checked) => {
    const res = await axios.patch(`${this.apiBase}${id}`, { checked });
    return res.data;
  }

  editItem = async (id, name) => {
    const res = await axios.patch(`${this.apiBase}${id}`, { name });
    return res.data;
  }

  addItem = async (payload) => axios.post(this.apiBase, payload)
}
