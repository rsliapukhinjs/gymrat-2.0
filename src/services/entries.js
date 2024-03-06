import axios from "axios";

const url = "http://localhost:3001/entries";

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const create = (newEntry) => {
  return axios.post(url, newEntry).then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${url}/${id}`);
};

const update = (id, newEntry) => {
  return axios.put(`${url}/${id}`, newEntry).then((response) => response.data);
};

export default {
  getAll,
  create,
  remove,
  update,
};
