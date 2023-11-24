import axios from "axios";

const baseURL = "http://localhost:3001/api/todos";

const getAllTodos = () => {
    const promise = axios.get(`${baseURL}`)
    console.log(promise)
    return promise.then(response => response.data)
};

const addTodos = (todoObject) => {
    const request = axios.post(`${baseURL}`, todoObject);
    return request.then(response => response.data);
};

const updateTodos = (id, updatedObject) => {
    const request = axios.put(`${baseURL}/${id}`, updatedObject);
    return request.then(response => response.data);
}

const deleteTodos = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.data);
};

export { getAllTodos, addTodos, deleteTodos, updateTodos } 