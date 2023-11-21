// axios-demo.js

const axios = require('axios');

async function get_request(data) {
    try {
        const response = await axios({
            method: 'GET',
            url: 'cats',
            data,
            baseURL: 'https://my-api.com',
            timeout: 4000
        });

        // console.log(response.data);
        // console.log(response.statusText);
        return response

    } catch (error) {
        console.error(error);
    }
}

module.exports = get_request