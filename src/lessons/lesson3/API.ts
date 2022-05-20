import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'ad18ac05';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`
       // return axiosInstance.get(query)
        return axiosInstance.get<{},TestType<ResponseType>>(query)

    },
    searchFilmsByType: (title: string, type: string) => {
    }
};
type TestType<T> = {
    data:T
}
type ResponseType ={
    Search:any[]
    Error:string
    Response:string
}

export default API;
