
import axios from 'axios';

const backendURL = "http://localhost:3333"; 

export const getFuncionarios = () => {
    return axios.get(`${backendURL}/funcionarios`);
};

export const addFuncionario = (funcionario) => {
    return axios.post(`${backendURL}/funcionarios`, funcionario);
};

export const updateFuncionario = (id, funcionario) => {
    return axios.put(`${backendURL}/funcionarios/${id}`, funcionario);
};

export const deleteFuncionario = (id) => {
    return axios.delete(`${backendURL}/funcionarios/${id}`);
};
