import axios from 'axios';

export const getBlogPosts = () => {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    }

    return axios.get('/api/blog/', config)
    .then(response => response.data)
    .catch((error) => {
        throw error.message || error;
    })
}