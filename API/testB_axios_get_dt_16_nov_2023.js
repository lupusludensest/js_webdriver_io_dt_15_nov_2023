// axios-demo.js

const axios = require('axios');

async function main() {
    try {
        const response = await axios({
            method: 'GET',
            url: 'cats',
            baseURL: 'https://my-api.com',
            timeout: 1000
        });

        console.log(response.data);

    } catch (error) {
        console.error(error);
    }
}

main();