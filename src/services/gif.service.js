import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    headers: {
        'Content-type': 'application/json'
    }
});



export const gifService = {
    get,
};


/**
 * Giphy Search API Engpoint: https://api.giphy.com/v1/gifs/search?q=monkey&limit=20&rating=g&api_key=your_key_here
 */
async function get(query){
    return await http.get(`/search?${query.toString()}&api_key=${process.env.REACT_APP_GIPHY_KEY}`)
                    .then(res => res.data.data.length > 0 ? res.data.data : new Error('Could not find gifs'))
                    .catch((err) => console.log(err));
}