const fetch = require('node-fetch');
require('dotenv').config();

const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error('The response is not valid');
        }
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

const run = async () => {
    const inputAddress = '57 confederation';
    const BASE_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.GOOGLE_PLACES_API}&input=${inputAddress}`;
    const data = await fetchData(BASE_URL);
    console.log(data);
}

run();