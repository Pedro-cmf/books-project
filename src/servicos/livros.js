import axios from "axios";

 const livrosApi = axios.create({baseURL: "http://localhost:8000/livros"});

 async function getLivros(){
    const response = await livrosApi.get('/');

    return response.data;
 }

 export {
    getLivros
 }