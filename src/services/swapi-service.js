import React from 'react';
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
}
