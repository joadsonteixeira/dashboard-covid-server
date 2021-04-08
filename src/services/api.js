import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.brasil.io/v1/dataset/covid19/caso_full/data/?state=MA&is_last=True',
    headers: {
        Authorization: 'Token 59d25c9e10d86111d7385204dd42ee3a99b7ec1b'
    }
});

export default api;