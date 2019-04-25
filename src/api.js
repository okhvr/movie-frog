import axios from 'axios';

const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export async function getMovies(params) {
    const response = await axios.get(`${baseUrl}/movies`, { params });
    return response.data.data;
}

export async function getMovie(id) {
    const response = await axios.get(`${baseUrl}/movies/${id}`);
    return response.data;
}
