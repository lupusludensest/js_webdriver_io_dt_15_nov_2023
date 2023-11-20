// axios-demo.js

const axios = require('axios');

async function post_request(data) {

    try {
        const response = await axios({
            method: 'POST',
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

module.exports = post_request




